---
name: Brad Frost + Ian Frost + TJ Pitre — AI Without the Chaos
description: IDS 2026 Day 2 Talk 7. Context-based design systems, FigmaLint, Story UI, Southleft tools, design-systems-mcp, figma-console-mcp, "DS+AI is a power couple", values grid, 24 audience Q&As
type: reference
---

**Speakers:** Brad Frost (bradfrost.com) | Ian Frost (Southleft) | TJ Pitre (Southleft)
**Talk:** AI Without the Chaos: Context-Based Design Systems to the Rescue
**Company:** Southleft, LLC — Boutique front-end web development agency, New Orleans, LA
**Links:** [southleft.com](https://southleft.com) | [github.com/southleft](https://github.com/southleft) | [aianddesign.systems](https://aianddesign.systems) | [designtokenscourse.com](https://designtokenscourse.com)
**Figma notes:** DS-2026 file, "Day 2 - Talk 7" page

## Key Tools (Southleft ecosystem)

| Tool | What it does | GitHub |
|---|---|---|
| **figma-console-mcp** | "Your design system as an API" — Connect AI to Figma for extraction, creation, debugging | 881 stars |
| **story-ui** | AI-Powered Storybook Story Generator | 135 stars |
| **design-systems-mcp** | "I'm your specialised design systems assistant. Ask me about components, tokens, patterns, and best practices." | 126 stars |
| **figmalint** | Analyses Figma components for design system compliance, accessibility, and developer readiness with AI-powered insights | 41 stars |
| **company-docs-mcp** | AI-powered company knowledge MCP — unified place for internal policies, values, documentation, governance | 31 stars |
| **a2ui-bridge** | Framework adapters for Google's A2UI Protocol — LLM-driven UI generation | 18 stars |

## Key Slides & Concepts

- **"DS+AI is a power couple"** — Three levels: (1) Use AI to make design systems better, (2) Use AI and design systems together to make better products, (3) Use AI and design systems to build the future
- **"Design is the rendering of intent." — Jared Spool** — featured quote slide
- **"This is an existential moment."** — closing statement
- **"The new digital process"** — chaotic wire/thread visualization representing current state
- **Values grid** — multiplicity, practicality, durability, foundations, context, collaboration, curiosity, nuance, quality, accessibility, humanity, safety, integrity, responsibility
- **FigmaLint Workflow** — Figma Files → Agent → Figma Report
- **FigmaLint Analysis** sections: "What AI Reads Well", "Where AI Gets Confused", "How to Improve AI Understanding", "What AI Would Generate" — plus Component Metadata and Developer Handoff
- **Creating a New Theme in All Platforms** — Agent takes (Figma Variables + Tokens In Code + Native App + Additional Context) → outputs (New Mode In Figma + New Theme in Code + New Theme in Mobile)
- Presenters visible: TJ Pitre, Brad Frost, Ian Frost (three-person panel format)

## FigmaLint Details (from screenshots)

FigmaLint analyses components and reports:
- **What AI Reads Well:** configurable properties, design token usage
- **Where AI Gets Confused:** missing component descriptions, hard-coded values inconsistent with design system
- **How to Improve AI Understanding:** add component properties for customisation/reuse, replace hard-coded colours/spacing with design tokens
- Uses OpenAI GPT-5.2 (Flagship) as AI provider
- Runs as Figma plugin ("Developer VM")
- Demo file: "Northright Design System" with Button component (20 variants)

## Resources Referenced

- Figma MCP Server guide (help.figma.com)
- SmashingConf (link preview)
- IxDF — Interaction Design Foundation
- IxDA — Interaction Design Association
- Figma Console MCP logo/branding

## Audience Q&As (24 questions captured)

### FigmaLint / Token Architecture (8 questions)
1. How does FigmaLint work fixing tokens/variables with multiple themes with different values (i.e. if 40px is another token name in one theme)?
2. Does the linter make variables where there are none? Will it help a system make a variable collection (3 or 4 tier)?
3. Does FigmaLint only work if all your variables are in the same file as your components? (Context: multiple files — one for variables, several for components)
4. How much does FigmaLint cost in terms of AI tokens?
5. Did you apply the variables to the other modes manually? The lavender mode was using hex codes.
6. Can you explain a bit about the variables and the tier 1-3?
7. Does FigmaLint write component-based tokens by fixing the hard-coded styles? Or stick to semantics? *(loose sticky)*
8. Is this code components being rendered to Figma? If not, I find the UI kits are often out of sync with the UI code library. *(loose sticky)*

### Figma vs Code Parity (3 questions)
9. **[+1 votes]** How do you reconcile components made in Figma vs Code when they are not, and cannot be (Figma limitations), 1:1 in structure or properties?
10. How do you deal with the inherent gap between best possible (component) anatomy in Figma vs code? Is there any definitive answer better than "it depends"?
11. Any best practices to sync the component description (meta data) and keep it up to date with the code base/single source of truth (ZeroHeight)?

### MCP & Tooling (3 questions)
12. How to use MCP to design on a new Figma file with components from a connected design library? Or can only build based on local components?
13. What's the difference between working with an IDE (Cursor, Antigravity) or a Terminal tool like Warp?
14. Claude or Cursor take less time to get information, for example from Storybook?

### Theming & Source of Truth (3 questions)
15. How do you manage theming for different brands, where you have primary, secondary colours? To get to the theming what were the rules that you establish before?
16. **[+1 votes]** Where is the source of truth for the tokens kept when you created the lavender theme, I see Figma was the last one to update?
17. What do you recommend doing if you have a fairly organised Figma library and want to be able to switch themes/modes as quickly as in Ian's demo?

### Storybook & Story UI (3 questions)
18. Your workflow from Figma to Storybook is amazing. What about the workflow from Storybook to production, if you have any?
19. TJ, with Story UI, those layouts can then be used as "Template" pages that can be reused? For example be part of the npm package and use it as an "App Shell"?
20. If I plug Story UI to my public Storybook — who picks up the AI bill when the whole internet starts asking questions? :)

