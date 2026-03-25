import styles from './Pipeline.module.css';

const pipelineCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" opacity="0.8" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" opacity="0.6" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" opacity="0.4" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" opacity="0.6" />
        <circle cx="16" cy="12" r="4" opacity="0.8" />
      </svg>
    ),
    iconStyle: { background: 'rgba(162,89,255,0.1)', color: '#a259ff' },
    title: 'Figma Code Connect',
    description:
      'React components are linked to their Figma counterparts. The agent knows that <Button variant="primary"> maps to the primary button in your Figma library.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="10" x2="6" y2="14" />
        <line x1="10" y1="10" x2="10" y2="14" />
        <line x1="14" y1="10" x2="14" y2="14" />
      </svg>
    ),
    iconStyle: { background: 'rgba(37,99,235,0.1)', color: 'var(--color-primary)' },
    title: 'MCP Server',
    description:
      'The design system is exposed as a Model Context Protocol endpoint. AI agents can query available components, props, variants, and tokens as structured data.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15 8 12 6 9 8z" />
        <circle cx="12" cy="14" r="6" />
        <path d="M12 10v4" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))',
      color: 'var(--color-secondary)',
    },
    title: 'AI Agent Authoring',
    description:
      'Claude Code or any MCP-capable agent composes UIs using real DS components, respecting constraints and token contracts. No hallucinated markup.',
  },
];

export function Pipeline() {
  return (
    <section id="pipeline" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Figma MCP Pipeline</h2>
        <p className={styles.intro}>
          The headless architecture plugs directly into Figma's MCP server, creating a
          bidirectional loop between design and code.
        </p>

        <div className={styles.grid}>
          {pipelineCards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.icon} style={card.iconStyle}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* INC Loop */}
        <div className={styles.incLoop}>
          <div className={styles.formula}>
            <span className={styles.i}>I</span>{' '}
            <span className={styles.arrow}>&larr;&rarr;</span>{' '}
            <span className={styles.n}>&times;N</span>{' '}
            <span className={styles.arrow}>&larr;&rarr;</span>{' '}
            <span className={styles.c}>C</span>
          </div>
          <p>
            The pipeline creates the bidirectional INC loop: Ideation flows to Code,
            code constraints inform design. The agentic design system is the &times;N
            that amplifies both directions.
          </p>
        </div>
      </div>
    </section>
  );
}
