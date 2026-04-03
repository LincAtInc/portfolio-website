---
name: Miro — The Path to an AI Enabled Design System (IDS 2026)
description: Talk 4 summary, Aura agent, MCP/Skills architecture, metrics, audience Q&A from Andressa Lombardo and Eddie Machado at Miro
type: reference
---

## Andressa Lombardo & Eddie Machado — "The Path to an AI Enabled Design System"
**Into Design Systems 2026** | Miro DS Team (1 EM + 3 Engineers serving 48 teams)

## Core Thesis
"You don't need a perfect system. You need a system that's legible enough to teach."

## Story Arc
- Pressure from designers (prototyping with AI), engineers (Cursor, Claude Code), leadership (integrate AI everything)
- "The Incident" — exposed knowledge gaps in DS
- Built Aura as "new hire" — not replacement, team member
- Metadata quality is everything: names alone aren't enough, need tags/descriptions/use_cases/anti-patterns
- Skills vs MCP: 98% fewer tokens (~410 vs ~33,500), 150-300x faster (~50ms vs 5-15s)

## Aura's 7+1 Skills
1. Bug fixes — automate small bugs
2. Tokens — replacing tokens in prototypes/vibe-coded contributions
3. Icons — replacing SVGs with Icon component
4. Components — replacing vibe-coded/detached components
5. Docs — auto-updating docs on PR changes
6. Changelog — living changelog + notifications
7. Learning budget — Aura improves, suggests how she can help
8. (Future) Manage a team

## Technical Details
- CLAUDE.md with Aura persona routing to miro-design-system MCP
- MCP servers: miro-design-system, Figma Desktop, figma-console, miro-mcp
- Icon descriptions: added to Figma component descriptions, parsed to JSON via custom plugin
- Token descriptions: detailed with "do not use for..." anti-patterns
- Contributions: /aura-wrap-up skill auto-reviews code quality, accessibility, localisation
- Structured commits/PRs via templates

## 5-Step Roadmap
1. Audit & framework definition (complete)
2. DocsScale — build knowledge base (in progress)
3. MCP integration — make it AI-readable (in progress)
4. Pilot and rollout — scale adoption (not started)
5. Continuous improvement (not started)

## Lessons Learned
- Show don't tell
- Be consistent
- Room to experiment
- Ask forgiveness not permission
- Prove the concept first, explain second
- Any figure is better than no figure
- Test internally before shipping
- One line in CLAUDE.md can wreak havoc
- Humans are unpredictable — can't rely on quality prompts

## Audience Q&A (Answered by speakers)

**Metrics:** Measure tokens with vs without documentation. Tokens = money.

**MUI alignment:** Multiple audience members struggling. Suggestions: show don't tell, MUI has an MCP server you can expand on, need engineering buy-in or a "nuclear option" replacement.

**Icon metadata:** Painful manual process. Tried scripts pulling aria-labels but missing too many. Added to Figma component descriptions, parsed to JSON via custom plugin.

**Copilot/VS Code constraints:** Eddie linked to running Claude Code on local/cloud models via Ollama/OpenRouter.

**Figma MCP consistency:** Works in library file itself. Connected library in project file — Claude can't reach those components yet (confirmed by audience member Pedro Batista).

**Skills if using Copilot:** Yes — linked to GitHub docs on Copilot agent skills.

**MCP vs Skills:** Use a mix, MCP is main source of tools.

## Full Audience Questions (Not all answered)

### Miro-specific
- Dark version of Miro board?
- Miro emojis/illustrations created with AI?
- What AI tool powers Aura?
- What parts of Miro is Aura connected to?
- Aura watching talks — summaries into skills or fine-tuning?
- Figma MCP vs Miro MCP together?

### Implementation
- How to create Aura MCP via Skills?
- Best approach for creating searchIcons/searchTokens skills?
- Guide for MCP skill creation?
- Do you add extra context in Storybook?
- Did you use Claude to add descriptions into JSON?
- Did Aura write the token descriptions? How verbose was too verbose?
- Do you convert generated components into Figma design?
- Different themes in the DS?
- Is Aura automated or manually triggered?
- How did you onboard product teams?
- How to trace hallucinations?
- Doc site made with markdown? Pre-requisite?
- Testing process after component updates? Sandbox?
- How much time did it take? Full-time or side project?
- Skill performance auditing? Optimise for one model?

### Recurring (also asked in Talk 3)
- 100% expected outcome?
- Metrics for AI-dominated DS?
- Team shrinking to lead/principal?
- UX teams shipping code — compositions?
- Feed all docs or selected parts?
- Multiplying agents by context?
- Public documentation on the road?
- Online training/resources?
- Overkill to create AI agent for new joiners?

## Lincoln's Positioning vs This Talk
- This is the C in I<N>C — operational, delivery-focused
- No discovery, no NorthStar, no intent-based UI, no product primitives
- Team of 4 → Lincoln does equivalent as one person
- "Prove the concept first" = NorthStar Prototyping without the framework
- MUI Q&A = Approved in Theory page in real-time
