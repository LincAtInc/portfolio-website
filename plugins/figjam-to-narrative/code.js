// FigJam to Narrative — code.js
// Bidirectional I ↔ N pipeline
// Part of the INC framework: Ideate → Narrate → Create

figma.showUI(__html__, { width: 420, height: 580, themeColors: true });

// Colour convention mapping — keyed on the Figma sticky fill name
var COLOUR_MAP = {
  "STICKY_GREEN":  { label: "High Signal",  key: "green" },
  "STICKY_YELLOW": { label: "General",      key: "yellow" },
  "STICKY_PINK":   { label: "Questions",    key: "pink" },
  "STICKY_RED":    { label: "Questions",    key: "red" },
  "STICKY_BLUE":   { label: "Technical",    key: "blue" },
  "STICKY_VIOLET": { label: "Discussion",   key: "violet" },
  "STICKY_PURPLE": { label: "Discussion",   key: "purple" },
  "STICKY_ORANGE": { label: "Action Items", key: "orange" },
  "STICKY_GRAY":   { label: "Notes",        key: "gray" },
  "STICKY_GREY":   { label: "Notes",        key: "gray" },
  "STICKY_TEAL":   { label: "Validated",    key: "teal" }
};

// Ordered list for deterministic output — most important groups first
var COLOUR_ORDER = [
  "High Signal",
  "Validated",
  "Action Items",
  "Technical",
  "Questions",
  "Discussion",
  "General",
  "Notes"
];

// Return the sticky's colour label, defaulting to General
function getStickyColour(node) {
  if (node.fills && node.fills.length > 0) {
    var fill = node.fills[0];
    // Figma API exposes the colour name via boundVariables or the fillStyleId
    // For sticky nodes the colour name is on node.fills[0].colorName (plugin API)
    if (fill.colorName && COLOUR_MAP[fill.colorName]) {
      return COLOUR_MAP[fill.colorName].label;
    }
  }
  // Fallback: try the node's own fillStyleId or explicit sticky colour property
  // In the Plugin API, sticky nodes expose a .color property (string enum)
  if (node.color && COLOUR_MAP["STICKY_" + node.color.toUpperCase()]) {
    return COLOUR_MAP["STICKY_" + node.color.toUpperCase()].label;
  }
  return "General";
}

// Extract plain text from a sticky's text content
function getStickyText(node) {
  if (node.text && node.text.characters) {
    return node.text.characters.trim();
  }
  return "";
}

// Skip placeholder stickies with no real content
function isPlaceholder(text) {
  if (!text) return true;
  var lower = text.toLowerCase();
  return (
    lower === "" ||
    lower === "sticky" ||
    lower === "add a sticky" ||
    lower === "click to edit"
  );
}

// Extract author from a sticky if the API exposes it
function getStickyAuthor(node) {
  // The Figma Plugin API does not expose creator metadata for individual nodes —
  // only currentUser is available. Return null here; UI will omit the field.
  return null;
}

// Get text content from a generic text node
function getTextContent(node) {
  if (node.characters) {
    return node.characters.trim();
  }
  return "";
}

// Resolve the node at the other end of a connector
function resolveConnectorEndpoint(endpoint, nodeMap) {
  if (endpoint && endpoint.endpointNodeId) {
    return nodeMap[endpoint.endpointNodeId] || null;
  }
  return null;
}

// Get display text for a connector endpoint — sticky text or node name fallback
function endpointLabel(node) {
  if (!node) return null;
  if (node.type === "STICKY") {
    var text = getStickyText(node);
    if (!isPlaceholder(text)) return text;
  }
  return node.name || null;
}

// Build a flat index of nodeId → node for connector resolution
function buildNodeMap(nodes) {
  var map = {};
  function walk(n) {
    map[n.id] = n;
    if (n.children && n.children.length > 0) {
      for (var i = 0; i < n.children.length; i++) {
        walk(n.children[i]);
      }
    }
  }
  for (var i = 0; i < nodes.length; i++) {
    walk(nodes[i]);
  }
  return map;
}

// Walk an array of nodes and collect stickies, texts, connectors, links
function collectFromNodes(nodes, result) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    collectFromNode(node, result);
  }
}

