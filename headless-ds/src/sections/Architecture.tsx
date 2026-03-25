import { useEffect, useRef, useCallback } from 'react';
import { Section } from '../components/Section';
import styles from './Architecture.module.css';
import primitivesIcon from '../assets/icons/primitives.svg';
import dsLayerIcon from '../assets/icons/ds-layer.svg';
import tokensIcon from '../assets/icons/tokens.svg';
import figmaIcon from '../assets/icons/figma.svg';
import mcpIcon from '../assets/icons/mcp.svg';
import aiAgentIcon from '../assets/icons/ai-agent.svg';

const nodes = [
  {
    icon: primitivesIcon,
    iconClass: 'primitives',
    title: 'Headless Primitives',
    subtitle: 'Radix, React Aria, Ark UI',
  },
  {
    icon: dsLayerIcon,
    iconClass: 'ds',
    title: 'DS Component Layer',
    subtitle: 'Props, variants, composition',
  },
  {
    icon: tokensIcon,
    iconClass: 'tokens',
    title: 'Brand Token Sets',
    subtitle: 'JSON tokens, multi-brand',
  },
  {
    icon: figmaIcon,
    iconClass: 'figma',
    title: 'Figma Code Connect',
    subtitle: 'Bidirectional design-code sync',
  },
  {
    icon: mcpIcon,
    iconClass: 'mcp',
    title: 'MCP Server',
    subtitle: 'Model Context Protocol endpoint',
  },
  {
    icon: aiAgentIcon,
    iconClass: 'agent',
    title: 'AI Agent',
    subtitle: 'Claude Code, Cursor, Copilot',
  },
];

export function Architecture() {
  const svgRef = useRef<SVGSVGElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const drawConnectors = useCallback(() => {
    const svg = svgRef.current;
    const grid = gridRef.current;
    if (!svg || !grid) return;

    if (window.innerWidth < 769) {
      svg.innerHTML = '';
      return;
    }

    const nodeEls = grid.querySelectorAll(`.${styles.node}`);
    if (nodeEls.length < 2) return;

    const gridRect = grid.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${gridRect.width} ${gridRect.height}`);
    svg.style.width = gridRect.width + 'px';
    svg.style.height = gridRect.height + 'px';

    let paths = '';
    for (let i = 0; i < nodeEls.length - 1; i++) {
      const a = nodeEls[i].getBoundingClientRect();
      const b = nodeEls[i + 1].getBoundingClientRect();

      const x1 = a.right - gridRect.left;
      const y1 = a.top + a.height / 2 - gridRect.top;
      const x2 = b.left - gridRect.left;
      const y2 = b.top + b.height / 2 - gridRect.top;

      const cx = (x1 + x2) / 2;
      const isBidir = i === 2 || i === 3;
      const cls = isBidir ? `${styles.flowLine} ${styles.bidir}` : styles.flowLine;

      paths += `<path class="${cls}" d="M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}" />`;

      if (isBidir) {
        const offset = 8;
        paths += `<path class="${styles.flowLine}" d="M${x2},${y2 - offset} C${cx},${y2 - offset} ${cx},${y1 + offset} ${x1},${y1 + offset}" />`;
      }
    }

    svg.innerHTML = paths;
  }, []);

  useEffect(() => {
    // Scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const node = entry.target as HTMLElement;
            const delay = parseInt(node.dataset.node || '0') * 100;
            setTimeout(() => {
              node.classList.add(styles.visible);
              if (node.dataset.node === '5') {
                setTimeout(drawConnectors, 400);
              }
            }, delay);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.2 }
    );

    const nodeEls = gridRef.current?.querySelectorAll(`.${styles.node}`);
    nodeEls?.forEach((node) => observer.observe(node));

    // Resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(drawConnectors, 100);
    });

    const container = gridRef.current?.parentElement;
    if (container) ro.observe(container);

    setTimeout(drawConnectors, 600);

    return () => {
      observer.disconnect();
      ro.disconnect();
    };
  }, [drawConnectors]);

  return (
    <Section id="architecture" variant="secondary">
        <h2 className={styles.title}>The Architecture</h2>
        <p className={styles.intro}>
          From headless primitives to AI-authored interfaces. Each layer adds
          structure that agents can consume.
        </p>
        <div className={styles.archContainer}>
          <svg ref={svgRef} className={styles.connectorSvg} />
          <div ref={gridRef} className={styles.grid}>
            {nodes.map((node, i) => (
              <div key={node.title}>
                {i > 0 && <div className={styles.arrow}>&#8595;</div>}
                <div className={styles.node} data-node={i}>
                  <div className={`${styles.nodeIcon} ${styles[node.iconClass]}`}>
                    <img src={node.icon} alt={node.title} width={32} height={32} />
                  </div>
                  <h4>{node.title}</h4>
                  <p>{node.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}
