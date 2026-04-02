---
name: Jan Six — Room After the Talk Q&As
description: 10 Q&A cards written for the Room After the Talk page covering Jan Six's IDS 2026 talk on building real design systems with agents
type: project
---

Cards written for the "Building Real Systems" section of /thoughts/room-after-the-talk.

**Why:** Jan Six (Principal Product Designer, GitHub / Co-creator, Tokens Studio) gave the most technically complete IDS talk — AGENTS.md routing, colocated docs, MCPs, skills. Lincoln positions as the methodology layer on top of Jan's infrastructure layer.

**Insertion point:** After the Cristian Morales Achiardi section (which ends around line 642), before "The Pattern" closing section.

**Card numbering:** `i + 67` (Cristian's section occupies cards 59–66).

**Background:** plain section (no explicit dark class — alternates with Cristian's `bg-[#0f172a]` dark section).

**Label:** `Building Real Systems`

**Label colour:** `var(--color-primary)`

**Color cycle offset:** `i + 2` (starts at accent to distinguish from Cristian's reset-to-0 cycle).

**Intro paragraph:**
Jan Six (Principal Product Designer, GitHub / Co-creator, Tokens Studio) gave the most technically complete talk of the conference. AGENTS.md as a router. Rules files for components, tokens, and docs. MCPs that make your brand queryable. He covered the infrastructure layer with more rigour than anyone else. He also said, more than once, that he couldn't say yet — because he's still testing it. I can. These are my answers to the questions he left open, and the ones he answered that I want to build on.

**10 Questions answered:**
1. Where should agent-suitable documentation live — colocate with the component, agent finds it automatically
2. Markdown vs JSON for component rules — both: JSON for contracts/data, markdown for rationale/intent, Nathan Curtis "components as data"
3. Custom MCP vs third-party — start third-party, build custom when specificity demands it; CLAUDE.md as lightweight free MCP
4. Rules files vs skills vs agents — constraints in rules, procedures in skills, perspectives in agents
5. CLI agents vs IDE agents — scope difference; CLI sees whole repo, needed for cross-file DS work
6. Escaping "everything looks the same" — design system as the prior that narrows output space; Jan's invisible layer thesis
7. How to structure good context — past/present/future temporal split; I.md/N.md/C.md experiment; Jan was the only speaker to mention future context
8. Multiple products / multiple repos / multiple stacks — MCP model preferred; N layer lives once, all implementations draw from it
9. New job rubrics for designers — not "can you code" but "can you direct a system" and "can you specify precisely"
10. Storybook as creative canvas — generative design surface with CLI agent + DS context; directed creation inside constrained system

**Key positioning in these cards:**
- "Yes, AND..." framing — Jan is the strongest infrastructure talk, Lincoln adds methodology and temporal dimension
- Jan = delivery infrastructure. Lincoln = discovery methodology that uses it.
- Lincoln was explicit: Jan is the strongest alignment in the conference, peer-level respect
- Jan's AGENTS.md router maps to what Lincoln's CLAUDE.md could evolve into at scale
- Jan was only speaker to mention future context — Lincoln extends this to I.md/N.md/C.md temporal structure
- Links to: /system/claude-md, /headless-ds, /system/agents

**How to apply:** If writing further Room After the Talk sections or comparing Lincoln to Jan Six in thought leadership, use this to avoid repeating the same angles. The temporal context split (past/present/future) is Lincoln's addition — don't attribute it to Jan.