function collectFromNode(node, result) {
  if (node.type === "STICKY") {
    var text = getStickyText(node);
    if (!isPlaceholder(text)) {
      var colour = getStickyColour(node);
      var author = getStickyAuthor(node);
      if (!result.stickies[colour]) {
        result.stickies[colour] = [];
      }
      result.stickies[colour].push({ text: text, author: author });
    }
  } else if (node.type === "TEXT") {
    var content = getTextContent(node);
    if (content && !isPlaceholder(content)) {
      result.texts.push(content);
    }
  } else if (node.type === "CONNECTOR") {
    result.connectors.push(node);
  } else if (node.type === "LINK_UNFURL") {
    // Link previews — grab the url property
    if (node.url) {
      result.links.push(node.url);
    }
  } else if (node.type === "STAMP") {
    // Record stamps by their emoji/name — useful metadata but not primary content
    if (node.name) {
      result.stamps.push(node.name);
    }
  }

  // Recurse into children (for frames, groups, sections)
  if (node.children && node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
      collectFromNode(node.children[i], result);
    }
  }
}

// Build an empty result bucket
function emptyResult() {
  return {
    stickies: {},
    texts: [],
    connectors: [],
    links: [],
    stamps: []
  };
}

// Count total stickies across colour groups
function countStickies(stickies) {
  var total = 0;
  var keys = Object.keys(stickies);
  for (var i = 0; i < keys.length; i++) {
    total += stickies[keys[i]].length;
  }
  return total;
}

// Render a colour group into markdown lines
function renderColourGroup(label, items) {
  var lines = [];
  lines.push("## " + label + " — " + items.length);
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var line = "- " + item.text;
    if (item.author) {
      line += " *— " + item.author + "*";
    }
    lines.push(line);
  }
  return lines.join("\n");
}

// Generate the full markdown string from a named result set
function generateMarkdown(name, result, nodeMap, isoDate) {
  var totalStickies = countStickies(result.stickies);
  var colourGroups = Object.keys(result.stickies);
  var sections = [];

  // --- Frontmatter ---
  var fm = [];
  fm.push("---");
  fm.push("name: " + name);
  fm.push("source: FigJam");
  fm.push("extracted: " + isoDate);
  fm.push("type: narrate");
  fm.push("total_stickies: " + totalStickies);
  fm.push("---");
  sections.push(fm.join("\n"));

  // --- Title ---
  sections.push("# " + name);

  // --- Colour groups in defined order ---
  for (var o = 0; o < COLOUR_ORDER.length; o++) {
    var label = COLOUR_ORDER[o];
    if (result.stickies[label] && result.stickies[label].length > 0) {
      sections.push(renderColourGroup(label, result.stickies[label]));
    }
  }
  // Any groups not in the canonical order (edge case — new colours)
  for (var c = 0; c < colourGroups.length; c++) {
    var cLabel = colourGroups[c];
    if (COLOUR_ORDER.indexOf(cLabel) === -1 && result.stickies[cLabel].length > 0) {
      sections.push(renderColourGroup(cLabel, result.stickies[cLabel]));
    }
  }

  // --- Connectors ---
  if (result.connectors.length > 0) {
    var connLines = ["## Connections"];
    for (var i = 0; i < result.connectors.length; i++) {
      var conn = result.connectors[i];
      var fromNode = resolveConnectorEndpoint(conn.connectorStart, nodeMap);
      var toNode = resolveConnectorEndpoint(conn.connectorEnd, nodeMap);
      var fromLabel = endpointLabel(fromNode);
      var toLabel = endpointLabel(toNode);
      if (fromLabel && toLabel) {
        connLines.push("- \"" + fromLabel + "\" → \"" + toLabel + "\"");
      }
    }
    if (connLines.length > 1) {
      sections.push(connLines.join("\n"));
    }
  }

  // --- Links ---
  if (result.links.length > 0) {
    var linkLines = ["## Links"];
    for (var l = 0; l < result.links.length; l++) {
      linkLines.push("- " + result.links[l]);
    }
    sections.push(linkLines.join("\n"));
  }

  return sections.join("\n\n");
}

