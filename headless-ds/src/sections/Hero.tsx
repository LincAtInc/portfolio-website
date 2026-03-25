import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <h1>Headless Design Systems as AI Infrastructure</h1>
      <p>
        Separating behaviour from presentation creates machine-readable component
        architectures that AI agents can consume, theme, and deploy. This is the
        future of design systems.
      </p>
      <div className={styles.ctas}>
        <a href="#demo" className={styles.btnPrimary}>
          See the Demo
        </a>
        <a href="/" className={styles.btnSecondary}>
          Back to Portfolio
        </a>
      </div>
    </header>
  );
}
