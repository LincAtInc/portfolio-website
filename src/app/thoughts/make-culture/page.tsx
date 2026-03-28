import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make Culture: Why Design Thinking Became Woke | Lincoln Mitchell",
  description: "Design thinking chose safety over risk. Clan culture over adhocracy. Empathy over action. It's time to make things again.",
};

const problemCards = [
  {
    title: "Suicidal empathy",
    desc: "Empathy without action is self-indulgence. Design thinking fetishised understanding the user to the point where teams spend months in discovery and never ship. Empathy became an end in itself — a way to feel virtuous without taking risk.",
    color: "border-l-[#ef4444]",
  },
  {
    title: "Consensus as paralysis",
    desc: "\"Let\u2019s align stakeholders.\" \"Let\u2019s do another round of feedback.\" \"Let\u2019s make sure everyone feels heard.\" The process became the product. Meetings replaced making. The safest thing to do became nothing — and design thinking gave it a methodology.",
    color: "border-l-[#ef4444]",
  },
  {
    title: "Post-its over prototypes",
    desc: "Somewhere along the way, a wall of sticky notes became the deliverable. The artefact of thinking replaced the artefact of making. Teams felt productive because they\u2019d filled a wall. They\u2019d made nothing real.",
    color: "border-l-[#ef4444]",
  },
  {
    title: "Risk elimination as virtue",
    desc: "Design thinking promised to de-risk innovation. It succeeded — by eliminating innovation entirely. When every idea must survive three rounds of validation before a single pixel is drawn, only safe ideas survive. The methodology selects for mediocrity.",
    color: "border-l-[#ef4444]",
  },
];

const cultureComparison = [
  { dimension: "Decision making", clan: "Consensus — everyone agrees", adhocracy: "Conviction — someone decides and acts" },
  { dimension: "Risk posture", clan: "Eliminate risk before acting", adhocracy: "Accept risk as the cost of learning" },
  { dimension: "Artefact", clan: "Journey maps, personas, post-its", adhocracy: "Working prototypes, code, demos" },
  { dimension: "Speed", clan: "Weeks of alignment before action", adhocracy: "Hours to first prototype" },
  { dimension: "Failure mode", clan: "Nothing controversial gets made", adhocracy: "Wrong things get made fast — and killed fast" },
  { dimension: "Who thrives", clan: "Facilitators, researchers, diplomats", adhocracy: "Makers, builders, scouts" },
  { dimension: "AI relationship", clan: "AI threatens the process", adhocracy: "AI accelerates the making" },
];

const ideoTruth = [
  {
    myth: "IDEO invented design thinking",
    reality: "IDEO prototyped first and retro-fitted the methodology. The shopping cart redesign? They built it. The methodology came after. The secret was always: make something, then learn from it.",
  },
  {
    myth: "You need deep empathy before you can design",
    reality: "You need enough empathy to start. Then you build. The prototype teaches you what the research couldn\u2019t. IDEO knew this — their best work happened in the workshop, not the war room.",
  },
  {
    myth: "Design thinking scales innovation",
    reality: "Design thinking scales the appearance of innovation. It gives large organisations a process that feels creative without requiring anyone to take a creative risk. That\u2019s why enterprises love it.",
  },
];

