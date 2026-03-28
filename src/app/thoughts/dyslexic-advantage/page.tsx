import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Dyslexic Advantage & MIND Strengths | Lincoln Mitchell",
  description: "Brock and Fernette Eide's MIND framework maps directly to the LINC cognitive layer — how dyslexic thinking powers design systems.",
};

const mindStrengths = [
  {
    letter: "M",
    name: "Material Reasoning",
    color: "text-[var(--color-accent)]",
    borderColor: "border-[var(--color-accent)]/20",
    bgColor: "bg-[var(--color-accent)]/[0.06]",
    tagColor: "text-[var(--color-accent)] bg-[var(--color-accent)]/10",
    desc: "Spatial, tangible, buildable thinking. The ability to mentally manipulate 3D objects, understand physical systems, and reason about materials. Architects, engineers, surgeons, craftspeople.",
    lincMap: "C = Create",
    lincDesc: "Material reasoning is what makes code feel like building, not typing. Components as physical objects with weight, position, and relationship. The ability to hold an entire system in spatial memory.",
  },
  {
    letter: "I",
    name: "Interconnected Reasoning",
    color: "text-[var(--color-primary)]",
    borderColor: "border-[var(--color-primary)]/20",
    bgColor: "bg-[var(--color-primary)]/[0.06]",
    tagColor: "text-[var(--color-primary)] bg-[var(--color-primary)]/10",
    desc: "Seeing connections between seemingly unrelated domains. Recognising patterns that span disciplines, timeframes, and scales. The ability to connect a bee colony to a design system to hemispheric neuroscience.",
    lincMap: "I = Ideate",
    lincDesc: "Interconnected reasoning is why NorthStar prototyping works — the ability to see where things are going by recognising patterns across domains that linear thinkers treat as separate.",
  },
  {
    letter: "N",
    name: "Narrative Reasoning",
    color: "text-[var(--color-secondary)]",
    borderColor: "border-[var(--color-secondary)]/20",
    bgColor: "bg-[var(--color-secondary)]/[0.06]",
    tagColor: "text-[var(--color-secondary)] bg-[var(--color-secondary)]/10",
    desc: "Thinking in stories, episodes, and experiential simulations. The ability to mentally 'live through' scenarios before they happen. Encoding and communicating complex ideas through narrative rather than logic chains.",
    lincMap: "N = Narrate",
    lincDesc: "This is literally the N. Narrative reasoning is the cognitive function that the agentic design system amplifies. Encoding domain knowledge as story, not spec. Making context human-readable AND machine-readable.",
  },
  {
    letter: "D",
    name: "Dynamic Reasoning",
    color: "text-[var(--color-warm)]",
    borderColor: "border-[var(--color-warm)]/20",
    bgColor: "bg-[var(--color-warm)]/[0.06]",
    tagColor: "text-[var(--color-warm)] bg-[var(--color-warm)]/10",
    desc: "Simulating how things change over time. Running mental models forward and backward. Understanding systems as dynamic processes rather than static states. Predicting emergent behaviour.",
    lincMap: "I + D = Ideation",
    lincDesc: "Dynamic reasoning feeds ideation — the ability to simulate 'what if' at speed. Combined with interconnected reasoning, this is how a scout bee evaluates a new food source without needing to harvest it first.",
  },
];

const mapping = [
  { mind: "M — Material", linc: "C — Create", desc: "Tangible, spatial, buildable", color: "text-[var(--color-accent)]" },
  { mind: "I — Interconnected", linc: "I — Ideate", desc: "Patterns across domains", color: "text-[var(--color-primary)]" },
  { mind: "N — Narrative", linc: "N — Narrate", desc: "Story as infrastructure", color: "text-[var(--color-secondary)]" },
  { mind: "D — Dynamic", linc: "I — Ideate (+ D)", desc: "Simulation and possibility", color: "text-[var(--color-warm)]" },
  { mind: "All four together", linc: "L — Love / Vision", desc: "The conviction that precedes cognition", color: "text-white" },
];

