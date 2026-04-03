---
name: Freya Stockman — I'm not an engineer but I ship code
description: IDS 2026 Talk 6. Designers shipping code with AI tools, DONT file, make models fight, 70-30-10 framework, Relevance AI
type: reference
---

**Speaker:** Freya Stockman, Relevance AI (she/her)
**Talk:** I'm not an engineer but I ship code — How designers can ship production code and work like an engineer
**Links shared:** [air.dev](https://air.dev/) | [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) | [JetBrains Matter](https://www.jetbrains.com/lp/matter/) | [Typeless](https://www.typeless.com/) | Augmented Designer Web App (launching soon)

## Key Points (30 slides reviewed)
- 3 milestones: Develop engineering mindset → Ship frontend code → Understand handoff
- "Text files is the bridge between" — AI reads/writes text, connects to websites, APIs, automations
- "Make the models fight" — switch between Claude, GPT, Gemini; disagreements refine plans
- "Each terminal is like a baby respawning" — must remind it, direct to MD files (Lincoln solves with CLAUDE.md auto-read)
- "Figma isn't dead" — just made new friends: Cursor, Claude Code, MD files, GitHub
- Turn Figma flows into .md files — AI comprehends text better than images
- "Test before you build" — backend must work before frontend
- "Tag your DONT file" — list of prohibitions; AI always chooses fastest route, not best practice
- "Think like a Solution Architect" — you don't have to BE one, use their frameworks
- "Ask engineers to review your work" — act like a Junior Software Engineer
- "Every design brief becomes a folder" — project context in text files for AI
- "Build in stages (bite-size chunks)" — stage-by-stage plan in .md files
- "Create /commands (a.k.a. SKILLS)" — turn workflows into automated skills
- "All code = text files in folders"
- Key takeaways: Stop prompting in chat (use files), Understand your codebase, Plan before you build

## Lincoln's Position vs Freya
- CLAUDE.md explicitly calls out: Lincoln is NOT "a designer who learned to code" — genuine hybrid
- "Ship code" ≠ "build systems" — Freya ships outputs, Lincoln builds the infrastructure
- Freya's DONT file is reactive; Lincoln's Constraints section is proactive (design decisions as boundaries)
- Lincoln's answer to "make the models fight": Claude agents are the team, other models are the opposition/critics
- Freya = the "before" picture in Lincoln's career arc. "AI lets me cross the line" vs "AI lets me erase the line"
- BUT: Lincoln empowers Freya. "Go crazy in discovery — here's the path to delivery"
- The design system is what makes individual shipping scale to organisational consistency
- "Everyone can vibe code" = Pandora's Box. Discovery expanding without N = chaos

## Key Audience Questions
- 40+ questions, "no answers provided" for most
- 18 Q&A cards added to Room After the Talk page (cards 31-48)
- Topics: consistency at scale, engineer inheritance, identity, starting without DS, UX process, accessibility, code review, double diamond, beyond prototypes, TDD/Playwright, protecting discovery, DS ownership, dev handoff, Figma's future, shared context, MD quality, cost, make the models fight

## Lincoln's Room After the Talk Answers

**Q: This is brilliant for solo work — but what happens when five designers are all shipping code independently? How do you keep it consistent?**
A: That's exactly the right question. And it's the one the talk didn't need to answer, because Freya's context is her own work. But yours isn't. The answer is a design system. Not a Figma library — a machine-readable context layer that every agent reads before it writes a single line. When five designers are each prompting their own AI, the consistency doesn't come from them. It comes from the shared system they're all referencing. CLAUDE.md, design tokens, component contracts. The agents converge on the same output because they're reading the same instructions. Without that layer, you don't have five designers shipping code. You have five separate codebases that happen to look similar on a Tuesday.

**Q: What does an engineer think when they inherit code that a designer shipped? Is that a real problem?**
A: Yes. I've been both sides of that conversation. Here's the honest version: AI-generated code from a designer without system context is often structurally fine and semantically fragile. It works. It doesn't compose. The variable names are arbitrary, the component boundaries are wrong, and the styling is inline. An engineer can use it — but they're essentially rewriting it while pretending to extend it. The fix isn't "designers should code better." The fix is a design system that constrains what the AI produces. When the agent is reading a token file and a component API, it generates code that an engineer recognises. Same naming conventions. Same component structure. Same styling approach. The design system is the shared language. Without it, you're shipping dialects.

**Q: Freya said she's 'not an engineer.' Lincoln, you say you're 50% designer / 30% developer. Does that distinction still matter?**
A: It matters, but not in the way people think. Freya's point is liberating: you don't need an engineering identity to produce engineering outputs. That's true. What she's doing in discovery — exploring, prototyping, validating ideas fast — is the exact work AI was built to amplify. Go crazy there. Ship everything. The hybrid identity matters when you cross into delivery. When your prototype needs to become a component in a living design system. When your token choices affect a production build. When your naming conventions have to match the team's existing architecture. That's not gatekeeping. That's the [INC framework](/system/claude-md) doing its job — Ideate freely, then Narrate carefully so that Create is consistent. Freya's doing brilliant Ideate work. The design system is what makes it repeatable.

**Q: What if there is no design system at the company where I'm trying to do this? Do I need one before I can start?**
A: No. Start without one. That's the point of NorthStar Prototyping. Explore first. Ship the idea. Prove the value. A prototype that works is better evidence than a proposal for a design system that doesn't exist yet. Freya's approach is exactly right for this moment — move fast, show the possibility, don't wait for infrastructure permission. But here's what I'd say to do in parallel: as you're prototyping, notice what decisions you're making repeatedly. Colour choices. Button behaviour. Type scale. Spacing. Those repeated decisions are your design system waiting to be written down. The system doesn't precede the work — it emerges from it. Start the CLAUDE.md on day one. Even if it's three lines. That's the seed. Every decision you make consciously is a constraint you won't have to re-argue tomorrow. By the time you've shipped five prototypes, you have a design system. You just need to name it. [Here's what mine looks like.](/system/claude-md)

