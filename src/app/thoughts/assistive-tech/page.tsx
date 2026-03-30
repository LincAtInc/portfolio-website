import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assistive Technology for the Dyslexic Designer | Lincoln Mitchell",
  description: "From spell check to agentic AI — a timeline of technologies that turned a disability into a design superpower.",
};

const timeline = [
  {
    year: "1985",
    tech: "Spell Check",
    desc: "Microsoft Word ships with spell check. For the first time, a dyslexic writer gets real-time feedback on spelling errors. Limited — can't handle phonetic misspellings like 'shud' for 'should'. But a start.",
    impact: "Could write documents without asking someone to proofread every sentence.",
    era: "early",
  },
  {
    year: "1995",
    tech: "Autocorrect",
    desc: "Word's autocorrect starts fixing common mistakes automatically. 'teh' becomes 'the' without thinking. Small but transformative — reduces the cognitive load of catching your own errors while trying to think.",
    impact: "Writing speed increased. Less shame in draft documents.",
    era: "early",
  },
  {
    year: "2004",
    tech: "Text-to-Speech (Read Back)",
    desc: "Screen readers and TTS tools like NaturalReader become mainstream. A dyslexic designer can hear their own writing read back — catching errors the eye misses. Proofreading by ear, not by eye.",
    impact: "Self-editing became possible. Less reliance on others to check work.",
    era: "mid",
  },
  {
    year: "2007",
    tech: "iPhone & Predictive Text",
    desc: "The iPhone puts autocorrect in your pocket. Predictive text suggests words as you type. For a dyslexic thinker, the phone starts finishing your thoughts — guessing what you mean from fragments.",
    impact: "Text messages and emails stopped being anxiety-inducing.",
    era: "mid",
  },
  {
    year: "2011",
    tech: "Siri & Voice Assistants",
    desc: "Speech-to-text goes mainstream. Dictate instead of type. For someone whose thoughts flow faster than their spelling can keep up, voice input is liberation. Think it, say it, done.",
    impact: "Bypassed the spelling bottleneck entirely for quick communication.",
    era: "mid",
  },
  {
    year: "2012",
    tech: "Grammarly",
    desc: "Context-aware grammar and spelling correction. Unlike basic spell check, Grammarly understands what you meant — even from phonetic misspellings. Catches tone, clarity, and structure. A writing partner, not just a red underline.",
    impact: "Professional writing became possible without a human editor. Career-changing.",
    era: "mid",
  },
  {
    year: "2016",
    tech: "Dyslexia-Specific Fonts & Tools",
    desc: "OpenDyslexic font, Ghotit spell checker (built by dyslexics), coloured overlays in browsers. Tools designed by people who understand the problem, not just the symptoms.",
    impact: "Reading code and documentation became less exhausting.",
    era: "mid",
  },
  {
    year: "2020",
    tech: "Figma & Visual-First Design",
    desc: "Design tools that let you think spatially, not textually. Drag, arrange, connect. A dyslexic thinker's natural mode — Material reasoning made digital. Design without writing a spec first.",
    impact: "Could express ideas visually and have others extract the spec.",
    era: "recent",
  },
  {
    year: "2021",
    tech: "GitHub Copilot",
    desc: "AI code completion. Write a comment describing what you want, and the code appears. For a dyslexic developer, this bridges the gap between knowing the logic and remembering the syntax.",
    impact: "Coding speed caught up to thinking speed. Syntax stopped being a barrier.",
    era: "recent",
  },
  {
    year: "2023",
    tech: "ChatGPT / Claude",
    desc: "Full conversational AI. Describe what you want in plain language — messy, fragmented, dyslexic language — and get structured, polished output. The AI translates how you think into how others need to read.",
    impact: "Documentation, proposals, emails — all became one conversation away from done.",
    era: "recent",
  },
  {
    year: "2024",
    tech: "Claude Code & Agentic Workflows",
    desc: "AI agents that read your context files, understand your design system, and execute code. CLAUDE.md becomes the narrative layer — encode your intent once, agents act on it repeatedly. Communication at scale.",
    impact: "Entire websites built through conversation. This site is the proof.",
    era: "now",
  },
  {
    year: "2025",
    tech: "MCP, Figma MCP, Design Tokens as AI Infrastructure",
    desc: "Design systems become machine-readable infrastructure. Tokens, components, and context files that AI agents consume directly. The design system communicates on your behalf — to humans AND machines.",
    impact: "One person, four AI agents, production output. The team is encoded, not hired.",
    era: "now",
  },
  {
    year: "2026",
    tech: "Agentic AI: The Full Stack",
    desc: "Custom AI agents (UI Designer, UX Designer, FED Developer, UX Researcher) that execute design and development under your direction. A Stakeholder Simulator that practices your pitch. Voice cloning that lets your avatar speak for you. The dyslexic thinker doesn't need to write — they need to direct.",
    impact: "Communication is no longer the bottleneck. Vision is. And that was always the strength.",
    era: "now",
  },
];

