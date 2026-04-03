---
name: Mr. Biscuit — YouTube Video Deep Analysis (4 videos)
description: Deep analysis of all 4 Mr. Biscuit/Variable Visualiser tutorial videos referenced during IDS 2026 Q&A. Transcripts, visual inventory, workflows, token architecture, critique.
type: reference
---

## Videos Analysed (2026-04-02)

1. **52Z_HfUYTWk** — Figma to React with Cursor AI + Figma MCP (25 min)
2. **yimc4uatoZ4** — Variable Visualiser AI Assistant demo (4 min)
3. **TWMCn-Lsyxs** — Parametric Design vs Variant Explosion (27 min)
4. **tLRRzvJYegU** — AI Friendly Design System Part 2 (16 min)

## Core Pipeline (across all videos)

Figma variables (Variable Visualiser graph) → Export JSON + resolver.js → Cursor AI generates React from Figma link → Storybook verifies → iterate by re-exporting JSON

## Key Artifacts

### compDesignToCode.md (Video 1)
Mr. Biscuit's prompt template for Cursor AI — a proto-CLAUDE.md but ONLY for C (Create):
- Must call `get_design_context`, `get_variable_defs`, `get_screenshots` before coding
- Naming: use Figma's `data-name`, camelCase tokens
- Tokens: use `getFigmaVariableValue` from resolver, pass `modes` object
- Component structure: use slots, don't nest unnecessarily
- Mode cascade: modes MUST pass down to all slot children via `cloneChildrenWithModes`
- Storybook HMR safety rules (prevent infinite reload)
- Export patterns, documentation generation
- Final verification: `yarn storybook` and check browser

### Variable Visualiser AI Assistant (Video 2)
Natural language commands to create/modify Figma variables:
- "Correct the mode please and make aliasing from brand colors"
- "Add a dim mode"
- "Create me an input collection with all relevant variables aliasing from existing structure"
- "Bind all relevant variables from input collection to my current Figma selection"
Creates primitive → semantic → component-specific token layers via conversation.

### Token Architecture (Video 3 — the key video)
Layered parametric structure for a button:
- **Primitives**: blue-50 to blue-900, gray-50 to gray-900, white, black, border-radius values
- **Color Mode**: Light/Dark — aliases from Primitives
- **Semantic States**: Default/Warning/Error/Success — aliases from Color Mode
- **Interactive States**: Idle/Hover/Pressed/Disabled — aliases from Semantic States
- **Shape**: Pill/Rounded — aliases border-radius primitives
- **Intent**: Primary/Secondary — aliases from Interactive States
- **Size**: SM/MD/LG — padding-x, padding-y, font-size, line-height
- **Brand**: A/B/C/D — aliases from Primitives
- **Button (output)**: background-color, text-color, border-radius, padding-h, padding-v, font-size, line-height

### Multiplexing / Routing (Video 4)
Breaks Figma's 4-mode limit:
- "Brands Router" collection with Pack 1/2/3/4 modes
- Each Pack is its own collection with Brand A/B/C/D
- Result: 4 packs x 4 brands = 16 brands (nest again for 64)
- Known technique — Salesforce uses it for 120 brands
- "Open secret to the Figma community"

### Iteration Workflow (Video 4)
1. Change design decision in Figma (Variable Visualiser)
2. Export JSON
3. Drag into code project, replacing existing file
4. Code updates automatically — zero code changes needed
5. Exception: new variable BINDINGS require code sync

## 30-Minute Generation Problem
Cursor AI + Figma MCP takes 30 minutes per component. Context runs out mid-session requiring new chat. This is the "vibe coding" reality.

## Critique (from Gemini analysis)

### What's strong
- Parametric > combinatorial is genuinely correct (600 variants → 1 component + modes)
- Visual debugging via graph is powerful
- Push-to-GitHub token sync is clean
- Mode cascade architecture is well thought out

### What's missing
- **No discovery/ideation** — starts with finished Figma design
- **No N layer** — no brand voice, design rationale, domain context, stakeholder input
- **No accessibility** — zero mention of WCAG, ARIA, keyboard nav, semantic HTML
- **No testing** — only visual Storybook checks
- **No CI/CD integration** — manual JSON drag-and-drop
- **No documentation strategy** — beyond generated MDX
- **Multi-brand is a hack** — multiplexing around Figma's 4-mode limit
- **Inline styles** — production systems use CSS-in-JS or CSS Modules
- **Plugin dependency** — entire workflow depends on Variable Visualiser
- **Context exhaustion** — 30-min generation, context runs out mid-session

## Lincoln's Position vs Mr. Biscuit (updated after watching videos)

| Dimension | Mr. Biscuit | Lincoln |
|---|---|---|
| Direction | Figma → Code | Code → everywhere |
| Token format | Figma JSON + JS resolver | CSS custom properties |
| N layer | compDesignToCode.md (C only) | CLAUDE.md (full I+N+C) |
| Discovery | None | NorthStar Prototyping |
| Multi-brand | Multiplexing hack | Tokens Studio / CSS cascade |
| Cost | Figma plugin + LLM API + Cursor | Zero tooling cost |
| Context persistence | None (new chat each component) | CLAUDE.md = persistent context |
| Accessibility | Not addressed | Part of methodology |

**Mr. Biscuit = excellent C tooling. Lincoln = the I and N that his pipeline needs as input.**

His `compDesignToCode.md` is a proto-CLAUDE.md that covers code generation conventions but has zero design rationale, brand voice, or domain knowledge. Lincoln's CLAUDE.md is the durable, persistent version that solves the 30-minute context problem — the agent doesn't rediscover the system every time.

## Comparison to Other IDS Talks

| Concern | Mr. Biscuit | Jan Six | Jesse Gardner | Lincoln |
|---|---|---|---|---|
| Token source | Figma variables (VV) | Tokens Studio platform | Custom MCP server | CSS custom properties |
| Code gen | Cursor + Figma MCP | Claude Code + TS MCP | Claude Code + custom MCP | Claude Code + CLAUDE.md |
| Context for AI | Figma link + prompt template | AGENTS.md + rules + MCPs | MCP endpoints + nysds_mode | CLAUDE.md (full framework) |
| Pipeline | VV → JSON → resolver → React | TS → multi-format export | MCP → validated output | CSS → components → pages |
| Discovery | None | "Audit your system" | "Curators not innovators" | NorthStar Prototyping |
| N layer depth | None | Brand definition in TS | nysds_mode prompt | Full CLAUDE.md + thoughts |