**Q: Is this the end of the traditional UX process — research, wireframes, handoff? Are those skills still worth learning?**
A: The skills are worth more than ever. The delivery mechanism has changed. Research still tells you what to build. The difference is you can now prototype the answer in the same session as the insight, instead of waiting three sprints. Wireframes still test information architecture — but you can generate five variants in twenty minutes instead of one in a day. Handoff still communicates intent to engineering — but increasingly the handoff IS the code, not a Figma file with a red-line spec. What's gone: the artificial distance between thinking and making. The UX process was stretched over weeks partly because the tools made it slow. AI collapses that distance. The research and prototyping still happen. They just happen faster, and closer together. Freya is doing exactly this — compressing the loop from idea to shipped output. That's not the end of the UX process. That's what the UX process always wanted to be. The design system is [what keeps it honest at scale](/thoughts/beyond-ui) — so that the faster loop doesn't produce faster chaos.

**Q: How do you ensure the output is accessible?**
A: The design system handles this. Semantic HTML, ARIA patterns, colour contrast ratios — these are encoded in the component contracts and token values, not left to the individual prompt. When the agent reads the system, it generates accessible code by default. When it doesn't, that's a missing constraint in the system, not a failure of the designer. Fix the system, not the output. Accessibility isn't a checklist you run after shipping. It's a constraint you encode before prompting.

**Q: I can't avoid hardcoding with Tailwind and Cursor. Does the code still need to be reviewed by a developer?**
A: Yes. Always. That's not a weakness of the approach — that's how software works. Every engineer's code gets reviewed. The question is what the reviewer is checking. Without a design system, they're checking everything: naming, structure, accessibility, brand compliance. With a design system constraining the agent, they're checking intent and edge cases. The review burden shrinks because the system already handled the mechanical correctness.

**Q: You're saying the double diamond is expanding. NNG says it's compressing. Others say it's dead. Which is it?**
A: All three are true, depending on where you sit. For delivery teams, it's compressing — AI makes execution faster. For discovery, it's expanding — AI lets you explore more possibilities than you ever could manually. The people who say it's dead are watching the diamond from the delivery side, where the gap between idea and output has collapsed. But the divergent phase — the exploration, the "what if" — that's wider than ever. NorthStar Prototyping lives in that expansion. Freya's work proves it. The diamond isn't dead. It's asymmetric now.

**Q: Is there a use case for vibe-coded apps beyond prototypes? Could it be sold, support multiple users, receive updates?**
A: Today, not without engineering infrastructure underneath. Vibe-coded apps are discovery artefacts. They prove the idea, validate the interaction, test the flow. Production requires auth, databases, CI/CD, error handling, security — the boring stuff that AI doesn't add unless you ask for it. But here's the shift: the prototype IS the spec. Instead of handing off a Figma file, you hand off working code that an engineer refactors into production. The gap between prototype and product shrinks every month.

