import styles from './WhyHeadless.module.css';

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    iconClass: 'behaviour',
    title: 'Behaviour Separation',
    description:
      'Headless primitives (Radix, React Aria) handle accessibility, keyboard navigation, focus management, and state. Zero opinions on styling. The stable foundation agents can rely on.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    iconClass: 'tokens',
    title: 'Token-Driven Theming',
    description:
      'Your design system layer maps tokens to component variants. Swap token sets, swap brands. Same component tree, infinite visual identities. Styling becomes data, not code.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <rect x="8" y="10" width="8" height="6" rx="1" />
        <path d="M10 16v2" />
        <path d="M14 16v2" />
        <path d="M8 20h8" />
      </svg>
    ),
    iconClass: 'machine',
    title: 'Machine-Readable',
    description:
      'Structured props + typed variants + token contracts = components an AI agent can understand, generate, and compose without ambiguity. The design system becomes AI infrastructure.',
  },
];

export function WhyHeadless() {
  return (
    <section id="why-headless" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Headless?</h2>
        <p className={styles.intro}>
          A headless architecture separates the what (behaviour, accessibility, state)
          from the how (visual presentation). This separation is what makes a design
          system truly machine-readable.
        </p>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={`${styles.icon} ${styles[card.iconClass]}`}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
