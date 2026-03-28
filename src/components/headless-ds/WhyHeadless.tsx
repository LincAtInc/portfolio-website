const cards = [
  {
    colorClass: 'bg-primary/15',
    stroke: '#2563eb',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
    title: 'Behaviour Separation',
    description: 'Radix UI primitives handle accessibility, keyboard navigation, and state management. Zero visual opinions baked in.',
  },
  {
    colorClass: 'bg-secondary/15',
    stroke: '#8b5cf6',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m-7-7h6m6 0h6"/></svg>,
    title: 'Token-Driven Theming',
    description: 'Swap a single CSS file to re-skin the entire system. Healthcare, fintech, e-commerce — same components, different tokens.',
  },
  {
    colorClass: 'bg-accent/15',
    stroke: '#06b6d4',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'Machine-Readable',
    description: 'Tokens as CSS custom properties. CLAUDE.md as context. AI agents can consume, extend, and generate from the system.',
  },
];

export function WhyHeadless() {
  return (
    <section id="why-headless" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4 mb-14">
        <span className="font-mono text-[13px] font-medium text-secondary tracking-[0.08em] uppercase">Why Headless</span>
        <h2 className="font-display text-[40px] font-bold text-text-inverse tracking-tight leading-[1.15] max-w-[560px]">
          Separate behaviour from presentation
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-[560px]">
          A headless design system defines what components do, not how they look.
          Styling becomes a token layer that can be swapped per brand, per product, per context.
        </p>
      </div>
      <div className="flex gap-6">
        {cards.map((card) => (
          <div key={card.title} className="flex-1 flex flex-col gap-5 p-9 border border-border-subtle rounded-xl bg-surface">
            <div className={`flex items-center justify-center w-12 h-12 rounded-[10px] ${card.colorClass}`}>
              {card.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-text-inverse tracking-tight">{card.title}</h3>
            <p className="text-[15px] text-muted leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
