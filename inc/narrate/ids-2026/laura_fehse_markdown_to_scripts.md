---
name: Laura Fehse — From falling for markdown to solving real problems with scripts
description: IDS 2026 Day 2 Talk 4. Figma, markdown guidelines for AI agents, multi-file structure, guidelines/ folder architecture, Figma Make, Obsidian, curate don't overwhelm, 25 audience Q&As
type: reference
---

**Speaker:** Laura Fehse, she/them, Figma
**Talk:** From falling for markdown to solving real problems with scripts
**Links:** [Obsidian](https://obsidian.md) | Various NeurIPS/ArXiv/SAGE research papers on language models and semantic change
**Figma notes:** IDS-2026 FigJam, "Day 2 - Talk 4" section

## Key Concepts

### Why Guidelines Matter
"Design system packages give an AI agent access to components and tokens, but not the knowledge of how to use them well. Without guidelines, agents will:
- Skip required providers, CSS imports, or build configuration
- Use raw CSS values instead of design tokens
- Pick the wrong component variant for a given context
- Miss icon naming conventions and import non-existent icons
- Produce flat, unstructured layouts without proper visual hierarchy"

### Guidelines Folder Architecture
```
guidelines/
├── overview.md                  ← entry point: product character, cross-cutting rules
├── discovery.md                 ← reading order, asset search, icon verification
├── setup.md                     ← providers, CSS imports, build config
├── icon-discovery.md            ← complete icon catalog for verification
├── foundations/
│   ├── color.md                 ← naming pattern, semantic roles, decision tree
│   ├── typography.md            ← font families, size scale, line height, weight
│   ├── spacing.md               ← base unit, scale, usage context
│   ├── surfaces.md              ← background strategy, layering, border patterns
│   ├── elevation.md             ← shadow levels, when to use shadows vs borders
│   ├── radius.md                ← shape scale, component-to-radius mapping
│   ├── icons.md                 ← icon sizes, naming conventions, color tokens
│   ├── modes.md                 ← themes, dark/light mode, enhanced contrast
│   ├── focus.md                 ← focus ring patterns, keyboard navigation
│   └── input-styling.md         ← standard input appearance, sizing, states
├── components/
│   ├── overview.md              ← full catalog + alternative names
│   ├── icons.md                 ← icon library, sizes, usage patterns
│   ├── button.md                ← per-component spec (variants, props, rules)
│   ├── input.md / modal.md / menu.md / tabs.md / navigation.md / media.md ...
└── composition/
    ├── overview.md              ← composition principles, file index
    ├── alignment.md / icons.md / surfaces.md / layouts.md / density.md / hierarchy.md
```

### Why Multi-File (Not Monolithic)
"Splitting guidelines across multiple smaller files enables the agent to recall details better than one large file. A single monolithic document fills the context window with information the agent doesn't need for the current task, diluting the parts that matter."

Loading strategy:
- **Always-read files** (overview.md, setup.md, foundations/, components/overview.md) — consumed upfront for every task
- **On-demand files** (components/{name}.md, composition/) — read only when relevant
- Use overview.md to direct reading order with MUST READ markers

### Key Principles

**Curate, don't overwhelm:**
"Agents perform worse when given too many options. If your spacing scale has 20 values, the agent is more likely to pick an obscure one. Instead, highlight the 3-5 most common values and mark the default clearly."

**Group by logical component:**
"Create one guideline file per logical group of related components, not one per export. For example, tabs.md should cover everything about tabs — the hook, the strip, the tab items, and the panels — because they're always used together."

**If you do nothing else, do these:**
- Headings as navigation (#, ##, ###)
- Requirements as bullets (not paragraphs)
- Include Non-goals (scope control is kindness)
- Separate rules vs examples
- Keep files small and single-purpose

### Example: Tabs Component Guideline
Shows `Tabs.useTabs()` hook, `Tabs.TabStrip`, `Tabs.Tab`, `Tabs.TabPanel` — complete API surface with code example in a single file.

### Example: Font Sizes Guideline
| Size | Token | Usage |
|---|---|---|
| 11px | `text-body-medium` | **Default — use for all body text** |
| 13px | `text-body-large` | Forms, comfortable reading |
| 9px | `text-body-small` | Captions only — hard to read, use sparingly |

## Resources Referenced
- iA: "Markdown and the Slow Fade of the Formatting Fetish"
- WIRED: "How to Use Markdown", "The Eternal Truth of Markdown", "Machine Readable"
- Obsidian (obsidian.md) — referenced twice, likely for managing guidelines
- Multiple NeurIPS/ArXiv/SAGE papers on language models, dialect fairness, semantic change — academic underpinning for why markdown structure matters to LLMs

## Audience Q&As (25 questions)

### Figma Make & Distribution (4 questions)
1. **[Green]** From a scalability perspective, would you share these .md files with your domain teams so they'd load these every time they use Figma Make?
2. **[Green]** How do we provide guidelines as default to all of our consuming designers so they don't need to remember to setup the guidelines for every new Figma Make?
3. Do these .md files improve the design system consistency for Figma Make? I spoke to a Figma rep recently about this issue, and they said "that's not what we guarantee"...
4. How do I get my Figma design system to work in Figma Make? It only pulls typography.

### Structure & Best Practices (5 questions)
5. **[Green]** Could you share some best practices for the structure of different guidelines files?
6. How many .md files should we have? Which are the basics? — Accessibility, All the UI (colour, types, spacing)
7. In your best practices, you wrote separate rules vs. examples. Where would you place examples?
8. Do you specify responsive design choices in the same places? For example, default mobile text size is 16px vs 14px on desktop.
9. There are shared foundations/examples of Instructions-Rules-Guidelines that we can start with?

### Translation & Process (5 questions)
10. **[Green]** How do you transform/translate your Figma components into a .md text file? What's your process?
11. How do you move from Figma Variables in Design System to .md files?
12. How do you translate visual examples in your design system documentation to markdown? Often images (e.g. do and don't) are the best to show exact context. How do you adopt that to .md format?
13. **[Green]** How do you avoid duplication between markdown docs in the repo and your design system website?
14. Do you pull markdown into your design system site automatically?

### Maintenance & Workflow (3 questions)
15. Do you have any AI processes for maintenance if guidelines update to update these .md files and any team-facing guidelines?
16. When I start with a completely new product, how would you start? At which point would you start writing your first .md files?
17. **[Green]** Where would you start with creating some of these guidelines if you're starting to use them/make them?

### .md vs JSON Debate (2 questions)
18. .md vs .json debates between Laura and Diana? :)
19. So why can't this be a JSON?
20. Previous speaker mentioned .mds for component docs as chewing more tokens than JSON. Any guidance here?

### Obsidian & Tools (1 question)
21. Can we see how you use Obsidian? It's a great tool. Interested in seeing how it is used for design systems.

### Other (4 questions)
22. How do you keep track of renamed files via plugin, structured file naming conventions, and centralised asset management tools?
23. Will you share the guidelines folder you used for this test?
24. How do you make the illustrations of your presentation? They are awesome.
25. **[Green]** Where are people discussing these things online besides LinkedIn? Any Slack groups?

## Lincoln's Position vs Laura

- Laura's guidelines/ folder IS Lincoln's N layer — structured context that makes design systems machine-readable. Laura approaches from Figma's perspective (Figma Make), Lincoln from the code-first perspective (CLAUDE.md).
- Laura's multi-file structure with always-read vs on-demand loading maps directly to Lincoln's CLAUDE.md + memory/ architecture. Same insight, different implementation.
- "Curate, don't overwhelm" echoes Diana Wolosin's progressive disclosure and Cristian's "intent layer" — all converging on the same principle: give agents what they need, not everything you have.
- The .md vs .json debate (Q18-20) is central to Lincoln's positioning. Laura = markdown for human-readable guidelines. Diana = JSON for machine-parseable configs. Lincoln's answer: both, layered through the N. CLAUDE.md (markdown for methodology) + design tokens (JSON for values).
- Laura works at Figma — she's building the official Figma perspective on how to feed context to AI. Lincoln builds the methodology for how to structure that context across the whole pipeline, not just Figma.
- **High strategic relevance** — Laura validates Lincoln's core thesis that context files (not just components) are what make AI useful. Her guidelines/ folder structure is a reference implementation of what Lincoln advocates.
- The academic papers (NeurIPS, ArXiv) on semantic change and language models suggest Laura has deep thinking about WHY markdown structure matters to LLMs — not just practical tips.

## Content Opportunities
- **CLAUDE.md vs guidelines/** — Lincoln could write about how his CLAUDE.md approach goes beyond component guidelines to include methodology, brand voice, career context, and discovery intent. Laura's approach is component-focused. Lincoln's is system-focused.
- **The .md vs .json false dichotomy** — content opportunity from Q18-20. Both formats serve different layers of the N.
- **Obsidian as a design system tool** — Q21 asks about this. Lincoln could explore Obsidian's graph view as a way to visualise the N layer relationships.
