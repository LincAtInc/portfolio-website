---
name: Jesse Gardner — Context > Probability
description: IDS 2026 Talk 7. NYS Design System, custom MCP server, 85% token savings, curators not innovators, DS as product and AI infrastructure
type: reference
---

**Speaker:** Jesse Gardner, Director User Research, New York State
**Talk:** Context > Probability: Design systems as AI infrastructure
**Links:** [designsystem.ny.gov](https://designsystem.ny.gov) | [GitHub](https://github.com/ITS-HCD/nysds) | [Figma Community](https://www.figma.com/community/file/1574803287825265318) | [LinkedIn](https://www.linkedin.com/in/plasticmind/)

## Key Points
- NYS Design System serves dozens of state agencies
- Built custom MCP server (TypeScript): list_components, get_component_docs, find_components, get_design_tokens, validate_component_api, setup_framework, get_usage_guide
- "The Pattern Engine" loop: Design Guidance → DS MCP → AI Generated Output → Review and Refine
- 85% token cost savings with MCP vs raw JSON (50-80k tokens → 800-3k via MCP)
- "Your design system only works as AI infrastructure if both sides understand what the other is doing"
- "Curators, not innovators" — team philosophy
- "A design system is a product"
- AI accelerates both design debt AND tech debt without a system
- Converted 5-page PDF into accessible web application using DS MCP
- No CLAUDE.md — context lives in TypeScript MCP server + nysds_mode prompt
- Team: 2 FEDs, 2 UX designers, team lead, a11y specialist, branding designer (part-time)
- Has a "design prototyping library" — pre-validated patterns (compositions above components)
- A11y testing: Microsoft A11y Insights (automated), Axe Auditor (manual), NVDA (screen reader) — rarely uses AI for a11y
- Working on shared repo with agents, skills, CLAUDE.md for whole team — TBD
- Referenced Dave Rupert's Custom Elements Manifest article
- Referenced Utopia.fyi for fluid responsive tokens
- Referenced designsystem.digital.gov (US federal DS)

## Lincoln's Position vs Jesse
- Strongest alignment at IDS 2026 — almost identical thesis
- Jesse built DELIVERY infrastructure (MCP with validation). Lincoln built DISCOVERY infrastructure (CLAUDE.md with design decisions)
- Complementary: Jesse has the WHAT (component APIs, token values, validation). Lincoln has the WHY (brand, voice, methodology)
- Jesse's MCP is what Lincoln's CLAUDE.md grows up to become in delivery
- CLAUDE.md is what Jesse's MCP needs underneath — validates correctness but not intent
- Both small teams doing big work. Both regulated environments (government / healthcare)
- "Context > Probability" = "Narrate > Probability" in INC terms
- Jesse's "curators, not innovators" maps to Lincoln's "everyone contributes to N"
- Jesse's prototyping library = compositions/surfaces layer (above components, below full pages)

## Slides (5 slides captured)
- The Pattern Engine (loop diagram)
- Token cost savings table (~85%)
- "Both sides must understand" thesis statement
- Architecture diagram: Design (Figma MCP + Figma library) ↔ Claude Code/IDE ↔ Engineering (Custom MCP + Code library)
- NYS DS MCP flow: Prompt → IDE → Claude Code → MCP → returns structural context

## Key Audience Questions & Answers
- 10 Q&A cards added to Room After the Talk page (cards 49-58)
- Topics: DS as AI context, machine-readability, Figma MCP vs custom MCP, content management, regulated environments, quality assurance, source sync, team shrinking

## Lincoln's Room After the Talk Answers

**Q: How can design systems act as context for AI, not just UI?**
A: Jesse's framing says it directly: context over probability. The design system isn't a library of buttons — it's a body of knowledge. Component names, token values, accessibility rules, usage guidelines, anti-patterns. When that knowledge is structured so an AI can query it, the system stops being a resource you consult and becomes infrastructure the agent runs on. My [CLAUDE.md](/system/claude-md) does this through prose and markdown. Jesse's MCP server does it through typed tool definitions. Different form, same function: giving the AI the WHY so it doesn't have to guess.

**Q: What does it mean in practice for a design system to be AI infrastructure?**
A: It means the system has two audiences: humans and machines. Most design systems are built for one. The human audience needs Storybook, docs sites, Figma libraries — all good. The machine audience needs structured, queryable, predictable interfaces. Jesse built validate_component_api for exactly this reason — so the AI can check its own output against the system's rules before it ships. That's governance automated. When I talk about [agentic design systems](/headless-ds), this is precisely what I mean: a system that enforces itself, not one that relies on human review to catch every deviation.

**Q: What did it take to get your design system machine-readable?**
A: Jesse went the TypeScript MCP route — tool definitions with structured inputs and outputs, served to Claude Code. I went the CLAUDE.md route — prose, structured headings, decisions captured in plain language. Both work, and they're complementary not competing. The real cost isn't technical — it's curatorial. You have to decide what the system knows. Jesse's team spent real time encoding component usage rules, accessibility notes, and token semantics. I spent time encoding brand voice, design decisions, and methodology. Machine-readability isn't a format — it's a commitment to making your implicit knowledge explicit. That's the hard part.

**Q: Can you explain the difference between using Figma MCP with internal design files versus building a custom MCP server?**
A: Jesse answered this well: Figma MCP pulls structured component data from a designer's Figma file — properties, variants, auto-layout. A custom MCP server lets AI build anything that follows your design system's rules, with no Figma file required. I'd add a third dimension: CLAUDE.md sits between both. Figma MCP knows the visual specification. Custom MCP validates the code. CLAUDE.md explains the intent — why this component exists, what problem it solves, when not to use it. You need all three for a complete picture.

**Q: How much trial and error did it take to feel confident in your MCP server setup?**
A: Jesse said roughly a month, with ongoing refinement — and that sounds right. Confidence in this kind of infrastructure isn't a threshold you cross, it's a gradient you climb. The first week you're fixing tool schemas. The second week you're tuning which context gets passed. A month in you trust the core loop. Six months in you're refining edge cases. My experience with CLAUDE.md was identical — the first version was 20 lines and got things wrong constantly. The current version is hundreds of lines and gets things right most of the time. The process doesn't end. It compounds.

**Q: Any tips on managing content with a design system?**
A: Treat content as a first-class token. Jesse's system encodes component documentation alongside component APIs — that's content as infrastructure. Most design systems separate content guidelines into a document nobody reads. Fold it in. Write rules the AI can consume: "headings use sentence case," "error messages name the field and tell the user what to do," "button labels are verbs." The agent reads those rules exactly as it reads spacing tokens. Content governance scales the same way visual governance does — through machine-readable constraints, not style guides in a PDF.

**Q: How do you practically integrate AI tools within the constraints of a public-sector or regulated environment?**
A: Jesse served dozens of New York State agencies. I've worked in healthcare — Helix at Telstra Health, PenCS. The answer is the same in both contexts: separate discovery from delivery. In discovery — NorthStar prototyping, early exploration, stakeholder alignment — you can move fast and use the best tools available. No production data, no compliance risk. In delivery — the code that ships to real users — you're constrained, and rightly so. Jesse's validate_component_api is delivery infrastructure: it exists precisely because the output needs to be trustworthy. Build the wall between environments deliberately and you can move quickly on both sides.

**Q: How do you ensure quality for new components or patterns generated by AI?**
A: Jesse's "curators, not innovators" framing is the key. The team's job isn't to invent new patterns — it's to evaluate whether AI-generated patterns hold up against existing user research, accessibility standards, and brand guidelines. That's a quality gate, not a creative brief. In INC terms, this is N's role: the Narrate layer encodes what good looks like. The agent generates against those constraints. The human reviews for intent and edge cases, not basic compliance. Don't try to automate both — you'll get efficient outputs that miss the point.

**Q: How do you keep your sources in sync — documentation, code, design, AI instructions?**
A: Jesse said his team is working on a shared repo where the whole team can update agents, skills, and a CLAUDE.md — still TBD. That's exactly the right direction. The sync problem is a governance problem wearing a technical costume. The real question is: who owns the source of truth? In Jesse's case, the MCP server is the delivery source of truth. In mine, CLAUDE.md is the discovery source of truth. When design changes, the token file updates. When methodology changes, CLAUDE.md updates. The tooling reflects the decision — not the other way around. That's the [N layer in INC](/thoughts/the-middleware-problem).

**Q: Many design teams have been reduced due to AI. What is your take on teams shrinking to mainly lead and principal positions?**
A: Jesse has six people serving dozens of government agencies. I have one person plus agents serving this entire site. The question assumes shrinking is the problem. I think the capability expansion is the story. A six-person team that serves the scope of a sixty-person team isn't a tragedy — it's proof the infrastructure works. What gets harder is the invisible cost: when a small team carries the knowledge of a large one, the N layer has to be genuinely robust. Verbal knowledge dies when someone leaves. CLAUDE.md doesn't. The answer to team shrinking isn't to resist it — it's to build the context infrastructure so deeply that the knowledge outlasts the headcount. That's [The Middleware Problem](/thoughts/the-middleware-problem).