export default function DyslexicAdvantage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Cognitive Architecture</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          The Dyslexic <span className="text-[var(--color-warm-light)]">Advantage</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          Brock and Fernette Eide identified four cognitive strengths that dyslexic thinkers share. They called them MIND. I call the same pattern LINC. It&apos;s not a coincidence — it&apos;s how I think.
        </p>
      </header>

      <main>
        {/* The MIND Framework */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Framework</span>
          <div className="flex flex-col md:flex-row gap-12 mb-6">
            <div className="flex-1">
              <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
                MIND strengths — Brock &amp; Fernette Eide
              </h2>
              <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px]">
                <em>The Dyslexic Advantage</em> (2011) identified four cognitive strengths consistently found in dyslexic thinkers. Not compensations for a deficit — fundamental cognitive architectures that process information differently.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <div>
                <Image src="/brock-eide.png" alt="Dr Brock Eide" width={120} height={150} className="rounded-xl border border-[#1e293b] object-cover" style={{ width: 120, height: 150 }} />
                <p className="font-mono text-[11px] text-[#64748b] mt-2 text-center">Brock Eide</p>
              </div>
              <div>
                <Image src="/fernette-eide.png" alt="Dr Fernette Eide" width={120} height={150} className="rounded-xl border border-[#1e293b] object-cover" style={{ width: 120, height: 150 }} />
                <p className="font-mono text-[11px] text-[#64748b] mt-2 text-center">Fernette Eide</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mindStrengths.map((s) => (
              <div key={s.letter} className={`p-10 rounded-xl border ${s.borderColor} ${s.bgColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-display text-3xl font-bold ${s.color}`}>{s.letter}</span>
                  <span className={`font-mono text-[11px] px-2.5 py-1 rounded ${s.tagColor}`}>{s.name}</span>
                </div>
                <p className="text-[15px] text-white/50 leading-relaxed mb-6">{s.desc}</p>
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className={`font-mono text-xs font-semibold ${s.color}`}>Maps to {s.lincMap}</span>
                  <p className="text-sm text-white/40 leading-relaxed mt-2">{s.lincDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Big Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto bg-[#0f172a]">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            Dyslexic brains are wired to find what others aren&apos;t looking for. The same trait that makes reading slow makes innovation fast.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">Paraphrasing Brock &amp; Fernette Eide, The Dyslexic Advantage</cite>
        </section>

        {/* The MIND → LINC Mapping */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Mapping</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            MIND maps to LINC
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            The Eides described cognitive architecture. I built a methodology on top of the same structure — not deliberately, but because it&apos;s how I naturally think. LINC is MIND made operational.
          </p>

          <div className="border border-[#1e293b] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#0f172a]">
              <div className="px-6 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]">MIND Strength</div>
              <div className="px-6 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">LINC Layer</div>
              <div className="px-6 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Shared Function</div>
            </div>
            {mapping.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_1fr_1fr]">
                <div className="px-6 py-4 text-sm text-white/50 border-b border-[#1e293b]"><strong className="text-white font-medium">{row.mind}</strong></div>
                <div className={`px-6 py-4 text-sm font-medium border-b border-l border-[#1e293b] ${row.color}`}>{row.linc}</div>
                <div className="px-6 py-4 text-sm text-white/50 border-b border-l border-[#1e293b]">{row.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Amplifier */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Amplifier</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            AI doesn&apos;t replace these strengths — it multiplies them
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The Eides showed that dyslexic thinkers have cognitive strengths that traditional systems undervalue. Helen Taylor showed these strengths are evolutionarily essential. What neither addressed is what happens when you give a MIND-wired thinker an AI agent.
            </p>
            <p>
              <strong className="text-white">The answer is amplification.</strong> AI handles the exploitation — the sequential, detail-focused, procedural work that dyslexic thinkers trade off. The agentic design system encodes the narrative reasoning into machine-readable context. And the human does what they do best: explore, connect, and see what&apos;s next.
            </p>
            <p>
              INC isn&apos;t just in my company name. It&apos;s in my <em>actual</em> name. L-<span className="text-[var(--color-primary)]">I</span>-<span className="text-[var(--color-secondary)]">N</span>-<span className="text-[var(--color-accent)]">C</span>. The framework isn&apos;t something I designed — it&apos;s something I recognised. It&apos;s how I&apos;ve always thought. The Eides just gave me the language to explain why.
            </p>
            <p className="text-[var(--color-warm-light)]">
              Born to explore. Built systems to bridge. Found AI to amplify. That&apos;s not a career strategy. It&apos;s a cognitive architecture playing out over 20 years.
            </p>
          </div>
        </section>

        {/* Virtue Loop Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="font-display text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            The agentic design system mirrors and enhances these cognitive styles — not replacing them, but amplifying them for people who think in connections, narratives, and possibilities rather than checklists.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">LINC Framework — Cognition Layer</cite>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Thinking differently isn&apos;t the problem. Systems that can&apos;t adapt to different thinkers are.
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If you&apos;re interested in cognitive diversity, agentic design systems, or just want to talk about how brains and AI intersect — I&apos;d love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
              Let&apos;s Connect
            </a>
            <Link href="/thoughts/scout-bees" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Read: Scout Bees
            </Link>
            <Link href="/thoughts" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Wisdom &amp; AI
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — MIND strengths amplified by an agentic design system.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
