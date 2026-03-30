import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How This Was Built | Lincoln Mitchell",
  description:
    "Real conversations, real failures, real corrections. See how one person and six AI agents actually built this site — including the branches that got burned.",
};

const buildStats = [
  { value: "6", label: "AI Agents", annotation: "Each with defined roles and boundaries" },
  { value: "1", label: "CLAUDE.md", annotation: "Single source of truth for everything" },
  { value: "8", label: "Thought Pages", annotation: "Written by Content Strategist, built by FED Developer" },
  { value: "0", label: "Alignment Meetings", annotation: "Vision flows through context, not calendars" },
];

const burns = [
  {
    attempt: "Static HTML site with inline CSS",
    whatFailed: "Couldn't scale. Adding a new page meant copy-pasting 400 lines of HTML. Design tokens were CSS variables but nothing consumed them programmatically. The site described a design system it didn't actually use.",
    whatILearned: "The site must practise what it preaches. If I'm selling agentic design systems, the site needs to BE one. Migrated to Next.js with Tailwind and real token consumption.",
    phase: "create" as const,
  },
  {
    attempt: "Letting the FED Developer write content",
    whatFailed: "The developer agent optimised for structure, not voice. The content was technically correct but read like documentation — no fire, no provocation, no Lincoln in it.",
    whatILearned: "Created a dedicated Content Strategist agent with Lincoln's voice deeply encoded. The developer builds what the strategist writes. Separation of concerns isn't just for code.",
    phase: "narrate" as const,
  },
  {
    attempt: "Designing in Figma first, then implementing",
    whatFailed: "Classic waterfall trap. By the time the Figma design was 'approved', the code had already evolved past it. The design became a constraint instead of an enabler.",
    whatILearned: "NorthStar Prototyping means code IS the design tool. Prototype in code, iterate in code, ship the prototype. Figma is for tokens and components, not page layouts.",
    phase: "ideate" as const,
  },
  {
    attempt: "One massive prompt to build an entire page",
    whatFailed: "Context window overload. The agent lost track of the brief halfway through and started inventing content. The result was impressive-looking but strategically incoherent.",
    whatILearned: "Nate Baldwin's 4-step structured prompting was right: context priming first, then planning, then refinement, then implementation. Never skip straight to build.",
    phase: "ideate" as const,
  },
];

const corrections = [
  {
    context: "Competing Values page introduction",
    agentOutput: "Quinn and Cameron's Competing Values Framework provides a useful lens for understanding organisational culture dynamics and their relationship to design system implementation methodologies.",
    lincolnVersion: "Your design system team has a culture problem. Quinn and Cameron's Competing Values Framework explains why your team is grinding — and the INC framework maps the way out.",
    whyIChanged: "The agent wrote like an academic paper. I needed a diagnosis that makes a design system lead think 'I've been thinking about my team wrong.'",
  },
  {
    context: "Agent team page — the economic comparison",
    agentOutput: "AI agents can significantly reduce the cost of building digital products by automating tasks traditionally performed by multiple team members.",
    lincolnVersion: "This is not about replacing people. It is about what becomes possible when one person has the right methodology and the right tools.",
    whyIChanged: "The agent went for the obvious 'AI saves money' angle. That's threatening, not inspiring. The real message is amplification, not replacement.",
  },
];

const phaseColors = {
  ideate: "border-l-[#ef4444]",
  narrate: "border-l-[var(--color-secondary)]",
  create: "border-l-[var(--color-primary)]",
};

const phaseLabels = {
  ideate: "I — Ideate",
  narrate: "<N> — Narrate",
  create: "C — Create",
};

