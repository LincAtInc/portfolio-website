import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Interface I Designed Ten Years Too Early | Lincoln Mitchell",
  description:
    "Yesenia Perez-Cruz argues that AI-adapted UIs shift design systems from documenting components to documenting product primitives — the objects users create and manipulate. I designed exactly this for healthcare in 2016. The technology just wasn't ready.",
};

const spectrum = [
  {
    model: "Traditional UI",
    description: "Fixed surface. Same for every user, every context. The 80-year-old patient with six chronic conditions gets the same screen as the newborn.",
    verdict: "Safe. Predictable. Wrong for most contexts.",
    verdictColor: "text-[var(--color-warm)]",
    color: "border-l-[var(--color-warm)]",
    labelColor: "text-[var(--color-warm)]",
  },
  {
    model: "Prompt-Only (ChatGPT model)",
    description: "No structured UI. Just a text box. Too unstructured for clinical workflows. A doctor in an emergency cannot rely on having the right words at the right moment.",
    verdict: "Flexible. Powerful. Dangerous without structure.",
    verdictColor: "text-[var(--color-accent)]",
    color: "border-l-[var(--color-accent)]",
    labelColor: "text-[var(--color-accent)]",
  },
  {
    model: "Product Primitives",
    description: "The UI adapts to the object (the patient) and the intent (what the doctor needs to do right now). Structured enough for clinical safety. Adaptive enough for context.",
    verdict: "The design system documents objects, not components.",
    verdictColor: "text-[var(--color-primary)]",
    color: "border-l-[var(--color-primary)]",
    labelColor: "text-[var(--color-primary)]",
  },
  {
    model: "All Three, Coexisting",
    description: "Structured navigation for reliability. A prompt layer for context-driven adaptation. Prompting becomes part of navigation — not a replacement for it.",
    verdict: "Lincoln's addition: none of these alone is the answer.",
    verdictColor: "text-[var(--color-secondary)]",
    color: "border-l-[var(--color-secondary)]",
    labelColor: "text-[var(--color-secondary)]",
  },
];

const patientSignals = [
  { signal: "Age: newborn", surface: "Paediatric growth and developmental milestones view", color: "border-l-[var(--color-accent)]" },
  { signal: "Age: 80+, chronic conditions", surface: "Chronic disease management, polypharmacy review, care plan view", color: "border-l-[var(--color-warm)]" },
  { signal: "Mental health risk indicators present", surface: "Biopsychosocial assessment surfaces automatically — not buried in the workflow", color: "border-l-[var(--color-secondary)]" },
  { signal: "Presenting complaint: acute chest pain", surface: "Cardiovascular triage protocol, ECG flag, referral pathway", color: "border-l-[var(--color-primary)]" },
];

