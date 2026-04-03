---
name: Davy Fung — Ship it! Vibe Coding Your First Figma Plugin
description: IDS 2026 Day 2 Talk 5. Atlassian DS, Google Antigravity workflow, plugin anatomy, prompt.md template, ADS Token Sync, Bulk Metadata Importer, Figma Typings MCP, 22 audience Q&As
type: reference
---

**Speaker:** Davy Fung, Design Systems @ Atlassian
**Talk:** Ship it! Vibe Coding Your First Figma Plugin
**Links:** [github.com/cobradave/ids-figma-plugin](https://github.com/cobradave/ids-figma-plugin) | [officehours.systems](https://officehours.systems) (Design System Office Hours podcast) | [LinkedIn](https://linkedin.com/in/davyfung) | [antigravity.google](https://antigravity.google)
**Figma notes:** IDS-2026 FigJam, "Day 2 - Talk 5" section

## Key Concepts

### Anatomy of a Plugin
Three files:
- **manifest.json** — "Your plugin's ID card" (name, code.js, ui.html, permissions)
- **code.js** — "Where the magic happens" (runs inside Figma's canvas, reads/modifies canvas, receives messages from ui.html)
- **ui.html (optional)** — Interface for plugin (buttons, text fields, dropdowns, styled with CSS, communicates with code.js)

### File Communication Flow
Open plugin in Figma → manifest.json instructs what to load → code.js starts running in bg → ui.html displays interface → ui.html sends message to code.js → code.js does work on canvas → code.js sends messages back to ui.html

### Workflow with Google Antigravity
1. Open Figma desktop
2. Copy demo project, prefer user dir
3. Open folder in Antigravity
4. Copy prompts from folder
5. Allow AG to generate the 3 files
6. Save all files in accessible folder
7. Import the manifest file from folder
8. Open Development > Console in Figma
9. Run plugin

Uses **Gemini 3.1 Pro (High)** as the AI model in Antigravity.

### Prompt Template (prompt.md)
Structured prompt for plugin generation:
```
Build a [headless / (WxH)px UI] Figma plugin that [does X main goal].
The user should see: [Describe UI elements, inputs, buttons, and loading states - if applicable]
How it should work:
- It should look at [selected layers / all layers / specific types of objects on the page].
- [Step 1 of the behavior/logic].
- [Step 2 of the behavior/logic].
- [What edge cases to avoid / What to do if there's no selection].
- [What success notification to show at the end].
```

### Key Constraints for AI
From the prompt.md visible in screenshots:
- "For the AI: Use only vanilla JS compatible with Figma's plugin runtime — no optional chaining, nullish coalescing, or parameter destructuring. Headless plugins: wrap logic in 'async function main()' and call it."
- "Manifest fields: name, id, api, main, editorType (add 'ui' only if there's a UI)."
- Figma native UI conventions: 11px Inter, '#333' body on white, no border-radius on container

## Plugins Demonstrated

| Plugin | What it does |
|---|---|
| **ADS Token Sync** | Atlassian Design Token Sync — syncs tokens across Light Theme, Dark Theme, Base Tokens. Shows Token Name, Figma value, Code Value, Action (NO_CHANGE) |
| **OKLCH Swatch Generator** | Generates colour swatches from HEX → OKLCH with configurable steps and increment |
| **EAP Components to GA Swap** | Swaps old EAP components to GA (general availability) versions — finds instances and replaces |
| **Awesome Bulk Metadata Importer** | "This was my aha moment" — bulk updates alt text/description, synonym keywords, and link for all components and variants. Checks a JSON file. By Davy Fung, 36 users. |

## "Other Ideas to Explore" (from slides)

**Naming & Labeling:**
- Add prefix/suffix to all layer names (e.g., "icon-" or "-copy")
- Clean layer names — remove numbers, "copy", special characters

**Layout & Spacing:**
- Distribute frames with exact pixel spacing between them
- Align all text baselines across selected text layers
- Round all X/Y positions to whole numbers (no decimals)

**Style & Properties:**
- Copy corner radius from one frame to all selected frames
- Reset all effects (shadows, blurs) on selected layers
- Swap fill colours between two selections

## Resources Referenced
- **Figma Typings MCP** (hoshikitsunoda/figma-plugin-typings-mcp) — Cristian Morales commented: "This helps AI linting the code. And have access to the Plugin API capabilities"
- **Google Antigravity** — Google's AI-powered coding environment
- **Design System Office Hours** podcast (officehours.systems)
- **Awesome Bulk Metadata Importer** — Figma Community plugin

## Audience Q&As (22 questions)

### Plugin Development Process (6 questions)
1. Do you have experience building plugins that leverage AI within the plugin itself to analyse or perform actions in Figma? How does that work?
2. What is your "go-to prompt" and recently discovered prompt you're excited to try or improve on and why? Is there a prompt library you can share or point to?
3. What does your planning or approach look like if you're creating a more complex plugin?
4. When would I use Code.js, manifest.json, etc. versus TypeScript? What are the pros and cons between using both?
5. Do your refinements with Gemini automatically populate the prompt.md file?
6. Your prompt.md looks pretty accurate. How did you fill it? Using a chat prompt?

### Testing & QA (3 questions)
7. What does your testing setup look like? Best practices for automated testing? Given these could cause havoc in files. How to ensure quality and it works especially over time if plugin has enhancements.
8. What the QA process you have been developing regarding Figma plugins dev that allows you share the plugin across your org or even to the Figma community?
9. How would your working process differ if the plugin is published for the community? Is there anything else to keep in mind?

### Plugin Capabilities & Limitations (4 questions)
10. Can the plugin do network requests? To token JSON files? We have 200 brand colour JSON files with just A FEW design tokens (15) and my plugin with all of them included was 33,000 lines of code! (Still in review)
11. Have you managed to add analytics to your plugins? Like Mixpanel/Amplitude for your plugin. Considering that Mixpanel doesn't work on Figma API since the ui.html is in a sandboxed environment.
12. Is the process for making a Figma plugin different for making a Figma widget?
13. How do you keep track of renamed files via plugin, structured file naming conventions, and centralised asset management tools to ensure easy finding for onboarding designers or anyone who need to get up to speed?

### Enterprise & Sharing (3 questions)
14. Have you shared anything with your team in company workspace? What was / will be your process for getting that approved (IT, security, etc.)?
15. We have our DS documentation in Confluence, can we connect it to a Figma Plugin for real-time document updates from Figma?
16. Why can't we edit Confluence docs from the Confluence cloud widget in Figma?

### Confluence Integration (2 questions)
17. Would you be thinking about creating plugin from Figma to Confluence for documentation? (Since Confluence is from Atlassian, advice us HOW-TO?) Because this would help taking my nightmare awayyyyyyy
18. How would you suggest approaching a plugin for let's say to check/review some designs as per some internal guidelines you have in place?

### Meta (4 questions)
19. Why are you so cool? *(from Chela)*
20. Very cool!
21. Do you use AI to help you come up with ideas for plug-ins that then AI will also build?
22. Skill creation to YouTube or Office Hour episode please! Bad Claude to get that out of your talk.

## Lincoln's Position vs Davy

- Davy uses Google Antigravity + Gemini. Lincoln uses Claude Code. Same pattern (AI generates plugin code from structured prompts), different toolchain.
- Davy's prompt.md template is a simpler version of what Lincoln's CLAUDE.md does at project level — structured context for AI code generation.
- The ADS Token Sync plugin validates Lincoln's multi-brand token experience (Fun Lab, Breville) — same problem domain, different tool.
- Davy is enterprise DS (Atlassian) shipping internal plugins. Lincoln is the architect who'd define WHAT plugins to build and WHY.
- The "Awesome Bulk Metadata Importer" concept (bulk updating component descriptions/keywords) maps directly to making design systems machine-readable — Lincoln's thesis.
- Confluence integration questions reveal enterprise pain points Lincoln understands from MedicalDirector/Telstra Health experience.
- Lower strategic relevance for Lincoln's positioning compared to other IDS talks — this is practical "how to build plugins" rather than methodology or architecture. But useful as a reference for Lincoln's own Figma plugin development.

## Content Opportunities
- **Figma plugin development with Claude Code** — Lincoln could demonstrate building the same plugins using Claude Code instead of Antigravity, showing his toolchain advantage.
- **Enterprise plugin governance** — Q14, Q8 ask about approval/QA process. Maps to Lincoln's corporate MCP security thinking.