// Parallel timeline: the death of text, the rise of visual language
const visualTimeline = [
  { year: "1984", left: "Command Line Interface", right: "Macintosh GUI", shift: "Text commands replaced by icons, windows, mouse. Visual thinkers could finally use computers without memorising syntax." },
  { year: "1990", left: "Written manuals", right: "Multimedia CD-ROMs", shift: "Learning through video, animation, and interaction instead of reading. The first hint that text wasn't the only medium." },
  { year: "1995", left: "Text-heavy web (HTML)", right: "Flash & rich media", shift: "The web goes visual. Animation, interactivity, spatial layouts. Designers start building experiences, not documents." },
  { year: "2007", left: "Desktop software menus", right: "iPhone touch UI", shift: "Direct manipulation replaces menu hierarchies. Pinch, swipe, tap. The interface becomes physical, spatial, intuitive. No reading required." },
  { year: "2010", left: "Written specifications", right: "Wireframes & prototypes", shift: "Design communication shifts from text documents to visual artefacts. Show, don't tell. The spec is the prototype." },
  { year: "2013", left: "Email & documents", right: "Slack, Emoji, GIFs", shift: "Even business communication goes visual. Reactions replace replies. A thumbs-up says more than a paragraph." },
  { year: "2016", left: "Static mockups", right: "Figma real-time collaboration", shift: "Design becomes a shared visual space. Multiple people thinking visually together in real-time. No document handoff." },
  { year: "2020", left: "User stories (text)", right: "FigJam, Miro, visual boards", shift: "Product thinking goes spatial. Sticky notes, flow diagrams, visual mapping. The boardroom becomes a canvas." },
  { year: "2023", left: "Text prompts", right: "AI image generation", shift: "Describe a vision in words, see it instantly. Text becomes the input, visuals become the output. The ratio flips." },
  { year: "2024", left: "Code as text files", right: "Visual development (V0, Stitch)", shift: "Describe a UI, get a UI. Code is generated from visual intent. The developer's medium shifts from text to vision." },
  { year: "2025", left: "Design tokens as JSON", right: "Live theme switching, visual preview", shift: "Design systems become visual infrastructure. Swap tokens, see the result instantly. The system communicates visually." },
  { year: "2026", left: "Documentation", right: "AI agents that see and build", shift: "Agents consume visual context, generate visual output. The architect directs visually. Text becomes metadata, not the medium." },
  { year: "2030+", left: "Screens and windows", right: "AR/XR spatial interfaces", shift: "The interface IS the world. Spatial computing, gesture control, ambient UI. Text becomes a relic. Visual-spatial thinkers — dyslexic thinkers — are native speakers of this new language." },
];

const eraColors: Record<string, string> = {
  early: "text-white/30",
  mid: "text-[var(--color-primary)]",
  recent: "text-[var(--color-secondary)]",
  now: "text-[var(--color-warm)]",
};

