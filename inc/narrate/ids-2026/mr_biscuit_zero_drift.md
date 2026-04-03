---
name: Mr. Biscuit — Vibe coding with zero drift
description: IDS 2026 Day 2 Talk. Parametric Figma components, Variable Visualiser plugin, JIT composition, zero drift pipeline Figma→Storybook→Production
type: reference
---

**Speaker:** Shuaiqi "Mr.Biscuit" Sun, Design System Architect, Independent
**Talk:** Vibe coding with zero drift - from Figma to Storybook to Production
**Links:** [Variable Visualizer](https://www.variablevisualizer.com/) | [VV Figma Plugin](https://www.figma.com/community/plugin/1457362132545070106)
**YouTube tutorials:** https://www.youtube.com/watch?v=yimc4uatoZ4 | https://www.youtube.com/watch?v=TWMCn-Lsyxs | https://www.youtube.com/watch?v=tLRRzvJYegU | https://www.youtube.com/watch?v=52Z_HfUYTWk

## Key Points
- "Teams don't lose alignment because people are careless. They lose it because the system allows it."
- Parametric components using Figma variable modes instead of component variants
- Variables = parametric, traceable, style decisions set together. Variants = "manual explosion of all combinations"
- Variable Visualiser (VV) plugin: turns Figma variables into a living graph (node-based visual editor)
- VV value props: "1 click design → dev sync", "Modes resolved at build time", "Zero token translation chain"
- Build-time resolver: exports graph once, app resolves variables deterministically for any mode
- "What you design is what you ship" — no translation layer
- Pipeline: Figma → AI-assisted coding → Storybook → Production
- For enterprises: Figma still needed for existing brand/patterns
- For startups/personal: code-first without Figma is fine

## JIT (Just-In-Time) Composition Framework
Mr. Biscuit was most impressed by this concept. A maturity stack for what to feed AI agents:

| Level | What | Description |
|---|---|---|
| Low | Raw tokens | Colour values, class names, snippets — no semantic meaning |
| | Atomic components | Button, Input, Badge — minimum viable ingredient set |
| **Sweet Spot** | **Contextual-aware Molecules** | **FormField, Card, Modal — how atomics combine. Critical for consistency.** |
| | Usage patterns + rules + graph | Do/don't rules, API contracts, error states, a11y notes |
| High | Screen-level examples | Expensive. Grounds proportions but risks over-imitation |

Sweet spot = molecules + rules. Not raw tokens (too low-level). Not full screens (agents copy rather than compose).

## Lincoln's Position vs Mr. Biscuit
- Lincoln is code-first, Figma as downstream. Mr. Biscuit is Figma-first, code as downstream.
- Lincoln has multi-brand token experience (Fun Lab/Chakra UI) — Mr. Biscuit hasn't solved this
- Lincoln uses Tokens Studio (handles calculations, multi-brand, multi-direction flow). Mr. Biscuit uses VV (Figma-native, no intermediate format)
- Both solo practitioners building DS infrastructure
- Mr. Biscuit solves the bridge (Figma→Code). Lincoln solves the engine (Discovery→Delivery).
- JIT Composition maps to INC: I=intent, N=composition rules, C=JIT output

## Audience Q&As (38 questions from FigJam)

### Parametric vs Variants Approach (6 questions)
1. I am noticing your components don't have a lot of variants and they use the appearance menu (parametric) to change things. How does that work with really complex components like card?
2. What tradeoffs did you consider when choosing a token + modes approach instead of component sets with variants and properties? Why modes? Harder to use when making designs in Figma?
3. Why use variable modes rather than component variants?
4. What's the benefit of using the VV plugin vs leveraging Figma's native variable features?
5. Is this more of a POC or do you already have feedback from other peers? I am wondering because we have a lot of designers that struggle with modes in Figma.
6. How can we combine existing components that were built with properties with this variable approach? Do they need to be rebuilt from scratch?

### Scaling & Complexity (6 questions)
7. In a fast-moving team, how do you scale this complex component across teams/devs/designers? Leads care about team velocity and reducing "design debt" especially when it breaks.
8. It looks really powerful, but how do you prevent this VV from becoming unreadable over time? Same feeling as Blender 3D nodes editor.
9. Making "super components" need to be very robust though right? How do you mitigate risk of breaking changes across multiple touchpoints?
10. Does this approach make it hard to maintain components down the line, in terms of adding new features / editing / deprecating?
11. The variables approach works well for individual components, but how do you prevent designers from accidentally changing appearance settings in the Figma panel when working on frames with many components?
12. What are the best practices to spec this into something that could handle in production? Should we deliver as unified theme? How to handle thousands of variables mapped across hundreds of modes?

### Multi-Brand & Theming (2 questions)
13. How do you handle multi-brand token setups where the difference between Brand A and Brand B is more than just colours and padding? Figma variables can only flow in one direction... I currently have no alternative to Tokens Studio for multi-brand design systems.
14. How does the multidimensionality of themes manifest itself in code? I imagine it's not possible to export all combinations as individual themes.

### Figma-Code Sync (4 questions)
15. This has been an incredible demo! Does your token structure match your code structure? Can you create an automated pipeline with something like Style Dictionary?
16. How do you keep Figma and Code in Sync?
17. How do you sync the variables to code?
18. Does VV collection auto-update variables? How does it export to the code, your way?

### Variable Management (4 questions)
19. If my system uses slots, can I put slots inside variables?
20. How do you handle this big number of collections that result by using this workflow?
21. How do you deal with Figma Variable Collection Limits (5000 per collection)?
22. How do you deal with Ghost Variables?

### Workflow & Daily Use (5 questions)
23. What is your daily work setup for contextual component work when designing an app or site experience? How many levels of context are you generally working with?
24. How do I work with Token Studio, Variable Visualizer, Parametric components and AI? Is there a common workflow?
25. Do you share any examples of your collection/mode/variable mapping anywhere?
26. Do you have an example file with the shown setup to share where we can play around with?
27. Have you used this workflow on a team? Or is a solo designer usually responsible for variable maintenance?

### Storybook & AI (3 questions)
28. How and why are you going to Storybook from Figma? What do you use Storybook for?
29. This takes a lot of time to setup for each component — have you compared the time saving vs just planning and instructing AI when building instead?
30. Why continue using Figma, and not direct on Cursor?

### Accessibility (1 question)
31. How can you support accessibility requirements using this method? Even if elements look exactly the same, they may need different semantic markup. Will AI understand semantic requirements for interactive states if we use variables?

### Starting with Existing Kits (1 question)
32. I see the benefit of using VV to understand how things are connected across collections. But if you're starting with a kit like Material 3, would you still recommend using VV?

### Open Source & Tooling (2 questions)
33. Can you share the link to the plugin? "Better LLM context"
34. What would it take to make this tool and your custom plugin open source?

### Breaking Changes (2 questions)
35. How do you deal with breaking changes?
36. Why do you put primitive variables in another file?

### Other (2 questions)
37. Love the moment of demo!@#!@#
38. WHO WOULD LIKE TO GET THE WORKSHOP. Please put plus +1. *(from Marcin Spiewak, VV co-creator)*

### Extra Resource
- "The Vibe coding part on Storybook and production — the cut part, freshly recorded" — YouTube link connected to Steven Haskell's and VV export questions

## Lincoln's Room After the Talk Answers

**Q: How do you handle multi-brand token setups where differences go beyond colours and padding?**
A: Mr. Biscuit's multiplexing technique — routing through brand packs to break Figma's 4-mode limit — is clever for colour and spacing. But multi-brand at scale means different component APIs, different interaction patterns, different content rules, different accessibility requirements per brand. Colour swaps are the easy part. The hard part is when Brand A's button has an icon slot and Brand B's doesn't. When the navigation pattern changes entirely between verticals. When the voice rules mean the same component needs different microcopy. Those differences live in the narrative layer, not the token layer. Tokens give you the what. You need context files that give the agent the why and the when.

**Q: How does this scale to thousands of variables across hundreds of modes?**
A: The Variable Visualiser graph is beautiful at demo scale — a few collections, a dozen connections. At enterprise scale, with hundreds of components each binding dozens of variables across multiple brands, themes, and density modes, the visual graph becomes unreadable. The same problem hits the resolver: runtime resolution of deeply nested aliases has performance implications. The parametric approach is correct in principle. But the tooling needs to evolve from visual graph to queryable infrastructure — which is exactly what Jan Six's MCP approach and Jesse Gardner's custom MCP server solve. The graph is for understanding. The MCP is for operating at scale.

**Q: What is the time cost of setting up the parametric system versus just instructing AI directly?**
A: This is the question Mr. Biscuit's demo inadvertently answered. Each component generation took 30 minutes in Cursor. Context ran out mid-session, requiring a fresh chat. The prompt template had to be re-fed every time. That's the cost of not having persistent context. The parametric variable setup is front-loaded work that pays off in consistency. But the real time cost isn't in Figma — it's in the AI workflow. A persistent context file that the agent loads automatically eliminates the 30-minute rediscovery cycle. The setup cost isn't variables versus no variables. It's persistent context versus ephemeral prompting.

**Q: How do you handle breaking changes in parametric components?**
A: When a parametric component's variable bindings change — a new token added, a mode renamed, an alias chain restructured — the code must sync. Mr. Biscuit acknowledged this: everything except binding changes can be iterated by re-exporting JSON. But binding changes require code updates. This is the same versioning problem every design system faces, parametric or not. The difference is visibility. In a parametric system, the Variable Visualiser graph shows you exactly which connections changed. In a variant-based system, you're hunting through 600 components hoping to find the inconsistency. Parametric doesn't eliminate breaking changes. It makes them traceable.

**Q: How do you keep Figma and code in sync when the AI generates the initial component?**
A: Mr. Biscuit's answer is the resolver: export the JSON, the resolver reads it, done. That works for token values. But the deeper sync problem is structural. When Cursor AI generates a component from a Figma link, it interprets the design through the MCP's lens. It might miss a layout constraint. It might not stretch children correctly. It might misread which mode applies where. The video showed all of these happening. The sync mechanism isn't the JSON export. It's the prompt that tells the AI how to interpret the design. That prompt — his `compDesignToCode.md` — is doing the real work. And it needs to be as carefully maintained as the tokens themselves.

**Q: What about accessibility? Semantic markup beyond visual appearance?**
A: This is the gap in every "Figma to code" pipeline, not just Mr. Biscuit's. Figma variables control visual properties: colours, spacing, radii, typography. They don't encode ARIA attributes, keyboard navigation patterns, focus management, screen reader announcements, or semantic HTML structure. The generated React component gets the styling right but says nothing about whether the button uses a `<button>` element or a styled `<div>`. Whether it has `aria-pressed` for toggle states. Whether focus is trapped correctly in a modal context. Accessibility lives in the component contract, not the token layer. It belongs in the context files the agent reads before it generates anything — not as an afterthought once the visual output looks right.

**Q: Can you combine existing variant-based components with the variable approach?**
A: Yes, and this is the realistic migration path for most teams. You don't burn down your existing component library to go parametric. You start with the highest-maintenance components — buttons, inputs, cards — where the combinatorial explosion hurts most. Convert those to parametric variables. Leave simpler components as variants until the cost of maintaining them manually exceeds the cost of converting them. Mr. Biscuit's "600 variants for one button" argument is compelling precisely because buttons are the worst case. Not every component has six independent axes of variation. Pick the ones that do.

**Q: If 90% of the work is done in Figma, what happens when you need to work without Figma?**
A: This is the question Mr. Biscuit's framing invites but doesn't address. "Figma as source of truth" works for teams with Figma. It doesn't work for solo practitioners, startups without design tooling budgets, or code-first teams where the codebase IS the design system. Mr. Biscuit briefly acknowledged this in his IDS talk: "for startups and personal projects, code-first without Figma is fine." That throwaway line is actually a different philosophy. If your tokens live in CSS custom properties rather than Figma variables, the AI reads them directly from the codebase. No export step. No resolver. No plugin dependency. No 4-mode limitation. The "shortest path" isn't Figma to code. It's removing the steps between intent and implementation.

**Q: The parametric approach is more resilient to human error — but what about AI error?**
A: Mr. Biscuit's strongest argument is that parametric variables eliminate the human errors inherent in maintaining 600 variants. He's right. But the demo introduced a different class of error: AI misinterpretation. The LLM didn't stretch children correctly. It misread mode names. It needed manual corrections for layout, visibility, and state logic. It ran out of context. These aren't human errors — they're prompt errors. The quality of AI output is bounded by the quality of context it receives. A detailed prompt template improves consistency. Persistent context that the agent loads automatically improves it further. The error surface hasn't disappeared. It's moved from maintaining variants to maintaining context.

**Q: What is the role of the design systems architect if AI generates the components?**
A: Mr. Biscuit's demo shows the architect's new role clearly, even if he doesn't name it. The architect builds the parametric variable structure. Defines the collections, modes, and aliasing chains. Writes the prompt template that tells the AI how to interpret the design. Debugs the visual graph when something looks wrong. Decides which properties are parametric and which aren't. Evaluates whether the AI output matches the design intent. None of that is "writing CSS." All of it is design systems architecture. The job hasn't been automated. The medium has changed. You're still making the structural decisions. You're just encoding them differently.

## Tools Referenced
- Variable Visualiser (VV) — Figma plugin by Mr. Biscuit + Marcin Śpiewak
- "Better LLM context" — custom plugin mentioned but not linked
- Style Dictionary — audience asked about compatibility
