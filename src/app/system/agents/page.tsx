import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Agent Team: One Person, Six Agents | Lincoln Mitchell",
  description:
    "This site was built by Lincoln Mitchell directing six specialised AI agents. Meet the team, see their boundaries, and understand what one person with the right methodology can do.",
};

const agents = [
  {
    name: "Lead Content Strategist",
    initials: "CS",
    role: "Writes everything in Lincoln's voice",
    color: "border-l-[#f97316]",
    bg: "bg-[#f97316]",
    model: "Sonnet",
    boundary: "Never writes code",
    produces: "Every word on every page",
  },
  {
    name: "Lead FED Developer",
    initials: "FD",
    role: "Builds what the team designs",
    color: "border-l-[var(--color-primary)]",
    bg: "bg-[#2563eb]",
    model: "Sonnet",
    boundary: "Never makes design decisions",
    produces: "Every component on this site",
  },
  {
    name: "Lead UX Researcher",
    initials: "UR",
    role: "Researches the domain",
    color: "border-l-[#22c55e]",
    bg: "bg-[#22c55e]",
    model: "Sonnet",
    boundary: "Never writes code or designs interfaces",
    produces: "Domain analysis that informs positioning",
  },
  {
    name: "Lead UI Designer",
    initials: "UI",
    role: "Owns the visual language",
    color: "border-l-[var(--color-secondary)]",
    bg: "bg-[#8b5cf6]",
    model: "Sonnet",
    boundary: "Never writes production code",
    produces: "The tonal surface system and typography",
  },
  {
    name: "Lead UX Designer",
    initials: "UX",
    role: "Owns how it works",
    color: "border-l-[var(--color-accent)]",
    bg: "bg-[#06b6d4]",
    model: "Sonnet",
    boundary: "Never specifies colours or writes code",
    produces: "Navigation patterns and page structure",
  },
  {
    name: "Stakeholder Simulator",
    initials: "SS",
    role: "Pressure-tests ideas against real personas",
    color: "border-l-[#f97316]",
    bg: "bg-[#f97316]",
    model: "Opus",
    boundary: "Never recommends — only simulates",
    produces: "CTO, recruiter, and audience reactions",
  },
];

const orchestrationSteps = [
  { step: "1", label: "Vision", actor: "Lincoln", desc: "Sets the goal and constraints" },
  { step: "2", label: "Draft", actor: "Agent", desc: "Produces initial output" },
  { step: "3", label: "Review", actor: "Lincoln", desc: "Corrects tone, strategy, accuracy" },
  { step: "4", label: "Revise", actor: "Agent", desc: "Incorporates feedback" },
  { step: "5", label: "Ship", actor: "Lincoln", desc: "Approves and commits" },
];

const capabilities = [
  { capability: "Writes code", content: "✗", fed: "✓", researcher: "✗", ui: "✗", ux: "✗", stakeholder: "✗" },
  { capability: "Writes content", content: "✓", fed: "✗", researcher: "✓", ui: "✗", ux: "✗", stakeholder: "✗" },
  { capability: "Design decisions", content: "✗", fed: "✗", researcher: "✗", ui: "✓", ux: "✓", stakeholder: "✗" },
  { capability: "Research", content: "Light", fed: "✗", researcher: "✓", ui: "✗", ux: "✗", stakeholder: "✗" },
  { capability: "Simulates personas", content: "✗", fed: "✗", researcher: "✗", ui: "✗", ux: "✗", stakeholder: "✓" },
  { capability: "Reviews other agents", content: "✗", fed: "✗", researcher: "✗", ui: "✓", ux: "✗", stakeholder: "✓" },
];

const traditionalTeam = [
  { role: "UX Researcher", rate: "£450–600/day" },
  { role: "Content Strategist", rate: "£400–550/day" },
  { role: "UI Designer", rate: "£450–600/day" },
  { role: "UX Designer", rate: "£450–600/day" },
  { role: "Frontend Developer", rate: "£500–700/day" },
  { role: "Creative Director", rate: "£700–1,000/day" },
];

