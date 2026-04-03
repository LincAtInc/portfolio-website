---
name: FigJam-to-Narrative Plugin
description: Figma plugin that extracts FigJam ideation boards into structured markdown for the N layer. Solves the I→N extraction gap proven during IDS 2026 review session.
type: ideate
status: todo
---

# FigJam-to-Narrative Plugin

## The Problem
FigJam is the natural home for ideation — messy stickies, screenshots, links, annotations, colour coding. But extracting that into structured narrative context is manual and lossy. The Figma MCP can read FigJam but:
- Comments/threaded answers don't copy across
- Screenshots need separate per-node calls
- Large boards exceed token limits
- No semantic understanding of colour conventions
- Stamps, connectors, link previews come through as raw data

## The Solution
A Figma plugin that walks a FigJam section and exports structured markdown ready for `inc/narrate/`.

### What It Does
1. Walks a FigJam section/frame and extracts all stickies with colours, authors, and threaded comments
2. Groups by section, proximity, or colour automatically
3. Exports as structured markdown with frontmatter metadata
4. Includes screenshot references for visual content
5. Respects configurable colour conventions (e.g. green = high signal, yellow = general)
6. Preserves connector relationships between stickies
7. Extracts link previews as proper markdown links

### Output Format
```markdown
---
name: [Section name]
source: FigJam / [Board name] / [Section name]
extracted: [date]
type: narrate
---

## [Section Name]

### High Signal (green)
- [Sticky text] — *[Author]*
  - Comment: [threaded reply]

### General (yellow)
- [Sticky text]
...
```

## Why This Matters
- **Proves INC in action** — the tool embodies the methodology (I→N extraction)
- **NorthStar prototype** — a real shipped artefact, not just a concept explained
- **Differentiator** — nobody at IDS 2026 showed this pipeline
- **Reusable** — works for any FigJam board, not just conference notes

## Build Approach
- Use Claude Code (not Antigravity) — Lincoln's toolchain
- Follow Davy Fung's plugin anatomy: manifest.json + code.js + ui.html
- Reference the Figma Plugin API typings MCP (from Cristian Morales' recommendation)
- Start headless (no UI), add UI later if needed

## Prior Art from IDS
- Davy Fung's prompt.md template for plugin generation
- Cristian's Figma Typings MCP (hoshikitsunoda/figma-plugin-typings-mcp)
- Jan Six's skills.sh for distribution
