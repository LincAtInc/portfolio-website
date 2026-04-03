---
name: Yesenia Perez-Cruz — Product Primitives (IDS 2026)
description: Talk summary and audience questions from Yesenia's IDS 2026 talk on product primitives, AI-adapted UI, and the Miro Aura agent. 50+ audience questions captured.
type: reference
---

## Yesenia Perez-Cruz — "Product Primitives: The New Material of Design Systems"
**Into Design Systems 2026** | Design Systems Consultant, Expressive Design Systems
**Context:** Miro's design system and their AI agent "Aura"

## Core Thesis
- UI components (buttons, inputs, dropdowns) fade to the background as AI adapts interfaces
- Product primitives = the objects users create and manipulate (not the UI components)
- Design systems should document these objects, not just components
- AI adapts the surface/UI based on user intent — the object stays the same
- Intent signals determine which surface to show

## Aura (Miro's AI Agent)
- Internal AI agent for Miro's design system
- Uses MCP skills, context files, personas
- Connected to Figma, Storybook, doc site
- Can update documentation, log component changes, generate designs
- Powered by Claude
- Skills include: searchIcons, searchTokens, component generation
- Descriptions added to Figma component descriptions → parsed to JSON via custom plugin

## Key Answer
**Metrics for AI-dominated DS world:** Measure how many tokens it takes to query something WITHOUT documentation, then measure WITH documentation. Tokens = money. Save tokens at scale = huge company value.

## Audience Questions (Full Set)

### Metrics & Measurement
- Which metrics do you suggest for measuring success in the AI dominated world for design systems?
- How do you get metrics in your DS? How can you measure the impact of improvements?

### AI Reliability & Testing
- Question to everyone who has implemented MCP/Skills, .mds, Rules and personas — Were you able to achieve 100% expected outcome after implementing all of these?
- Given Aura's probabilistic nature, how have you structured/automated testing for use cases?
- How were you able to trace back those hallucinations done by AI?
- Have you experimented with ways to automate skill performance auditing? Do you optimise for one model?

