---
name: Nate Baldwin — Prototyping for the Unknown (IDS 2026)
description: Full slide-by-slide summary of Nate Baldwin's IDS 2026 talk on AI-assisted design token tooling, Branch+Burn method, and structured prompting
type: reference
---

## Nate Baldwin — "Prototyping for the Unknown"
**Into Design Systems 2026** | Sr Staff Designer, Adobe
**PDF:** https://www.intodesignsystems.com/slides/prototyping-for-the-unknown.pdf
**Local slides:** /tmp/pdf-slides/slide-01.png through slide-66.png (66 slides)

## Core Thesis
Design token schemas (DTCG JSON) are fragile, inflexible, and incomplete. Nate built his own tool (DDSM) using AI agents to solve real-world design system problems, then advocates for others to do the same.

## Key Concepts

### The Problem
- Design vs Engineering gap visualised as two separate dot grids with a chasm between them
- Design system teams are a tiny bottleneck (few red dots) between large input and output layers
- Token naming is verbose and hard to scale (e.g. `tag-field-edge-to-content-medium`)
- Common token schema (DTCG JSON) is **Fragile, Inflexible, Incomplete**

### Algorithmic Token Generation
- Mathematical formula: `b x r^n` (base x ratio^position)
- CSS-native: `calc(var(--b) * pow(var(--r), var(--n)))`
- Multi-dimensional tokens: Color scheme, Contrast, Language, Product theme as separate dimensions with stacked value layers

### Token Architecture
- Interconnected concerns: Democratize, Customization, Multi-dimensional, Scalability, Algorithms, Authoring, Central Source, Naming
- Structured naming: Taxonomy (Orientation/Property/Structure/Position/Size) -> Rules (order+delimiter+casing) -> Token names (e.g. `base-padding-vertical`)
- Centralized Foundational Tokens distributing to web, Android, iOS, desktop platforms

### DDSM (Design Data System Manager)
- Custom-built tool — dashboard with tokens, platforms, themes, component registry, algorithms
- Full token authoring UI with taxonomies, constraints, dimensions
- OKLCH colour space with contrast levels
- Platform management with GitHub repos for extensions
- Figma integration — publishing tokens via REST API, variable collections with Color Scheme and Contrast dimensions
- Sophisticated JSON data model with taxonomy IDs, algorithm references, value modes, property types

### AI Agent Governance
- Uses `project-rules.mdc` — "AI Assistant Rules for Token Design System"
- Schema as single source of truth, schema compliance rules
- Honest about agent failures — showed real conversations going off track, "This is Fine" meme

## Methods

### Branch + Burn
1. **Branch** — Prepare for exploration
2. **Prompt** — Be vague, ask AI to write you a prompt
3. **Iterate** — Continue unhinged exploration. Break things.
4. **Learn** — Take field notes, get ideas
5. **Burn** — Delete the branch and don't look back

### 4-Step Structured Prompting
1. **Context priming** — Investigate existing features & integration points, 3-5 analyses from different perspectives, meta analysis with validation, use as context for future prompts — do NOT make code changes
2. **Detailed planning** — Incorporate insight/reference analysis, format as prompts, reuse existing functions, incorporate tests, strict rules & technical decisions, do not implement yet, ask questions & preserve design
3. **Plan refinement** — Answer questions, manually review, save plan to project
4. **Implementation** — Ask agent to implement plan, preserve existing design & functionality, link to plan & rules

## Key Quotes
- "The **quality of input** is equal to the quality of **output**."
- "**Build your own tools** to solve **your own problems**" — Dan Hollick
- Knowledge grows exponentially with failures (exponential curve)

## Takeaways
- Embrace **productive** failure
- Create **informed** prompts
- Take them on a **journey**
- Prototype for: Discovery, Failure, Exploration, Ideation, **The Unknown**

## Relevance to Lincoln's Work

### Parallels
- Branch+Burn ≈ NorthStar Prototyping (explore freely, learn, discard)
- 4-step structured prompting ≈ INC framework (Ideate/context -> Narrate/plan -> Create/implement)
- project-rules.mdc ≈ CLAUDE.md (AI governance via context files)
- Multi-dimensional tokens ≈ Lincoln's multi-brand token work (Fun Lab, Breville)
- "Quality of input = quality of output" ≈ "The design system IS the AI infrastructure"

### Key Difference
Nate built a **standalone tool** (DDSM). Lincoln's approach puts intelligence in **CLAUDE.md + agent context** — no separate tool needed. Lincoln's is arguably more portable and aligned with where the ecosystem is heading (context files > custom UIs).

### Potential Content
- Comparison piece: "Tools vs Context — two approaches to agentic design systems"
- Nate validates the problem space Lincoln is positioning in
- Both are design engineers who code — but Nate is tool-builder, Lincoln is system-architect

## Audience Q&A (FigJam Board)

**Q: Jonny Willis** — "Awesome talk! Loved the idea of having taxonomies 'codified' into the system. Do you a world in which AI steers this more than we define these things?"
**Nate:** "Thank you! Yes, but I think we have to define or identify this first. AI is still pretty bad with..."