const eraDotColors: Record<string, string> = {
  early: "bg-white/20",
  mid: "bg-[var(--color-primary)]",
  recent: "bg-[var(--color-secondary)]",
  now: "bg-[var(--color-warm)]",
};

export default function AssistiveTech() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Personal</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          From spell check to <span className="text-[var(--color-warm-light)]">agentic AI</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          I once hated communication because I have dyslexia. Every tool on this timeline removed a barrier between how I think and how others need to receive it. Agentic AI didn&apos;t just remove the last barrier &mdash; it turned the disability into the advantage.
        </p>
      </header>

      <main>
        {/* The Shift */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Shift</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Assistive technology for the dyslexic designer
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Every dyslexic professional has a secret stack of tools. The spell checker you can&apos;t live without. The voice assistant that lets you draft emails by talking. The AI that turns your fragmented thoughts into polished prose.
            </p>
            <p>
              We don&apos;t talk about it because it feels like cheating. It&apos;s not. It&apos;s assistive technology &mdash; the same category as glasses, wheelchairs, and hearing aids. Tools that let you do what your brain already knows how to do, through a medium that doesn&apos;t fight you.
            </p>
            <p>
              Here&apos;s my timeline. Forty years of technology that slowly, then suddenly, turned a communication disability into a communication superpower.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center shrink-0 w-16">
                  <div className={`w-3 h-3 rounded-full ${eraDotColors[item.era]} shrink-0 mt-2`} />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/[0.06]" />}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className={`font-mono text-sm font-bold ${eraColors[item.era]}`}>{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-white">{item.tech}</h3>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-sm font-medium italic" style={{ color: "var(--color-warm)" }}>&ldquo;{item.impact}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Language Timeline */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Parallel Shift</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Text is dying. Visual language is rising.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6 mb-16">
            <p>
              While assistive tech was helping dyslexic thinkers survive in a text-based world, something bigger was happening: <strong className="text-white">the world itself was shifting to visual.</strong> Every decade, another layer of text got replaced by a visual interface. We&apos;re not adapting to a text world anymore. The world is adapting to us.
            </p>
            <p>
              We are creating a <strong className="text-[var(--color-accent)]">new language</strong> &mdash; a visual language for visual thinkers, future thinkers. And the people who were &ldquo;disabled&rdquo; in the old text medium are <strong className="text-white">native speakers</strong> of the new one.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto">
            {/* Header */}
            <div className="grid grid-cols-[100px_1fr_40px_1fr] gap-4 mb-6 px-4">
              <div />
              <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.1em]">Text World (dying)</span>
              <div />
              <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.1em]">Visual World (rising)</span>
            </div>

            {visualTimeline.map((item, i) => (
              <div key={item.year} className="grid grid-cols-[100px_1fr_40px_1fr] gap-4 items-start mb-0">
                {/* Year */}
                <span className={`font-mono text-sm font-bold pt-4 text-right ${
                  i >= visualTimeline.length - 2 ? "text-[var(--color-warm)]" :
                  i >= visualTimeline.length - 5 ? "text-[var(--color-accent)]" :
                  i >= visualTimeline.length - 8 ? "text-[var(--color-secondary)]" : "text-white/30"
                }`}>{item.year}</span>

                {/* Left: dying text */}
                <div className="py-4 px-4 border-b border-white/[0.04]">
                  <span className="text-sm text-white/25 line-through">{item.left}</span>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center pt-4">
                  <span className="text-[var(--color-accent)] text-lg">&rarr;</span>
                </div>

                {/* Right: rising visual */}
                <div className="py-4 px-4 border-b border-white/[0.04]">
                  <span className="text-sm text-white font-medium">{item.right}</span>
                  <p className="text-xs text-white/35 mt-1 leading-relaxed">{item.shift}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Convergence */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Convergence</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Two timelines, one conclusion
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The assistive tech timeline shows tools helping dyslexic thinkers survive in a text world. The visual language timeline shows <strong className="text-white">that text world disappearing</strong>.
            </p>
            <p>
              They converge in 2026. Agentic AI is both the ultimate assistive technology AND the tool that builds the visual future. An architect who thinks in spatial relationships, connections, and narrative &mdash; who was &ldquo;disabled&rdquo; in the text era &mdash; is <strong className="text-[var(--color-warm-light)]">perfectly equipped for the visual era</strong>.
            </p>
            <p>
              AR/XR, spatial computing, gesture interfaces, ambient UI &mdash; these are all visual-spatial mediums. The designers who will build them think in exactly the way dyslexic brains are wired: Material reasoning, Interconnected reasoning, Dynamic reasoning. Not sequential text processing.
            </p>
            <p className="text-[var(--color-accent)]">
              Dyslexia wasn&apos;t a disability. It was early adoption of a language the world hadn&apos;t invented yet.
            </p>
          </div>
        </section>

        {/* The Pattern */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Pattern</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Each tool removed a barrier. AI removed the last one.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Spell check fixed individual words. Grammarly fixed sentences. Voice input bypassed typing. ChatGPT fixed paragraphs. Claude Code fixed entire workflows.
            </p>
            <p>
              The pattern is clear: each generation of assistive technology moved one layer up &mdash; from characters to words to sentences to documents to systems. <strong className="text-white">Agentic AI operates at the systems level.</strong> It doesn&apos;t fix your spelling. It consumes your intent and produces the entire output.
            </p>
            <p>
              For a dyslexic thinker, this is the inflection point. The barrier was never the thinking &mdash; it was the translation from thought to medium. When the medium is a conversation with an AI agent, the translation cost drops to near zero. What&apos;s left is pure cognitive contribution: vision, connections, narrative, possibilities.
            </p>
            <p>
              The MIND strengths &mdash; Material, Interconnected, Narrative, Dynamic reasoning &mdash; were always there. The tools finally caught up.
            </p>
          </div>
        </section>

        {/* For Other Dyslexic Designers */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">For Others Like Me</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            If you&apos;re a dyslexic designer or developer
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              You&apos;re not cheating by using AI. You&apos;re using assistive technology. The same way a short-sighted person uses glasses, you use tools that bridge the gap between how you think and how the world needs to receive it.
            </p>
            <p>
              Your ability to see patterns across domains, to think in spatial relationships, to simulate scenarios dynamically, to encode complex ideas as narrative &mdash; these are <strong className="text-white">cognitive strengths</strong> that the design industry desperately needs. The spelling and sequential processing are what the tools handle.
            </p>
            <p>
              <strong className="text-white">Build your stack.</strong> Grammarly for writing. Voice input for drafts. Claude Code for implementation. Custom agents for your team. CLAUDE.md for your context. Design tokens for your system. Encode your narrative. Let the agents execute.
            </p>
            <p className="text-[var(--color-warm-light)]">
              You were never bad at communication. You were using the wrong medium. AI is the right one.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto bg-[#0f172a]">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            I once hated communication because I have dyslexia. Agentic AI is the assistive technology that lets me enable others to do what I was never able to. I don&apos;t design. I don&apos;t code. I encode the narrative they need to act without me.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">Lincoln Mitchell &mdash; the N in I&lt;N&gt;C</cite>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            The tools caught up. Now what?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If you&apos;re a dyslexic designer, developer, or architect navigating AI &mdash; or if you&apos;re building tools for neurodivergent thinkers &mdash; I&apos;d love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors">
              Let&apos;s Connect
            </a>
            <Link href="/thoughts/dyslexic-advantage" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Read: MIND Strengths
            </Link>
            <Link href="/thoughts/scout-bees" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              Read: Scout Bees
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts &mdash; assistive technology in action.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
