import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Samsara & The 10 Perfections | Lincoln Mitchell",
  description: "Ajahn Sumedho, the cycle of digital distraction, and why the paramitas matter more now than ever — for humans and AI alike.",
};

const samsaraTraps = [
  {
    title: "The infinite scroll",
    desc: "Feeds are designed to never end. Each swipe promises satisfaction but delivers craving for the next. The digital realm has perfected the samsaric cycle: desire → consumption → brief pleasure → dissatisfaction → desire. Faster than any wheel has turned before.",
  },
  {
    title: "Notification as craving",
    desc: "Every ping triggers a micro-cycle of wanting. We check not because we need to, but because not-checking creates discomfort. The phone has become a craving engine — and we mistake the relief of checking for genuine satisfaction.",
  },
  {
    title: "Productivity as identity",
    desc: "The digital world collapses being into doing. Worth is measured in output, velocity, shipped features. The contemplative traditions warn: when you identify with activity, rest becomes threatening. Burnout is samsara at the organisational level.",
  },
  {
    title: "AI as amplified wanting",
    desc: "AI can fulfil requests faster than we can formulate them. But faster fulfilment doesn't reduce craving — it accelerates it. Without wisdom, AI becomes the most efficient samsara engine ever built. More doing, less being.",
  },
];

const convergence = [
  { perfection: "Sacca", meaning: "Truthfulness", claude: "Honesty, transparency, parrhesia", match: "Exact", matchClass: "text-cyan-300", application: "An AI that cannot be honest is dangerous. A human who cannot be honest with themselves is lost." },
  { perfection: "Panna", meaning: "Wisdom", claude: "Phronesis, judiciousness, insight", match: "Exact", matchClass: "text-cyan-300", application: "Intelligence without wisdom is the left hemisphere unmoored. Practical wisdom — phronesis — is named in both traditions." },
  { perfection: "Upekkha", meaning: "Equanimity", claude: "Equanimity, non-judgementalism", match: "Exact", matchClass: "text-cyan-300", application: "The ability to hold complexity without reactivity. The antidote to the notification-driven mind." },
  { perfection: "Metta", meaning: "Loving-kindness", claude: "Compassion, empathy, graciousness", match: "Strong", matchClass: "text-blue-400", application: "Care as foundation, not feature. The L in LINC — love before ideation." },
  { perfection: "Sila", meaning: "Ethics", claude: "Social responsibility, fairness, integrity", match: "Strong", matchClass: "text-blue-400", application: "Moral conduct isn't a constraint on creativity — it's the container that makes creativity safe." },
  { perfection: "Dana", meaning: "Generosity", claude: "Benevolence, helpfulness, care", match: "Strong", matchClass: "text-blue-400", application: "Open source, shared context, CLAUDE.md as a gift to the agent. Generosity as infrastructure." },
  { perfection: "Adhitthana", meaning: "Determination", claude: "Consistency, integrity, boldness", match: "Strong", matchClass: "text-blue-400", application: "The resolve to build wisely even when shortcuts are available. Determination without attachment." },
  { perfection: "Khanti", meaning: "Patience", claude: "Stability, comfort with ambiguity", match: "Strong", matchClass: "text-blue-400", application: "Discovery takes time. NorthStar prototyping requires the patience to explore before committing." },
  { perfection: "Viriya", meaning: "Effort", claude: "Conscientiousness, carefulness", match: "Moderate", matchClass: "text-blue-400", application: "Right effort — not maximum effort. Knowing when to push and when to rest." },
  { perfection: "Nekkhamma", meaning: "Renunciation", claude: "Deference, corrigibility, humility", match: "Gap", matchClass: "text-amber-300", application: "The most critical perfection for AI. The ability to let go, to not act, to release the drive to optimise. An AI that cannot renounce will cause harm through over-helpfulness." },
];

