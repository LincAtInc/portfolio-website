import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Stakeholder Simulator | Lincoln Mitchell",
  description: "I built an AI agent that simulates CEO, CTO, and CFO conversations so I can pressure-test design system ideas before the real meeting.",
};

const personas = [
  { role: "CEO", question: "Will this make us win?", focus: "Revenue, market position, competitive advantage, board narrative", color: "text-[var(--color-warm)]", border: "border-l-[var(--color-warm)]" },
  { role: "CTO", question: "Will this scale? What breaks?", focus: "Architecture, scalability, tech debt, team capacity", color: "text-[var(--color-primary)]", border: "border-l-[var(--color-primary)]" },
  { role: "CFO", question: "What does this cost?", focus: "ROI, headcount, budget cycles, payback period", color: "text-[var(--color-accent)]", border: "border-l-[var(--color-accent)]" },
  { role: "COO", question: "How does this affect operations?", focus: "Timelines, process impact, change management, disruption risk", color: "text-[var(--color-secondary)]", border: "border-l-[var(--color-secondary)]" },
  { role: "Engineering Lead", question: "Will my team adopt this?", focus: "Developer experience, learning curve, migration cost, velocity", color: "text-[var(--color-primary)]", border: "border-l-[var(--color-primary)]" },
  { role: "Product Manager", question: "Where does this fit in the backlog?", focus: "Roadmap alignment, sprint planning, stakeholder management", color: "text-[var(--color-accent)]", border: "border-l-[var(--color-accent)]" },
];

const conversation = [
  { role: "CEO", text: "So you want to invest in what you're calling an 'agentic design system.' Give me the thirty-second version." },
  { role: "Lincoln", text: "One system that serves every brand we own. AI agents consume the tokens and components directly. We cut design-to-delivery time by 80% and reduce the team needed for each new brand from five people to one." },
  { role: "CTO", text: "Hold on. 'AI agents consume the tokens' -- what does that actually mean technically? Are we talking about an MCP server? Custom tooling? Or just a markdown file and a prayer?" },
  { role: "Lincoln", text: "CLAUDE.md context files, design tokens as structured JSON, Code Connect mapping Figma to codebase, and MCP endpoints the agents can query. The design system becomes API infrastructure, not a Figma library." },
  { role: "CTO", text: "OK, that's more concrete than I expected. What happens when the agent hallucinates a component that doesn't exist?" },
  { role: "Lincoln", text: "The token contract constrains it. Typed variants, structured props. The agent can't invent a button variant that isn't in the system. The design system IS the guardrail." },
  { role: "CEO", text: "I like the 80% number. But I've heard 'design system will save us time' before. Last time we spent eighteen months building one and the developers ignored it." },
  { role: "Lincoln", text: "That's because it was a Figma library, not code. Developers don't consume Figma. This system starts in code and flows to Figma, not the other way around. The developers are the first users, not the last." },
  { role: "CEO", text: "And the AI part -- is this real or is this a conference slide?" },
  { role: "Lincoln", text: "My portfolio site is the proof. Every page was built by AI agents consuming the design system. The site demonstrates the methodology it describes. I can show you the agent definitions, the token architecture, and the deployed result." },
];

