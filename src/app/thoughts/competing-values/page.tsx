import Link from "next/link";
import { Nav } from "@/components/Nav";
import { RevealSection } from "@/components/RevealSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Four Cultures Hiding Inside Your Design System | Lincoln Mitchell",
  description:
    "Your design system team isn't stuck because of tooling. It's stuck because you're running one culture when you need three. Quinn and Cameron's CVF explains why — and the INC framework maps the fix.",
};

/* CVF quadrants in reading order: top-left, top-right, bottom-left, bottom-right */
const quadrants = [
  {
    position: "top-left",
    cvfName: "Clan",
    cvfType: "Collaborate",
    axis: "Internal · Flexible",
    traits:
      "Shared language. Shared context. The team that doesn't need a meeting to align. Culture so strong it's load-bearing.",
    dsRole: "Encodes collective knowledge — CLAUDE.md, tokens, shared narrative.",
    leader: "Facilitator / Mentor",
    failure: "Groupthink — harmony that suffocates conviction",
    accentBorder: "border-[var(--color-secondary)]",
    accentText: "text-[var(--color-secondary)]",
    accentBg: "bg-[var(--color-secondary)]/5",
  },
  {
    position: "top-right",
    cvfName: "Adhocracy",
    cvfType: "Create",
    axis: "External · Flexible",
    traits:
      "Burn freely. Branch freely. Vision over validation. The garage before the handbook. Jazz, not sheet music.",
    dsRole: "NorthStar prototyping — explores possibilities before anyone builds.",
    leader: "Innovator / Entrepreneur",
    failure: "Chaos — brilliant sparks that never become fire",
    accentBorder: "border-[#ef4444]",
    accentText: "text-[#ef4444]",
    accentBg: "bg-[#ef4444]/5",
  },
  {
    position: "bottom-left",
    cvfName: "Hierarchy",
    cvfType: "Control",
    axis: "Internal · Stable",
    traits:
      "Standards. Governance. The machine that runs without you in the room. Reliability at scale.",
    dsRole: "Governed components, versioned tokens, production systems that survive.",
    leader: "Coordinator / Monitor",
    failure: "Bureaucracy — process that protects itself, not the product",
    accentBorder: "border-[var(--color-primary)]",
    accentText: "text-[var(--color-primary)]",
    accentBg: "bg-[var(--color-primary)]/5",
  },
  {
    position: "bottom-right",
    cvfName: "Market",
    cvfType: "Compete",
    axis: "External · Stable",
    traits:
      "Ship. Measure. Win. The culture that doesn't care how it was built — only whether it converts.",
    dsRole: "The customer of the system — converts capability into results at speed.",
    leader: "Competitor / Producer",
    failure: "Burnout — output without reflection, velocity without direction",
    accentBorder: "border-[var(--color-accent)]",
    accentText: "text-[var(--color-accent)]",
    accentBg: "bg-[var(--color-accent)]/5",
  },
];

const incMapping = [
  { dimension: "CVF Culture", ideate: "Adhocracy", narrate: "Clan", create: "Hierarchy" },
  { dimension: "Focus", ideate: "External — what's possible", narrate: "Internal — what we know", create: "Internal — what's reliable" },
  { dimension: "Posture", ideate: "Flexibility — explore without permission", narrate: "Flexibility — encode collaboratively", create: "Stability — govern without apology" },
  { dimension: "Artefact", ideate: "NorthStar prototype", narrate: "CLAUDE.md, design tokens, shared context", create: "Production components, governed code" },
  { dimension: "Failure mode", ideate: "Chaos — vision without traction", narrate: "Groupthink — context without output", create: "Rigidity — standards without soul" },
  { dimension: "Leadership", ideate: "Scout bee — sees what others can't", narrate: "Narrator — translates for every audience", create: "Architect — builds what survives contact with users" },
  { dimension: "AI role", ideate: "Generative — wild, unconstrained, disposable", narrate: "Contextual — informed by encoded knowledge", create: "Constrained — governed by tokens and standards" },
  { dimension: "When to burn work", ideate: "Always. Knowledge survives. Code doesn't.", narrate: "Rarely. Context is the compound asset.", create: "Never. Shipped code must persist." },
];

