import { useState, type CSSProperties } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Alert } from '../components/Alert';
import { themes, themeLabels, type ThemeId, type ThemeTokens } from '../tokens/themes';
import styles from './InteractiveDemo.module.css';

const tokenDisplayKeys: (keyof ThemeTokens)[] = [
  '--demo-primary',
  '--demo-accent',
  '--demo-radius',
  '--demo-bg-subtle',
  '--demo-shadow',
];

export function InteractiveDemo() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>('default');
  const currentTokens = themes[activeTheme];

  return (
    <section id="demo" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Interactive Demo</h2>
        <p className={styles.intro}>
          Same headless structure, different brand tokens. Toggle themes to see how
          styling becomes data — the component tree never changes, only the tokens do.
        </p>

        {/* Theme switcher */}
        <div className={styles.switcher}>
          {(Object.keys(themes) as ThemeId[]).map((id) => (
            <button
              key={id}
              className={`${styles.switcherBtn} ${activeTheme === id ? styles.active : ''}`}
              onClick={() => setActiveTheme(id)}
            >
              {themeLabels[id]}
            </button>
          ))}
        </div>

        {/* Side-by-side columns */}
        <div className={styles.columns}>
          {/* Raw / Unstyled */}
          <div className={`${styles.column} ${styles.raw}`}>
            <div className={styles.columnLabel}>Unstyled (Headless)</div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Button&gt;</div>
              <button>Submit Application</button>
            </div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Card&gt;</div>
              <div className={styles.rawCard}>
                <h4>Component Library</h4>
                <p>Tokens define every visual property. Structure stays constant.</p>
                <a href="#">Learn more</a>
              </div>
            </div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Input&gt;</div>
              <label>Email address</label>
              <br />
              <input type="email" placeholder="you@example.com" />
              <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
                We'll never share your email.
              </div>
            </div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Alert&gt;</div>
              <div className={styles.rawAlert} role="alert">
                <strong>Note:</strong> Same semantic HTML. Zero styling opinions.
              </div>
            </div>
          </div>

          {/* Themed */}
          <div
            className={`${styles.column} ${styles.themed}`}
            style={currentTokens as unknown as CSSProperties}
          >
            <div className={styles.columnLabel}>Themed (Tokens Applied)</div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Button&gt;</div>
              <Button>Submit Application</Button>
            </div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Card&gt;</div>
              <Card
                title="Component Library"
                description="Tokens define every visual property. Structure stays constant."
                linkText="Learn more"
                linkHref="#"
              />
            </div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Input&gt;</div>
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                helperText="We'll never share your email."
              />
            </div>

            <div className={styles.component}>
              <div className={styles.componentName}>&lt;Alert&gt;</div>
              <Alert title="Note:">
                {' '}Same semantic HTML. Tokens control every visual property.
              </Alert>
            </div>
          </div>
        </div>

        {/* Live Token Display */}
        <div className={styles.tokenDisplay}>
          <span className={styles.tokenLabel}>Active Token Set</span>
          {tokenDisplayKeys.map((key) => (
            <div key={key}>
              <span className={styles.tokenKey}>{key}</span>:{' '}
              <span className={styles.tokenValue}>{currentTokens[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