**Q: Do you use AI for TDD and E2E testing in your vibe coding work?**
A: Not in discovery. Discovery prototypes don't need test suites — they need to be fast and disposable. But the moment code moves toward production, yes. Claude Code writes Playwright tests for this portfolio site. The design system's component contracts define what to test. The agent knows the expected behaviour because the context file describes it. Testing isn't opposed to vibe coding — it's what happens when vibe coding crosses into delivery.

**Q: Being a 'full stack product designer' risks stretching thin and being underpaid as a developer. How do you protect the discovery mindset?**
A: This is the most important question in the list. The risk is real — if you let "I can ship code" become "I am the developer," you've traded your most valuable skill for your least differentiated one. The guardrail is the INC framework: Ideate is YOUR job. Create is the AGENT'S job. The design system — the Narrate layer — is the bridge between them. You stay in discovery. The system handles delivery. The moment you're debugging CSS for three hours, you've lost the plot.

**Q: Did you create a Design System for the webpage or did Cursor create it by itself?**
A: I directed it. The AI created it with my design and code direction. And in delivery, a UI designer refines it — in Figma, in code, wherever they work best. That's the point: the design system starts in discovery as intent and tokens, then gets polished by specialists who contribute back to the shared context. Everyone contributes to the narrative layer — designer, engineer, product owner. And anyone with an idea can draw from it. The system is a commons, not a deliverable. Figma isn't where it begins. It's where it gets refined.

**Q: How do you do dev handoff after coming up with designs in AI tools?**
A: The handoff IS the code. Not a Figma file with annotations. Not a Confluence page with screenshots. Working code in a branch, built against the design system's tokens and components. The engineer reviews it like any other PR. The prototype and the handoff are the same artefact. No translation layer. No "the design said X but the build does Y."

**Q: Do you think the future is no longer in Figma, but instead prototyping and exploration will be in code?**
A: Figma isn't going away — but its role is changing. Figma becomes a downstream output, not the origin of truth. Code is the source. Figma reflects it via Code Connect and MCP. I still use Figma for spatial thinking, flow mapping, and stakeholder communication. But the component library lives in code, the tokens live in CSS custom properties, and the agent reads the code — not the Figma file. Explore wherever you think best. Just make sure the system of record is code.

**Q: Are your context docs shared somehow, for collaborating on building them?**
A: [CLAUDE.md lives in the repo](/system/claude-md). It's version-controlled. Every team member reads the same context. Every agent reads the same context. That's the collaboration model — not a shared Google Doc, but a shared source of truth co-located with the code it describes. PRs to CLAUDE.md are design decisions. And here's the reframe: everyone contributes to the narrative. The designer adds voice guidelines. The engineer adds component contracts. The PO adds domain language. The system grows because the whole team feeds it.

**Q: How do you ensure the .md files are well-written but not too verbose?**
A: Curation, not documentation. A context dump is worse than no context — it drowns the signal. CLAUDE.md contains positioning, tokens, voice, methodology, key decisions. Not every component prop. Not every colour value. The agent needs to know WHY you chose blue, not just that blue is #2563eb. When the file gets too long, that's a smell — split it, or delete the parts the agent never uses. Quality of context beats quantity every time.

**Q: Do you have suggestions for people who can't spend $200 per month on Agentic IDEs?**
A: Claude Code has a free tier. VS Code is free. CSS custom properties are free. A CLAUDE.md file costs nothing. The most expensive part of this workflow is the thinking, not the tooling. Start with what you have. The context file approach works with any LLM that reads markdown — that's the whole point of tool-agnostic infrastructure. The system doesn't require premium tools. It requires clear intent.

**Q: Freya says 'make the models fight.' Do you switch between Claude, GPT, and Gemini?**
A: Yes — but not the way she means. My Claude agents are the team. They do the work — design, code, research, content — all reading the same CLAUDE.md, all embedded in the design system. Other models are the opposition. I throw the output at GPT or Gemini and say "what's wrong with this?" They don't know my system, my brand, my context — which makes them perfect critics. They spot what my own agents are blind to precisely because they're NOT embedded in the narrative. It's like having an in-house team and an external reviewer. The team builds. The outsider stress-tests. Same principle as Freya's — productive disagreement — but the disagreement comes from different contexts, not just different models.

## Insights Generated
- "Everyone contributes to N" reframe
- DONT file discussion → added Constraints section to CLAUDE.md
- "Baby respawning" = the context problem CLAUDE.md solves structurally
- BMAD Method as generic version of what Lincoln built bespoke
