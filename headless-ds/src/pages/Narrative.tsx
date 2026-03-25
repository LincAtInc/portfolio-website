import { Section } from '../components/Section';
import styles from './Narrative.module.css';

const designRoles = [
  { name: 'UI Designer', ai: 'AI generates token-compliant variants instantly' },
  { name: 'UX Designer', ai: 'AI maps user flows to component patterns' },
  { name: 'UX Researcher', ai: 'AI synthesises findings into actionable design briefs' },
  { name: 'XD Strategist', ai: 'AI connects business goals to experience metrics' },
  { name: 'Motion Designer', ai: 'AI implements transition tokens across platforms' },
  { name: 'Accessibility Lead', ai: 'AI audits against WCAG at the component level' },
];

const businessRoles = [
  { name: 'Product Owner', ai: 'AI translates user stories into component specs' },
  { name: 'Business Analyst', ai: 'AI maps requirements to existing design patterns' },
  { name: 'Project Manager', ai: 'AI estimates effort from component scope' },
  { name: 'Content Strategist', ai: 'AI ensures content fits component constraints' },
  { name: 'Scrum Master', ai: 'AI identifies cross-team dependencies early' },
  { name: 'Solutions Architect', ai: 'AI surfaces technical constraints before build' },
];

const devRoles = [
  { name: 'Frontend Developer', ai: 'AI scaffolds from real, tested components' },
  { name: 'Token Engineer', ai: 'AI syncs design tokens across every platform' },
  { name: 'QA Engineer', ai: 'AI generates visual regression tests automatically' },
  { name: 'Technical Writer', ai: 'AI generates docs from component prop types' },
  { name: 'DevOps Engineer', ai: 'AI manages design system CI/CD pipelines' },
  { name: 'API Developer', ai: 'AI exposes the DS via MCP protocol endpoints' },
];

function RoleList({ roles }: { roles: { name: string; ai: string }[] }) {
  return (
    <ul className={styles.roles}>
      {roles.map((r) => (
        <li key={r.name}>
          <span className={styles.roleName}>{r.name}</span>
          <span className={styles.roleAi}>{r.ai}</span>
        </li>
      ))}
    </ul>
  );
}

