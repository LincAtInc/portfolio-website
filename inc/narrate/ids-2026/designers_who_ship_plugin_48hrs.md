---
name: Designers Who Ship — Building a Real Plugin in 48 Hours with AI
description: IDS 2026 Day 2 Talk 6. Christoph Hellmuth (Nord VPN), Raquel Pereira (Nokia), Casandra Sandu (Trackunit). Swap Wizards plugin, 48-hour hackathon build, component swapping, skills.sh, 15 audience Q&As
type: reference
---

**Speakers:** Christoph Hellmuth (he/him, Nord VPN) | Raquel Pereira (she/her, Nokia) | Casandra Sandu (she/her, Trackunit)
**Talk:** Designers Who Ship: Building a Real Plugin in 48 Hours with AI
**Links:** [Swap Wizards](https://swapwizardhackathon.lovable.app) | [GitHub](https://github.com/christophhdesign/figma-plugin-devel) | [skills.sh](https://skills.sh) | [christophhellmuth.com](https://christophhellmuth.com) | [raqper.github.io/career](https://raqper.github.io/career) | [nordvpn.com](https://nordvpn.com)
**Figma notes:** IDS-2026 FigJam, "Day 2 - Talk 6" section

## Key Concepts

- **Swap Wizards** — Figma plugin built in 48 hours that scans files, maps old components, and bulk-swaps them
- Three designers from different companies collaborating on a hackathon-style build
- Demonstrates designers shipping real production plugins using AI coding tools
- Plugin handles component detachment detection and bulk replacement

## Audience Q&As (15 questions)

### Plugin Development Process (5 questions)
1. How did you organise yourself to divide and conquer the different tasks involved in building the plugin? Did you have a ticket system?
2. How did you come up with this workflow? It seems so thought through! Did you have any challenges?
3. How did you know the refactor at the end was necessary? And was it really necessary?
4. How did you clean up the plugin code?
5. Have you designed the UI in Figma or is it all AI gen?

### Technical (5 questions)
6. If a component was detached and somebody changed the properties like text or introduced an icon, how would the [plugin handle it]?
7. How does the plugin identify if a component has been detached?
8. Did you manage to keep the text string when swapping a component? This is one of the biggest pain points I have when changing components.
9. How did you call and connect LLM from within the plugin (code.js) itself? You mentioned this was part of the feature set to reason about swapping.
10. Could I import screens with html.to.design (raw frames), then use Swap Wizards to bulk-match and replace those flat elements with your real library components?

### Testing & Quality (2 questions)
11. What did your testing/QA process look like? Agents can generally run unit tests but how did you do user-facing tests as you developed features?
12. Was a11y testing part of your workflow? How do you go about working with the Figma a11y models, so that using your plugin acts like Figma for AT users?

### Process & Errors (2 questions)
13. How do you understand if there's an error during the process? Do you ask other AI? Or do you have the skills to know it?
14. How much do the tokens in different modes cost? e.g. planning mode and debug mode

### Meta (1 question)
15. Not a question, just wanted to say you did absolutely amazing!!

## Lincoln's Position vs This Talk

- This is the most "practical hackathon" talk at IDS — three designers building a real plugin in 48 hours. Validates the "designers can ship code" thesis that Freya also champions.
- Swap Wizards solves a real DS pain point (bulk component migration) — same domain as Lincoln's design system migration experience.
- The 48-hour constraint is interesting for Lincoln's positioning: he could build something similar in a single Claude Code session, demonstrating the INC methodology's efficiency.
- Lower strategic relevance than the architecture/methodology talks, but good proof point for "designers who ship."
- The NordVPN sponsorship joke from Marco Pasqualotto is gold for conference culture content.