export default function HowThisWasBuiltPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <nav aria-label="Section navigation" className="max-w-[1440px] mx-auto px-8 md:px-20 pt-20 pb-0">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/system" className="text-white/40 hover:text-white/70 no-underline transition-colors">&larr; The System</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60" aria-current="page">The Process</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-10 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase">Behind the Build</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          This is what it <span className="text-[#ef4444]">actually</span> looked like
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          One person and six agents built this site. Here&apos;s the reality — including the failures, the corrections, and the branches that got burned.
        </p>
      </header>

      <main>
        {/* Stats */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase block mb-4">The Reality</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-12">
            The build in numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {buildStats.map((stat) => (
              <div key={stat.label} className="p-6 bg-[#0a0f1a] border border-[#1e293b] rounded-xl text-center">
                <span className="font-display text-4xl font-bold text-white block mb-2">{stat.value}</span>
                <span className="font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.1em] block mb-2">{stat.label}</span>
                <span className="text-[13px] text-white/30">{stat.annotation}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Burns */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase block mb-4">Things That Went Wrong</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The branches I burned
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Nate Baldwin calls it Branch + Burn. I call it Monday. Every failure below taught me something the success couldn&apos;t have. The knowledge survived. The code didn&apos;t.
          </p>

          <div className="flex flex-col gap-6">
            {burns.map((burn) => (
              <div key={burn.attempt} className={`p-10 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${phaseColors[burn.phase]} rounded-xl`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-[280px] shrink-0">
                    <span className="font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.08em] block mb-1">What I tried</span>
                    <h3 className="font-display text-lg font-semibold text-white/60">{burn.attempt}</h3>
                    <span className="font-mono text-[11px] text-white/20 uppercase tracking-[0.08em] mt-2 block">{phaseLabels[burn.phase]}</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.08em] block mb-1">What failed</span>
                      <p className="text-[15px] text-white/40 leading-relaxed">{burn.whatFailed}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.08em] block mb-1">What I learned</span>
                      <p className="text-[15px] text-white/60 leading-relaxed">{burn.whatILearned}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[#ef4444]/30 font-serif leading-none">&ldquo;</span>
            The quality of input is equal to the quality of output. But the quality of correction is what makes it yours.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The human in the loop</cite>
        </section>

        {/* Before/After */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">Human Correction</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            What the agent wrote vs what I shipped
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            The agents handle volume. I handle voice. Here&apos;s what that looks like in practice — raw agent output on the left, what actually shipped on the right.
          </p>

          <div className="flex flex-col gap-8">
            {corrections.map((item) => (
              <div key={item.context} className="p-10 bg-[#0a0f1a] border border-[#1e293b] rounded-xl">
                <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.08em] block mb-6">{item.context}</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 bg-[#0f172a] rounded-lg border border-[#1e293b]">
                    <span className="font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.08em] block mb-3">Agent output</span>
                    <p className="text-[15px] text-white/30 leading-relaxed italic">&ldquo;{item.agentOutput}&rdquo;</p>
                  </div>
                  <div className="p-6 bg-[#0f172a] rounded-lg border border-[var(--color-accent)]/20">
                    <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.08em] block mb-3">What shipped</span>
                    <p className="text-[15px] text-white/60 leading-relaxed">&ldquo;{item.lincolnVersion}&rdquo;</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#1e293b]">
                  <span className="font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.08em] block mb-1">Why I changed it</span>
                  <p className="text-[15px] text-white/50 leading-relaxed">{item.whyIChanged}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Recursive Proof */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Recursive Proof</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Building the site that describes the methodology, using the methodology
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The CLAUDE.md file that governs agent behaviour was itself written through agent conversations. The thoughts pages that describe I&lt;N&gt;C were built using the I&lt;N&gt;C process. This page about failures was reviewed and corrected by the same human-in-the-loop process it describes.
            </p>
            <p>
              This is not a bug. It is the point. The methodology proves itself by being used to describe itself. If the site reads well, the system works. If the agents stay on-brand, the governance works. If the content provokes, the voice encoding works.
            </p>
            <p className="text-[var(--color-accent)]">
              You are reading the proof right now.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Want to see the raw conversations?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            I&apos;ll walk you through a real build session — the prompts, the agent hand-offs, the corrections, the burns. No polish, no editing. The real thing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[#ef4444] px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity">
              Book a Walkthrough
            </a>
            <Link href="/system/agents" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Meet the Team
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — then corrected by a human. That&apos;s the point.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
