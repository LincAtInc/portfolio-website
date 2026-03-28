import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI as Creative Assistant, Not Replacement | Lincoln Mitchell",
  description: "Iain McGilchrist distrusts AI. He's right to be cautious — but wrong to dismiss it. AI is an assistive technology for creativity, not a substitute for it.",
};

const fears = [
  { title: "Intelligence is not wisdom", desc: "McGilchrist draws a sharp hierarchy: information, knowledge, intelligence, understanding, wisdom. AI can process information and demonstrate intelligence, but wisdom requires embodied experience, moral judgement, and the ability to hold paradox.", source: "Wisdom, Intelligence and AI — Scientific & Medical Network" },
  { title: "Left hemisphere at global scale", desc: "AI replicates left-hemisphere functions — analytical, sequential, rule-following, context-stripping — at unprecedented speed. It amplifies the very mode of thinking McGilchrist argues is already dangerously dominant.", source: "The Matter With Things, 2021" },
  { title: "Humans becoming more machine-like", desc: "As machines become more human-like in their outputs, humans are becoming more machine-like through constant interaction with them. We adapt to the interface. We begin to think in the categories, timescales, and modes that machines reward.", source: "Resist the Machine Apocalypse — First Things, 2024" },
  { title: "The loss of the implicit", desc: "AI has no sense of how context changes everything, how the vast realm of the implicit — what is not said, not measured, not categorised — is often where the most important aspects of reality reside.", source: "Rebalancing Our Brain — Channel McGilchrist" },
];

const counterpoints = [
  {
    fear: "AI is left-hemisphere thinking at scale",
    response: "Only if we use it that way",
    desc: "McGilchrist assumes AI will be used for what it\u2019s best at: analysis, optimisation, rule-following. But that\u2019s a choice, not an inevitability. When I use AI for NorthStar prototyping — exploring possibilities, generating provocative alternatives, simulating what-ifs — I\u2019m using a left-hemisphere tool to serve right-hemisphere goals.",
    color: "border-l-[var(--color-primary)]",
  },
  {
    fear: "AI replaces human creativity",
    response: "AI amplifies it \u2014 if the human leads",
    desc: "The scout bee still decides where to explore. The agent executes. My experience: since adopting AI-assisted workflows, I do more creative work, not less. The mechanical labour (boilerplate, repetition, translation) is handled. What\u2019s left is judgement, vision, and connection \u2014 exactly the right-hemisphere functions McGilchrist values most.",
    color: "border-l-[var(--color-secondary)]",
  },
  {
    fear: "Humans are becoming more machine-like",
    response: "Only without the narrative layer",
    desc: "This fear is real \u2014 but it\u2019s a design problem, not a technology problem. Systems that reduce humans to prompt-writers will indeed flatten cognition. The agentic design system does the opposite: it encodes human intent, domain knowledge, and creative context so the machine adapts to the human, not the other way around.",
    color: "border-l-[var(--color-accent)]",
  },
  {
    fear: "AI strips context and nuance",
    response: "CLAUDE.md is literally context-as-infrastructure",
    desc: "McGilchrist\u2019s deepest concern is that AI operates on the explicit and misses the implicit. Fair. But context files, design tokens, and narrative layers are precisely the mechanism for making the implicit explicit \u2014 without flattening it. The design system encodes WHY, not just WHAT.",
    color: "border-l-[var(--color-warm)]",
  },
];

