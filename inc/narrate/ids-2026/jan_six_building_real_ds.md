---
name: Jan Six — Building real design systems with agents
description: IDS 2026 Day 2 Talk 1. GitHub Principal Product Designer, Co-Creator Tokens Studio. AGENTS.md router, rules/skills/MCPs, Storybook as canvas, brand core agent, temporal context
type: reference
---

**Speaker:** Jan Six, Principal Product Designer GitHub / Co-Creator Tokens Studio
**Talk:** Building real design systems with agents
**Links:** [jansix.at](https://www.jansix.at/) | [Tokens Studio](https://tokens.studio) | [skills.sh](https://skills.sh) | [GitHub Agentics](https://github.com/githubnext/agentics) | [Figma Console MCP](https://github.com/southleft/figma-console-mcp) | [base-ui.com](https://base-ui.com) | [paper.design](https://paper.design)
**Slides:** 78 slides captured in `Jan six slides/` folder (gitignored)

## Key Points
- "Should designers code?" → reframed: designers direct agents that write code
- AI maturity levels: "Spicy Autocomplete" (L0) → "Software Factory" (L5)
- Design Systems 🤝 Humans + Agents
- "Easy to get into, hard to escape" — vibe coding trap (shadcn, Lovable, v0)
- Three failures: Codebase drift, Tribal knowledge, Missing context
- **"The invisible part of your system is bigger than the visible part. If agents can't see it, they guess."**
- Three solutions: Colocation, Naming (semantic over arbitrary), Structured docs (frontmatter, agents first humans second)
- "Specs not Handoffs" — Nathan Curtis "Components as data"
- **AGENTS.md as router** → .rules/components.md, .rules/tokens.md, .rules/docs.md
- MCPs: "Your brand becomes queryable" — 4 MCPs (Tokens, Components, Brand Rules, Icons)
- Skills: skills.sh — open agent skills directory
- Agent maturity: IDE → CLI → Cloud → Automated/scheduled
- "Going slow to go fast"
- **"A brand core agent"** — Tokens Studio MCP at centre serving all tools
- Idea → Plan → Data → React/Figma/iOS/Android (= I → N → C)
- **ONLY speaker to mention saving FUTURE context**
- "What to do next": Audit your system, Make it real, Designers should build
- Tokens Studio MCP: coming soon, not yet shipped. Brand definition in platform (beta).
- Co-creator of Tokens Studio with Marco-Christian Krenn (graph engine architect)

## Demo
- Tokens Studio Platform ("Phosphor" demo system)
- Token sets with dark theme, enable/disable toggles
- Brand definition: Company/Product, Brand Personality, Target Audience, Design Guidelines
- Multi-format export: CSS Variables, DTCG JSON, Raw JSON, Figma Variables, SCSS, React Themes, iOS, Android
- Claude Code agent: fetched brand voice + tokens in parallel → scaffolded full Storybook DS
- Result: 86 tokens, 2 themes, 6 token sets, 0 hardcoded colours
- Live Storybook landing page generated from Tokens Studio data

## Lincoln's Position vs Jan
- Jan = infrastructure breadth (sees everything from GitHub). Lincoln = methodology depth (lived the full arc).
- Jan's AGENTS.md router is what Lincoln's CLAUDE.md evolves into at scale
- Jan was ONLY speaker to mention future context — Lincoln maps this to I.md/N.md/C.md temporal structure
- Both use Claude Code, React, Storybook (now installed on Lincoln's site)
- Jan shows delivery infrastructure. Lincoln adds discovery methodology.
- Jan is humble, presents options. Lincoln is opinionated, presents a framework.
- Jan = the infrastructure. Lincoln = the methodology that uses it.
- Strongest alignment at IDS — Lincoln wants to reach out for feedback/collaboration

## Audience Q&As (35 questions from FigJam)

### Context & Documentation Structure (7 questions)
1. This documentation is suitable for agents; where should it live?
2. How do you structure a good context to give to an agent? *(asked twice)*
3. Is it better to store the component rules as md files or structured [JSON]?
4. Maybe too basic question — when you mentioned descriptive documentation vs codified documentation — can you feed AI the descriptive documentation to make codified-agent-friendly version? And are you storing those codified documents in md files?
5. Can you elaborate more on how CLI-based agents help us get out of the "everything looks the same" of vibe-coded interfaces? *(asked twice)*
6. What is the practical difference between CLI-based agents vs IDE-based agents? *(asked twice)*
7. Can you create global AI context to span across multiple projects for AI to access? How best to handle building something like this for a system of systems type setup?

### Tokens Studio & MCP (5 questions)
8. Are there currently any MCPs for Tokens Studio?
9. How do you connect Tokens Studio with Cloud or any other AI tool?
10. Token Studio MCP: already released? Is it part of the pro licence / free?
11. Is it worth it to create your own custom MCP or use third-party/open-source MCPs? *(asked twice)*
12. Creating an MCP with Cursor is complex?

### Rules, Skills & Agents (2 questions)
13. When should you use multiple rules files vs multiple skills vs multiple agents?
14. Jan, since you work at GitHub, are y'all using SDD (Spec Driven Development) for building design systems with agents?

### Storybook & Prototyping (3 questions)
15. Storybook as a playground — I love that idea, thank you! Can y[ou elaborate]?
16. What are some of the use cases in which Storybook is a more effective prototyping tool than Figma?
17. You mentioned you've got a prototype playground set up similar to Brian Lovin's Notion setup. Have you found that many people are using it? What is their main purpose for creating prototypes? Are they able to share prototypes? Have you found them more useful for comms or ever just a handoff to devs?

### Multi-Repo & Multi-Product (2 questions)
18. What if you have multiple products (across various tech stacks) in multiple repositories? What's the best way to maintain a central foundation for tokens, rules, skills, assets, brand guidelines, and context? That contradicts your advocated "colocate" approach.
19. How do we build and maintain AI-powered design systems when they must rely on stacks like ShadCN and Tailwind, and still use our own design tokens? Is the mapping between design token and CSS class the best approach?

### Agent Misalignment & Quality (3 questions)
20. When you first showed the misalignment — designer intended colour name, then it coded in hex, and agent duplicated — how do you go about those misalignments? How do you detect and fix it?
21. "Agents often struggle getting designs to look like our system." *(yellow sticky — likely Jan's own slide/quote)*
22. Have you experienced any hurdles with private registration problems for cloud agents? Our team is experimenting with cloud agents but this has been a blocker.

### Figma & Tools (3 questions)
23. Has anyone used Figma Console on Cursor and used it to change things on Figma using prompting?
24. Can we get more detail on the Phosphor demo? A page built using the brand descriptions put in the TokenStudio Platform, and using that page as the collective context for your agent. Brand voice, components etc. Is that where your "intent" also stays, for those intent-based designing use cases?
25. Do you prefer an agent to use, that works better right now?

### GitHub Culture & Hiring (3 questions)
26. How does working in this way influence how GitHub hires?
27. How have those conversations gone about changing roles at GitHub? How are teams changing? What is the impact on each role area?
28. What are the new job rubrics for designers at GitHub? If they are coding and blurring boundaries.

### Tech Stack (2 questions)
29. I see you're currently working with the React tech stack — could you share how you evaluate or position Angular within your overall front-end strategy?
30. What coding languages did you learn to begin with?

### 10 Q&A cards previously added to Room After the Talk page (cards 67-76)
Topics: colocating docs, md vs JSON, custom vs third-party MCP, rules vs skills vs agents, CLI vs IDE agents, escaping sameness, structuring context, multi-repo, job rubrics, Storybook as creative canvas

## Lincoln's Room After the Talk Answers

**Q: This documentation is suitable for agents — where should it live?**
A: Jan's answer is right: colocated with the component. One folder, one component, one set of rules. Everything the agent needs to work with that component lives next to it. But I'd make the principle explicit. Documentation that lives in a separate docs site is documentation for humans who go looking. Documentation that lives next to the code is context the agent finds automatically. The distinction isn't cosmetic — it changes what gets consumed and when. When I structure a headless DS, the rule is simple: if the agent has to navigate away to find it, it won't.

**Q: Is it better to store component rules as markdown files or structured JSON contract files?**
A: Jan said he can't answer yet — he hasn't compared them properly. I'll give you an opinionated view from experience. Markdown is better for rules and rationale. JSON is better for contracts and data. A component specification has both: the what (JSON — props, variants, token mappings, accessibility requirements) and the why (markdown — when to use it, what it replaces, how it behaves across contexts). Nathan Curtis called this "components as data" and he's right. The agent reads the JSON to build it. It reads the markdown to understand the intent. Both matter. The answer isn't markdown or JSON — it's a specification format that carries both.

**Q: Is it worth creating your own custom MCP or should you use third-party / open-source?**
A: Start with third-party MCPs to validate the workflow. The Tokens Studio MCP, when it ships, will give you brand tokens as queryable infrastructure with no build cost. Use it. If you reach a point where the off-the-shelf MCP can't express something central to your system — a custom naming convention, a proprietary component API, a domain-specific rule set — then build your own. The decision criteria is specificity: if your system has knowledge that generic tooling can't represent, encode that knowledge yourself. My [CLAUDE.md](/system/claude-md) is, in effect, a lightweight MCP — structured context the agent reads before it touches anything. That costs nothing to build and captures the things a generic tool won't know.

**Q: When should you use multiple rules files vs multiple skills vs multiple agents?**
A: Jan gave the clearest answer of the conference on this: always use multiple rules files, and let the AGENTS.md act as a router. I'd add the layer above that. Rules files govern component-level decisions. Skills govern task-level repeatable actions — scaffold this component, audit these tokens, generate this story. Agents govern context-level specialisation — the UI Designer agent that knows visual rules, the Content Strategist agent that knows voice rules. The question to ask at each level: is this a constraint, a procedure, or a perspective? Constraints belong in rules. Procedures belong in skills. Perspectives belong in agents. [The System section shows how I've structured this.](/system/agents)

**Q: What is the practical difference between CLI-based agents and IDE-based agents?**
A: Jan put it well: CLI agents can do more, and desktop tools are catching up. The practical difference right now is scope. An IDE agent sees the file you're in, the files you've opened, the project context you've loaded. A CLI agent sees the whole repository — it can run audits, refactor across files, commit changes, and iterate on the output of its own previous run. That matters for design systems work specifically. Token audits, component scaffolding, cross-file consistency checks — these need repository-wide vision. Claude Code operates at that scope. If your workflow involves touching multiple files and evaluating the output holistically, CLI is still the right environment.

**Q: How do CLI agents help us escape 'everything looks the same' from generic AI output?**
A: Generic AI output looks the same because it draws from the same training distribution — the entire internet, averaged. Your design system is the antidote. When the agent has your token file, your component contracts, your naming conventions, and your [voice rules](/system/claude-md) as context, the output space narrows dramatically. It's not generating from the average — it's generating within your constraints. Jan's architecture makes this concrete: AGENTS.md routes to your rules files, which constrain the agent's decisions before it touches a line of code. The brand becomes the prior. The result looks like you, not like every other shadcn site.

**Q: How do you structure good context to give to an agent?**
A: This is the question the whole conference was circling. Jan's architecture gives a strong answer for the delivery layer — rules files by domain, AGENTS.md as the router, docs colocated with components. I'd add the temporal dimension, which Jan touched on and nobody else did: structure context for past, present, and future. Past context is what exists — the tokens, the components, the established patterns. Present context is the task — what the agent is being asked to do right now, with what constraints. Future context is intent — the NorthStar, the direction, the decisions that haven't been encoded yet but should be. Most systems only give the agent past context. The most powerful context structures give it all three.

**Q: What if you have multiple products across various tech stacks in multiple repositories?**
A: Jan covered three viable approaches: a central MCP server that all repositories query, a spanning context folder that multiple repos reference, or a dedicated context repository that agents pull from. All three work. The choice comes down to who owns the source of truth and how it gets updated. My preference is the MCP model at scale, because it separates the knowledge layer from the implementation layer cleanly. Any agent, in any repo, in any stack, can query the brand tokens, the component contracts, the voice rules — without those rules being duplicated across repositories. The N layer lives once. Everyone draws from it.

**Q: What are the new job rubrics for designers at companies building this way?**
A: Jan said designers who prototype with AI are in higher demand at GitHub. That's a data point, not a rubric. Here's my read on the emerging rubric. The new bar isn't "can you code" — it's "can you direct a system." Can you write specifications precise enough for an agent to implement correctly? Can you evaluate the output and know when it's wrong? Can you encode intent into context files that outlast any single conversation? Those are design skills applied to a new medium. The boundary that's blurring isn't between design and engineering. It's between authorship and specification.

**Q: Storybook as a canvas for creative expression — can you elaborate?**
A: Jan's framing here is genuinely exciting. Most teams use Storybook as documentation — a catalogue of components in their permitted states. Jan is proposing something different: Storybook as the place where designers build, explore, and test new directions inside the live system. Not a handoff tool. Not a reference library. An active design surface. When Storybook is connected to a CLI agent with the full design system as context, it becomes generative. You can prompt a new component variant, have the agent scaffold it, see it render in Storybook in real time, and evaluate it against the existing system — all without leaving the design environment. That's not vibe coding. It's directed creation inside a constrained, principled system.

## Lincoln's Insights from This Talk
- "shadcn/ui is not my brand" — need to build YOUR component library from YOUR tokens
- Paper is for agents, DS for agents, humans for agents, developers for agents
- Temporal context: I=Future, N=Now, C=Past — potential I.md/N.md/C.md structure
- Storybook set up on Lincoln's portfolio as a result of this talk
- Jan is the person to align with for feedback and potential collaboration
