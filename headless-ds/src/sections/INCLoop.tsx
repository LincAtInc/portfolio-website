const cards = [
  { letter: 'I', colorLetter: 'text-primary', colorCard: 'border-primary/30 bg-primary/[0.06]', name: 'Ideate', desc: 'NorthStar prototyping with AI. Explore when possibilities are widest.' },
  { letter: '×N', colorLetter: 'text-secondary', colorCard: 'border-secondary/30 bg-secondary/[0.06]', name: 'Narrate', desc: 'The agentic design system layer. Domain knowledge as machine-readable context.' },
  { letter: 'C', colorLetter: 'text-accent', colorCard: 'border-accent/30 bg-accent/[0.06]', name: 'Create', desc: 'Production code, content, shipping. The system amplifies execution.' },
];

export function INCLoop() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto bg-surface-deep">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <span className="font-mono text-[13px] font-medium text-accent tracking-[0.08em] uppercase">The INC Framework</span>
        <h2 className="font-display text-[40px] font-bold text-text-inverse tracking-tight leading-[1.15]">Ideate × Narrate × Create</h2>
      </div>
      <div className="flex gap-8 max-w-[960px] mx-auto">
        {cards.map((card) => (
          <div key={card.letter} className={`flex-1 flex flex-col items-center gap-4 p-8 rounded-xl text-center border ${card.colorCard}`}>
            <span className={`font-display text-4xl font-bold ${card.colorLetter}`}>{card.letter}</span>
            <span className="font-display text-lg font-semibold text-text-inverse">{card.name}</span>
            <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
      <p className="font-mono text-sm text-subtle text-center mt-8 tracking-wide">I ◀─▶ ×N ◀─▶ C</p>
    </section>
  );
}