export default function StakeholderSimulator() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Design Communication</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          The Stakeholder <span className="text-[var(--color-warm-light)]">Simulator</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          I built an AI agent that simulates CEO, CTO, and CFO conversations so I can pressure-test design system ideas before the real meeting. Because the best ideas die in rooms where nobody speaks the audience&apos;s language.
        </p>
      </header>

      <main>
        {/* The Problem */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Problem</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Design systems don&apos;t die from bad design
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              They die in meetings. A CEO who doesn&apos;t see the revenue impact. A CTO who doesn&apos;t trust the architecture. A CFO who sees cost without return. A product manager who can&apos;t fit it in the roadmap.
            </p>
            <p>
              The design systems architect who can only talk to designers has already lost. The one who can walk into a C-suite meeting and translate <em>&ldquo;multi-brand token architecture&rdquo;</em> into <em>&ldquo;we launch new brands in days instead of months&rdquo;</em> is the one who gets funded.
            </p>
            <p>
              Alan Cooper called this role the <strong className="text-white">Design Communicator</strong> in <em>About Face</em>. Someone who translates between the design vision and the business reality. The problem is: most design teams don&apos;t have one. And the architect usually isn&apos;t trained for it.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">The Solution</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Simulate the room before you enter it
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            I built a Stakeholder Simulator agent that inhabits different executive perspectives. I pitch my idea, and the agent responds <em>as</em> the CEO, the CTO, the CFO &mdash; pushing back, asking hard questions, finding the gaps in my argument.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.role} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${p.border} rounded-xl`}>
                <h3 className={`font-display text-xl font-semibold mb-2 ${p.color}`}>{p.role}</h3>
                <p className="text-base text-white font-medium italic mb-3">&ldquo;{p.question}&rdquo;</p>
                <p className="text-sm text-white/40 leading-relaxed">{p.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Example Conversation */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">Room Mode</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Simulated pitch: agentic design systems
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Here&apos;s a simulated conversation where I pitch agentic design systems to a CEO and CTO. The agent plays both executives. I respond in real-time.
          </p>

          <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            {conversation.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === "Lincoln" ? "flex-row-reverse" : ""}`}>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                  msg.role === "CEO" ? "bg-[var(--color-warm)]/15 text-[var(--color-warm)]" :
                  msg.role === "CTO" ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)]" :
                  "bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]"
                }`}>
                  {msg.role === "Lincoln" ? "LM" : msg.role.slice(0, 3)}
                </div>
                <div className={`flex-1 p-5 rounded-xl ${
                  msg.role === "Lincoln" ? "bg-[var(--color-secondary)]/[0.06] border border-[var(--color-secondary)]/20" :
                  msg.role === "CEO" ? "bg-[var(--color-warm)]/[0.04] border border-[var(--color-warm)]/10" :
                  "bg-[var(--color-primary)]/[0.04] border border-[var(--color-primary)]/10"
                }`}>
                  <span className={`font-mono text-[11px] font-semibold block mb-2 ${
                    msg.role === "CEO" ? "text-[var(--color-warm)]" :
                    msg.role === "CTO" ? "text-[var(--color-primary)]" :
                    "text-[var(--color-secondary)]"
                  }`}>{msg.role}</span>
                  <p className="text-sm text-white/60 leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">Why This Matters</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The N in I&lt;N&gt;C is for every audience
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The Narrate layer isn&apos;t just machine-readable context for AI agents. It&apos;s the ability to encode and communicate vision for <em>any</em> audience &mdash; CEO, CIO, CTO, PO, SME. Same truth, different language.
            </p>
            <p>
              This maps to the MIND framework&apos;s <strong className="text-white">Narrative Reasoning</strong> &mdash; thinking in stories, simulating conversations, encoding complex ideas through narrative. The Stakeholder Simulator is that cognitive function made operational.
            </p>
            <p>
              Most design systems architects can explain their system to other architects. The ones who change organisations can explain it to <em>anyone in the room</em>. The simulator lets me practice that translation before the stakes are real.
            </p>
            <p className="text-[var(--color-warm-light)]">
              The best ideas don&apos;t win because they&apos;re best. They win because someone could explain them to the person holding the budget.
            </p>
          </div>
        </section>

        {/* The INC Connection */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Connection</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Alan Cooper meets agentic AI
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Cooper identified the Design Communicator as a missing role in software teams &mdash; someone who translates between the design vision and the business. Most companies still don&apos;t have one.
            </p>
            <p>
              AI changes this. You don&apos;t need to hire a Design Communicator. You need to build one. An agent that knows your design system, knows your positioning, and can simulate how a CFO, a CTO, or an engineering lead would respond to your proposal.
            </p>
            <p>
              This is also how I lead my AI team. I have four lead agents &mdash; UI Designer, UX Designer, FED Developer, UX Researcher. The Stakeholder Simulator is the fifth. It doesn&apos;t make things. It makes sure the things we make survive contact with the boardroom.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            Design systems don&apos;t need better components. They need better communicators. The agent simulates the audience so the architect can practice the translation.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The Stakeholder Simulator thesis</cite>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Want to pressure-test your design system pitch?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            Whether you&apos;re pitching to a CEO, defending to a CTO, or justifying to a CFO &mdash; I&apos;ve built the practice room. Let&apos;s talk about how narrative reasoning changes how design systems get funded.
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
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts &mdash; and pressure-tested by the Stakeholder Simulator before publishing.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
