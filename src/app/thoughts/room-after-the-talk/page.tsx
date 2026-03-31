import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Room After the Talk | Lincoln Mitchell",
  description:
    "The real conversations happen after the slides. These are the questions design systems architects asked at IDS 2026 — and the answers I'd give.",
};

const colorCycle = [
  { border: "border-l-[var(--color-warm)]", label: "text-[var(--color-warm)]" },
  { border: "border-l-[var(--color-primary)]", label: "text-[var(--color-primary)]" },
  { border: "border-l-[var(--color-accent)]", label: "text-[var(--color-accent)]" },
  { border: "border-l-[var(--color-secondary)]", label: "text-[var(--color-secondary)]" },
  { border: "border-l-[var(--color-warm-light)]", label: "text-[var(--color-warm-light)]" },
];

type QuestionCard = {
  question: string;
  answer: React.ReactNode;
};

const questions: QuestionCard[] = [
  {
    question:
      "Do you need to do your own Figma-to-code connection or did someone do that for you?",
    answer: (
      <>
        I built it. Figma MCP + Code Connect + design tokens as structured JSON. The design system
        is the bridge — not a plugin someone else maintains. If you&apos;re waiting for Figma to
        solve this for you, you&apos;ll be waiting a long time. Build the connection yourself and
        own it.
      </>
    ),
  },
  {
    question:
      "Did AI make the changes using your design system guidelines or did you have to feed it your Figma file?",
    answer: (
      <>
        Neither. The design system IS the context file.{" "}
        <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">
          CLAUDE.md
        </Link>{" "}
        contains the brand, the tokens, the voice, the methodology. The agent reads it directly.
        No Figma file needed. No separate guidelines document. The system is the guideline.
      </>
    ),
  },
  {
    question:
      "What&apos;s your biggest challenge bringing AI workflows into the pipeline?",
    answer: (
      <>
        Not technical — political. The tooling works. The integration works. What doesn&apos;t
        work is an organisation that measures velocity in tickets closed, not capability gained.
        The biggest challenge is getting delivery-oriented teams to value infrastructure that makes
        tomorrow faster, not just shipping today&apos;s feature.{" "}
        <Link href="/thoughts/approved-in-theory" className="text-[var(--color-accent)] no-underline hover:underline">
          I&apos;ve written more on this.
        </Link>
      </>
    ),
  },
  {
    question:
      "In a legacy codebase with minimal design system structure, how feasible is it to integrate this?",
    answer: (
      <>
        Completely feasible. CLAUDE.md doesn&apos;t care if the codebase is React 19 or jQuery
        spaghetti. It describes the intent — the brand, the rules, the domain. Start with one
        context file. One token file. One component. The system grows from the inside. You
        don&apos;t need a rewrite. You need a starting point.
      </>
    ),
  },
  {
    question: "How do you keep Figma in sync if code changes happen directly?",
    answer: (
      <>
        Invert the question. Code is the source of truth. Figma is a downstream output, not the
        origin. Code Connect + Figma MCP means Figma reflects code, not the other way around.
        Stop &ldquo;keeping Figma in sync&rdquo; — make code the source and let Figma follow.{" "}
        <Link href="/headless-ds" className="text-[var(--color-warm)] no-underline hover:underline">
          The headless DS approach explains the architecture.
        </Link>
      </>
    ),
  },
  {
    question:
      "How do you connect Figma with VS Code to ask about a component, then call it into VS Code and prompt a solution?",
    answer: (
      <>
        Figma MCP server connects Figma desktop to your editor. Query a component, get its
        properties, ask the agent to implement it using the design system context. The agent reads
        the token values, the component API, and the CLAUDE.md — then writes code that&apos;s
        correct from the first render.
      </>
    ),
  },
  {
    question:
      "Would love to hear more about the review process — automated, human, etc. — and how that got buy-in from engineering.",
    answer: (
      <>
        The review process IS the design system. Tokens constrain the output — the agent
        can&apos;t invent a button variant that isn&apos;t in the system. That&apos;s automated
        governance. Human review is for intent and quality, not brand compliance. Engineering buys
        in because the system reduces their review burden, not increases it.{" "}
        <Link href="/thoughts/stakeholder-simulator" className="text-[var(--color-secondary)] no-underline hover:underline">
          The Stakeholder Simulator covers how to pitch this internally.
        </Link>
      </>
    ),
  },
  {
    question:
      "What is your approach to tooling redundancy if tools in your workflow are failing or are down?",
    answer: (
      <>
        The context files ARE the redundancy. If Claude Code goes down, the CLAUDE.md still works
        with Cursor, Copilot, or any LLM that reads markdown. If Figma MCP breaks, the tokens are
        still CSS custom properties. The intelligence is in the context layer, not the tool.
        Tool-agnostic by design. This question came from a DS lead at a major European retailer —
        and it&apos;s the right question. Your system should survive any single tool failure
        without losing the design intent.
      </>
    ),
  },
  {
    question:
      "What was your go-to MCP server setup, and how did you secure the handshake for corporate use?",
    answer: (
      <>
        This is the gap the industry needs to fill. MCP is powerful but enterprise security
        patterns are still emerging. OAuth handshakes, scoped access, audit trails — these need to
        become standard. For now, local MCP servers with controlled access. For corporate: treat
        MCP like any other API gateway. The design system MCP should sit behind the same auth as
        your component library. The tooling is ready. The enterprise security wrapper is still
        being written.
      </>
    ),
  },
  {
    question:
      "What has been your experience with AI prototyping when needing to sync iOS native components?",
    answer: (
      <>
        Platform-specific components — iOS contextual menus, Android bottom sheets — are where
        the design system&apos;s abstraction layer matters most. The token values and interaction
        patterns are platform-agnostic. The rendering is platform-specific. The agent needs to
        know both — which means the context file needs platform variants, not just web defaults.
        Build the abstraction first. Then let the platform-specific implementation derive from it.
      </>
    ),
  },
];