export default function MakeCulture() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase">Controversial</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Design thinking became <span className="text-[#ef4444]">woke</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          It chose empathy over action. Consensus over conviction. Safety over risk. The methodology that was supposed to unleash innovation became the process that prevents it. It&apos;s time to make things again.
        </p>
      </header>

      <main>
        {/* The Problem */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase block mb-4">The Problem</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            When empathy becomes a cage
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Design thinking started as a liberation — permission to be creative, to prototype, to fail fast. Somewhere it mutated into its opposite: a bureaucratic process that wraps risk in so many layers of validation that nothing dangerous ever gets made.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((card) => (
              <div key={card.title} className={`p-10 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${card.color} rounded-xl`}>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[#ef4444]/30 font-serif leading-none">&ldquo;</span>
            The best way to predict the future is to build it. Not empathise with it. Not align on it. Not post-it-note it. Build it.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The maker&apos;s creed</cite>
        </section>

        {/* Clan vs Adhocracy */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">The Culture Clash</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Clan culture vs adhocracy
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Cameron &amp; Quinn&apos;s Competing Values Framework identifies four organisational cultures. Design thinking is <strong className="text-white">clan culture</strong> — collaboration, consensus, belonging. Innovation requires <strong className="text-white">adhocracy</strong> — risk, experimentation, individual initiative. They&apos;re not the same thing.
          </p>

          <div className="border border-[#1e293b] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px_1fr_1fr] bg-[#0f172a]">
              <div className="px-5 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]"></div>
              <div className="px-5 py-4 font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Clan (Design Thinking)</div>
              <div className="px-5 py-4 font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Adhocracy (Make Culture)</div>
            </div>
            {cultureComparison.map((row) => (
              <div key={row.dimension} className="grid grid-cols-[180px_1fr_1fr]">
                <div className="px-5 py-4 text-sm text-white/60 font-medium border-b border-[#1e293b]">{row.dimension}</div>
                <div className="px-5 py-4 text-sm text-white/40 border-b border-l border-[#1e293b]">{row.clan}</div>
                <div className="px-5 py-4 text-sm text-[var(--color-primary)] border-b border-l border-[#1e293b]">{row.adhocracy}</div>
              </div>
            ))}
          </div>
        </section>

        {/* IDEO's Secret */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Dirty Secret</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            IDEO always prototyped first
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            The company that sold design thinking to the world didn&apos;t actually practice it the way they taught it. Their best work started with making — the methodology was the explanation, not the method.
          </p>

          <div className="flex flex-col gap-6">
            {ideoTruth.map((item) => (
              <div key={item.myth} className="p-10 bg-[#0a0f1a] border border-[#1e293b] rounded-xl">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-[280px] shrink-0">
                    <span className="font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.08em] block mb-1">The myth</span>
                    <h3 className="font-display text-lg font-semibold text-white/60 italic">&ldquo;{item.myth}&rdquo;</h3>
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.08em] block mb-1">The reality</span>
                    <p className="text-[15px] text-white/50 leading-relaxed">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Masculine / Feminine */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Energy Balance</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            We overcorrected
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Innovation requires both energies. The <strong className="text-white">masculine</strong> — risk-taking, decisive action, building before permission, tolerating conflict. And the <strong className="text-white">feminine</strong> — empathy, collaboration, listening, holding space. Neither is complete alone.
            </p>
            <p>
              Design thinking overcorrected toward the feminine. It made empathy a prerequisite for action. It made consensus a prerequisite for decision. It made safety a prerequisite for experimentation. The result? Organisations that are exquisitely empathetic and functionally paralysed.
            </p>
            <p>
              The correction isn&apos;t to eliminate empathy. It&apos;s to restore the balance. <strong className="text-white">Prototype first, empathise through the prototype.</strong> Let the thing you made teach you what the user needs — faster and more honestly than any workshop ever could.
            </p>
            <p className="text-[var(--color-warm-light)]">
              NorthStar Prototyping is adhocratic by design. Build the vision. Test the vision. Let the vision create the conversation that design thinking only talks about having.
            </p>
          </div>
        </section>

        {/* The INC Connection */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Connection</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why I&lt;N&gt;C is not design thinking
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Design thinking says: empathise, define, ideate, prototype, test. Five steps, sequential, consensus-driven. The prototype comes fourth. By the time you get there, the idea has been sanded down to nothing.
            </p>
            <p>
              I&lt;N&gt;C says: <strong className="text-[var(--color-primary)]">Ideate</strong> with a NorthStar prototype — build the provocative vision <em>first</em>. Then <strong className="text-[var(--color-secondary)]">&lt;N&gt; Narrate</strong> — encode the domain knowledge, encode the intent, create the machine-readable context. Then <strong className="text-[var(--color-accent)]">Create</strong> — ship production code informed by both the vision and the narrative.
            </p>
            <p>
              The prototype is step one, not step four. Empathy emerges from the reaction to the prototype, not from a workshop about the problem. The maker leads. The making teaches.
            </p>
            <p>
              AI makes this possible at speed. A scout bee with an agentic design system can explore, prototype, and provoke in hours what a clan-culture team spends weeks aligning on. Not because the scout is smarter — but because they <em>act</em> before they ask permission.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Disagree? Good. Let&apos;s make something.
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            This is a deliberately provocative position. If it resonated — or if it made you angry — either way, I&apos;d love the conversation. The best ideas come from productive friction.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
              Let&apos;s Argue Productively
            </a>
            <Link href="/thoughts" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              More Thoughts
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — a prototype, not a post-it note.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