// Main extraction function
function extract() {
  var page = figma.currentPage;
  var pageName = page.name;
  var isoDate = new Date().toISOString().split("T")[0];
  var nodesToScan = [];

  // If the user has a selection, extract from selection only
  var selection = figma.currentPage.selection;
  if (selection.length > 0) {
    for (var s = 0; s < selection.length; s++) {
      nodesToScan.push(selection[s]);
    }
  } else {
    // Extract from the full page
    for (var p = 0; p < page.children.length; p++) {
      nodesToScan.push(page.children[p]);
    }
  }

  // Build node map for connector resolution
  var nodeMap = buildNodeMap(nodesToScan);

  // Check whether top-level nodes include named sections/frames
  // If they do, group by section; otherwise treat the whole page as one group
  var sectionNodes = [];
  var looseNodes = [];

  for (var i = 0; i < nodesToScan.length; i++) {
    var n = nodesToScan[i];
    if (n.type === "SECTION" || (n.type === "FRAME" && n.name)) {
      sectionNodes.push(n);
    } else {
      looseNodes.push(n);
    }
  }

  var totalStickies = 0;
  var totalSections = 0;
  var colourGroupSet = {};
  var allMarkdown = [];

  if (sectionNodes.length > 0) {
    // Per-section extraction
    for (var si = 0; si < sectionNodes.length; si++) {
      var sectionNode = sectionNodes[si];
      var sectionName = sectionNode.name || ("Section " + (si + 1));
      var sectionResult = emptyResult();
      var sectionChildren = sectionNode.children || [];
      collectFromNodes(sectionChildren, sectionResult);
      // Also pick up loose connectors at the page level that touch this section
      // (connectors live at page level, not inside sections)
      collectFromNodes(looseNodes.filter(function(n) { return n.type === "CONNECTOR"; }), sectionResult);
      var md = generateMarkdown(sectionName, sectionResult, nodeMap, isoDate);
      allMarkdown.push(md);
      var sc = countStickies(sectionResult.stickies);
      totalStickies += sc;
      var groups = Object.keys(sectionResult.stickies);
      for (var g = 0; g < groups.length; g++) {
        colourGroupSet[groups[g]] = true;
      }
    }
    totalSections = sectionNodes.length;

    // If there are also loose stickies outside sections, append as "Unsectioned"
    var looseResult = emptyResult();
    collectFromNodes(looseNodes, looseResult);
    var looseCount = countStickies(looseResult.stickies);
    if (looseCount > 0) {
      allMarkdown.push(generateMarkdown("Unsectioned", looseResult, nodeMap, isoDate));
      totalStickies += looseCount;
      var looseGroups = Object.keys(looseResult.stickies);
      for (var lg = 0; lg < looseGroups.length; lg++) {
        colourGroupSet[looseGroups[lg]] = true;
      }
    }
  } else {
    // No sections — treat entire selection/page as one document
    var pageResult = emptyResult();
    collectFromNodes(nodesToScan, pageResult);
    allMarkdown.push(generateMarkdown(pageName, pageResult, nodeMap, isoDate));
    totalStickies = countStickies(pageResult.stickies);
    totalSections = 1;
    var pageGroups = Object.keys(pageResult.stickies);
    for (var pg = 0; pg < pageGroups.length; pg++) {
      colourGroupSet[pageGroups[pg]] = true;
    }
  }

  var markdown = allMarkdown.join("\n\n---\n\n");
  var colourGroupCount = Object.keys(colourGroupSet).length;

  figma.ui.postMessage({
    type: "extracted",
    markdown: markdown,
    pageName: figma.currentPage.name,
    summary: {
      stickies: totalStickies,
      sections: totalSections,
      colourGroups: colourGroupCount
    }
  });
}

// ═══════════════════════════════════════════════════════
// N → I : Import markdown back into FigJam as stickies
// ═══════════════════════════════════════════════════════

// Reverse colour map: category label → Figma sticky colour
var REVERSE_COLOUR_MAP = {
  "High Signal": "GREEN",
  "Validated": "TEAL",
  "Action Items": "ORANGE",
  "Technical": "BLUE",
  "Questions": "PINK",
  "Discussion": "VIOLET",
  "General": "YELLOW",
  "Notes": "GRAY"
};