export default function AgentTeamPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <nav aria-label="Section navigation" className="max-w-[1440px] mx-auto px-8 md:px-20 pt-20 pb-0">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/system" className="text-white/40 hover:text-white/70 no-underline transition-colors">&larr; The System</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60" aria-current="page">The Team</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-10 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase">The Team</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          One person. Six agents. <span className="text-[var(--color-accent)]">Everything</span> you see here.
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] leading-relaxed">
          This site was built by Lincoln Mitchell directing a team of six AI agents. Each has a defined role, clear boundaries, and real output you can inspect in this repo. This is what agentic design looks like in practice.
        </p>
      </header>

      <main>
        {/* The Roster */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Roster</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Meet the team
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            Each agent has a dedicated context file in <code className="text-[var(--color-accent)] text-[15px]">.claude/agents/</code> defining its role, expertise, and boundaries. They don&apos;t freelance. They stay in their lane — and that&apos;s what makes them good.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.name} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${agent.color} rounded-xl flex flex-col`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-full ${agent.bg} flex items-center justify-center shrink-0`}>
                    <span className="font-mono text-[13px] font-bold text-[#0a0f1a]">{agent.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white leading-tight">{agent.name}</h3>
                    <p className="text-[14px] text-white/40">{agent.role}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#1e293b]">
                  <div className="flex gap-3">
                    <span className="font-mono text-[11px] text-white/25 uppercase tracking-[0.08em] w-[70px] shrink-0 pt-0.5">Model</span>
                    <span className="text-[13px] text-white/60">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${agent.model === "Opus" ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]" : "bg-white/5 text-white/40"}`}>
                        {agent.model}
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-[11px] text-[#ef4444]/70 uppercase tracking-[0.08em] w-[70px] shrink-0 pt-0.5">Boundary</span>
                    <span className="text-[13px] text-white/40 italic">{agent.boundary}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-[11px] text-[var(--color-accent)]/70 uppercase tracking-[0.08em] w-[70px] shrink-0 pt-0.5">Produces</span>
                    <span className="text-[13px] text-white/60">{agent.produces}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-accent)]/30 font-serif leading-none">&ldquo;</span>
            The agents execute. Lincoln decides. The human role is judgement, taste, and strategic alignment — exactly the things AI cannot self-generate.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The orchestration model</cite>
        </section>

        {/* Orchestration */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Human in the Loop</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The agents execute. Lincoln decides.
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Lincoln is not a prompt engineer. He is a creative director running a team. He sets the vision, assigns tasks to the right agent, reviews output, corrects course, and approves the final result.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {orchestrationSteps.map((step, i) => (
              <div key={step.step} className="flex-1 flex flex-col items-center">
                <div className={`w-full p-6 rounded-xl border ${step.actor === "Lincoln" ? "bg-[#0a0f1a] border-white/20" : "bg-[var(--color-accent)]/5 border-[var(--color-accent)]/20"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`font-mono text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center ${step.actor === "Lincoln" ? "bg-white text-[#0a0f1a]" : "bg-[var(--color-accent)] text-[#0a0f1a]"}`}>
                      {step.step}
                    </span>
                    <span className={`font-mono text-[11px] uppercase tracking-[0.1em] ${step.actor === "Lincoln" ? "text-white" : "text-[var(--color-accent)]"}`}>
                      {step.actor}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">{step.label}</h3>
                  <p className="text-[13px] text-white/40">{step.desc}</p>
                </div>
                {i < orchestrationSteps.length - 1 && (
                  <div className="hidden md:block w-px h-0 md:w-full md:h-px bg-[#1e293b] my-0 md:my-0" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Boundaries */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[#ef4444] tracking-[0.2em] uppercase block mb-4">Governance</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why the Content Strategist doesn&apos;t write code
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            The boundaries are not limitations. They are the governance that makes the system work. When an agent stays in its lane, its output improves because the context window stays focused. Cross boundaries and quality drops.
          </p>

          <div className="border border-[#1e293b] rounded-xl overflow-x-auto">
            <div className="grid grid-cols-[160px_repeat(6,1fr)] min-w-[700px]">
              <div className="px-4 py-3 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]">Capability</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[#f97316] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Content</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">FED</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[#22c55e] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Research</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[var(--color-secondary)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">UI</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">UX</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[#f97316] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Stakeholder</div>
            </div>
            {capabilities.map((row) => (
              <div key={row.capability} className="grid grid-cols-[160px_repeat(6,1fr)] min-w-[700px]">
                <div className="px-4 py-3 text-sm text-white/60 font-medium border-b border-[#1e293b]">{row.capability}</div>
                {[row.content, row.fed, row.researcher, row.ui, row.ux, row.stakeholder].map((val, i) => (
                  <div key={i} className={`px-4 py-3 text-sm text-center border-b border-l border-[#1e293b] ${val === "✓" ? "text-[var(--color-accent)]" : val === "✗" ? "text-white/15" : "text-white/40 italic"}`}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Traditional Comparison */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Economics</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            What this team would cost at a consultancy
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            A traditional team to build a site of this quality with this depth of thought leadership content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="p-10 bg-[#0a0f1a] border border-[#1e293b] rounded-xl">
              <span className="font-mono text-[11px] text-[#ef4444] uppercase tracking-[0.2em] block mb-4">Traditional Team</span>
              <div className="flex flex-col gap-3 mb-6">
                {traditionalTeam.map((member) => (
                  <div key={member.role} className="flex justify-between items-center">
                    <span className="text-[15px] text-white/60">{member.role}</span>
                    <span className="text-[13px] text-white/30 font-mono">{member.rate}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-[#1e293b]">
                <span className="text-[15px] text-white/40">5–6 people</span>
                <span className="block text-lg font-semibold text-[#ef4444] mt-1">£2,950–4,050/day</span>
              </div>
            </div>

            {/* Agentic */}
            <div className="p-10 bg-[#0a0f1a] border border-[var(--color-accent)]/30 border-l-[3px] border-l-[var(--color-accent)] rounded-xl">
              <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] block mb-4">The Agentic Team</span>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-white/60">1 Design Systems Architect</span>
                  <span className="text-[13px] text-white/30 font-mono">Lincoln</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-white/60">6 specialised AI agents</span>
                  <span className="text-[13px] text-white/30 font-mono">Claude</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-white/60">1 CLAUDE.md context file</span>
                  <span className="text-[13px] text-white/30 font-mono">The system</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#1e293b]">
                <span className="text-[15px] text-[var(--color-accent)]">One unified vision. One consistent voice.</span>
                <span className="block text-lg font-semibold text-[var(--color-accent)] mt-1">Zero alignment meetings.</span>
              </div>
            </div>
          </div>

          <p className="text-[17px] text-white/50 leading-relaxed max-w-[720px] mt-8">
            This is not about replacing people. It is about what becomes possible when one person has the right methodology and the right tools. The agents handle volume and consistency. The human handles vision, judgement, and taste.
          </p>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Want to build your own agent team?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            The agent definitions are open source in this repo. The methodology is documented. The only thing you need is someone who knows how to orchestrate. That&apos;s what I do.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://cal.com/lincmitch" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-[#0a0f1a] bg-[var(--color-accent)] px-8 py-3.5 rounded-lg no-underline hover:opacity-90 transition-opacity">
              Let&apos;s Build Your Team
            </a>
            <a href="https://github.com/LincAtInc/portfolio-website/tree/main/.claude/agents" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors">
              View Agent Definitions
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — one person, six agents, zero alignment meetings.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