### Team Impact
- Many design teams have been reduced in size as a result of AI adoption. What is your take on teams shrinking to mainly lead/principal positions? (ALSO ASKED IN NATE'S TALK)
- UX teams that are shipping code to production, what do your team compositions look like?
- How much of your time did it take? Full time or side project?

### Aura Implementation
- How did you onboard product teams to use Aura?
- What AI tool is powering Aura?
- What parts of Miro is Aura connected to? What does she have access to?
- Is Aura running as an automated agent or triggered manually?
- Did you consider multiplying Aura depending on context (DS, brand/marketing)?
- Can you elaborate on how you created the Aura MCP via Skills?
- Did you make a guide for the MCP skill creation?
- What is the best approach for creating skills (searchIcons, searchTokens)?

### Figma & MCP
- How do you import descriptions/metadata from Figma onto JSON consumed by MCP? How do they stay in sync?
- Do you convert generated components into Figma design?
- Have you been able to generate designs that strictly use existing DS components, respect Auto Layout, and never detach instances?
- Can this work in a project file with connected library, or only within the library file itself?
- How can we prompt Figma canvas with real DS consistency?
- Isn't it dangerous to give AI access to Figma console?

### Context & Documentation
- Do you add extra context in Storybook? How does Claude access it?
- Did you feed it all documentation or only selected parts? How did you decide what to include?
- What steps did you take upfront to give enough context?
- Did you have Aura write the token descriptions? How verbose was too verbose?
- How did you write out those "usage" rules for fonts?
- Did you use Claude to add descriptions into JSON files? How do you maintain this?

### Design Tools
- Do you still use a design tool like Figma or Sketch?
- Which tool do you use with Aura?
- Have you used different themes in the DS?
- Is a UI Kit maintained alongside codified libraries? What design canvas artefacts do you maintain?
- Did you create all the illustrations/animations with AI?

### Onboarding & Adoption
- Would it be overkill to create an AI agent that answers questions to new joiners about design systems?
- Do you recommend any online training or resources to learn how to build something similar?
- Is there public documentation on the road to get there?

### Legacy & Migration
- How do you align with engineering using MUI? MUI is very opinionated and limits us...
- How about those of us restricted to tools like GitHub Copilot and VS Code?
- Is it possible to create Skills if leveraging Copilot?

### Component Lifecycle
- After you deliver a component, how do you check the component developed?
- What is the testing process after asking Aura to log component updates?

### Misc
- Would like to know if AI-assisted DS can create dark version of Miro board?
- What's the difference between using Figma MCP with Miro's DS Figma files vs Miro MCP and Figma MCP together?
- You mentioned Aura will watch a few talks — summaries into skills or fine-tuning?
- For icon metadata, did someone write this for every icon or did an agent with computer vision do that?
- Where did you add icon descriptions exactly?

## Questions Lincoln Can Directly Answer

### Strong matches:
- **Team shrinking** — One-person innovation engine thesis. Positions transform, not vanish.
- **UX teams shipping code** — Lincoln IS this: 50/30/20 Designer/Developer/PO
- **100% expected outcome?** — Honest answer: no. But the context quality determines the output quality. CLAUDE.md is the mechanism for getting close.
- **Onboarding agent for new joiners** — Not overkill. CLAUDE.md already does this. Lincoln's AI avatar TODO is exactly this.
- **Did you feed all docs or selected parts?** — CLAUDE.md is curated context, not a doc dump. Quality > quantity.
- **Multiplying agents by context** — Lincoln already does this: UI Designer, FED Dev, UX Researcher, Content Strategist agents.
- **Public documentation on how to get there** — Lincoln's /system section IS this documentation.
- **MUI alignment struggle** — "Approved in Theory" in real-time. Show don't tell = NorthStar Prototyping.
- **Metrics** — Token cost measurement is strong. Also: time-to-first-component, brand consistency across outputs.
- **Testing/hallucinations** — Design system tokens as guardrails. Agent can't invent variants that don't exist in the system.

- **"How do you create the .md?"** — CLAUDE.md IS the answer, structure is public
- **"Tips for AI in highly regulated environments?"** — Lincoln's healthcare experience (Helix, PenCS) is directly relevant
- **"Why generate UI instead of AI doing the task?"** — Because humans need to see, understand, and trust. The UI is the governance layer.
- **"Don't we lose usability when UI shifts?"** — Design system tokens as guardrails. The system constrains variation.
- **"How do you deal with unclear intent?"** — The spectrum model: directive UI for unclear, adaptive for clear. Both coexist.

### Miro-specific (less relevant):
- Dark mode Miro board
- Miro MCP vs Figma MCP
- Aura watching talks
- Miro illustrations/animations

### Lincoln's Room After the Talk Answers

**Q: Were you able to achieve 100% expected outcome after implementing MCP, Skills, .mds, Rules and personas?**
A: No. And anyone who says yes is lying. But that's the wrong metric. The question is: does the context quality improve the output quality? Yes, dramatically. A well-structured CLAUDE.md gets you to 85-90% on the first pass. The remaining 10-15% is human judgement — which is exactly the part you should be doing. 100% automation isn't the goal. Removing the mechanical work so you can focus on the creative work is.

**Q: Which metrics do you suggest for measuring success in the AI-dominated world for design systems?**
A: Yesenia's answer was sharp: measure how many tokens it takes to query something without documentation, then with documentation. Tokens = money. I'd add two more: **time-to-first-component** (how fast can a new engineer ship a compliant component?) and **brand consistency across outputs** (does the social post look like it came from the same brand as the product UI?). The second one is what [Beyond the Screen](/thoughts/beyond-ui) is about.

**Q: Would it be overkill to create an AI agent that answers questions to new joiners about design systems?**
A: The opposite of overkill — it's the minimum viable use case. CLAUDE.md already does this. A new joiner reads the context file and understands the brand, the tokens, the methodology, the voice. An agent trained on that context can answer "which button variant do I use here?" without bothering anyone on the team. This is on my roadmap too — an AI avatar on my portfolio that talks to visitors about my work, trained on the same CLAUDE.md that built the site.

**Q: Did you feed it all documentation or only selected parts? How did you decide what to include?**
A: Selected parts. Always. A context dump is worse than no context — it drowns the signal in noise. CLAUDE.md is curated: brand positioning, design tokens, writing voice, key decisions, methodology. Not every component prop. Not every colour value. The system needs to know *why* you chose blue, not just that blue is #2563eb. Quality of context beats quantity every time.

**Q: Did you consider multiplying your agent depending on context — design system, brand, marketing?**
A: Already done. I run four specialised agents: UI Designer (visual decisions), Frontend Developer (React/TypeScript implementation), UX Researcher (domain analysis, content), and Content Strategist (thought leadership, LinkedIn, conference abstracts). Plus a Stakeholder Simulator that role-plays executive conversations. Same CLAUDE.md, different agent definitions. The [System section shows all of them](/system/agents).

**Q: Is there public documentation on the road to get there — from skills, context, MCPs to component generation?**
A: My [System section](/system) is exactly this. The CLAUDE.md is public. The agent definitions are public. The build process is documented. The site IS the documentation — it demonstrates the methodology it describes. That's the whole point of proof-of-practice.

**Q: How do you align with engineering when they use MUI and don't want to move away from it?**
A: This is the [Approved in Theory](/thoughts/approved-in-theory) problem in real-time. The answer: stop asking for a migration. Start showing what's possible alongside MUI. Build a NorthStar prototype that makes the current state look dated. "Show and not just tell" — as one audience member put it. The prototype argues better than any proposal deck. And if you truly can't replace MUI, the agentic layer sits on top — CLAUDE.md doesn't care what component library is underneath.

**Q: UX teams that are shipping code to production — what do your team compositions look like?**
A: Mine looks like this: one person. 50% Designer, 30% Developer, 20% Product Owner. Four AI agents. One design system. The composition isn't about headcount anymore — it's about capability per person multiplied by the quality of the system they're directing. A senior architect with agentic tooling ships more than a team of five without it.

**Q: How do you create the .md context files?**
A: You don't need to learn markdown. You need to know *what to say*. The syntax is trivial — headings, bullets, bold. That's 90% of it. The hard part is knowing what context the agent needs, and that comes from doing the work. You don't write the .md in one sitting. You build it through practice. Start with positioning, tokens, and voice. Then every time the agent gets something wrong, that's a missing context entry. The .md is a living document that gets sharper with every session. This site is the proof — CLAUDE.md built this, and this built CLAUDE.md.

**Q: Any tips for introducing AI into highly regulated environments?**
A: I've worked in heavily regulated environments — healthcare (Helix, PenCS), government, enterprise. The reality: you can't use half the software you want, let alone AI. And as teams get smaller, you have fewer people to fight procurement battles. The answer: **use everything in discovery**. The NorthStar prototype doesn't touch production data, doesn't ship to users, doesn't need security clearance. It's an idea expressed in the fastest way possible. **Delivery is the regulated environment** — and that's fine. The NorthStar already told you what to build. Discovery stays fast and unconstrained. Delivery stays safe and compliant.

**Q: Why let AI generate a UI for the user instead of AI doing the task directly?**
A: Because AI needs direction and approval. It doesn't act autonomously — it proposes, the human confirms. That requires a surface to communicate through. But here's the thing: that surface doesn't have to be buttons and forms. It could be voice, visual, conversational — any medium where the human can understand what the AI is proposing and say yes or no. The UI becomes a **communication layer between human and AI**, not a control panel. The design system still governs it — consistency, brand, accessibility — but the form factor shifts. The UI isn't going away. It's changing form.

**Q: Don't we lose usability when the end user experience subtly shifts each time it's regenerated?**
A: Users adapt. We already accept UI changes — app updates, A/B tests, responsive layouts. AI-generated surfaces are the same muscle, just faster. And with MCP, the AI is surfacing screens from apps you already know — it's routing you there by intent instead of navigation. You're not learning a new UI, you're being shown parts of the existing one you didn't know existed. The key: **the escape hatch**. Close the generated surface, return to the known state. No stress. The design system documents both — the adaptive surfaces and the stable base state you return to. That's the safety net.

**Q: How do you deal with users who don't have clear intent?**
A: Get clear. More input — understand the domain, its users, their context, their current use of the software. Unclear intent isn't a failure of the system, it's insufficient context. And it's not a permanent state — it's per-user, per-moment. The same doctor might have clear intent for a chronic disease review but unclear intent for an unfamiliar condition. When intent is unclear, fall back to directive UI — the structured, predictable interface. When intent is clear, generate adaptive surfaces. Both coexist. The system doesn't guess — it either knows enough to adapt, or it shows you the safe default.

### Full Q&A Dump (Talk 3 — Yesenia's deck)

**Consistency & Variation:**
- How do you ensure consistency of experiences between users and session-to-session? Also for support staff if UI can vary?
- Given the context provided, did it generate consistent UI patterns, or did output vary across attempts?
- Do you turn the output into more solidified templates for consistency, or always let AI run with it?
- Don't we lose usability and expertise gains when the end user experience subtly shifts each time it's regenerated?

**Cost & Resources:**
- How are you navigating the cost element? Would this workflow become expensive vs traditional UI definition?
- AI is constantly pushing energy demand. From an energy standpoint, how much more taxing is Intent-Based UI?
- What about AI token usage/cost?

**Intent & Signals:**
- When defining signals, do we need phrase-based instructions or will AI be a better judge of user intent?
- How do you deal with users who don't have clear intent?
- I LOVE intent based UI! Will this only work after user has been using for a while (needs existing data)?
- Where is the user inputting their intent? (chatbot, input?)
- With intents, how do you ensure AI doesn't use wrong intent and generate wrong UI?

**Product Primitives Definition:**
- How do you define and maintain product primitives at scale across different teams?
- How do product primitives differ from traditional UI components?
- Should these primitives live in the design system or somewhere else?
- How do you see AI influencing how product primitives are defined or used?
- How can product primitives bridge the gap between design systems and real product workflows?

**Surfaces & Design Process:**
- Can you talk about the process of designing surfaces? Deciding which variations you need and maintaining them?
- How do you plan which AI composed surfaces need to be designed and defined?
- How do you see components being enhanced to account for product primitives or surfaces?
- Having primitives built, how do you take them to the "surface" level? Practical tips?

**Implementation & Tools:**
- What tools are required for this approach? What role does each play?
- What does a design system need to have in place? Tokens in code? Primitive tags?
- How do you create the .md? Can you give us a structure?
- Did you also get help from AI on defining signals, rules and surfaces?
- Is there a way to incrementally build out and release different components/surfaces to test and identify gaps?
- What does the updated design system structure look like with this new framework?
- Have you tested this live in your product?
- Vercel has an AI SDK for generative UIs: https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces

**Philosophical:**
- Why let AI generate a UI for the user instead of AI doing the task directly?
- If generative UI is preferred, wouldn't users prefer their own personal UI? Or one DS to rule them all?
- How do you see future of products evolving if users can contextually build own experiences?
- Could you imagine users sharing "intents" and output in a library/marketplace?
- These feel like quality of life improvements but are they necessarily AI inherently?
- What about Google Stitch?

**Adoption & Governance:**
- Did you experience adoption challenges with domain teams?
- How to deal with stakeholders in big companies re: who owns product primitives?
- Any tips on introducing AI into highly regulated environments?
- How does metric/instrumentation work to get quantitative insights on adaptive interfaces?
- This seems risky if it generates unintended outputs. How to mitigate risk?
- How do you ensure varying product primitives are accessible?

**Answered:**
- Q: If generative UI preferred, personal UI or one DS to rule them all? A: Yesenia has been thinking about composable Figma — construct your own tooling for the specific DS problem you're working on. Talk focused on "smarter defaults" but lots of opportunity for personalisation.