// Parse markdown into structured groups
function parseNarrativeMarkdown(markdown) {
  var lines = markdown.split("\n");
  var title = "";
  var groups = [];
  var currentGroup = null;
  var inFrontmatter = false;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    // Skip frontmatter
    if (line === "---") {
      inFrontmatter = !inFrontmatter;
      continue;
    }
    if (inFrontmatter) continue;

    // Title
    if (line.indexOf("# ") === 0 && line.indexOf("## ") !== 0) {
      title = line.substring(2).trim();
      continue;
    }

    // Section header (## Category — count)
    if (line.indexOf("## ") === 0) {
      var headerText = line.substring(3).trim();
      // Strip the count suffix (e.g. " — 8")
      var dashIdx = headerText.indexOf(" — ");
      var groupName = dashIdx > -1 ? headerText.substring(0, dashIdx).trim() : headerText;
      // Skip non-sticky sections
      if (groupName === "Connections" || groupName === "Links") {
        currentGroup = null;
        continue;
      }
      currentGroup = { name: groupName, items: [] };
      groups.push(currentGroup);
      continue;
    }

    // List item (- text)
    if (line.indexOf("- ") === 0 && currentGroup) {
      var itemText = line.substring(2).trim();
      // Strip author suffix (*— Author*)
      var authorIdx = itemText.lastIndexOf(" *—");
      if (authorIdx > -1) {
        itemText = itemText.substring(0, authorIdx).trim();
      }
      if (itemText) {
        currentGroup.items.push(itemText);
      }
    }
  }

  return { title: title, groups: groups };
}

// Create stickies in FigJam from parsed markdown
function importToFigJam(markdown) {
  var parsed = parseNarrativeMarkdown(markdown);
  var page = figma.currentPage;

  // Find a clear area to place new content
  var maxX = 0;
  for (var i = 0; i < page.children.length; i++) {
    var child = page.children[i];
    var right = child.x + child.width;
    if (right > maxX) maxX = right;
  }
  var startX = maxX + 200;
  var startY = 0;

  // Create a section for the import
  var section = figma.createSection();
  section.name = parsed.title || "Imported Narrative";

  var stickyWidth = 300;
  var stickyHeight = 200;
  var colSpacing = 40;
  var rowSpacing = 30;
  var groupSpacing = 60;

  var currentY = 80; // Leave room for section title
  var totalStickies = 0;
  var groupCount = 0;

  for (var g = 0; g < parsed.groups.length; g++) {
    var group = parsed.groups[g];
    if (group.items.length === 0) continue;
    groupCount++;

    var stickyColour = REVERSE_COLOUR_MAP[group.name] || "YELLOW";

    // Layout in columns of 3
    var cols = 3;
    for (var j = 0; j < group.items.length; j++) {
      var col = j % cols;
      var row = Math.floor(j / cols);

      var sticky = figma.createSticky();
      sticky.text.characters = group.items[j];
      sticky.color = stickyColour;
      sticky.x = 40 + col * (stickyWidth + colSpacing);
      sticky.y = currentY + row * (stickyHeight + rowSpacing);

      section.appendChild(sticky);
      totalStickies++;
    }

    var rows = Math.ceil(group.items.length / cols);
    currentY += rows * (stickyHeight + rowSpacing) + groupSpacing;
  }

  // Size the section to fit content
  section.x = startX;
  section.y = startY;
  section.resizeWithoutConstraints(
    40 + 3 * (stickyWidth + colSpacing) + 40,
    currentY + 40
  );

  // Scroll to the new section
  figma.viewport.scrollAndZoomIntoView([section]);

  figma.ui.postMessage({
    type: "imported",
    summary: {
      title: parsed.title,
      stickies: totalStickies,
      groups: groupCount
    }
  });
}

// Message handler
figma.ui.onmessage = function(msg) {
  if (msg.type === "extract") {
    extract();
  } else if (msg.type === "import") {
    importToFigJam(msg.markdown);
  } else if (msg.type === "close") {
    figma.closePlugin();
  }
};
