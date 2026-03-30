import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The LINC Podcast — AI Expands Creative Possibility | Lincoln & Ben Mitchell",
  description: "Two brothers explore how AI expands creative possibility across music, visual design, and UI. Lincoln Mitchell (Design Systems) and Ben Mitchell (DJ/Producer).",
};

const episodes = [
  {
    num: "01",
    title: "AI made me a better designer. Did it make you a better DJ?",
    desc: "Lincoln and Ben compare notes on how AI tools changed their creative practice — not replacing skill, but unlocking possibilities that were technically beyond reach.",
    tags: ["Introduction", "Creative AI", "Personal Stories"],
  },
  {
    num: "02",
    title: "The skill gap illusion",
    desc: "You don't need 10,000 hours anymore to express a creative vision. AI collapses the gap between what you can imagine and what you can make. Is that liberation or devaluation?",
    tags: ["Democratisation", "Craft vs Vision"],
  },
  {
    num: "03",
    title: "Vibe coding meets vibe mixing",
    desc: "Lincoln prototypes UIs by describing intent. Ben produces tracks by describing feeling. Same pattern: the human provides direction, the machine provides execution. Who's the artist?",
    tags: ["Agentic Design", "Music Production", "AI Tools"],
  },
  {
    num: "04",
    title: "The scout bee and the selector",
    desc: "A DJ's job is curation — finding the right track for the right moment. A design systems architect curates components, tokens, and patterns. Both are scouts. Both are amplified by AI.",
    tags: ["Curation", "Scout Bees", "Pattern Recognition"],
  },
  {
    num: "05",
    title: "When the machine has taste",
    desc: "AI can generate a thousand variations. But taste — knowing which one is right — is still human. Or is it? Lincoln and Ben argue about whether AI will develop aesthetic judgement.",
    tags: ["Taste", "Aesthetics", "Human vs Machine"],
  },
];

export default function Podcast() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="max-w-[1440px] mx-auto px-8 md:px-20 pt-30 pb-20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-6">Coming Soon</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white tracking-[-0.03em] leading-[1.05] mb-6">
              The <span className="text-[var(--color-warm-light)]">LINC</span> Podcast
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-8 max-w-[520px]">
              Two brothers — one designs interfaces, the other designs dancefloors. Both use AI to expand what's creatively possible. A conversation about music, visual design, and the tools that let us all become more than our skill level.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
                Be a Guest
              </a>
              <a href="mailto:linc@lincolnmitchell.io" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
                Get Notified
              </a>
            </div>
          </div>

          {/* Hosts */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/Linc-coffee.png"
                alt="Lincoln Mitchell"
                width={160}
                height={160}
                className="rounded-full border-2 border-[var(--color-primary)]/30 object-cover"
                style={{ width: 160, height: 160 }}
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-white">Lincoln Mitchell</p>
                <p className="font-mono text-[11px] text-[var(--color-primary)]">Design Systems</p>
                <p className="font-mono text-[11px] text-white/25">Visual &middot; UI &middot; Code</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/ben-mitchell.png"
                alt="Ben Mitchell — Bennie James"
                width={160}
                height={160}
                className="rounded-full border-2 border-[var(--color-warm)]/30 object-cover"
                style={{ width: 160, height: 160 }}
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-white">Ben Mitchell</p>
                <p className="font-mono text-[11px] text-[var(--color-warm)]">DJ / Producer</p>
                <p className="font-mono text-[11px] text-white/25">Audio &middot; Music &middot; Live</p>
              </div>
              <a href="https://benniejames.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-white/25 no-underline hover:text-white/50 transition-colors">
                benniejames.com
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* The Premise */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Premise</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            AI expands creative possibility
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Lincoln builds design systems and prototypes interfaces with AI agents. Ben produces music and curates sets with AI-assisted tools. Same brothers, different mediums, same discovery: <strong className="text-white">AI doesn't replace creativity — it removes the technical barriers to expressing it.</strong>
            </p>
            <p>
              A musician who can't code can now build an app. A designer who can't produce music can now score a video. A developer who can't draw can now generate visual concepts. The gatekeepers were never taste or vision — they were technical skill. AI dissolves the gate.
            </p>
            <p>
              This podcast explores that expansion. Not the hype. Not the fear. The actual experience of two people whose creative practice changed when the tools changed.
            </p>
          </div>
        </section>

        {/* Episode Ideas */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">Episode Ideas</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-12">
            Season one
          </h2>

          <div className="flex flex-col gap-4">
            {episodes.map((ep) => (
              <div key={ep.num} className="flex gap-6 p-8 border border-white/[0.06] rounded-xl hover:border-white/[0.1] transition-colors">
                <span className="font-mono text-sm font-semibold text-[var(--color-warm)] shrink-0 w-8">{ep.num}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{ep.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-3">{ep.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ep.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] text-white/25 bg-white/[0.03] px-2.5 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Two Lenses */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">Two Lenses</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-12">
            Same question, different medium
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-10 rounded-xl bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/20">
              <span className="font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.1em]">Lincoln — Visual</span>
              <h3 className="font-display text-[22px] font-semibold text-white mt-4 mb-4">Design Systems &amp; UI</h3>
              <ul className="text-[15px] text-white/50 leading-relaxed space-y-3 list-none">
                <li>Prototyping interfaces with Claude Code</li>
                <li>Design tokens as machine-readable context</li>
                <li>Multi-brand theming from a single system</li>
                <li>AI-generated images for editorial content</li>
                <li>Figma-to-code via agentic pipelines</li>
              </ul>
            </div>
            <div className="flex-1 p-10 rounded-xl bg-[var(--color-warm)]/[0.06] border border-[var(--color-warm)]/20">
              <span className="font-mono text-[11px] text-[var(--color-warm)] uppercase tracking-[0.1em]">Ben — Audio</span>
              <h3 className="font-display text-[22px] font-semibold text-white mt-4 mb-4">Music &amp; Production</h3>
              <ul className="text-[15px] text-white/50 leading-relaxed space-y-3 list-none">
                <li>AI-assisted music production and remixing</li>
                <li>Stem separation and creative recomposition</li>
                <li>Live performance with AI-generated visuals</li>
                <li>Curation and playlist generation at scale</li>
                <li>The DJ as scout bee — finding what's next</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            You don&apos;t need to be a developer to build an app. You don&apos;t need to be a producer to make a track. You need vision, taste, and the right tools. AI is the right tool.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The LINC Podcast — opening thesis</cite>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Want to be part of the conversation?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            We&apos;re looking for guests who use AI to expand their creative practice — any medium, any level. If AI changed how you make things, we want to hear about it.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
              Be a Guest
            </a>
            <a href="mailto:linc@lincolnmitchell.io" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Get Notified at Launch
            </a>
            <a href="https://benniejames.com" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              benniejames.com
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">The LINC Podcast — AI expands creative possibility.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; <a href="https://benniejames.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-warm)]/50 no-underline">benniejames.com</a></p>
      </footer>
    </>
  );
}
