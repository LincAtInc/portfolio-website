---
name: Diana Wolosin — Machine-Readable Design Systems for MCP and LLMs
description: IDS 2026 Talk. Sr. Design System Designer, Indeed. 8-config MCP benchmark, JSON vs MD accuracy/efficiency, progressive disclosure for AI, 4389 prototypes, semantic categories in component metadata.
type: reference
---

**Speaker:** Diana Wolosin, Sr. Design System Designer, Indeed
**Talk:** Machine-Readable Design Systems for MCP and LLMs
**Links:** [Medium](https://dianawolosin.medium.com/) | [IDS FigJam Board](https://www.figma.com/board/hg0hTBpQOx02PloxjHfmzo/-2--IDS-AI-Conference-2026?node-id=40011564-670)
**Prior talks (5 total):** Machine-Readable DS, Building AI-Driven DS with Metadata, Intent-Driven Context for AI DS, Introducing the Context Engine, AI Metadata: Powering a DS MCP

## Key Findings — 8-Configuration MCP Benchmark

### Finding #1: MCP = Deterministic, LLM = Stochastic
22 queries, 3 runs each. Same MCP query → same result. Same LLM prompt → varies.

### Finding #3: LLM Accuracy by Format
| Format | Accuracy |
|---|---|
| .json | ~93% |
| .toon | ~85% |
| .md + .json | ~80% |
| .md | ~80% |
| .mdx | ~75% |

### Finding #4: Token Efficiency by Format
| Format | Avg. Tokens |
|---|---|
| .json | ~5,000 |
| .md | ~20,000 |
| .toon | ~20,000 |
| .mdx | ~25,000 |
| .md + .json | ~30,000 |

JSON is 5x more token efficient AND 13% more accurate than MDX.

### Finding #5: Cost at Scale
Anthropic pricing $5/1M tokens, 1000 queries/month:
- MDX: $125/month → $1,500/year
- JSON: $25/month → $300/year

## Core Architecture

### JSON Schema for MCP (Component Metadata)
Essential fields: Component Identity, Property Definitions (Props), Variants, Size, States, Usage Guidelines.
Each prop includes `semantic_category` — e.g. `behavioral_state`, `responsive_props`, `content_props`.
Source: `@indeed/ifl-components` — hand-authored/script-generated from component library source code.

### Progressive Disclosure for AI ("How knowledge is delivered")
| Layer | Loading Strategy | What It Carries |
|---|---|---|
| AGENTS.md | Always in context | Orchestration index — tells agents what knowledge exists and where to find it |
| Rules (.mdc) | Always in context (auto-discovered) | Imperative constraints and foundation tokens |
| Docs (.md) | On-demand — agent reads when AGENTS.md directs | Reference knowledge: taste, quality criteria, partner library context |
| Skills (SKILL.md) | On-demand — loaded when task matches | Repeatable workflows: contribution, compliance, evaluation |
| Agents (.md) | Invoked by user | Behavioural roles with defined scope and capabilities |
| MCP | On-demand — loaded on tool call | Live lookups: component APIs, icons, full token reference |

Referenced tooling: Cursor plugins, Claude Code plugins.
**Current state at Indeed (April 2026):** DS MCP is live and proven. Skills NOT yet implemented. Currently building agents to work with their MCP. The progressive disclosure table is partly aspirational — MCP layer is shipped, Skills/Agents layers are in progress.

## Results
**4,389+ AI-Generated Prototypes** (Aug-Dec 2025)
- Uses: DS MCP, React DS components, Indeed's visual language
- Does NOT use: Figma MCP, Figma Make Tailwind CSS
- Code-first prototyping at enterprise scale

## Lincoln's Position vs Diana

### What she has that Lincoln doesn't:
- Empirical benchmark data (8 configs, 22 queries x 3 runs)
- Enterprise scale proof (4,389 prototypes, Indeed)
- Formal progressive disclosure architecture for context loading
- Cost analysis with real Anthropic pricing

### What Lincoln has that she doesn't:
- Discovery methodology (NorthStar Prototyping) — her work starts after design decisions are made
- Narrative context (brand voice, design rationale, domain knowledge) — her JSON captures structure but not intent
- Framework for where context comes from (INC) — she optimises format, not origin
- Solo practitioner model — her architecture assumes enterprise teams

### Key alignment:
- Her JSON for structured data + MD for narrative = Lincoln's CSS custom properties + CLAUDE.md
- Her MCP determinism finding validates persistent context over ephemeral prompting
- Her "Intent-Driven Context" talk title overlaps with Lincoln's Intent-Based UI concept
- Her 4,389 prototypes with no Figma MCP = code-first NorthStar Prototyping at scale

### The split she proved empirically:
- **N as narrative** (.md) → for discovery, reasoning, intent — what CLAUDE.md does
- **N as data** (.json) → for delivery, accuracy, efficiency — what MCP serves

## FigJam Board — "AI-driven intent-based UI discussion"
IDS conference workshop/discussion summary (March 19, 2026):

**Implementation & Tools:**
- Creating markdown files to define UI primitives and surfaces is a key technical requirement
- Teams need existing design systems with proper tokens and primitive tags in code
- Incremental rollout of components helps identify gaps

**User Experience Challenges:**
- Unclear user intent creates translation difficulties for AI systems
- Consistent UI patterns vs generative variation creates usability tensions
- Intent detection requires existing user data and behavioural patterns

**Technical Concerns:**
- Computational costs and energy demands may be prohibitive
- Metrics need updates to track adaptive interface performance

**Design System Integration:**
- Product primitives must bridge design systems with real workflows
- Updated DS structures needed for AI-generated surfaces
- Accessibility across AI-generated components remains unclear

Maps directly to Lincoln's Intent-Based UI and Usage-Informed UX concepts.

## Audience Q&As (35 questions from FigJam)

### JSON vs MD Format Debate (9 questions)
1. Did you find any difference between single documentation elements presented as .json or as .md files?
2. Any guideline about which type of file to use for components metadata? We saw yesterday .ts, .md...now .json
3. For someone that has documentation in .mdx, .json and simple .md, would you recommend cleaning up to only one format instead?
4. Do you still use MDX for your (user) documentation, if JSON is better suitable for AI?
5. How to make sure the agents prioritise JSON over .md or .mdx files?
6. md vs json cost comparison, perfect. But mds can have frontmatter, a yaml on top of it, does it make a difference in efficiency?
7. Did I hear correctly that MD is better for LLM and JSON better for MCP, what about when MCP is working with LLM, should both be provided?
8. Although she said that JSON is the most token-efficient, in the final example she uses MD; is there a reason for that?
9. Aren't rules, doc, skills files etc. also consumed by MCP server that relies better on JSON files as stated in your benchmark test? If yes, why not use JSON directly?

### MCP Setup & Benchmarking (6 questions)
10. How did you set up the MCP benchmarking? And will this benchmarking setup be available to use to test how MCP configs work with other design systems?
11. Can you share a repo for the MCP tester? I'd love to try that with my MCP.
12. Can you share an example of an optimised JSON file?
13. How did you in the end split your JSON files?
14. Can you talk a bit more about: Injection, Chunking, Indexing — what's behind these steps?
15. Hi Diana, how did you create that JSON from that example? Was that from Figma dev mode or from somewhere else?

### Process & Documentation (5 questions)
16. Can you show more how you parse documentation to .md?
17. We have our design documentation on Supernova. We tried to convert it to markdown. But we have some use case pictures as well. How do you feed these pictures to AI with markdown?
18. How has your documentation process changed after adopting this MCP workflow? How do you keep it up to date?
19. How often are you ingesting, reindexing your DS documentation?
20. When you say "md" files do you mean just general md files or skills md files (i.e. Claude skills)?

### Skills vs MCP (3 questions)
21. Have you guys considered to use skills instead of MCP?
22. My company has set a rule where MCPs have to be part of a registry and don't really have access to them. Would you recommend skills or CLIs as an alternative?
23. What is this code UI we're seeing in the demo? How can designers know where each chunk of AI-output data should live? Are devs helping with this?

### Enterprise & Buy-in (3 questions)
24. **[Shape highlight]** When you started these experiments, how did you manage buy-in by the business to allow for your time spent on this exploration work? What would you recommend teams that want to move forward with AI readiness do to get this important work going?
25. How big was your team that was setting all of this up?
26. How long did it take you to set everything up, to reach this point of having metrics?

### Technical (4 questions)
27. Did RAG vector database really make any difference?
28. What's semantic chunker?
29. You showed a vector database. Do we need that or a structured file approach is fine? If we need it, how to create one?
30. How did you automate measurement of output quality (LLM accuracy) of each of MCP setups?

### Starting Fresh (2 questions)
31. If you were to re-build this now, would you do anything differently?
32. Given how much you learned throughout this journey and how much tools are changing, how would you start from the ground up knowing what you know now?

### Other (3 questions)
33. I'm not seeing any speakers at the conference using Zeroheight's MCP. Does this mean ZH documentation is not the right approach for connecting a design system to AI?
34. How you communicate infractions with folks?
35. Can you share what the prototyping looked like?

### Loose Q&A (outside section)
36. I see the benefit of using Variables (VV) to understand how everything is connected across collections. But if you're starting with a kit like Material 3 or another design system, would you still recommend using VV? *(likely from previous talk overflow)*

## Discovery ↔ Delivery Position
Pure **delivery infrastructure research**. Optimising the encoding of N, not the content of N. Slots at #4-5 in Lincoln's relevance ranking. Strong outreach target — 5 talks on this topic, empirical data, Intent-Driven Context overlap.