interface QuadrantProps {
  q: typeof quadrants[number];
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  mobile?: boolean;
}

function QuadrantCard({ q, topRight, bottomLeft, bottomRight, mobile }: QuadrantProps) {
  /* Compose border-radius per grid position so the matrix reads as a unified shape */
  const radius = mobile
    ? "rounded-xl"
    : topRight
    ? "rounded-tr-xl"
    : bottomLeft
    ? "rounded-bl-xl"
    : bottomRight
    ? "rounded-br-xl"
    : "rounded-tl-xl"; /* top-left is the default (Clan) */

  return (
    <div
      className={`p-8 bg-[#0a0f1a] border border-[#1e293b] ${radius} ${q.accentBg} flex flex-col gap-4`}
    >
      {/* Culture label */}
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className={`font-display text-lg font-semibold text-white`}>{q.cvfName}</h3>
          <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${q.accentText}`}>{q.cvfType}</span>
        </div>
        <span className="font-mono text-[11px] text-white/25 uppercase tracking-[0.08em]">{q.axis}</span>
      </div>

      {/* Traits */}
      <p className="text-[14px] text-white/55 leading-relaxed">{q.traits}</p>

      {/* DS role — the key link */}
      <div className={`border-l-2 ${q.accentBorder} pl-3`}>
        <span className="font-mono text-[10px] text-white/25 uppercase tracking-[0.1em] block mb-1">Design systems role</span>
        <p className={`text-[13px] leading-relaxed ${q.accentText} opacity-80`}>{q.dsRole}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1.5 pt-3 border-t border-[#1e293b] mt-auto">
        <div className="flex gap-3">
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.08em] w-[70px] shrink-0 pt-0.5">Leader</span>
          <span className="text-[12px] text-white/55">{q.leader}</span>
        </div>
        <div className="flex gap-3">
          <span className="font-mono text-[10px] text-[#ef4444]/50 uppercase tracking-[0.08em] w-[70px] shrink-0 pt-0.5">Fails as</span>
          <span className="text-[12px] text-white/35 italic">{q.failure}</span>
        </div>
      </div>
    </div>
  );
}

export default function CompetingValues() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase">Framework</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Your design system team has a <span className="text-[var(--color-secondary)]">culture</span> problem
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          Every design system requires three distinct cultures to function. Most teams are stuck in one. Quinn and Cameron&apos;s Competing Values Framework explains why your team is grinding — and the INC framework maps the way out.
        </p>
      </header>

      <main>
        {/* The Four Cultures */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Framework</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Four cultures. Every organisation has all of them.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12 space-y-4">
            <p>
              In 1983, Robert Quinn and Kim Cameron mapped organisational culture onto two axes: internal vs external focus, and flexibility vs stability. Four quadrants emerged. Four cultures that coexist inside every team, every company, every design system.
            </p>
            <p>
              The problem isn&apos;t which culture you have. It&apos;s that you&apos;re probably stuck in one when the work demands you move between three.
            </p>
          </div>

          {/* 2×2 CVF matrix with labelled axes */}
          <RevealSection stagger={true}>
            {/* Desktop: proper grid with axis labels. Mobile: single-column stack. */}
            <div className="hidden md:grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] gap-0">

              {/* Row 0 — top axis labels */}
              {/* Empty corner cell */}
              <div aria-hidden="true" />
              {/* Top-left label: Internal Focus */}
              <div className="flex items-end justify-center pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-white/30">Internal Focus</span>
              </div>
              {/* Top-right label: External Focus */}
              <div className="flex items-end justify-center pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-white/30">External Focus</span>
              </div>

              {/* Row 1 — Flexible label + top two quadrants */}
              {/* Left axis: Flexible */}
              <div className="flex items-center justify-end pr-4">
                <span className="font-mono text-xs uppercase tracking-wider text-white/30 [writing-mode:vertical-rl] rotate-180">Flexible</span>
              </div>
              {/* Quadrant: Clan (top-left) */}
              <QuadrantCard q={quadrants[0]} />
              {/* Quadrant: Adhocracy (top-right) */}
              <QuadrantCard q={quadrants[1]} topRight />

              {/* Row 2 — Stable/Control label + bottom two quadrants */}
              {/* Left axis: Stable */}
              <div className="flex items-center justify-end pr-4">
                <span className="font-mono text-xs uppercase tracking-wider text-white/30 [writing-mode:vertical-rl] rotate-180">Stable / Control</span>
              </div>
              {/* Quadrant: Hierarchy (bottom-left) */}
              <QuadrantCard q={quadrants[2]} bottomLeft />
              {/* Quadrant: Market (bottom-right) */}
              <QuadrantCard q={quadrants[3]} bottomRight />
            </div>

            {/* Mobile: stacked column with axis context as headings */}
            <div className="md:hidden flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-wider text-white/30 text-center mb-2">Flexible · Internal → External → Stable</p>
              {quadrants.map((q) => (
                <QuadrantCard key={q.cvfName} q={q} mobile />
              ))}
            </div>
          </RevealSection>
        </section>

        {/* Quote 1 */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-secondary)]/30 font-serif leading-none">&ldquo;</span>
            Most design system teams don&apos;t have a tooling problem. They have a culture problem they&apos;ve never named.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The diagnosis</cite>
        </section>

        {/* The INC Mapping */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Insight</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            I&lt;N&gt;C isn&apos;t a process. It&apos;s three culture shifts.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12 space-y-4">
            <p>
              When I first saw Quinn and Cameron&apos;s framework, I didn&apos;t learn something new. I recognised something I&apos;d been doing unconsciously for years.
            </p>
            <p>
              Each phase of I&lt;N&gt;C doesn&apos;t just require different skills. It requires a fundamentally different culture — different values, different leadership, different relationship to risk. The teams that struggle aren&apos;t bad at design systems. They&apos;re running Hierarchy culture during a phase that demands Adhocracy. Or demanding Adhocratic energy when the work needs Clan.
            </p>
            <p>
              The framework makes the unconscious conscious. And once you can name the culture each phase needs, you can switch deliberately instead of grinding against the wrong one.
            </p>
          </div>

          <div className="border border-[#1e293b] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px_1fr_1fr_1fr] bg-[#0f172a]">
              <div className="px-5 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]"></div>
              <div className="px-5 py-4 font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">I — Ideate</div>
              <div className="px-5 py-4 font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">&lt;N&gt; — Narrate</div>
              <div className="px-5 py-4 font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">C — Create</div>
            </div>
            {incMapping.map((row) => (
              <div key={row.dimension} className="grid grid-cols-[180px_1fr_1fr_1fr]">
                <div className="px-5 py-4 text-sm text-white/60 font-medium border-b border-[#1e293b]">{row.dimension}</div>
                <div className="px-5 py-4 text-sm text-[#ef4444]/70 border-b border-l border-[#1e293b]">{row.ideate}</div>
                <div className="px-5 py-4 text-sm text-[var(--color-secondary)]/80 border-b border-l border-[#1e293b]">{row.narrate}</div>
                <div className="px-5 py-4 text-sm text-[var(--color-primary)]/80 border-b border-l border-[#1e293b]">{row.create}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Missing Quadrant */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Fourth Quadrant</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Market culture isn&apos;t your job. It&apos;s your customer.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The fourth quadrant — Market — is external focus with stability. Competition. Delivery. Revenue. In organisational terms, it&apos;s the go-to-market engine that converts capability into results.
            </p>
            <p>
              Market culture sits deliberately outside the design system&apos;s concern. But it&apos;s what the entire system exists to serve. A well-functioning I&lt;N&gt;C cycle produces components, tokens, and patterns that Market teams can deploy at speed without thinking about the system underneath.
            </p>
            <p>
              This is where most design system teams get measured wrong. &ldquo;How many features did you ship?&rdquo; is a Market question aimed at a Clan/Hierarchy team. The right question is: &ldquo;How much faster can everyone else ship because of what you built?&rdquo; The design system doesn&apos;t compete. It arms the competitors.
            </p>
          </div>
        </section>

        {/* Nate Baldwin / IDS 2026 */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">IDS 2026</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Branch + Burn is conscious culture-switching
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              At Into Design Systems 2026, Nate Baldwin (Sr Staff Designer, Adobe) presented &ldquo;Prototyping for the Unknown&rdquo;. His method — Branch + Burn — looked like pure Adhocracy: branch freely, prompt vaguely, iterate wildly, take field notes, delete the branch, don&apos;t look back.
            </p>
            <p>
              But his 4-step structured prompting told the real story. Step 1: Context priming — investigate, analyse, validate. &ldquo;Do NOT make code changes.&rdquo; Step 2: Detailed planning — format as prompts, incorporate tests, strict rules. Step 3: Plan refinement. Step 4: Implementation.
            </p>
            <p>
              Look at what he&apos;s actually doing. Step 1 is Clan — building shared understanding before acting. Steps 2–3 are Hierarchy — encoding governance, creating constraints. Step 4 is execution within those constraints. The Branch + Burn part — the Adhocracy — is the exploration phase that feeds the whole cycle.
            </p>
            <p>
              Nate&apos;s &ldquo;don&apos;t make code changes in Step 1&rdquo; isn&apos;t a productivity hack. It&apos;s a culture boundary. He&apos;s protecting Adhocratic exploration from premature Hierarchy. He&apos;s preventing the build impulse from killing the discovery impulse.
            </p>
            <p className="text-[var(--color-secondary)]/80">
              His process isn&apos;t one culture. It&apos;s a deliberate transition across three. The same transition I&lt;N&gt;C encodes as a framework. The difference: I&lt;N&gt;C names what Nate does intuitively, so teams can learn it instead of hoping to hire someone who already does it.
            </p>
          </div>
        </section>

        {/* The Point */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">The Punchline</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            You&apos;re not maintaining a component library. You&apos;re maintaining the Clan.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Read any job description for a design system architect. It reads like a Hierarchy role: maintain the component library, enforce standards, ensure consistency. That&apos;s C work. Necessary. But it&apos;s the least important third of the job.
            </p>
            <p>
              The design system architect&apos;s real work is maintaining the Clan culture that lets everything else function. The shared understanding. The encoded domain knowledge. The context that enables a scout bee to explore wildly during I and an engineer to build reliably during C — without either of them needing a three-hour alignment meeting.
            </p>
            <p>
              CLAUDE.md is a Clan artefact. Not governance — that&apos;s Hierarchy. Not a prototype — that&apos;s Adhocracy. It&apos;s the shared narrative, the &lt;N&gt;, that holds the whole system together. When I write context files, I&apos;m not writing documentation. I&apos;m not writing rules. I&apos;m encoding culture into a format that both humans and AI agents can consume.
            </p>
            <p>
              Token files, naming conventions, component APIs — these feel like Hierarchy artefacts. But their real purpose is Clan. They create shared language. They make implicit knowledge explicit. They let someone new to the team build as if they&apos;d been there for years. That&apos;s not governance. That&apos;s belonging, made machine-readable.
            </p>
            <p className="text-[var(--color-secondary)]">
              The design system IS the Clan culture, made machine-readable. And the design system architect is, whether they know it or not, the Clan leader.
            </p>
          </div>
        </section>

        {/* Quote 2 */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-secondary)]/30 font-serif leading-none">&ldquo;</span>
            When I write CLAUDE.md, I&apos;m not writing documentation. I&apos;m writing culture.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The reframe</cite>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Which culture is your team stuck in?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If your design system team feels like it&apos;s grinding, it&apos;s probably not a tooling problem or a headcount problem. It&apos;s a culture problem — and now you have the language to diagnose it. Name the culture. Name the phase. Switch deliberately.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-secondary)] px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity">
              Diagnose It Together
            </a>
            <Link href="/thoughts" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              More Thoughts
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — culture encoded as code.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