export default function RoomAfterTheTalk() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">
          Community
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          The Room <span className="text-[var(--color-warm-light)]">After</span> the Talk
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          The real conversations happen after the slides. These are the questions design systems
          architects asked at IDS 2026 — and the answers I&apos;d give.
        </p>
      </header>

      <main>
        {/* Intro */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">
            The Context
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            IDS 2026 — two talks, twenty questions
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Into Design Systems 2026 brought together architects from Adobe, GitHub, Atlassian,
              Figma, Indeed, WhatsApp, Miro, and dozens of companies building real systems at real
              scale. During the Q&amp;A sessions, the audience asked questions that had nothing to do
              with the slide decks.
            </p>
            <p>
              They asked about Figma MCP handshakes. About legacy codebases that nobody wants to
              touch. About getting engineering buy-in without a 12-month migration plan. About
              corporate security patterns for tools that didn&apos;t exist two years ago. About
              whether their jobs still exist in two years.
            </p>
            <p>
              Some questions were answered. Many weren&apos;t. The hardest ones — about team
              shrinking, about prompting structure, about maintaining rules over time — were left
              hanging.
            </p>
            <p className="text-[var(--color-warm-light)]">
              These questions matter more than the talks. Below are all of them — with the answers
              I&apos;d give.
            </p>
          </div>
        </section>

        {/* The Questions */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">
            The Questions
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-12">
            From the WhatsApp talk
          </h2>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {questions.map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[i % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-lg font-semibold leading-[1.3] ${colorCycle[i % colorCycle.length].label}`}>
                    &ldquo;{q.question}&rdquo;
                  </h3>
                </div>
                <div className="pl-11">
                  <p className="text-[16px] text-white/55 leading-relaxed">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Unanswered — Nate Baldwin's talk */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">
            The Unanswered
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            From the Prototyping for the Unknown talk
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Nate Baldwin (Sr Staff Designer, Adobe) gave a brilliant talk on building custom AI tooling for design tokens. The audience asked hard questions. Most went unanswered. Here are my answers.
          </p>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {[
              {
                question: "When hiring for design systems, how do you decide whether to hire a technically advanced designer, or a design-savvy engineer?",
                answer: (<>You hire both. Or rather — you hire the person who is both. The 50/30/20 split (Designer / Developer / Product Owner) isn&apos;t a compromise. It&apos;s the job description for a design systems architect in the agentic era. The question assumes a binary that the discipline has outgrown.</>),
              },
              {
                question: "Many design teams have been reduced in size as a result of AI adoption. What is your take on the broader trend of teams shrinking to the point where mainly lead and principal positions remain?",
                answer: (<>This is the question nobody on stage wants to answer. Here&apos;s what I think: the positions don&apos;t vanish — they transform. A design systems architect with agentic tooling isn&apos;t replacing five people. They&apos;re doing work that five people couldn&apos;t do before — because the system handles execution and the human handles vision, judgement, and narrative. The team shrinks in headcount and expands in capability. That&apos;s not a loss. It&apos;s a shift. But it requires the architect to be the <Link href="/thoughts/stakeholder-simulator" className="text-[var(--color-secondary)] no-underline hover:underline">Design Communicator</Link>, not just the component librarian.</>),
              },
              {
                question: "How many people did it take to build this system out?",
                answer: (<>In my case: one. One person, four AI agents, one CLAUDE.md, and the design system as infrastructure. This portfolio site — every page, every component, every thoughts essay — was built by one person directing agents. That&apos;s the thesis in practice.</>),
              },
              {
                question: "Do you prefer Claude or Cursor?",
                answer: (<>Claude Code. Not close. Cursor is an AI-enhanced editor. Claude Code is an agent that happens to write code. The difference matters: I don&apos;t want autocomplete — I want a collaborator that reads my CLAUDE.md, understands my design system, and builds entire pages from intent. Voice Mode means I can speak the intent and the agent writes the code. That&apos;s not an editor feature.</>),
              },
              {
                question: "To build a prototype, can you share a structure to prompt it?",
                answer: (<>The INC framework IS the prompting structure. <strong className="text-white">Ideate</strong> — describe what you want to explore, not what you want to build. <strong className="text-white">Narrate</strong> — give the agent context: CLAUDE.md, tokens, brand voice, constraints. <strong className="text-white">Create</strong> — let the agent build. The quality of the output equals the quality of the context. A vague prompt with rich context beats a detailed prompt with no context every time.</>),
              },
              {
                question: "How do you create and maintain your project rules over time? What does that process look like from the first prototype to ongoing updates?",
                answer: (<>CLAUDE.md IS the living project rules. It starts as a few lines — name, stack, voice. It grows with every decision: brand positioning, design tokens, writing style, component patterns. Each conversation with the agent adds context. The rules aren&apos;t maintained separately from the work — they&apos;re a byproduct of it. My <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">CLAUDE.md is public</Link> — you can see exactly how it evolved.</>),
              },
              {
                question: "How do you manage tokens for a white-label prototype with different themes?",
                answer: (<>CSS custom properties on <code className="text-[var(--color-accent)] text-sm">:root</code> with theme overrides. One token file, multiple theme layers. The agent reads the base tokens and applies the theme variant. I built exactly this at Fun Lab (Dentsu/Merkle) — multi-brand token architecture with Chakra UI. The pattern is: semantic tokens reference primitive tokens, themes swap the primitives, components stay untouched.</>),
              },
            ].map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[(i + 2) % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 11).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-lg font-semibold leading-[1.3] ${colorCycle[(i + 2) % colorCycle.length].label}`}>
                    &ldquo;{q.question}&rdquo;
                  </h3>
                </div>
                <div className="pl-11">
                  <p className="text-[16px] text-white/55 leading-relaxed">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Primitives — Yesenia's talk */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">
            Product Primitives
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            From the Product Primitives talk
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Yesenia Perez-Cruz showed how Miro built Aura, an internal AI agent for their design system. The audience had over forty questions. These are the ones I can answer from experience.
          </p>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {[
              {
                question: "Were you able to achieve 100% expected outcome after implementing MCP, Skills, .mds, Rules and personas?",
                answer: (<>No. And anyone who says yes is lying. But that&apos;s the wrong metric. The question is: does the context quality improve the output quality? Yes, dramatically. A well-structured CLAUDE.md gets you to 85-90% on the first pass. The remaining 10-15% is human judgement — which is exactly the part you should be doing. 100% automation isn&apos;t the goal. Removing the mechanical work so you can focus on the creative work is.</>),
              },
              {
                question: "Which metrics do you suggest for measuring success in the AI-dominated world for design systems?",
                answer: (<>Yesenia&apos;s answer was sharp: measure how many tokens it takes to query something without documentation, then with documentation. Tokens = money. I&apos;d add two more: <strong className="text-white">time-to-first-component</strong> (how fast can a new engineer ship a compliant component?) and <strong className="text-white">brand consistency across outputs</strong> (does the social post look like it came from the same brand as the product UI?). The second one is what <Link href="/thoughts/beyond-ui" className="text-[var(--color-accent)] no-underline hover:underline">Beyond the Screen</Link> is about.</>),
              },
              {
                question: "Would it be overkill to create an AI agent that answers questions to new joiners about design systems?",
                answer: (<>The opposite of overkill — it&apos;s the minimum viable use case. CLAUDE.md already does this. A new joiner reads the context file and understands the brand, the tokens, the methodology, the voice. An agent trained on that context can answer &ldquo;which button variant do I use here?&rdquo; without bothering anyone on the team. This is on my roadmap too — an AI avatar on my portfolio that talks to visitors about my work, trained on the same CLAUDE.md that built the site.</>),
              },
              {
                question: "Did you feed it all documentation or only selected parts? How did you decide what to include?",
                answer: (<>Selected parts. Always. A context dump is worse than no context — it drowns the signal in noise. CLAUDE.md is curated: brand positioning, design tokens, writing voice, key decisions, methodology. Not every component prop. Not every colour value. The system needs to know <em>why</em> you chose blue, not just that blue is #2563eb. Quality of context beats quantity every time.</>),
              },
              {
                question: "Did you consider multiplying your agent depending on context — design system, brand, marketing?",
                answer: (<>Already done. I run four specialised agents: UI Designer (visual decisions), Frontend Developer (React/TypeScript implementation), UX Researcher (domain analysis, content), and Content Strategist (thought leadership, LinkedIn, conference abstracts). Plus a Stakeholder Simulator that role-plays executive conversations. Same CLAUDE.md, different agent definitions. The <Link href="/system/agents" className="text-[var(--color-primary)] no-underline hover:underline">System section shows all of them</Link>.</>),
              },
              {
                question: "Is there public documentation on the road to get there — from skills, context, MCPs to component generation?",
                answer: (<>My <Link href="/system" className="text-[var(--color-secondary)] no-underline hover:underline">System section</Link> is exactly this. The CLAUDE.md is public. The agent definitions are public. The build process is documented. The site IS the documentation — it demonstrates the methodology it describes. That&apos;s the whole point of proof-of-practice.</>),
              },
              {
                question: "How do you align with engineering when they use MUI and don't want to move away from it?",
                answer: (<>This is the <Link href="/thoughts/approved-in-theory" className="text-[var(--color-warm)] no-underline hover:underline">Approved in Theory</Link> problem in real-time. The answer: stop asking for a migration. Start showing what&apos;s possible alongside MUI. Build a NorthStar prototype that makes the current state look dated. &ldquo;Show and not just tell&rdquo; — as one audience member put it. The prototype argues better than any proposal deck. And if you truly can&apos;t replace MUI, the agentic layer sits on top — CLAUDE.md doesn&apos;t care what component library is underneath.</>),
              },
              {
                question: "UX teams that are shipping code to production — what do your team compositions look like?",
                answer: (<>Mine looks like this: one person. 50% Designer, 30% Developer, 20% Product Owner. Four AI agents. One design system. The composition isn&apos;t about headcount anymore — it&apos;s about capability per person multiplied by the quality of the system they&apos;re directing. A senior architect with agentic tooling ships more than a team of five without it.</>),
              },
              {
                question: "How do you create the .md context files?",
                answer: (<>You don&apos;t need to learn markdown. You need to know <em>what to say</em>. The syntax is trivial — headings, bullets, bold. That&apos;s 90% of it. The hard part is knowing what context the agent needs, and that comes from doing the work. You don&apos;t write the .md in one sitting. You build it through practice. Start with positioning, tokens, and voice. Then every time the agent gets something wrong, that&apos;s a missing context entry. The .md is a living document that gets sharper with every session. This site is the proof — CLAUDE.md built this, and this built CLAUDE.md.</>),
              },
              {
                question: "Any tips for introducing AI into highly regulated environments?",
                answer: (<>I&apos;ve worked in heavily regulated environments — healthcare (Helix, PenCS), government, enterprise. The reality: you can&apos;t use half the software you want, let alone AI. And as teams get smaller, you have fewer people to fight procurement battles. The answer: <strong className="text-white">use everything in discovery</strong>. The NorthStar prototype doesn&apos;t touch production data, doesn&apos;t ship to users, doesn&apos;t need security clearance. It&apos;s an idea expressed in the fastest way possible. <strong className="text-white">Delivery is the regulated environment</strong> — and that&apos;s fine. The NorthStar already told you what to build. Discovery stays fast and unconstrained. Delivery stays safe and compliant.</>),
              },
              {
                question: "Why let AI generate a UI for the user instead of AI doing the task directly?",
                answer: (<>Because AI needs direction and approval. It doesn&apos;t act autonomously — it proposes, the human confirms. That requires a surface to communicate through. But here&apos;s the thing: that surface doesn&apos;t have to be buttons and forms. It could be voice, visual, conversational — any medium where the human can understand what the AI is proposing and say yes or no. The UI becomes a <strong className="text-white">communication layer between human and AI</strong>, not a control panel. The design system still governs it — consistency, brand, accessibility — but the form factor shifts. The UI isn&apos;t going away. It&apos;s changing form.</>),
              },
              {
                question: "Don't we lose usability when the end user experience subtly shifts each time it's regenerated?",
                answer: (<>Users adapt. We already accept UI changes — app updates, A/B tests, responsive layouts. AI-generated surfaces are the same muscle, just faster. And with MCP, the AI is surfacing screens from apps you already know — it&apos;s routing you there by intent instead of navigation. You&apos;re not learning a new UI, you&apos;re being shown parts of the existing one you didn&apos;t know existed. The key: <strong className="text-white">the escape hatch</strong>. Close the generated surface, return to the known state. No stress. The design system documents both — the adaptive surfaces and the stable base state you return to. That&apos;s the safety net.</>),
              },
              {
                question: "How do you deal with users who don't have clear intent?",
                answer: (<>Get clear. More input — understand the domain, its users, their context, their current use of the software. Unclear intent isn&apos;t a failure of the system, it&apos;s insufficient context. And it&apos;s not a permanent state — it&apos;s per-user, per-moment. The same doctor might have clear intent for a chronic disease review but unclear intent for an unfamiliar condition. When intent is unclear, fall back to directive UI — the structured, predictable interface. When intent is clear, generate adaptive surfaces. Both coexist. The system doesn&apos;t guess — it either knows enough to adapt, or it shows you the safe default.</>),
              },
            ].map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[(i + 3) % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 18).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-lg font-semibold leading-[1.3] ${colorCycle[(i + 3) % colorCycle.length].label}`}>
                    &ldquo;{q.question}&rdquo;
                  </h3>
                </div>
                <div className="pl-11">
                  <p className="text-[16px] text-white/55 leading-relaxed">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Pattern */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">
            The Pattern
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Notice what nobody asked
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Nobody asked about colours or typography. Nobody asked about Figma plugins. Nobody
              asked which icon set to use or how to name a colour token.
            </p>
            <p>
              Every question was about integration, governance, politics, and scale. How do you
              connect the toolchain end-to-end? How do you get engineering to trust it? How do you
              make it survive a tool outage or a corporate security audit? How do you start when
              the codebase is already a disaster?
            </p>
            <p>
              The design systems conversation has moved beyond UI. The people in that room
              aren&apos;t asking about design. They&apos;re asking about infrastructure,
              organisational change, and resilience. Those are engineering questions. Those are
              CTO questions. Those are the questions that get asked when a discipline has matured
              past aesthetics and into architecture.
            </p>
            <p className="text-[var(--color-warm-light)]">
              The industry is ready. The organisations just haven&apos;t caught up yet.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">
              &ldquo;
            </span>
            Design systems architects aren&apos;t asking about colour tokens anymore. They&apos;re
            asking about MCP security, legacy codebase integration, and organisational politics.
            The discipline has grown up.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">
            IDS 2026 Q&amp;A — the questions the slides didn&apos;t cover
          </cite>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Have a question from your own room after the talk?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If you&apos;re working through any of these integration, governance, or political
            challenges — I&apos;d like to talk. These are the problems I&apos;ve spent the last
            several years building answers for.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://cal.com/lincmitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Book a Conversation
            </a>
            <Link
              href="/thoughts/beyond-ui"
              className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
            >
              Beyond the Screen
            </Link>
            <Link
              href="/thoughts"
              className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
            >
              More Thoughts
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">
          This page was generated via Claude Code prompts — written in the room after the talk,
          where the real conversations happen.
        </p>
        <p className="text-[13px] text-[#475569]">
          <Link href="/" className="text-blue-400 no-underline">
            lincolnmitchell.io
          </Link>{" "}
          &middot; Interfaces-N-Creatives since 2008
        </p>
      </footer>
    </>
  );
}