export function Narrative() {
  return (
    <>
      {/* Nav */}
      <nav className={styles.nav}>
        <a href="/" className={styles.navBrand}>
          <img src="/lnc-logo.svg" alt="LNC" />
          Our Narrative
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#problem">Why</a></li>
          <li><a href="#how">How</a></li>
          <li><a href="#shift">The Shift</a></li>
          <li><a href="#start" className={styles.ctaBtn}>Book a Call</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>The &times;N in INC &mdash; Narrative Layer</div>
          <h1 className={styles.heroTitle}>
            Your Team Doesn't Need<br />Replacing. It Needs <span className={styles.accent}>Amplifying.</span>
          </h1>
          <p className={styles.subtitle}>
            Give every designer, developer, and product owner an AI assistant that speaks
            their language &mdash; powered by your design system as the shared source of truth.
          </p>
          <div className={styles.heroCtas}>
            <a href="#start" className={`${styles.btnHero} ${styles.btnPrimary}`}>
              Book a Discovery Call &rarr;
            </a>
            <a href="#how" className={`${styles.btnHero} ${styles.btnSecondary}`}>
              See How It Works
            </a>
          </div>
          <div className={styles.proof}>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>18</span>
              roles amplified by one system
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>80%</span>
              time shifted to discovery
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>0</span>
              people replaced
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section id="problem">
        <p className={styles.problemQuote}>
          The problem isn't talent.<br /><span className={styles.dim}>It's translation.</span>
        </p>
        <div className={styles.problemBody}>
          <p>
            Designers speak in flows and feelings. Developers speak in types and tests.
            Product speaks in outcomes and OKRs. <strong>The best ideas die in the gaps
            between these languages.</strong>
          </p>
          <p>
            AI doesn't replace any of these voices. It acts as a <strong>universal
            translator</strong> &mdash; a personal assistant for every role that understands
            the full context of your design system, codebase, brand, and business goals.
          </p>
          <p>
            When every team member has an AI mediator that understands the whole picture,{' '}
            <strong>miscommunication drops, alignment rises, and creativity flourishes.</strong>
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" variant="secondary">
        <h2 className={styles.sectionTitle}>One System. Every Role. Elevated.</h2>
        <p className={styles.intro}>
          The agentic design system becomes the shared context that makes AI genuinely
          useful &mdash; not generic chatbot answers, but role-specific intelligence
          grounded in your real components, tokens, and brand.
        </p>

        <div className={styles.flow}>
          <div className={`${styles.flowNode} ${styles.flowPurple}`}>
            <h3>Your Design System</h3>
            <p>Tokens, components, context files</p>
          </div>
          <div className={styles.flowArrow}>&rarr;</div>
          <div className={`${styles.flowNode} ${styles.flowTeal}`}>
            <h3>AI Layer</h3>
            <p>Claude + MCP + CLAUDE.md</p>
          </div>
          <div className={styles.flowArrow}>&rarr;</div>
          <div className={`${styles.flowNode} ${styles.flowGreen}`}>
            <h3>Every Team Member</h3>
            <p>Elevated, not replaced</p>
          </div>
        </div>

        <div className={styles.domains}>
          <div className={`${styles.domain} ${styles.design}`}>
            <h3>Design</h3>
            <p className={styles.domainTagline}>Creative vision, amplified</p>
            <RoleList roles={designRoles} />
          </div>
          <div className={`${styles.domain} ${styles.business}`}>
            <h3>Business</h3>
            <p className={styles.domainTagline}>Strategy, understood</p>
            <RoleList roles={businessRoles} />
          </div>
          <div className={`${styles.domain} ${styles.dev}`}>
            <h3>Development</h3>
            <p className={styles.domainTagline}>Engineering, accelerated</p>
            <RoleList roles={devRoles} />
          </div>
        </div>
      </Section>

      {/* The Shift */}
      <Section id="shift">
        <h2 className={styles.sectionTitle}>The Shift</h2>
        <p className={styles.intro}>
          It's not about headcount. It's about where human energy goes.
        </p>

        <div className={styles.compare}>
          <div className={`${styles.panel} ${styles.before}`}>
            <h3>Without AI Amplification</h3>
            <ul>
              <li>Designer creates mockup &mdash; developer interprets it differently</li>
              <li>PO writes story &mdash; designer asks 15 clarifying questions</li>
              <li>Token changes require manual updates across 6 files</li>
              <li>Accessibility audit happens after build &mdash; costly rework</li>
              <li>Cross-team handoffs lose context at every boundary</li>
            </ul>
            <div className={styles.statRow}>
              <div className={styles.stat}>80 / 20</div>
              <div className={styles.statLabel}>delivery vs discovery</div>
            </div>
          </div>
          <div className={`${styles.panel} ${styles.after}`}>
            <h3>With Agentic Design System</h3>
            <ul>
              <li>AI ensures design and code speak the same token language</li>
              <li>AI translates stories into component specs instantly</li>
              <li>Token changes propagate automatically across every platform</li>
              <li>Accessibility is built into the headless primitives</li>
              <li>AI carries full context across every role boundary</li>
            </ul>
            <div className={styles.statRow}>
              <div className={styles.stat}>20 / 80</div>
              <div className={styles.statLabel}>delivery vs discovery</div>
            </div>
          </div>
        </div>

        <div className={styles.formulaBox}>
          <div className={styles.formula}>
            <span className={styles.i}>I</span>
            <span className={styles.arr}> &larr;&rarr; </span>
            <span className={styles.n}>&times;N</span>
            <span className={styles.arr}> &larr;&rarr; </span>
            <span className={styles.c}>C</span>
          </div>
          <p className={styles.formulaDesc}>
            The agentic design system (&times;N) amplifies Ideation for creatives and
            accelerates Creation for builders. It's not a pipeline &mdash; it's an
            infinity loop where every team member's AI draws from the same source of truth.
          </p>
        </div>
      </Section>

      {/* Clients */}
      <div className={styles.clients}>
        <p className={styles.clientsLabel}>Trusted by teams at</p>
        <div className={styles.clientsList}>
          Telstra Health &nbsp;&bull;&nbsp; Breville &nbsp;&bull;&nbsp; Adelaide University &nbsp;&bull;&nbsp;
          Oracle &nbsp;&bull;&nbsp; Adobe &nbsp;&bull;&nbsp; PenCS &nbsp;&bull;&nbsp;
          Rio Tinto &nbsp;&bull;&nbsp; Dentsu/Merkle
        </div>
      </div>

      {/* Final CTA */}
      <section id="start" className={styles.finalCta}>
        <h2>Ready to Elevate Your Team?</h2>
        <p>
          I help organisations build the agentic design system infrastructure that makes
          AI genuinely useful for every role &mdash; not just developers.
        </p>
        <a
          href="https://cal.com/lincmitch"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btnHero} ${styles.btnPrimary}`}
        >
          Book a Discovery Call &rarr;
        </a>
        <br />
        <a href="mailto:linc@lincolnmitchell.io" className={styles.emailLink}>
          Or email linc@lincolnmitchell.io
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 Lincoln Mitchell &nbsp;&bull;&nbsp; Interfaces-N-Creatives &nbsp;&bull;&nbsp; London &amp; Sydney</p>
        <p style={{ marginTop: 'var(--space-2)' }}>
          <a href="/">Headless DS</a> &nbsp;&bull;&nbsp;{' '}
          <a href="/narrative">Our Narrative</a>
        </p>
      </footer>
    </>
  );
}
