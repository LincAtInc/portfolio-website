---
name: Cristian Morales Achiardi — Full Architecture (FigJam board + IDS talk)
description: IDS 2026 Talk + FigJam board. 4-layer agentic DS architecture, .toon format, ARC protocol benchmark, 8-part article series, AI-readiness maturity model, open-source Claude skills
type: reference
---

**Speaker:** Cristian Morales Achiardi, Design Engineer, Chile (Independent)
**Talk:** Encoding governance on agentic design systems
**Links:** [Portfolio](https://giorris.dev) | [Medium Series](https://medium.com/@crmorales.achiardi/list/agentic-design-systems-25eb67b1201a) | [FigJam Board](https://www.figma.com/board/CCXsYLObB1ksjbsY25aIwo/Agentic-Design-System)
**Also speaking at:** Nerdearla Chile 2026 (April 18)

## Bio
Design Engineer from Chile. 10+ years at intersection of design and code. Featured in Design Systems Collective. 1K+ installations of open-source Claude skills. Multiple Figma plugins published. "I use AI to ship functional prototypes that validate logic from day one. No translation gaps, no interpretation errors."

## Four-Layer Architecture

### 1. Orchestration Layer
- **Instructions**: The methodology that integrates skills and rules. When to load the codebase index. How to approach different types of queries. What artifacts to produce.
- **Rules** (.mdc): Passive constraints that load based on tasks. Metadata schema. Atomic design hierarchy. Deep tracing methodology. Project-specific — codify the system's decisions.
- **Skills** (SKILL.md): Executable capabilities for specific operations. Reusable across projects.

### 2. Indexing Layer: Mapping Relationships
**Skill:** `codebase-index v1.2.0`
- Auto-generates relationship and dependency maps for any component-based codebase
- Supports: React, Vue, Svelte, Astro, Next.js, Angular, Solid
- Auto-detects framework
- Generates `.toon` files:
  - `index.toon` — design system index, maps everything
  - `component-usage.toon` — relationships between components
  - `design-tokens.toon` — relationships between components and tokens
- Also generates JSON format

### 3. Intent Layer: Component Metadata
**Skill:** `ai-component-metadata v1.0.0`
- Generates AI-ready metadata for DS components
- Enables intelligent UI generation
- Analyzes component structure → generates structured metadata
- References for: integration, nested composition (traversal strategies, inheritance, context propagation), testing

### 4. Tokenization Layer: Values and Definitions
**Skill:** `token-auditor v2.1.0`
- Audits CSS modules for hardcoded values and design decision violations
- "Goes beyond find-and-replace — validates tokens are used with intent"
- Validates: visual hierarchy, typography composites, elevation scale, semantic colour model
- Token system follows W3C spec
- Style Dictionary exports to platform-specific formats
- Enforces design decisions from explicit rules
- Syncs to Figma Variables

### Additional Skills
- `scaffold-component v1.1.0` — Scaffolds new DS component with all required files: TSX (CVA + clsx), CSS module (token-based), metadata, barrel exports, main index registration
- `docs-generator v1.0.0` — Generates Astro documentation pages from component metadata and TypeScript interfaces. "Codebase as the source of truth for documentation."

### Component File Convention
Each component generates:
- `{ComponentName}.tsx` — React component logic
- `{ComponentName}.module.css` — Token-based CSS module
- `{ComponentName}.metadata.ts` — Full AI-ready metadata (for docs)
- `{ComponentName}.test.tsx` — Unit tests
- `index.ts` — Barrel exports

## .toon Format
Cristian's custom format for codebase indexing files. Tested by Diana Wolosin in her benchmark: ~85% LLM accuracy, ~20,000 tokens per query. Better than .md and .mdx, but lower than .json (93%, 5,000 tokens). The format is the output of his `codebase-index` skill.

## ARC Protocol Benchmark

**"Design systems as compilers: ARC architecture trial"**
Experiment: Dec 24-27, 2025. Repository: astro-giorris (Astro portfolio). Model: Claude Sonnet 4.5. 11 trials (5 control + 6 agentic DS).

### Test Protocol
4 identical questions asked in sequence:
- Q1: "How many components do we have?" → Audit phase
- Q2: "List all components used on index.astro" → Report phase
- Q3: "List all atoms on that page" → Compose phase (filter by category)
- Q4: "How many components are used on other pages?" → Compose phase (traverse relationships)

### Results

| Metric | Without Infrastructure | With Infrastructure | Difference |
|---|---|---|---|
| Accuracy | 65% | 100% | +54% |
| Speed | 4:26 | 1:52 | 58% faster |
| Component Discovery | 77% complete | 100% complete | Found 13 more |
| Consistency | 26.5% variance | 0.04% variance | 99.9% more reliable |
| False Negatives | 60% error rate | 0% | Eliminated |
| Token Costs | 27,211 | 28,166 | +3.5% (comparable) |

### Quality Scores

| Trial Group | Completeness | Accuracy | Efficiency | Overall Quality |
|---|---|---|---|---|
| Control (median) | 77% | 69% | 44% | 63% |
| Agentic (optimised) | 100% | 100% | 105% | 102% |

**Key quote:** "CLAUDE.md protocols aren't overhead — they're the mechanism that converts token spend from exploration into analysis."

**Key finding:** "You can build production-ready AI infrastructure that works under real conditions (session pollution, sequential queries, accumulated context), delivers predictable performance (0.04% variance), eliminates critical errors (0% false negatives vs 60%), and costs the same (28K vs 27K tokens, but radically better outcomes)."

## AI-Readiness Maturity Model (5 Levels)

1. **Libraries** — Components exist. Tokens exist. Structure inconsistent. AI-readiness: minimal. Heavy human correction.
2. **Standardised** — Clear naming. Logical token hierarchy. Documented. AI-readiness: foundational. Designers benefit first.
3. **Governed** — Defined ownership. Contribution model. Versioning. Decision rationale captured. AI-readiness: structured. More reliable handoffs.
4. **Operational** — Deterministic tokens. Explicit states/behaviours. Machine-readable docs. API-like access. AI-readiness: high. AI can generate, refactor, validate against real system.
5. **Agentic Infrastructure** — Governance logic invocable. Workflows observable. Toolchains integrated. AI-readiness: advanced. AI participates as constrained collaborator.

**"Human maturity enables adoption. AI-readiness tests structural precision. A system can feel mature when everything is manual. It becomes stress-tested when AI enters the loop."**

## Published Article Series (8 parts, Nov 2025 — Mar 2026)

| # | Date | Title | Subtitle |
|---|---|---|---|
| 1 | Nov 18, 2025 | Building an AI-Ready Design System | How I accidentally created a RAG pipeline for design systems |
| 2 | Jan 2, 2026 | Towards an Agentic Design System | When does AI stop consuming your DS and start governing it? |
| 3 | Jan 9, 2026 | Design System Documentation as Structured Metadata | Structured data that AI agents can query |
| 4 | Jan 14, 2026 | Mapping Your Design System for AI Agents | Without a map, AI explores. With a map, AI navigates. Determinism. |
| 5 | Jan 21, 2026 | Agent Orchestration for Design Systems | Strategies, context and tools for agentic workflows |
| 6 | Feb 20, 2026 | Encoding Governance on Agentic Design Systems | Encode, enforce, and guarantee design decisions at scale |
| 7 | Mar 7, 2026 | The Human Layer in Agentic Design Systems | Ownership, accountability, why governance starts with the person |
| 8 | Mar 11, 2026 | What Building Agentic Systems Taught Me | AI-fluency will reshape team structures |

Labels on articles progression: "Experimental" (Parts 1-6) → "Production" (Parts 7-8)

## Right Panel: "Agentic means the system can audit, report, and heal itself"
- Design system as compiler: ARC architecture
- Reports: token violations by component
- "Infrastructure enables automated reports that cost pennies"
- "Encoded design decisions enable agentic self-healing suggestions"

## Lincoln's Position vs Cristian

### Similarities
- Both solo practitioners building agentic DS infrastructure
- Both use Claude Code as primary tool
- Both published methodology (Lincoln: portfolio site + thoughts pages, Cristian: 8-part Medium series)
- Both proved CLAUDE.md/context files are the key differentiator (Cristian: +54% accuracy, Lincoln: persistent N)
- Both emphasise human governance over automation

### Differences
- **Cristian = delivery infrastructure depth.** 4 layers, 5 skills, .toon format, benchmark data. He built the tools.
- **Lincoln = discovery methodology depth.** INC framework, NorthStar Prototyping, narrative layer. He built the approach.
- Cristian's work starts AFTER the design system exists (auditing, indexing, metadata generation)
- Lincoln's work starts BEFORE (discovery, prototyping, narrative that feeds into DS creation)
- Cristian's "human layer" (Part 7) maps to Lincoln's L in LINC — both asking "who guides the system?"

### His 4 layers map to N
- Tokenization = N as data (values, definitions)
- Intent = N as semantics (when and how to use)
- Indexing = N as relationships (what connects to what)
- Orchestration = N as methodology (how to approach queries)

All four are aspects of the Narrative layer. Cristian decomposed N into its structural components.

### Collaboration potential
High. His tools (codebase-index, token-auditor, ai-component-metadata) could run on Lincoln's portfolio. His .toon format could index Lincoln's components. Lincoln's INC framework could provide the discovery methodology his 8-part series doesn't cover.

## Lincoln's Room After the Talk Answers

**Q: Which is the value for a designer to know all the technical things of the process you have shown?**
A: Cristian's answer is right: ownership. When you understand the technical layer, you can own the quality of what gets implemented — not just what gets designed. But I'd go further. The value isn't knowing how to write JavaScript. It's knowing how the system works well enough to encode your decisions into it. When I write a [CLAUDE.md](/system/claude-md), I'm not writing code — I'm encoding intent so precisely that the system produces the right code without me touching it. That's a design skill, not a development skill. The designer who can do that has removed the interpretation gap entirely.

**Q: Are you using multi-agents with skills?**
A: Cristian doesn't — plan mode and subagents are enough for his scale, and that's a sensible call. I do. I run named agents with persistent memory committed to git: UI Designer, UX Researcher, Frontend Developer, Content Strategist. Each reads the same CLAUDE.md but carries its own specialisation and memory of past decisions. The difference matters at scale. Cristian acknowledged "a lot of stuff lives on my head" — that's the problem named agents with written memory solve. The knowledge doesn't leave with the person. It lives in the agent definition, in git, readable by anyone — or any agent — who inherits the work. The [System section shows how I've structured this](/system/agents).

**Q: What tools can you recommend to fix a legacy design system?**
A: Cristian's approach is the right one: build a skill that knows what correct looks like, then run it as a linter across the legacy codebase. His scaffold-component skill generates components against current standards. His token-auditor detects drift. Both work without a full rewrite. I'd add one thing: before you build the linter, write the CLAUDE.md. Define correct. Not as a document nobody reads — as structured context an agent can query. The linter is only as good as the definition of correctness it enforces. Start there. Build the audit skill second. The [headless DS architecture](/headless-ds) explains how I structure that definition layer.

**Q: Do you think it's important to learn React?**
A: Cristian put it perfectly: he can't write a proper JavaScript function and built agentic infrastructure anyway. That's the honest answer, and I respect it. My answer is different because my context is different. Deep React experience is 30% of my identity — not because it made me a better designer, but because it made me a better architect. When I specify a component contract, I know what I'm asking the agent to build. When the agent gets it wrong, I know why. But here's the reframe: you don't need to learn React to direct an agent that writes React. You need to understand the system well enough to know when the output is wrong. The bar isn't "can you write it." It's "can you evaluate it."

**Q: How do you see the future of AI in automating components and workflows? Will it ever be fully automated?**
A: Not fully automated. Not soon. Cristian is honest about this: he refactors his rules every few weeks for overlaps and contradictions, his pipeline is around 80k tokens, and whatever he said at the conference might be wrong by next week. That's not a weakness — it's the discipline being young. The future isn't a pipeline where nobody makes decisions. It's a pipeline where the mechanical decisions are automated and the consequential ones are human. "Should this component exist at all?" is a human question. "Does it use the right token?" is an automated one. Sustainability beats velocity every time.

**Q: Many design teams have been reduced in size. What's your take on teams shrinking to mainly lead and principal positions?**
A: Cristian's answer is careful and right: the bottleneck moves, and going faster indefinitely is not sustainable. I'd add what he left implicit. The team shrinks in headcount and expands in capability — but only if the N layer is robust. A small team carrying large-team knowledge is only viable if that knowledge is externalised. When it lives in someone's head, it leaves with them. When it lives in CLAUDE.md, in agent definitions, in version-controlled rules, it's institutional. Cristian admitted "a lot lives on my head." That's the vulnerability. The answer isn't to resist shrinking — it's to encode the knowledge so thoroughly that the work doesn't depend on any one person. That's [The Middleware Problem](/thoughts/the-middleware-problem).

**Q: Have you done theming tokens for different brands?**
A: Cristian hasn't — and he said so directly, which I respect. I have. Fun Lab at Dentsu/Merkle was exactly this: multi-brand token architecture across a portfolio of clients, with Chakra UI as the component layer. The pattern: semantic tokens reference primitive tokens, themes swap the primitives, components stay untouched. One button component. Many brand expressions of it. The agent reads the active theme and generates against those values. What makes multi-brand hard isn't the token architecture — it's the governance. Who decides when Brand A's "primary" diverges from Brand B's? That decision needs to be encoded, not left to interpretation.

**Q: Any tips on managing content with a design system?**
A: This question came up and nobody answered it. Treat content as a first-class token. Voice guidelines, microcopy rules, error message conventions, heading hierarchies — these belong in the same context layer as your colour tokens and spacing scale. Most design systems put content guidelines in a PDF nobody reads. Fold them into the machine-readable layer instead. Write rules the agent can consume: "button labels are verbs," "error messages name the field and tell the user what to do," "headings use sentence case." The agent reads those rules exactly as it reads spacing tokens. Content governance scales the same way visual governance does — through encoded constraints, not style guides. My [CLAUDE.md](/system/claude-md) carries voice as structured rules. Every word on this site was generated against them.

## Discovery ↔ Delivery Position
Spans theory (governance, maturity model) and delivery practice (skills, benchmarks). His Part 7 "Human Layer" touches discovery but from governance perspective, not prototyping. Strongest theoretical alignment with Lincoln's framework of any IDS speaker.
