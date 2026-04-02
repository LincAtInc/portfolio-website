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

        {/* Shipping Without a System — Freya Stockman's talk */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">
            Shipping Without a System
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            From the &ldquo;I&apos;m not an engineer but I ship code&rdquo; talk
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Freya Stockman (Relevance AI) gave a talk that a lot of designers needed to hear: you can ship production code without calling yourself an engineer. The audience loved it. Then they started asking the harder questions &mdash; the ones that come up when you try to do this at scale, inside a real team, with a real codebase. Here are my answers.
          </p>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {[
              {
                question: "This is brilliant for solo work — but what happens when five designers are all shipping code independently? How do you keep it consistent?",
                answer: (<>That&apos;s exactly the right question. And it&apos;s the one the talk didn&apos;t need to answer, because Freya&apos;s context is her own work. But yours isn&apos;t. The answer is a design system. Not a Figma library &mdash; a machine-readable context layer that every agent reads before it writes a single line. When five designers are each prompting their own AI, the consistency doesn&apos;t come from them. It comes from the shared system they&apos;re all referencing. CLAUDE.md, design tokens, component contracts. The agents converge on the same output because they&apos;re reading the same instructions. Without that layer, you don&apos;t have five designers shipping code. You have five separate codebases that happen to look similar on a Tuesday.</>),
              },
              {
                question: "What does an engineer think when they inherit code that a designer shipped? Is that a real problem?",
                answer: (<>Yes. I&apos;ve been both sides of that conversation. Here&apos;s the honest version: AI-generated code from a designer without system context is often structurally fine and semantically fragile. It works. It doesn&apos;t compose. The variable names are arbitrary, the component boundaries are wrong, and the styling is inline. An engineer can use it &mdash; but they&apos;re essentially rewriting it while pretending to extend it. The fix isn&apos;t &ldquo;designers should code better.&rdquo; The fix is a design system that constrains what the AI produces. When the agent is reading a token file and a component API, it generates code that an engineer recognises. Same naming conventions. Same component structure. Same styling approach. The design system is the shared language. Without it, you&apos;re shipping dialects.</>),
              },
              {
                question: "Freya said she's 'not an engineer.' Lincoln, you say you're 50% designer / 30% developer. Does that distinction still matter?",
                answer: (<>It matters, but not in the way people think. Freya&apos;s point is liberating: you don&apos;t need an engineering identity to produce engineering outputs. That&apos;s true. What she&apos;s doing in discovery &mdash; exploring, prototyping, validating ideas fast &mdash; is the exact work AI was built to amplify. Go crazy there. Ship everything. The hybrid identity matters when you cross into delivery. When your prototype needs to become a component in a living design system. When your token choices affect a production build. When your naming conventions have to match the team&apos;s existing architecture. That&apos;s not gatekeeping. That&apos;s the <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">INC framework</Link> doing its job &mdash; Ideate freely, then Narrate carefully so that Create is consistent. Freya&apos;s doing brilliant Ideate work. The design system is what makes it repeatable.</>),
              },
              {
                question: "What if there is no design system at the company where I'm trying to do this? Do I need one before I can start?",
                answer: (<>No. Start without one. That&apos;s the point of NorthStar Prototyping. Explore first. Ship the idea. Prove the value. A prototype that works is better evidence than a proposal for a design system that doesn&apos;t exist yet. Freya&apos;s approach is exactly right for this moment &mdash; move fast, show the possibility, don&apos;t wait for infrastructure permission. But here&apos;s what I&apos;d say to do in parallel: as you&apos;re prototyping, notice what decisions you&apos;re making repeatedly. Colour choices. Button behaviour. Type scale. Spacing. Those repeated decisions are your design system waiting to be written down. The system doesn&apos;t precede the work &mdash; it emerges from it. Start the CLAUDE.md on day one. Even if it&apos;s three lines. That&apos;s the seed. Every decision you make consciously is a constraint you won&apos;t have to re-argue tomorrow. By the time you&apos;ve shipped five prototypes, you have a design system. You just need to name it. <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">Here&apos;s what mine looks like.</Link></>),
              },
              {
                question: "Is this the end of the traditional UX process — research, wireframes, handoff? Are those skills still worth learning?",
                answer: (<>The skills are worth more than ever. The delivery mechanism has changed. Research still tells you what to build. The difference is you can now prototype the answer in the same session as the insight, instead of waiting three sprints. Wireframes still test information architecture &mdash; but you can generate five variants in twenty minutes instead of one in a day. Handoff still communicates intent to engineering &mdash; but increasingly the handoff IS the code, not a Figma file with a red-line spec. What&apos;s gone: the artificial distance between thinking and making. The UX process was stretched over weeks partly because the tools made it slow. AI collapses that distance. The research and prototyping still happen. They just happen faster, and closer together. Freya is doing exactly this &mdash; compressing the loop from idea to shipped output. That&apos;s not the end of the UX process. That&apos;s what the UX process always wanted to be. The design system is <Link href="/thoughts/beyond-ui" className="text-[var(--color-accent)] no-underline hover:underline">what keeps it honest at scale</Link> &mdash; so that the faster loop doesn&apos;t produce faster chaos.</>),
              },
              {
                question: "How do you ensure the output is accessible?",
                answer: (<>The design system handles this. Semantic HTML, ARIA patterns, colour contrast ratios &mdash; these are encoded in the component contracts and token values, not left to the individual prompt. When the agent reads the system, it generates accessible code by default. When it doesn&apos;t, that&apos;s a missing constraint in the system, not a failure of the designer. Fix the system, not the output. Accessibility isn&apos;t a checklist you run after shipping. It&apos;s a constraint you encode before prompting.</>),
              },
              {
                question: "I can&apos;t avoid hardcoding with Tailwind and Cursor. Does the code still need to be reviewed by a developer?",
                answer: (<>Yes. Always. That&apos;s not a weakness of the approach &mdash; that&apos;s how software works. Every engineer&apos;s code gets reviewed. The question is what the reviewer is checking. Without a design system, they&apos;re checking everything: naming, structure, accessibility, brand compliance. With a design system constraining the agent, they&apos;re checking intent and edge cases. The review burden shrinks because the system already handled the mechanical correctness.</>),
              },
              {
                question: "You&apos;re saying the double diamond is expanding. NNG says it&apos;s compressing. Others say it&apos;s dead. Which is it?",
                answer: (<>All three are true, depending on where you sit. For delivery teams, it&apos;s compressing &mdash; AI makes execution faster. For discovery, it&apos;s expanding &mdash; AI lets you explore more possibilities than you ever could manually. The people who say it&apos;s dead are watching the diamond from the delivery side, where the gap between idea and output has collapsed. But the divergent phase &mdash; the exploration, the &ldquo;what if&rdquo; &mdash; that&apos;s wider than ever. NorthStar Prototyping lives in that expansion. Freya&apos;s work proves it. The diamond isn&apos;t dead. It&apos;s asymmetric now.</>),
              },
              {
                question: "Is there a use case for vibe-coded apps beyond prototypes? Could it be sold, support multiple users, receive updates?",
                answer: (<>Today, not without engineering infrastructure underneath. Vibe-coded apps are discovery artefacts. They prove the idea, validate the interaction, test the flow. Production requires auth, databases, CI/CD, error handling, security &mdash; the boring stuff that AI doesn&apos;t add unless you ask for it. But here&apos;s the shift: the prototype IS the spec. Instead of handing off a Figma file, you hand off working code that an engineer refactors into production. The gap between prototype and product shrinks every month.</>),
              },
              {
                question: "Do you use AI for TDD and E2E testing in your vibe coding work?",
                answer: (<>Not in discovery. Discovery prototypes don&apos;t need test suites &mdash; they need to be fast and disposable. But the moment code moves toward production, yes. Claude Code writes Playwright tests for this portfolio site. The design system&apos;s component contracts define what to test. The agent knows the expected behaviour because the context file describes it. Testing isn&apos;t opposed to vibe coding &mdash; it&apos;s what happens when vibe coding crosses into delivery.</>),
              },
              {
                question: "Being a &apos;full stack product designer&apos; risks stretching thin and being underpaid as a developer. How do you protect the discovery mindset?",
                answer: (<>This is the most important question in the list. The risk is real &mdash; if you let &ldquo;I can ship code&rdquo; become &ldquo;I am the developer,&rdquo; you&apos;ve traded your most valuable skill for your least differentiated one. The guardrail is the INC framework: Ideate is YOUR job. Create is the AGENT&apos;S job. The design system &mdash; the Narrate layer &mdash; is the bridge between them. You stay in discovery. The system handles delivery. The moment you&apos;re debugging CSS for three hours, you&apos;ve lost the plot.</>),
              },
              {
                question: "Did you create a Design System for the webpage or did Cursor create it by itself?",
                answer: (<>I directed it. The AI created it with my design and code direction. And in delivery, a UI designer refines it &mdash; in Figma, in code, wherever they work best. That&apos;s the point: the design system starts in discovery as intent and tokens, then gets polished by specialists who contribute back to the shared context. Everyone contributes to the narrative layer &mdash; designer, engineer, product owner. And anyone with an idea can draw from it. The system is a commons, not a deliverable. Figma isn&apos;t where it begins. It&apos;s where it gets refined.</>),
              },
              {
                question: "How do you do dev handoff after coming up with designs in AI tools?",
                answer: (<>The handoff IS the code. Not a Figma file with annotations. Not a Confluence page with screenshots. Working code in a branch, built against the design system&apos;s tokens and components. The engineer reviews it like any other PR. The prototype and the handoff are the same artefact. No translation layer. No &ldquo;the design said X but the build does Y.&rdquo;</>),
              },
              {
                question: "Do you think the future is no longer in Figma, but instead prototyping and exploration will be in code?",
                answer: (<>Figma isn&apos;t going away &mdash; but its role is changing. Figma becomes a downstream output, not the origin of truth. Code is the source. Figma reflects it via Code Connect and MCP. I still use Figma for spatial thinking, flow mapping, and stakeholder communication. But the component library lives in code, the tokens live in CSS custom properties, and the agent reads the code &mdash; not the Figma file. Explore wherever you think best. Just make sure the system of record is code.</>),
              },
              {
                question: "Are your context docs shared somehow, for collaborating on building them?",
                answer: (<><Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">CLAUDE.md lives in the repo</Link>. It&apos;s version-controlled. Every team member reads the same context. Every agent reads the same context. That&apos;s the collaboration model &mdash; not a shared Google Doc, but a shared source of truth co-located with the code it describes. PRs to CLAUDE.md are design decisions. And here&apos;s the reframe: everyone contributes to the narrative. The designer adds voice guidelines. The engineer adds component contracts. The PO adds domain language. The system grows because the whole team feeds it.</>),
              },
              {
                question: "How do you ensure the .md files are well-written but not too verbose?",
                answer: (<>Curation, not documentation. A context dump is worse than no context &mdash; it drowns the signal. CLAUDE.md contains positioning, tokens, voice, methodology, key decisions. Not every component prop. Not every colour value. The agent needs to know WHY you chose blue, not just that blue is #2563eb. When the file gets too long, that&apos;s a smell &mdash; split it, or delete the parts the agent never uses. Quality of context beats quantity every time.</>),
              },
              {
                question: "Do you have suggestions for people who can&apos;t spend $200 per month on Agentic IDEs?",
                answer: (<>Claude Code has a free tier. VS Code is free. CSS custom properties are free. A CLAUDE.md file costs nothing. The most expensive part of this workflow is the thinking, not the tooling. Start with what you have. The context file approach works with any LLM that reads markdown &mdash; that&apos;s the whole point of tool-agnostic infrastructure. The system doesn&apos;t require premium tools. It requires clear intent.</>),
              },
              {
                question: "Freya says &apos;make the models fight.&apos; Do you switch between Claude, GPT, and Gemini?",
                answer: (<>Yes &mdash; but not the way she means. My Claude agents are the team. They do the work &mdash; design, code, research, content &mdash; all reading the same CLAUDE.md, all embedded in the design system. Other models are the opposition. I throw the output at GPT or Gemini and say &ldquo;what&apos;s wrong with this?&rdquo; They don&apos;t know my system, my brand, my context &mdash; which makes them perfect critics. They spot what my own agents are blind to precisely because they&apos;re NOT embedded in the narrative. It&apos;s like having an in-house team and an external reviewer. The team builds. The outsider stress-tests. Same principle as Freya&apos;s &mdash; productive disagreement &mdash; but the disagreement comes from different contexts, not just different models.</>),
              },
            ].map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[(i + 1) % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 31).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-lg font-semibold leading-[1.3] ${colorCycle[(i + 1) % colorCycle.length].label}`}>
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

        {/* Context > Probability — Jesse Gardner's talk */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">
            Context &gt; Probability
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            From the Context &gt; Probability talk
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Jesse Gardner (Director User Research, New York State) built a custom MCP server for the NYS Design System and cut token costs by 85%. A small team serving dozens of government agencies. He called their philosophy &ldquo;curators, not innovators.&rdquo; It&apos;s one of the clearest talks of the conference on what design systems become when they&apos;re built as infrastructure rather than component catalogues.
          </p>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {[
              {
                question: "How can design systems act as context for AI, not just UI?",
                answer: (<>Jesse&apos;s framing says it directly: context over probability. The design system isn&apos;t a library of buttons &mdash; it&apos;s a body of knowledge. Component names, token values, accessibility rules, usage guidelines, anti-patterns. When that knowledge is structured so an AI can query it, the system stops being a resource you consult and becomes infrastructure the agent runs on. My <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">CLAUDE.md</Link> does this through prose and markdown. Jesse&apos;s MCP server does it through typed tool definitions. Different form, same function: giving the AI the WHY so it doesn&apos;t have to guess.</>),
              },
              {
                question: "What does it mean in practice for a design system to be AI infrastructure?",
                answer: (<>It means the system has two audiences: humans and machines. Most design systems are built for one. The human audience needs Storybook, docs sites, Figma libraries &mdash; all good. The machine audience needs structured, queryable, predictable interfaces. Jesse built validate_component_api for exactly this reason &mdash; so the AI can check its own output against the system&apos;s rules before it ships. That&apos;s governance automated. When I talk about <Link href="/headless-ds" className="text-[var(--color-accent)] no-underline hover:underline">agentic design systems</Link>, this is precisely what I mean: a system that enforces itself, not one that relies on human review to catch every deviation.</>),
              },
              {
                question: "What did it take to get your design system machine-readable?",
                answer: (<>Jesse went the TypeScript MCP route &mdash; tool definitions with structured inputs and outputs, served to Claude Code. I went the CLAUDE.md route &mdash; prose, structured headings, decisions captured in plain language. Both work, and they&apos;re complementary not competing. The real cost isn&apos;t technical &mdash; it&apos;s curatorial. You have to decide what the system knows. Jesse&apos;s team spent real time encoding component usage rules, accessibility notes, and token semantics. I spent time encoding brand voice, design decisions, and methodology. Machine-readability isn&apos;t a format &mdash; it&apos;s a commitment to making your implicit knowledge explicit. That&apos;s the hard part.</>),
              },
              {
                question: "Can you explain the difference between using Figma MCP with internal design files versus building a custom MCP server?",
                answer: (<>Jesse answered this well: Figma MCP pulls structured component data from a designer&apos;s Figma file &mdash; properties, variants, auto-layout. A custom MCP server lets AI build anything that follows your design system&apos;s rules, with no Figma file required. I&apos;d add a third dimension: CLAUDE.md sits between both. Figma MCP knows the visual specification. Custom MCP validates the code. CLAUDE.md explains the intent &mdash; why this component exists, what problem it solves, when not to use it. You need all three for a complete picture.</>),
              },
              {
                question: "How much trial and error did it take to feel confident in your MCP server setup?",
                answer: (<>Jesse said roughly a month, with ongoing refinement &mdash; and that sounds right. Confidence in this kind of infrastructure isn&apos;t a threshold you cross, it&apos;s a gradient you climb. The first week you&apos;re fixing tool schemas. The second week you&apos;re tuning which context gets passed. A month in you trust the core loop. Six months in you&apos;re refining edge cases. My experience with CLAUDE.md was identical &mdash; the first version was 20 lines and got things wrong constantly. The current version is hundreds of lines and gets things right most of the time. The process doesn&apos;t end. It compounds.</>),
              },
              {
                question: "Any tips on managing content with a design system?",
                answer: (<>Treat content as a first-class token. Jesse&apos;s system encodes component documentation alongside component APIs &mdash; that&apos;s content as infrastructure. Most design systems separate content guidelines into a document nobody reads. Fold it in. Write rules the AI can consume: &ldquo;headings use sentence case,&rdquo; &ldquo;error messages name the field and tell the user what to do,&rdquo; &ldquo;button labels are verbs.&rdquo; The agent reads those rules exactly as it reads spacing tokens. Content governance scales the same way visual governance does &mdash; through machine-readable constraints, not style guides in a PDF.</>),
              },
              {
                question: "How do you practically integrate AI tools within the constraints of a public-sector or regulated environment?",
                answer: (<>Jesse served dozens of New York State agencies. I&apos;ve worked in healthcare &mdash; Helix at Telstra Health, PenCS. The answer is the same in both contexts: separate discovery from delivery. In discovery &mdash; NorthStar prototyping, early exploration, stakeholder alignment &mdash; you can move fast and use the best tools available. No production data, no compliance risk. In delivery &mdash; the code that ships to real users &mdash; you&apos;re constrained, and rightly so. Jesse&apos;s validate_component_api is delivery infrastructure: it exists precisely because the output needs to be trustworthy. Build the wall between environments deliberately and you can move quickly on both sides.</>),
              },
              {
                question: "How do you ensure quality for new components or patterns generated by AI?",
                answer: (<>Jesse&apos;s &ldquo;curators, not innovators&rdquo; framing is the key. The team&apos;s job isn&apos;t to invent new patterns &mdash; it&apos;s to evaluate whether AI-generated patterns hold up against existing user research, accessibility standards, and brand guidelines. That&apos;s a quality gate, not a creative brief. In INC terms, this is N&apos;s role: the Narrate layer encodes what good looks like. The agent generates against those constraints. The human reviews for intent and edge cases, not basic compliance. Don&apos;t try to automate both &mdash; you&apos;ll get efficient outputs that miss the point.</>),
              },
              {
                question: "How do you keep your sources in sync &mdash; documentation, code, design, AI instructions?",
                answer: (<>Jesse said his team is working on a shared repo where the whole team can update agents, skills, and a CLAUDE.md &mdash; still TBD. That&apos;s exactly the right direction. The sync problem is a governance problem wearing a technical costume. The real question is: who owns the source of truth? In Jesse&apos;s case, the MCP server is the delivery source of truth. In mine, CLAUDE.md is the discovery source of truth. When design changes, the token file updates. When methodology changes, CLAUDE.md updates. The tooling reflects the decision &mdash; not the other way around. That&apos;s the <Link href="/thoughts/the-middleware-problem" className="text-[var(--color-secondary)] no-underline hover:underline">N layer in INC</Link>.</>),
              },
              {
                question: "Many design teams have been reduced due to AI. What is your take on teams shrinking to mainly lead and principal positions?",
                answer: (<>Jesse has six people serving dozens of government agencies. I have one person plus agents serving this entire site. The question assumes shrinking is the problem. I think the capability expansion is the story. A six-person team that serves the scope of a sixty-person team isn&apos;t a tragedy &mdash; it&apos;s proof the infrastructure works. What gets harder is the invisible cost: when a small team carries the knowledge of a large one, the N layer has to be genuinely robust. Verbal knowledge dies when someone leaves. CLAUDE.md doesn&apos;t. The answer to team shrinking isn&apos;t to resist it &mdash; it&apos;s to build the context infrastructure so deeply that the knowledge outlasts the headcount. That&apos;s <Link href="/thoughts/the-middleware-problem" className="text-[var(--color-warm)] no-underline hover:underline">The Middleware Problem</Link>.</>),
              },
            ].map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[(i + 4) % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 49).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-lg font-semibold leading-[1.3] ${colorCycle[(i + 4) % colorCycle.length].label}`}>
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

        {/* Encoding Governance — Cristian Morales Achiardi's talk */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">
            Encoding Governance
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            From the &ldquo;Encoding governance on agentic design systems&rdquo; talk
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Cristian Morales Achiardi (Design Engineer, Enara Health) built something I recognise immediately: a solo-operated agentic design system in a healthcare context, code as the source of truth, governance as an output, and no permission from anyone to do it. His three primitives &mdash; skills, rules, instructions &mdash; map directly onto how I structure agent context. The audience asked sharp questions. Several went unanswered. These are my answers.
          </p>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {[
              {
                question: "Which is the value for a designer to know all the technical things of the process you have shown?",
                answer: (<>Cristian&apos;s answer is right: ownership. When you understand the technical layer, you can own the quality of what gets implemented &mdash; not just what gets designed. But I&apos;d go further. The value isn&apos;t knowing how to write JavaScript. It&apos;s knowing how the system works well enough to encode your decisions into it. When I write a <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">CLAUDE.md</Link>, I&apos;m not writing code &mdash; I&apos;m encoding intent so precisely that the system produces the right code without me touching it. That&apos;s a design skill, not a development skill. The designer who can do that has removed the interpretation gap entirely.</>),
              },
              {
                question: "Are you using multi-agents with skills?",
                answer: (<>Cristian doesn&apos;t &mdash; plan mode and subagents are enough for his scale, and that&apos;s a sensible call. I do. I run named agents with persistent memory committed to git: UI Designer, UX Researcher, Frontend Developer, Content Strategist. Each reads the same CLAUDE.md but carries its own specialisation and memory of past decisions. The difference matters at scale. Cristian acknowledged &ldquo;a lot of stuff lives on my head&rdquo; &mdash; that&apos;s the problem named agents with written memory solve. The knowledge doesn&apos;t leave with the person. It lives in the agent definition, in git, readable by anyone &mdash; or any agent &mdash; who inherits the work. The <Link href="/system/agents" className="text-[var(--color-secondary)] no-underline hover:underline">System section shows how I&apos;ve structured this</Link>.</>),
              },
              {
                question: "What tools can you recommend to fix a legacy design system?",
                answer: (<>Cristian&apos;s approach is the right one: build a skill that knows what correct looks like, then run it as a linter across the legacy codebase. His scaffold-component skill generates components against current standards. His token-auditor detects drift. Both work without a full rewrite. I&apos;d add one thing: before you build the linter, write the CLAUDE.md. Define correct. Not as a document nobody reads &mdash; as structured context an agent can query. The linter is only as good as the definition of correctness it enforces. Start there. Build the audit skill second. The <Link href="/headless-ds" className="text-[var(--color-accent)] no-underline hover:underline">headless DS architecture</Link> explains how I structure that definition layer.</>),
              },
              {
                question: "Do you think it&apos;s important to learn React?",
                answer: (<>Cristian put it perfectly: he can&apos;t write a proper JavaScript function and built agentic infrastructure anyway. That&apos;s the honest answer, and I respect it. My answer is different because my context is different. Deep React experience is 30% of my identity &mdash; not because it made me a better designer, but because it made me a better architect. When I specify a component contract, I know what I&apos;m asking the agent to build. When the agent gets it wrong, I know why. But here&apos;s the reframe: you don&apos;t need to learn React to direct an agent that writes React. You need to understand the system well enough to know when the output is wrong. The bar isn&apos;t &ldquo;can you write it.&rdquo; It&apos;s &ldquo;can you evaluate it.&rdquo;</>),
              },
              {
                question: "How do you see the future of AI in automating components and workflows? Will it ever be fully automated?",
                answer: (<>Not fully automated. Not soon. Cristian is honest about this: he refactors his rules every few weeks for overlaps and contradictions, his pipeline is around 80k tokens, and whatever he said at the conference might be wrong by next week. That&apos;s not a weakness &mdash; it&apos;s the discipline being young. The future isn&apos;t a pipeline where nobody makes decisions. It&apos;s a pipeline where the mechanical decisions are automated and the consequential ones are human. &ldquo;Should this component exist at all?&rdquo; is a human question. &ldquo;Does it use the right token?&rdquo; is an automated one. Sustainability beats velocity every time.</>),
              },
              {
                question: "Many design teams have been reduced in size. What&apos;s your take on teams shrinking to mainly lead and principal positions?",
                answer: (<>Cristian&apos;s answer is careful and right: the bottleneck moves, and going faster indefinitely is not sustainable. I&apos;d add what he left implicit. The team shrinks in headcount and expands in capability &mdash; but only if the N layer is robust. A small team carrying large-team knowledge is only viable if that knowledge is externalised. When it lives in someone&apos;s head, it leaves with them. When it lives in CLAUDE.md, in agent definitions, in version-controlled rules, it&apos;s institutional. Cristian admitted &ldquo;a lot lives on my head.&rdquo; That&apos;s the vulnerability. The answer isn&apos;t to resist shrinking &mdash; it&apos;s to encode the knowledge so thoroughly that the work doesn&apos;t depend on any one person. That&apos;s <Link href="/thoughts/the-middleware-problem" className="text-[var(--color-warm)] no-underline hover:underline">The Middleware Problem</Link>.</>),
              },
              {
                question: "Have you done theming tokens for different brands?",
                answer: (<>Cristian hasn&apos;t &mdash; and he said so directly, which I respect. I have. Fun Lab at Dentsu/Merkle was exactly this: multi-brand token architecture across a portfolio of clients, with Chakra UI as the component layer. The pattern: semantic tokens reference primitive tokens, themes swap the primitives, components stay untouched. One button component. Many brand expressions of it. The agent reads the active theme and generates against those values. What makes multi-brand hard isn&apos;t the token architecture &mdash; it&apos;s the governance. Who decides when Brand A&apos;s &ldquo;primary&rdquo; diverges from Brand B&apos;s? That decision needs to be encoded, not left to interpretation.</>),
              },
              {
                question: "Any tips on managing content with a design system?",
                answer: (<>This question came up and nobody answered it. Treat content as a first-class token. Voice guidelines, microcopy rules, error message conventions, heading hierarchies &mdash; these belong in the same context layer as your colour tokens and spacing scale. Most design systems put content guidelines in a PDF nobody reads. Fold them into the machine-readable layer instead. Write rules the agent can consume: &ldquo;button labels are verbs,&rdquo; &ldquo;error messages name the field and tell the user what to do,&rdquo; &ldquo;headings use sentence case.&rdquo; The agent reads those rules exactly as it reads spacing tokens. Content governance scales the same way visual governance does &mdash; through encoded constraints, not style guides. My <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">CLAUDE.md</Link> carries voice as structured rules. Every word on this site was generated against them.</>),
              },
            ].map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[(i) % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 59).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-lg font-semibold leading-[1.3] ${colorCycle[(i) % colorCycle.length].label}`}>
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

        {/* Building Real Systems — Jan Six's talk */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">
            Building Real Systems
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            From the &ldquo;Building real design systems with agents&rdquo; talk
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Jan Six (Principal Product Designer, GitHub / Co-creator, Tokens Studio) gave the most technically complete talk of the conference. AGENTS.md as a router. Rules files for components, tokens, and docs. MCPs that make your brand queryable. He covered the infrastructure layer with more rigour than anyone else &mdash; and was honest enough to say he couldn&apos;t answer everything yet. These are my answers to the questions he left open, and the ones he answered that I want to build on.
          </p>

          <div className="flex flex-col gap-6 max-w-[860px]">
            {[
              {
                question: "This documentation is suitable for agents &mdash; where should it live?",
                answer: (<>Jan&apos;s answer is right: colocated with the component. One folder, one component, one set of rules. Everything the agent needs to work with that component lives next to it. But I&apos;d make the principle explicit. Documentation that lives in a separate docs site is documentation for humans who go looking. Documentation that lives next to the code is context the agent finds automatically. The distinction isn&apos;t cosmetic &mdash; it changes what gets consumed and when. When I structure a headless DS, the rule is simple: if the agent has to navigate away to find it, it won&apos;t.</>),
              },
              {
                question: "Is it better to store component rules as markdown files or structured JSON contract files?",
                answer: (<>Jan said he can&apos;t answer yet &mdash; he hasn&apos;t compared them properly. I&apos;ll give you an opinionated view from experience. Markdown is better for rules and rationale. JSON is better for contracts and data. A component specification has both: the what (JSON &mdash; props, variants, token mappings, accessibility requirements) and the why (markdown &mdash; when to use it, what it replaces, how it behaves across contexts). Nathan Curtis called this &ldquo;components as data&rdquo; and he&apos;s right. The agent reads the JSON to build it. It reads the markdown to understand the intent. Both matter. The answer isn&apos;t markdown or JSON &mdash; it&apos;s a specification format that carries both.</>),
              },
              {
                question: "Is it worth creating your own custom MCP or should you use third-party / open-source?",
                answer: (<>Start with third-party MCPs to validate the workflow. The Tokens Studio MCP, when it ships, will give you brand tokens as queryable infrastructure with no build cost. Use it. If you reach a point where the off-the-shelf MCP can&apos;t express something central to your system &mdash; a custom naming convention, a proprietary component API, a domain-specific rule set &mdash; then build your own. The decision criteria is specificity: if your system has knowledge that generic tooling can&apos;t represent, encode that knowledge yourself. My <Link href="/system/claude-md" className="text-[var(--color-primary)] no-underline hover:underline">CLAUDE.md</Link> is, in effect, a lightweight MCP &mdash; structured context the agent reads before it touches anything. That costs nothing to build and captures the things a generic tool won&apos;t know.</>),
              },
              {
                question: "When should you use multiple rules files vs multiple skills vs multiple agents?",
                answer: (<>Jan gave the clearest answer of the conference on this: always use multiple rules files, and let the AGENTS.md act as a router. I&apos;d add the layer above that. Rules files govern component-level decisions. Skills govern task-level repeatable actions &mdash; scaffold this component, audit these tokens, generate this story. Agents govern context-level specialisation &mdash; the UI Designer agent that knows visual rules, the Content Strategist agent that knows voice rules. The question to ask at each level: is this a constraint, a procedure, or a perspective? Constraints belong in rules. Procedures belong in skills. Perspectives belong in agents. <Link href="/system/agents" className="text-[var(--color-secondary)] no-underline hover:underline">The System section shows how I&apos;ve structured this.</Link></>),
              },
              {
                question: "What is the practical difference between CLI-based agents and IDE-based agents?",
                answer: (<>Jan put it well: CLI agents can do more, and desktop tools are catching up. The practical difference right now is scope. An IDE agent sees the file you&apos;re in, the files you&apos;ve opened, the project context you&apos;ve loaded. A CLI agent sees the whole repository &mdash; it can run audits, refactor across files, commit changes, and iterate on the output of its own previous run. That matters for design systems work specifically. Token audits, component scaffolding, cross-file consistency checks &mdash; these need repository-wide vision. Claude Code operates at that scope. If your workflow involves touching multiple files and evaluating the output holistically, CLI is still the right environment.</>),
              },
              {
                question: "How do CLI agents help us escape &apos;everything looks the same&apos; from generic AI output?",
                answer: (<>Generic AI output looks the same because it draws from the same training distribution &mdash; the entire internet, averaged. Your design system is the antidote. When the agent has your token file, your component contracts, your naming conventions, and your <Link href="/system/claude-md" className="text-[var(--color-accent)] no-underline hover:underline">voice rules</Link> as context, the output space narrows dramatically. It&apos;s not generating from the average &mdash; it&apos;s generating within your constraints. Jan&apos;s architecture makes this concrete: AGENTS.md routes to your rules files, which constrain the agent&apos;s decisions before it touches a line of code. The brand becomes the prior. The result looks like you, not like every other shadcn site.</>),
              },
              {
                question: "How do you structure good context to give to an agent?",
                answer: (<>This is the question the whole conference was circling. Jan&apos;s architecture gives a strong answer for the delivery layer &mdash; rules files by domain, AGENTS.md as the router, docs colocated with components. I&apos;d add the temporal dimension, which Jan touched on and nobody else did: structure context for past, present, and future. Past context is what exists &mdash; the tokens, the components, the established patterns. Present context is the task &mdash; what the agent is being asked to do right now, with what constraints. Future context is intent &mdash; the NorthStar, the direction, the decisions that haven&apos;t been encoded yet but should be. Most systems only give the agent past context. The most powerful context structures give it all three.</>),
              },
              {
                question: "What if you have multiple products across various tech stacks in multiple repositories?",
                answer: (<>Jan covered three viable approaches: a central MCP server that all repositories query, a spanning context folder that multiple repos reference, or a dedicated context repository that agents pull from. All three work. The choice comes down to who owns the source of truth and how it gets updated. My preference is the MCP model at scale, because it separates the knowledge layer from the implementation layer cleanly. Any agent, in any repo, in any stack, can query the brand tokens, the component contracts, the voice rules &mdash; without those rules being duplicated across repositories. The N layer lives once. Everyone draws from it.</>),
              },
              {
                question: "What are the new job rubrics for designers at companies building this way?",
                answer: (<>Jan said designers who prototype with AI are in higher demand at GitHub. That&apos;s a data point, not a rubric. Here&apos;s my read on the emerging rubric. The new bar isn&apos;t &ldquo;can you code&rdquo; &mdash; it&apos;s &ldquo;can you direct a system.&rdquo; Can you write specifications precise enough for an agent to implement correctly? Can you evaluate the output and know when it&apos;s wrong? Can you encode intent into context files that outlast any single conversation? Those are design skills applied to a new medium. The boundary that&apos;s blurring isn&apos;t between design and engineering. It&apos;s between authorship and specification.</>),
              },
              {
                question: "Storybook as a canvas for creative expression &mdash; can you elaborate?",
                answer: (<>Jan&apos;s framing here is genuinely exciting. Most teams use Storybook as documentation &mdash; a catalogue of components in their permitted states. Jan is proposing something different: Storybook as the place where designers build, explore, and test new directions inside the live system. Not a handoff tool. Not a reference library. An active design surface. When Storybook is connected to a CLI agent with the full design system as context, it becomes generative. You can prompt a new component variant, have the agent scaffold it, see it render in Storybook in real time, and evaluate it against the existing system &mdash; all without leaving the design environment. That&apos;s not vibe coding. It&apos;s directed creation inside a constrained, principled system.</>),
              },
            ].map((q, i) => (
              <div
                key={i}
                className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${colorCycle[(i + 2) % colorCycle.length].border} rounded-xl`}
              >
                <div className="flex gap-6 items-start mb-5">
                  <span className="font-mono text-[11px] text-white/20 w-5 pt-1 shrink-0">
                    {String(i + 67).padStart(2, "0")}
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
