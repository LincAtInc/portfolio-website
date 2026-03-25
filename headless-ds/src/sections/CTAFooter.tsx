import { Section } from '../components/Section';
import styles from './CTAFooter.module.css';

export function CTAFooter() {
  return (
    <>
      <Section variant="primary" className={styles.cta}>
          <h2>This page was built with the methodology it describes.</h2>
          <p className={styles.subtitle}>
            Every section, component, and line of code was generated via Claude Code
            prompts — proving that agentic design systems work.
          </p>
          <div className={styles.buttons}>
            <a href="/design-system.html" className={styles.btnPrimary}>
              View Design System
            </a>
            <a href="/#contact" className={styles.btnSecondary}>
              Get in Touch
            </a>
          </div>
      </Section>

      <Section variant="secondary" className={styles.footer}>
          <p>&copy; 2026 Lincoln Mitchell. Headless Design Systems as AI Infrastructure.</p>
          <p className={styles.footerNote}>
            <a href="/">Back to Portfolio</a>
          </p>
      </Section>
    </>
  );
}