### Other (4 questions)
21. How do you organise your component variants into a table? Do you use a plugin as well?
22. How do you setup bypass permissions and or --dangerous-skip-permissions?
23. How do you see the role of Figma as a tool in this new way of working? Will you really need Figma or will everything live inside an IDE?
24. Unrelated — What do you think would be the future for junior designers?

### Misc
25. Where do we get the Burndown extension?
26. Is aianddesign.systems the same course as designtokenscourse.com?
27. Can you share where to find the "Design to Code parity tool"?

## Lincoln's Position vs Brad/Ian/TJ

- Brad's "context-based design systems" = Lincoln's N layer. Both argue that context (not just components) is what makes AI useful.
- Southleft's tool ecosystem (6 repos) is the most complete open-source agent toolkit shown at IDS — compare with Cristian's theoretical 4-layer architecture.
- FigmaLint's "What AI Reads Well / Where AI Gets Confused" framing maps to Lincoln's machine-readability thesis — the design system must be legible to agents.
- The "Creating a New Theme in All Platforms" diagram is Lincoln's multi-brand experience (Fun Lab/Chakra UI) validated as an agent workflow.
- Brad's values grid (humanity, safety, integrity, responsibility) echoes Lincoln's LINC virtue layer — both see ethics as load-bearing infrastructure, not decoration.
- "Design is the rendering of intent" (Jared Spool) connects directly to Lincoln's Intent-Based UI concept.
- Southleft = agency/tooling approach (build tools for the ecosystem). Lincoln = methodology approach (build the framework for how to use them). Complementary, not competitive.
- Brad has the brand recognition. Lincoln has the lived methodology. Potential outreach target for collaboration or case study validation.

## Content Opportunities from Q&As

- **Multi-brand theming with agents** — Q15, Q16, Q17 all ask about theming. Lincoln has deep Fun Lab/Chakra UI multi-brand experience. Content opportunity.
- **Figma vs Code parity** — Q9, Q10 are perennial. Lincoln's code-first approach (Figma as downstream) is a direct answer.
- **Source of truth debate** — Q11, Q16 ask where truth lives. Lincoln's position: code is source of truth, Figma is generated from it.
- **Future of Figma** — Q23 asks if Figma survives. Lincoln's intent-based UI thesis is relevant.
- **Junior designer futures** — Q24 connects to Lincoln's "one-person innovation engine" positioning.
