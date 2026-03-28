import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scout Bees & The Explorer Brain | Lincoln Mitchell",
  description: "Helen Taylor's research on dyslexia as complementary cognition — and why design systems need scouts, not just soldiers.",
};

const findings = [
  {
    title: "Dyslexia is not a deficit",
    desc: "Taylor reframes dyslexia not as a learning difficulty, but as a cognitive trade-off. Dyslexic thinkers sacrifice efficiency in exploitation (reading, rote tasks) for enhanced exploration — pattern recognition across domains, novel connections, and big-picture thinking.",
    source: "Developmental Dyslexia: Disorder or Specialization in Exploration? — Frontiers in Psychology, 2022",
  },
  {
    title: "The scout bee analogy",
    desc: "In a bee colony, 5–25% are scout bees. They don't harvest — they explore. They find new food sources, new nest sites, new possibilities. Without scouts, the colony eventually starves when existing sources run dry. Taylor argues dyslexic thinkers serve the same function in human groups.",
    source: "Helen Taylor — Cambridge University, CSER",
  },
  {
    title: "Complementary cognition",
    desc: "Every human group needs both exploiters (efficient, detail-focused, procedural) and explorers (divergent, pattern-seeking, possibility-driven). Neither is superior. But modern systems — education, employment, software — are overwhelmingly optimised for exploitation.",
    source: "Complementary Cognition Theory — Taylor & Vestergaard, 2022",
  },
  {
    title: "Evolution selected for both",
    desc: "The persistence of dyslexia at 10–20% across all populations, cultures, and writing systems suggests it's not a bug. Evolution maintained this cognitive profile because groups with explorers outperform groups without them — especially in uncertain, changing environments.",
    source: "Evolutionary Biology of Cognitive Diversity",
  },
];

const parallels = [
  {
    taylor: "Scout bees explore when existing sources are depleted",
    linc: "NorthStar Prototyping explores when existing solutions plateau",
    color: "text-[var(--color-primary)]",
  },
  {
    taylor: "Explorers sacrifice efficiency for possibility",
    linc: "Discovery-first inverts the delivery-heavy balance",
    color: "text-[var(--color-secondary)]",
  },
  {
    taylor: "Colonies need both scouts and harvesters",
    linc: "I<N>C needs both Ideation and Creation — N bridges them",
    color: "text-[var(--color-accent)]",
  },
  {
    taylor: "Modern systems over-optimise for exploitation",
    linc: "Modern dev teams over-optimise for delivery velocity",
    color: "text-[var(--color-warm)]",
  },
  {
    taylor: "5–25% of colony are scouts — a minority, not an anomaly",
    linc: "One-person innovation engine — the scout doesn't need a team, they need context",
    color: "text-[var(--color-primary)]",
  },
];