export default function Thoughts() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">A Respectful Disagreement</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          AI is assistive, not <span className="text-[var(--color-warm-light)]">artificial</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          Iain McGilchrist distrusts AI. He&apos;s right to be cautious. But dismissing AI entirely misses the point — it&apos;s an assistive technology for creativity, not a replacement for the human mind.
        </p>
      </header>

      <main>
        {/* McGilchrist's Concerns */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1">
              <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">His Concerns</span>
              <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
                McGilchrist&apos;s case against AI
              </h2>
              <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px]">
                The author of <em>The Master and His Emissary</em> sees AI as the ultimate expression of left-hemisphere dominance — analytical, reductive, context-stripping thinking scaled to planetary proportions. His concerns deserve serious engagement, not dismissal.
              </p>
            </div>
            <div className="shrink-0">
              <Image
                src="/Ian.jpeg"
                alt="Dr Iain McGilchrist"
                width={180}
                height={220}
                className="rounded-xl border border-[#1e293b] object-cover grayscale-[30%]"
                style={{ width: 180, height: 220 }}
              />
              <p className="font-mono text-[11px] text-[#64748b] mt-2 text-center">Dr Iain McGilchrist</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fears.map((fear) => (
              <div key={fear.title} className="p-10 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] border-l-[var(--color-warm)] rounded-xl">
                <h3 className="font-display text-xl font-semibold text-white mb-3">{fear.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{fear.desc}</p>
                <span className="font-mono text-[11px] text-[#64748b] mt-4 block">{fear.source}</span>
              </div>
            ))}
          </div>
        </section>

        {/* The Pivot */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-primary)]/30 font-serif leading-none">&ldquo;</span>
            McGilchrist is right about the danger. He&apos;s wrong about the inevitability. AI doesn&apos;t have to be the emissary overthrowing the master. It can be the emissary <em>serving</em> the master — if we design it that way.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">Lincoln Mitchell</cite>
        </section>

        {/* My Response */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">My Response</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            AI should focus on creativity, not replacement
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Every concern McGilchrist raises is valid — and every one has a design response. The question isn&apos;t whether AI is dangerous. It&apos;s whether we build systems that amplify wisdom or accelerate stupidity.
          </p>

          <div className="flex flex-col gap-6">
            {counterpoints.map((cp) => (
              <div key={cp.fear} className={`p-10 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${cp.color} rounded-xl`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-[280px] shrink-0">
                    <span className="font-mono text-[11px] text-[var(--color-warm)] uppercase tracking-[0.08em] block mb-1">McGilchrist says</span>
                    <h3 className="font-display text-lg font-semibold text-white/60 italic">&ldquo;{cp.fear}&rdquo;</h3>
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.08em] block mb-1">My view</span>
                    <h3 className="font-display text-lg font-semibold text-white mb-3">{cp.response}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed">{cp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hemispheric Map */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Architecture</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            I&lt;N&gt;C as hemispheric partnership
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            McGilchrist&apos;s hemispheres map onto I&lt;N&gt;C — but the relationship is partnership, not domination.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 p-10 rounded-xl bg-blue-400/[0.06] border border-blue-400/20">
              <span className="font-mono text-[11px] text-blue-400 uppercase tracking-[0.1em]">Right Hemisphere — The Master</span>
              <p className="font-display text-5xl font-bold text-blue-400 tracking-tight mt-4 mb-2">I</p>
              <h3 className="font-display text-[22px] font-semibold text-white mb-3">Ideate</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">The human spark. Vision, intuition, pattern recognition. What the machine cannot generate — and what AI should be designed to <strong className="text-white">serve</strong>, not replace.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 shrink-0">
              <span className="font-display text-4xl font-bold text-purple-400">&lt;N&gt;</span>
              <span className="font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] text-center">Assistive<br />Bridge</span>
            </div>
            <div className="flex-1 p-10 rounded-xl bg-cyan-400/[0.06] border border-cyan-400/20">
              <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-[0.1em]">Left Hemisphere — The Emissary</span>
              <p className="font-display text-5xl font-bold text-cyan-400 tracking-tight mt-4 mb-2">C</p>
              <h3 className="font-display text-[22px] font-semibold text-white mb-3">Create</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">Sequential execution. This is where AI excels — and where it should stay. The emissary serves the master. Execution serves vision. <strong className="text-white">AI assists creation</strong>, it doesn&apos;t originate it.</p>
            </div>
          </div>

          <p className="text-[15px] text-white/50 max-w-[800px] leading-relaxed">
            <strong className="text-purple-400">&lt;N&gt;</strong> — the Narrate layer — is the assistive bridge that keeps the relationship right. The design system ensures execution serves vision, not the other way around. McGilchrist&apos;s warning is precisely what happens when this bridge breaks: the emissary overthrows the master. The agentic design system is designed to prevent that.
          </p>
        </section>

        {/* Assistive Technology */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Reframe</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            AI as assistive technology
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              We don&apos;t call a wheelchair &ldquo;artificial walking.&rdquo; We don&apos;t call glasses &ldquo;artificial seeing.&rdquo; They&apos;re assistive technologies that amplify what the human can do.
            </p>
            <p>
              AI is assistive thinking. It handles the mechanical, sequential, procedural work that the left hemisphere does — freeing the right hemisphere to do what it does best: see patterns, hold context, generate meaning.
            </p>
            <p>
              For a dyslexic thinker like me, this isn&apos;t theoretical. AI compensates for exactly the cognitive trade-offs that come with exploratory wiring — the spelling, the sequencing, the detail work. What&apos;s left when those are handled? <strong className="text-white">Pure creative exploration.</strong>
            </p>
            <p className="text-[var(--color-warm-light)]">
              McGilchrist fears AI will make us less human. My experience is the opposite: it freed me to be more fully myself.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            The emissary can serve the master
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If you&apos;re interested in AI as a creative tool rather than a creative replacement — or if you disagree and want to push back — I&apos;d welcome the conversation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
              Let&apos;s Discuss
            </a>
            <Link href="/thoughts/digital-samsara" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Read: Digital Samsara
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — an AI system assisting the creativity it describes.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