**Q:** "When building the tool that you created how often did you have to steer your AI in the correct direction even if you provided all the context? Also what was the estimated *Total Time Spent* to get to the point you are at today?"
**Nate:** "It depended on the scope of what I was asking it to implement. The larger the task or feature, the..."

**Q: Greg Moore (Head of Design @ Apartment List)** — "When hiring for design systems, how do you decide whether to hire a technically advanced designer, or a design savvy engineer?"
**Nate:** "I'm not a hiring manager, but I don't think it is a clear line. Sometimes a tech savvy designe..."

**Q:** "How do you manage the tokens, if I need a prototype with different themes? Which is the best way from a white label prototype, customized from each theme?"
**Nate:** "I'm not sure I fully understand the specific question being asked here. Is it about theme..."

**Q:** "Many design teams have already been reduced in size as a result of AI adoption. To what extent has this affected your department in terms of the number of permanent team members and freelance hiring, and what is your take on the broader trend of teams shrinking to the point where many lead and principal positions vanish?"

**Q:** "How many people did it take to build this system out?"

**Q:** "Do you prefer use Claude than Cursor?"

**Q:** "To build a prototype, can you share a structure to prompt it?"

**Q:** "If I am just starting with design systems and ai to build design systems where can i start? Any pointers will help... ragini.userexp@gmail.com"

**Q:** "I'm curious how you create and maintain your project rules over time. Could you share what that process looks like from the first prototype to ongoing updates?"

### Lincoln's Room After the Talk Answers

**Q: When hiring for design systems, how do you decide whether to hire a technically advanced designer, or a design-savvy engineer?**
A: You hire both. Or rather — you hire the person who is both. The 50/30/20 split (Designer / Developer / Product Owner) isn't a compromise. It's the job description for a design systems architect in the agentic era. The question assumes a binary that the discipline has outgrown.

**Q: Many design teams have been reduced in size as a result of AI adoption. What is your take on the broader trend of teams shrinking to the point where mainly lead and principal positions remain?**
A: This is the question nobody on stage wants to answer. Here's what I think: the positions don't vanish — they transform. A design systems architect with agentic tooling isn't replacing five people. They're doing work that five people couldn't do before — because the system handles execution and the human handles vision, judgement, and narrative. The team shrinks in headcount and expands in capability. That's not a loss. It's a shift. But it requires the architect to be the [Design Communicator](/thoughts/stakeholder-simulator), not just the component librarian.

**Q: How many people did it take to build this system out?**
A: In my case: one. One person, four AI agents, one CLAUDE.md, and the design system as infrastructure. This portfolio site — every page, every component, every thoughts essay — was built by one person directing agents. That's the thesis in practice.

**Q: Do you prefer Claude or Cursor?**
A: Claude Code. Not close. Cursor is an AI-enhanced editor. Claude Code is an agent that happens to write code. The difference matters: I don't want autocomplete — I want a collaborator that reads my CLAUDE.md, understands my design system, and builds entire pages from intent. Voice Mode means I can speak the intent and the agent writes the code. That's not an editor feature.

**Q: To build a prototype, can you share a structure to prompt it?**
A: The INC framework IS the prompting structure. **Ideate** — describe what you want to explore, not what you want to build. **Narrate** — give the agent context: CLAUDE.md, tokens, brand voice, constraints. **Create** — let the agent build. The quality of the output equals the quality of the context. A vague prompt with rich context beats a detailed prompt with no context every time.

**Q: How do you create and maintain your project rules over time? What does that process look like from the first prototype to ongoing updates?**
A: CLAUDE.md IS the living project rules. It starts as a few lines — name, stack, voice. It grows with every decision: brand positioning, design tokens, writing style, component patterns. Each conversation with the agent adds context. The rules aren't maintained separately from the work — they're a byproduct of it. My [CLAUDE.md is public](/system/claude-md) — you can see exactly how it evolved.

**Q: How do you manage tokens for a white-label prototype with different themes?**
A: CSS custom properties on `:root` with theme overrides. One token file, multiple theme layers. The agent reads the base tokens and applies the theme variant. I built exactly this at Fun Lab (Dentsu/Merkle) — multi-brand token architecture with Chakra UI. The pattern is: semantic tokens reference primitive tokens, themes swap the primitives, components stay untouched.

### Questions Lincoln Can Directly Answer
- **Hiring: designer vs engineer?** — Lincoln IS both (50/30/20). The answer is "yes".
- **Team shrinking / lead positions vanishing?** — Lincoln's thesis: one-person innovation engine. Not vanishing — transforming.
- **Claude vs Cursor?** — Lincoln uses Claude Code as primary tool.
- **White label / multi-theme tokens?** — Lincoln's Fun Lab multi-brand work is exactly this.
- **Maintaining project rules over time?** — CLAUDE.md IS the living project rules. Lincoln can show the evolution.
- **Structure to prompt prototypes?** — The INC framework IS this structure.
