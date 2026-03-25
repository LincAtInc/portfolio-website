import { useEffect, useRef, useCallback } from 'react';
import styles from './Architecture.module.css';

const nodes = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
    iconClass: 'primitives',
    title: 'Headless Primitives',
    subtitle: 'Radix, React Aria, Ark UI',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="5" rx="1" />
        <rect x="4" y="11" width="16" height="5" rx="1" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </svg>
    ),
    iconClass: 'ds',
    title: 'DS Component Layer',
    subtitle: 'Props, variants, composition',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <circle cx="12" cy="16" r="3" />
      </svg>
    ),
    iconClass: 'tokens',
    title: 'Brand Token Sets',
    subtitle: 'JSON tokens, multi-brand',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" opacity="0.8" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" opacity="0.6" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" opacity="0.4" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" opacity="0.6" />
        <circle cx="16" cy="12" r="4" opacity="0.8" />
      </svg>
    ),
    iconClass: 'figma',
    title: 'Figma Code Connect',
    subtitle: 'Bidirectional design-code sync',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="10" x2="6" y2="14" />
        <line x1="10" y1="10" x2="10" y2="14" />
        <line x1="14" y1="10" x2="14" y2="14" />
      </svg>
    ),
    iconClass: 'mcp',
    title: 'MCP Server',
    subtitle: 'Model Context Protocol endpoint',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15 8 12 6 9 8z" />
        <circle cx="12" cy="14" r="6" />
        <path d="M12 10v4" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
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
    <section id="architecture" className={styles.section}>
      <div className={styles.container}>
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
                    {node.icon}
                  </div>
                  <h4>{node.title}</h4>
                  <p>{node.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