export default function ProductPrimitives() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="flex flex-col items-center text-center px-8 md:px-20 pt-30 pb-20 gap-6 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase">IDS 2026 Reflections</span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-[1]">
          The Interface I Designed Ten Years{" "}
          <span className="text-[var(--color-warm-light)]">Too Early</span>
        </h1>
        <p className="text-xl text-white/50 max-w-[660px] leading-relaxed">
          Yesenia Perez-Cruz&apos;s IDS 2026 talk argues that AI-adapted UIs shift design systems from documenting components to documenting product primitives — the objects users create and manipulate. In 2016, I designed exactly this capability for healthcare. The technology simply wasn&apos;t ready.
        </p>
      </header>

      <main>
        {/* The Talk */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Thesis</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Components fade. Objects remain.
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Yesenia Perez-Cruz&apos;s argument is precise and it cuts through a lot of design systems noise: UI components &mdash; buttons, inputs, cards &mdash; are implementation details. They fade into the background as AI adapts the surface based on user intent. What stays is the product primitive: the object the user is creating or manipulating.
            </p>
            <p>
              In a to-do app, the task is the primitive. In a CRM, the contact. In a clinical application, the patient. The design system&apos;s job is no longer to document how a button looks in its five states. It&apos;s to document the patient object: what properties it has, what states it carries, what surfaces those states should trigger.
            </p>
            <p>
              The agent reads the object. The agent determines the surface. The design system documents the contract between the two.
            </p>
            <p className="text-[var(--color-warm-light)]">
              This isn&apos;t the future of design systems. It&apos;s a description of something I tried to build in 2016.
            </p>
          </div>
        </section>

        {/* The Healthcare Parallel */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">Helix, 2016</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The same UI for every patient
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              At MedicalDirector, I was Chief Design Officer of Helix &mdash; a complex clinical application used by thousands of GPs across Australia. The product had grown over more than a decade. It worked. It was also, by the time I arrived, a static surface: every doctor saw the same interface regardless of the patient in front of them.
            </p>
            <p>
              An 80-year-old man with type 2 diabetes, hypertension, and chronic kidney disease got the same screen as a newborn presenting for a six-week check. The doctor had to navigate to the relevant workflows manually, from memory, in the middle of a consultation. The UI had no awareness of context.
            </p>
            <p>
              The industry response to this problem was plugins: topbars, sidebars, contextual panels bolted onto the primary UI. PenCS built several of these. The plugin approach acknowledged the problem &mdash; context matters &mdash; but solved it by adding complexity. More panels. More tabs. More decisions for the doctor to make before they could act.
            </p>
            <p>
              I thought there was a cleaner answer. The patient is the primitive. The patient&apos;s age, conditions, medications, history, and presenting complaint are intent signals. The UI should read those signals and surface the right experience automatically &mdash; not require the doctor to navigate to it.
            </p>
          </div>
        </section>

        {/* The Chat Interface */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">The Prototype</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            A chat interface that generated clinical UIs
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The NorthStar I designed for Helix included a chat window embedded in the clinical record. Not a support chat. Not a messaging feature. A prompt layer that would generate the interface the doctor needed based on what they described.
            </p>
            <p>
              The idea: the doctor types &ldquo;chronic disease review for this patient&rdquo; and the system surfaces a structured management view tailored to that patient&apos;s specific conditions — diabetes, hypertension, CKD — with the relevant measurements, medication review, care plan status, and referral flags all present at once. Not a navigation path. A generated surface.
            </p>
            <p>
              Or the system reads the patient record automatically and generates the surface without the doctor having to ask. The patient primitive drives the UI. The doctor arrives at the consultation and the relevant context is already there.
            </p>
            <p>
              In 2016, this was a NorthStar. The language models that could generate structured UI from a prompt didn&apos;t exist. The context-window capacity to process a full patient record didn&apos;t exist. The infrastructure to serve dynamically generated clinical views safely and reliably didn&apos;t exist.
            </p>
            <p>
              It shipped as a static chat that opened fixed screens. The vision was right. The technology was wrong.
            </p>
            <p className="text-[var(--color-warm-light)]">
              In 2026, Yesenia Perez-Cruz is describing that vision as the future of design systems.
            </p>
          </div>
        </section>

        {/* The Patient as Primitive */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Object Model</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The patient IS the product primitive
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            In healthcare, the patient object carries intent signals that a design system could read directly. The surface that gets generated is not arbitrary — it&apos;s derived from what the primitive contains.
          </p>

          <div className="flex flex-col gap-4 max-w-[860px]">
            {patientSignals.map((item) => (
              <div key={item.signal} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${item.color} rounded-xl flex gap-8 items-start`}>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:gap-8 md:items-start">
                    <div className="md:w-[260px] shrink-0">
                      <span className="font-mono text-[11px] text-white/25 uppercase tracking-[0.08em] block mb-1.5">Patient signal</span>
                      <p className="text-sm text-white/60 font-medium">{item.signal}</p>
                    </div>
                    <div className="flex-1">
                      <span className="font-mono text-[11px] text-white/25 uppercase tracking-[0.08em] block mb-1.5">Generated surface</span>
                      <p className="text-[15px] text-white/70 leading-relaxed">{item.surface}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              At Helix, I inverted the biopsychosocial model: surfacing mental health for the patient at the point of care rather than burying it in a sub-workflow the doctor had to navigate to. The invisible foundation &mdash; mental health context &mdash; should determine whether the downstream clinical picture makes sense.
            </p>
            <p>
              Same principle as product primitives. The object carries the context. The context determines the surface. The design system documents the relationship between the two.
            </p>
          </div>
        </section>

        {/* The Spectrum */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-warm)] tracking-[0.2em] uppercase block mb-4">The Spectrum</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Three models — and why all three coexist
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            There is a tendency in any new paradigm to discard the old one. But in clinical contexts — and in most professional contexts — the answer isn&apos;t to replace structured UI with prompting. It&apos;s to layer them.
          </p>

          <div className="flex flex-col gap-4 max-w-[900px]">
            {spectrum.map((item) => (
              <div key={item.model} className={`p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${item.color} rounded-xl`}>
                <h3 className={`font-display text-xl font-semibold mb-3 ${item.labelColor}`}>{item.model}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed mb-4">{item.description}</p>
                <p className={`font-mono text-[13px] italic ${item.verdictColor}`}>{item.verdict}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              The emergency consultation needs reliable, instantly navigable structure. The complex chronic disease review benefits from contextual adaptation. The doctor who knows exactly what they need should be able to prompt for it. The design system needs to document all three surfaces and the rules that determine which one to show.
            </p>
            <p>
              Prompting becomes part of navigation. Not a replacement for it.
            </p>
          </div>
        </section>

        {/* Prompt as Navigation */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-primary)] tracking-[0.2em] uppercase block mb-4">Prompt as Navigation</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            What this looks like in practice
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[680px] mb-12">
            Imagine a professional UI where the prompt isn&apos;t a chatbot in the corner — it&apos;s a first-class navigation mechanism. The user describes what they need, and the system generates the right surface from the design system.
          </p>

          <div className="flex flex-col gap-5 max-w-[860px]">
            {[
              { prompt: "What do I need to do for this patient?", generates: "Contextual task list: overdue vaccinations, pending referral, medication review due. Prioritised by clinical urgency, not alphabetical order.", domain: "Healthcare", color: "border-l-[var(--color-warm)]", promptColor: "text-[var(--color-warm)]" },
              { prompt: "Bulk edit all buttons to use the new brand tokens", generates: "Multi-select component view with token diff preview. Shows current vs proposed values across every instance. One-click apply with rollback.", domain: "Design Systems", color: "border-l-[var(--color-primary)]", promptColor: "text-[var(--color-primary)]" },
              { prompt: "Show me everything that changed since last Tuesday", generates: "Filtered changelog view: component updates, token changes, documentation edits. Grouped by impact level, not chronology. Visual diff where applicable.", domain: "Design Systems", color: "border-l-[var(--color-accent)]", promptColor: "text-[var(--color-accent)]" },
              { prompt: "I need to present this patient to the psychiatrist", generates: "Mental health summary surface: PHQ-9 scores, medication history, risk assessments, GP notes flagged as relevant. Formatted for specialist referral, not GP workflow.", domain: "Healthcare", color: "border-l-[var(--color-secondary)]", promptColor: "text-[var(--color-secondary)]" },
              { prompt: "Compare our typography scale with the accessibility guidelines", generates: "Side-by-side audit view: current tokens vs WCAG requirements. Failures highlighted. Suggested corrections with preview. Exportable as a compliance report.", domain: "Design Systems", color: "border-l-[var(--color-warm-light)]", promptColor: "text-[var(--color-warm-light)]" },
              { prompt: "This patient is in acute chest pain", generates: "Emergency protocol surface: vital signs entry, STEMI pathway checklist, nearest cath lab availability, pre-populated referral. No navigation menus. No sidebar. Just the critical path.", domain: "Healthcare", color: "border-l-[var(--color-warm)]", promptColor: "text-[var(--color-warm)]" },
              { prompt: "Create a new brand theme for the winter campaign", generates: "Theme authoring surface: base token palette, preview across key components, contrast checker, export options for web/print/social. All within the design system constraints.", domain: "Marketing", color: "border-l-[var(--color-primary)]", promptColor: "text-[var(--color-primary)]" },
              { prompt: "Onboard me — I just joined the team", generates: "Personalised onboarding surface: key tokens and their rationale, component library overview, contribution guidelines, recent changes, who to ask. Not a static wiki page — a generated briefing based on the team member&apos;s role.", domain: "Design Systems", color: "border-l-[var(--color-accent)]", promptColor: "text-[var(--color-accent)]" },
            ].map((ex, i) => (
              <div key={i} className={`p-7 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] ${ex.color} rounded-xl`}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[11px] text-white/20 uppercase tracking-wider">{ex.domain}</span>
                </div>
                <p className={`font-display text-lg font-semibold mb-3 ${ex.promptColor}`}>&ldquo;{ex.prompt}&rdquo;</p>
                <p className="text-[15px] text-white/45 leading-relaxed"><strong className="text-white/60">Generates:</strong> {ex.generates}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              None of these require a general-purpose AI chatbot. They require a design system that documents <strong className="text-white">product primitives</strong> (patients, components, tokens, campaigns) and <strong className="text-white">intent signals</strong> (urgency, role, task type) — then an agent that routes to the right surface.
            </p>
            <p>
              The design system doesn&apos;t generate the UI from nothing. It generates it from <em>itself</em> — structured tokens, documented objects, and encoded intent. That&apos;s the difference between a chatbot and an agentic design system.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
          <blockquote className="relative font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-white leading-[1.4] tracking-tight max-w-[900px] mx-auto mb-6">
            <span className="absolute -top-12 -left-6 text-[120px] text-[var(--color-warm)]/30 font-serif leading-none">&ldquo;</span>
            Design instinct can predate technical feasibility. The prototype shapes the vision. The vision shapes the roadmap. The technology catches up.
          </blockquote>
          <cite className="text-sm text-[#64748b] not-italic">NorthStar Prototyping — Helix, 2016</cite>
        </section>

        {/* NorthStar Before the Term */}
        <section className="bg-[#0f172a] px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-secondary)] tracking-[0.2em] uppercase block mb-4">NorthStar Prototyping</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Prototyping for the unknown — before the term existed
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Nate Baldwin&apos;s IDS 2026 talk is called &ldquo;Prototyping for the Unknown.&rdquo; The Helix chat interface was exactly that. A prototype for a capability that didn&apos;t exist yet &mdash; not as a speculative exercise, but as a genuine design conviction about where clinical software needed to go.
            </p>
            <p>
              This is what NorthStar Prototyping means in practice. You design for where the technology is going, not where it currently is. The vision outruns the implementation. The prototype exists as a contract for the future: &ldquo;when the technology catches up, build this.&rdquo;
            </p>
            <p>
              The fact that Yesenia is now describing the product primitives approach at a design systems conference isn&apos;t vindicating hindsight. It&apos;s evidence that the design instinct was sound in 2016. The constraints were technical, not conceptual. The NorthStar was right.
            </p>
            <p>
              That&apos;s the point of NorthStar Prototyping. You don&apos;t build it to ship it today. You build it to know where you&apos;re going &mdash; and to be ready to move faster than anyone else when the technology arrives.
            </p>
          </div>
        </section>

        {/* Intent-Based UI — The INC Mapping */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <span className="font-mono text-xs font-medium text-[var(--color-accent)] tracking-[0.2em] uppercase block mb-4">The Evolution</span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            From Directive UI to Intent-Based UI
          </h2>
          <div className="text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6 mb-12">
            <p>
              Every UI you&apos;ve ever used is <strong className="text-white">directive</strong>. The system tells you what to do: click this button, fill this form, navigate this menu. The interface is fixed. The user adapts to it.
            </p>
            <p>
              What Yesenia is describing — and what I designed at Helix a decade ago — is <strong className="text-[var(--color-warm-light)]">intent-based UI</strong>. The user expresses what they need. The system generates the right surface. The interface adapts to the user.
            </p>
            <p>
              And it maps perfectly onto I&lt;N&gt;C:
            </p>
          </div>

          <div className="flex flex-col gap-5 max-w-[860px]">
            <div className="p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] border-l-[var(--color-warm)] rounded-xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-2xl font-bold text-[var(--color-warm)]">I</span>
                <span className="font-mono text-[11px] text-white/30 uppercase tracking-wider">= Intent-Based UI</span>
              </div>
              <p className="text-[15px] text-white/50 leading-relaxed">
                The user expresses intent. &ldquo;What do I need to do for this patient?&rdquo; &ldquo;Bulk edit all buttons.&rdquo; &ldquo;Onboard me.&rdquo; This is <strong className="text-white">discovery</strong> — not just for designers and developers, but for <em>every user</em>. The application becomes explorable by intent, not just by navigation. Everyone becomes a discoverer of the application&apos;s possibility space.
              </p>
            </div>

            <div className="p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] border-l-[var(--color-secondary)] rounded-xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-2xl font-bold text-[var(--color-secondary)]">&lt;N&gt;</span>
                <span className="font-mono text-[11px] text-white/30 uppercase tracking-wider">= Agentic Layer</span>
              </div>
              <p className="text-[15px] text-white/50 leading-relaxed">
                The design system as infrastructure. Tokens, context files, domain knowledge, MCP connections, APIs. The &lt;N&gt; layer doesn&apos;t care who&apos;s asking — designer, developer, doctor, or end user. It translates intent into the right output. Product primitives, intent signals, surface rules — all encoded in the narrative layer. This is the bridge that makes adaptive UI possible.
              </p>
            </div>

            <div className="p-8 bg-[#0a0f1a] border border-[#1e293b] border-l-[3px] border-l-[var(--color-primary)] rounded-xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-2xl font-bold text-[var(--color-primary)]">C</span>
                <span className="font-mono text-[11px] text-white/30 uppercase tracking-wider">= Directive UI</span>
              </div>
              <p className="text-[15px] text-white/50 leading-relaxed">
                The generated surface. Buttons, forms, layouts, workflows. Structured, safe, compliant. This is what the system produces — the directive UI that the user interacts with. But now it&apos;s not static. It&apos;s generated from intent, routed through the agentic layer, constrained by the design system. Delivery, but contextual delivery.
              </p>
            </div>
          </div>

          <div className="mt-12 text-[17px] text-white/50 leading-relaxed max-w-[720px] space-y-6">
            <p>
              Here&apos;s the profound implication: Intent-Based UI dissolves the boundary between <strong className="text-white">building software</strong> and <strong className="text-white">using software</strong>. A designer discovers by prompting. A developer discovers by prompting. A doctor discovers by prompting. A patient discovers by prompting. The act of using the application becomes the act of shaping it.
            </p>
            <p>
              With MCP and APIs connecting systems, all software merges — not technically, but <em>experientially</em>. The user stops navigating between apps and starts navigating by intent. The design system, the clinical record, the component library, the brand guidelines — they all become surfaces the agentic layer can assemble on demand.
            </p>
            <p className="text-[var(--color-warm-light)]">
              The user isn&apos;t using software anymore. They&apos;re creating experiences. And the design system is what makes those experiences consistent, safe, and on-brand — no matter who asked, no matter what surface was generated.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-20 py-24 max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            Is your design system ready for product primitives?
          </h2>
          <p className="text-lg text-white/50 max-w-[580px] mx-auto mb-8 leading-relaxed">
            If you&apos;re thinking about how AI-adaptive UIs change what a design system needs to document — the shift from components to objects, from static surfaces to intent-driven interfaces — I&apos;d like to have that conversation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://cal.com/lincmitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-white bg-[var(--color-primary)] px-8 py-3.5 rounded-lg no-underline hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Book a Conversation
            </a>
            <Link
              href="/thoughts/beyond-ui"
              className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
            >
              Beyond the Screen
            </Link>
            <Link
              href="/thoughts"
              className="text-[15px] font-medium text-white/50 border border-[#1e293b] px-8 py-3.5 rounded-lg no-underline hover:text-white hover:border-[#475569] transition-colors"
            >
              More Thoughts
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-10 border-t border-[#1e293b] text-center">
        <p className="text-[13px] text-[#475569] mb-2">This page was generated via Claude Code prompts — built ten years after the prototype it describes finally became possible.</p>
        <p className="text-[13px] text-[#475569]"><Link href="/" className="text-blue-400 no-underline">lincolnmitchell.io</Link> &middot; Interfaces-N-Creatives since 2008</p>
      </footer>
    </>
  );
}
