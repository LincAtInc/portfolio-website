import { Section } from '../components/Section';
import styles from './Pipeline.module.css';
import figmaIcon from '../assets/icons/figma.svg';
import mcpIcon from '../assets/icons/mcp.svg';
import aiAgentIcon from '../assets/icons/ai-agent.svg';

const pipelineCards = [
  {
    icon: figmaIcon,
    iconStyle: { background: 'rgba(162,89,255,0.1)' },
    title: 'Figma Code Connect',
    description:
      'React components are linked to their Figma counterparts. The agent knows that <Button variant="primary"> maps to the primary button in your Figma library.',
  },
  {
    icon: mcpIcon,
    iconStyle: { background: 'rgba(37,99,235,0.1)' },
    title: 'MCP Server',
    description:
      'The design system is exposed as a Model Context Protocol endpoint. AI agents can query available components, props, variants, and tokens as structured data.',
  },
  {
    icon: aiAgentIcon,
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))',
    },
    title: 'AI Agent Authoring',
    description:
      'Claude Code or any MCP-capable agent composes UIs using real DS components, respecting constraints and token contracts. No hallucinated markup.',
  },
];

export function Pipeline() {
  return (
    <Section id="pipeline" variant="dark">
        <h2 className={styles.title}>The Figma MCP Pipeline</h2>
        <p className={styles.intro}>
          The headless architecture plugs directly into Figma's MCP server, creating a
          bidirectional loop between design and code.
        </p>

        <div className={styles.grid}>
          {pipelineCards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.icon} style={card.iconStyle}>
                <img src={card.icon} alt={card.title} width={32} height={32} />
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
    </Section>
  );
}