export default function ScoutBees() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Complementary Cognition</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Scout bees and the <span className="text-[var(--color-warm-light)]">explorer brain</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          Helen Taylor&apos;s research at Cambridge reframes dyslexia as a cognitive specialisation in exploration — not a deficit. Every colony needs scouts. Every team needs someone who sees what&apos;s next.
        </p>
      </header>

      <main>
        {/* Taylor's Research */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Research</span>
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1">
              <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
                Dr Helen Taylor — Cambridge University
              </h2>
            </div>
            <div className="shrink-0">
              <Image src="/helen-taylor.png" alt="Dr Helen Taylor" width={140} height={175} className="rounded-xl border border-[#1e293b] object-cover" style={{ width: 140, height: 175 }} />
              <p className="font-mono text-[11px] text-[#64748b] mt-2 text-center">Dr Helen Taylor</p>
            </div>
          </div>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Taylor&apos;s work at the Centre for the Study of Existential Risk (CSER) explores how cognitive diversity is essential for species survival — and why dyslexic thinking is an evolutionary feature, not a flaw.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {findings.map((f) => (
              <div key={f.title} className="p-10 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] border-l-[var(--color-warm)] rounded-xl">
                <h3 className="font-display text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{f.desc}</p>
                <span className="font-mono text-[11px] text-[#64748b] mt-4 block">{f.source}</span>
              </div>
            ))}
          </div>
        </section>

        {/* The Scout Bee Diagram */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            The scout bee doesn&apos;t harvest better. It finds what hasn&apos;t been found yet. That&apos;s not a disability — it&apos;s a specialisation.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">Paraphrasing Helen Taylor&apos;s complementary cognition framework</cite>
        </section>

        {/* Exploration vs Exploitation */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">The Trade-off</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Exploration vs exploitation
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Taylor&apos;s framework maps directly onto how I think about design systems, AI, and the role of the architect.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 p-10 rounded-xl bg-[var(--color-warm)]/[0.06] border border-[var(--color-warm)]/20">
              <span className="font-mono text-[11px] text-[var(--color-warm)] uppercase tracking-[0.1em]">Explorer — Scout Bee</span>
              <h3 className="font-display text-[22px] font-semibold text-white mt-4 mb-3">Divergent search</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">Pattern recognition across domains. Seeing connections others miss. Comfortable with ambiguity. Drawn to what&apos;s possible, not what&apos;s proven. Thinks in systems and metaphors.</p>
              <p className="text-sm text-[var(--color-warm)] mt-4 font-medium">This is the I in I&lt;N&gt;C</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 shrink-0">
              <span className="font-display text-4xl font-bold text-[var(--color-secondary)]">&lt;N&gt;</span>
              <span className="font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] text-center">The bridge<br />between modes</span>
            </div>
            <div className="flex-1 p-10 rounded-xl bg-[var(--color-accent)]/[0.06] border border-[var(--color-accent)]/20">
              <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.1em]">Exploiter — Harvester Bee</span>
              <h3 className="font-display text-[22px] font-semibold text-white mt-4 mb-3">Convergent execution</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">Efficient, detail-focused, procedural. Optimises known solutions. Follows established patterns. Scales what works. This is what AI excels at.</p>
              <p className="text-sm text-[var(--color-accent)] mt-4 font-medium">This is the C in I&lt;N&gt;C</p>
            </div>
          </div>

          <p className="text-[15px] text-white/50 max-w-[800px] leading-relaxed">
            <strong className="text-[var(--color-secondary)]">&lt;N&gt;</strong> — the Narrate layer — is what keeps exploration and exploitation in productive tension. Without it, scouts explore forever and nothing gets built. Without scouts, harvesters optimise a shrinking world. The design system is the bridge.
          </p>
        </section>

        {/* Parallels Table */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Parallel</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-12">
            Taylor&apos;s framework maps to mine
          </h2>

          <div className="border border-[#1e293b] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr] bg-[#0f172a]">
              <div className="px-6 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]">Helen Taylor</div>
              <div className="px-6 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Lincoln Mitchell / I&lt;N&gt;C</div>
            </div>
            {parallels.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_1fr]">
                <div className="px-6 py-4 text-sm text-white/50 border-b border-[#1e293b]">{row.taylor}</div>
                <div className={`px-6 py-4 text-sm border-b border-l border-[#1e293b] ${row.color}`}>{row.linc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Connection */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">Why This Matters to Me</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            I&apos;m a scout bee
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              When I read Taylor&apos;s research, I didn&apos;t learn something new — I recognised something I&apos;d always known. The career arc from Chief Design Officer to React developer to Design Systems Architect wasn&apos;t a downgrade. It was a scout finding the right altitude.
            </p>
            <p>
              CDO was too far from the ground — all vision, no making. React development was too deep in the detail — all execution, no exploration. Design systems is the bridge. The <strong className="text-[var(--color-secondary)]">&lt;N&gt;</strong> in I&lt;N&gt;C.
            </p>
            <p>
              AI didn&apos;t replace my exploration — it amplified it. A scout bee with a design system and an AI agent can cover the territory of an entire discovery team. Not because the scout is better, but because the <strong className="text-[var(--color-secondary)]">narrative layer</strong> encodes enough context for the agent to extend the exploration autonomously.
            </p>
            <p className="text-[var(--color-warm-light)]">
              The question isn&apos;t whether your team has scouts. It&apos;s whether your system is built to amplify what they find.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Every colony needs a scout
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If you&apos;re building AI-augmented teams and wondering why your best explorers keep leaving — let&apos;s talk. The system might be the problem, not the people.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
              Book a Conversation
            </a>
            <Link href="/thoughts" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              More Thoughts
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — a scout bee with an agentic design system.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