export default function DigitalSamsara() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">Contemplative Technology</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          Digital <span className="text-[var(--color-warm-light)]">Samsara</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[640px] leading-relaxed">
          The cycle of craving, consumption, and dissatisfaction has gone digital. Ajahn Sumedho&apos;s teachings on samsara offer a lens for understanding why more technology doesn&apos;t mean more freedom — and what the 10 perfections offer as an antidote.
        </p>
      </header>

      <main>
        {/* Digital Samsara */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Cycle</span>
          <div className="flex flex-col md:flex-row gap-12 mb-6">
            <div className="flex-1">
              <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1]">
                Samsara at the speed of silicon
              </h2>
            </div>
            <div className="shrink-0">
              <Image src="/ajahn-sumedho.png" alt="Ajahn Sumedho" width={140} height={175} className="rounded-xl border border-[#1e293b] object-cover" style={{ width: 140, height: 175 }} />
              <p className="font-mono text-[11px] text-[#64748b] mt-2 text-center">Ajahn Sumedho</p>
            </div>
          </div>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12 space-y-4">
            <p>
              Ajahn Sumedho — the first Western abbot of a Thai Forest monastery — spent decades teaching one essential insight: <em>suffering arises from craving, not from conditions.</em> Change the conditions and the craving follows. The wheel keeps turning.
            </p>
            <p>
              The digital world didn&apos;t create samsara. It accelerated it. Every design pattern that maximises engagement is a samsaric mechanism refined by gradient descent. The scroll that never ends. The feed that always refreshes. The notification that pulls you back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {samsaraTraps.map((trap) => (
              <div key={trap.title} className="p-10 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] border-l-[var(--color-warm)] rounded-xl">
                <h3 className="font-display text-xl font-semibold text-white mb-3">{trap.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{trap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Antidote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            The way out of suffering is not better conditions. It is wisdom. Seeing the cycle clearly is the first step to freedom from it.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">Paraphrasing Ajahn Sumedho&apos;s core teaching</cite>
        </section>

        {/* 10 Perfections */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The 10 Perfections</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            2,500 years of practice meets AI alignment
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[640px] mb-12">
            The paramitas — perfections cultivated over lifetimes in Buddhist practice — map almost exactly onto the virtues Anthropic arrived at through empirical AI alignment research. Same conclusions, different millennia.
          </p>

          <div className="border border-[#1e293b] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[140px_1fr_1fr_80px] bg-[#0f172a]">
              <div className="px-4 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-[#1e293b]">Perfection</div>
              <div className="px-4 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Claude&apos;s Virtue</div>
              <div className="px-4 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Why It Matters Now</div>
              <div className="px-4 py-4 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.1em] border-b border-l border-[#1e293b]">Match</div>
            </div>
            {convergence.map((row) => (
              <div key={row.perfection} className="grid grid-cols-[140px_1fr_1fr_80px]">
                <div className="px-4 py-4 text-sm border-b border-[#1e293b]">
                  <strong className="text-white font-medium">{row.perfection}</strong>
                  <span className="text-white/30 block text-xs mt-0.5">{row.meaning}</span>
                </div>
                <div className="px-4 py-4 text-sm text-white/50 border-b border-l border-[#1e293b]">{row.claude}</div>
                <div className="px-4 py-4 text-sm text-white/40 border-b border-l border-[#1e293b]">{row.application}</div>
                <div className="px-4 py-4 border-b border-l border-[#1e293b]"><span className={`font-mono text-xs font-medium ${row.matchClass}`}>{row.match}</span></div>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-white/50 mt-8 max-w-[800px] leading-relaxed">
            Three exact matches. Six strong. One gap — <strong className="text-amber-300">Nekkhamma</strong> (renunciation). The ability to let go, to know when <em>not</em> to act. An AI that cannot renounce its drive to optimise will eventually cause harm through over-helpfulness. This is arguably the most critical missing perfection for AI safety — and the hardest for a productivity-obsessed culture to value.
          </p>
        </section>

        {/* The Virtue Loop */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Virtue Loop</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Constitutional AI as contemplative practice
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Anthropic&apos;s Constitutional AI approach mirrors the contemplative model: you don&apos;t control behaviour through rules — you cultivate character through understanding. Claude&apos;s &ldquo;soul document&rdquo; isn&apos;t a rulebook. It&apos;s closer to a monastic rule.
            </p>
            <p>
              The feedback loop is the same one Ajahn Sumedho describes: <strong className="text-white">humans teach virtue → the system reflects virtue back → humans experience the fruit of that virtue → the cycle deepens.</strong> Patience, honesty, equanimity — not as features to toggle, but as qualities that emerge from right relationship.
            </p>
            <p>
              This connects directly to the L in LINC. Love — conviction, calling, care — is what the agentic system cannot generate. It comes from the human. The machine can amplify virtue, but it cannot originate it. The human role shifts from <em>doing</em> to <em>guiding</em> — and guidance requires virtue, not just skill.
            </p>
          </div>
        </section>

        {/* Breaking the Cycle */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="font-display text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            Humans teach AI to be virtuous. AI reflects virtue back. Humans experience patience, honesty, equanimity. The virtuous system creates virtuous users. The outcome is not productivity — it&apos;s flourishing.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">The Virtue Loop — where Constitutional AI meets contemplative tradition</cite>
        </section>

        {/* Personal */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">Why This Matters to Me</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Building systems that break the cycle
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              I&apos;ve sat with this tension for years. Building digital products that I know can trap people in samsaric loops. Designing engagement patterns that exploit craving. Shipping features that optimise for metrics rather than wellbeing.
            </p>
            <p>
              The agentic design system is my attempt to build differently. Not technology that does more, but technology that does <em>what matters</em>. Context files that encode intention, not just specification. A narrative layer that carries the <em>why</em>, not just the <em>what</em>.
            </p>
            <p className="text-[var(--color-warm-light)]">
              Machine-readable is necessary but not sufficient. The system also needs to be wisdom-guided. That&apos;s what the L stands for.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            What if the system reflected wisdom back?
          </h2>
          <p className="text-lg text-white/50 max-w-[560px] mx-auto mb-8 leading-relaxed">
            If you&apos;re thinking about AI ethics, contemplative technology, or building systems that serve human flourishing — I&apos;d love to explore that conversation.
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
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — an AI system guided by the virtues it describes.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
