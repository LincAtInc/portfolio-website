import { useState } from 'react';
import styles from './CodeExamples.module.css';

type TabId = 'primitive' | 'ds-component' | 'tokens';

const tabs: { id: TabId; label: string }[] = [
  { id: 'primitive', label: 'Headless Primitive' },
  { id: 'ds-component', label: 'DS Component' },
  { id: 'tokens', label: 'Token Set' },
];

const primitiveCode = `// Radix UI — behaviour only, zero styling
import * as Dialog from '@radix-ui/react-dialog';

export function ConfirmDialog({ children, onConfirm }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />    // No styles — just a11y + focus trap
        <Dialog.Content>
          <Dialog.Title>Confirm</Dialog.Title>
          <Dialog.Description>Are you sure?</Dialog.Description>
          <button onClick={onConfirm}>Yes</button>
          <Dialog.Close asChild>
            <button>Cancel</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`;

const dsComponentCode = `// DS Button — wraps headless, consumes tokens
import { forwardRef } from 'react';
import { tokens } from './tokens';
import { styled } from './styled';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;   // Agent knows: 3 options
  size?: ButtonSize;          // Agent knows: 3 options
  fullWidth?: boolean;        // Agent knows: boolean
}

export const Button = styled('button', {
  base: {
    borderRadius: tokens.radius.md,
    fontWeight: tokens.fontWeight.semibold,
    transition: \`all \${tokens.transition.base}\`,
  },
  variants: {
    variant: {
      primary: { bg: tokens.color.primary, color: 'white' },
      secondary: { bg: tokens.color.secondary, color: 'white' },
      ghost: { bg: 'transparent', color: tokens.color.primary },
    }
  }
});`;

const tokensCode = `// tokens/healthcare.json — the machine-readable contract
{
  "$schema": "https://design-tokens.org/schema.json",
  "brand": "Healthcare",

  "color": {
    "primary":   { "$value": "#059669", "$type": "color" },
    "secondary": { "$value": "#14b8a6", "$type": "color" },
    "accent":    { "$value": "#0d9488", "$type": "color" }
  },

  "radius": {
    "md": { "$value": "0.75rem", "$type": "dimension" }
  },

  "shadow": {
    "md": {
      "$value": "0 2px 8px -2px rgb(5 150 105 / 0.15)",
      "$type": "shadow"
    }
  }
}

// Agent reads this contract → knows exactly
// what values to use when composing UI`;

const codeMap: Record<TabId, string> = {
  primitive: primitiveCode,
  'ds-component': dsComponentCode,
  tokens: tokensCode,
};

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState<TabId>('primitive');

  return (
    <section id="code" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Code</h2>
        <p className={styles.intro}>
          Three layers that create the machine-readable contract. Headless behaviour,
          design system styling, and the token set that drives it all.
        </p>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <pre className={styles.codeBlock}>
          <code>{codeMap[activeTab]}</code>
        </pre>
      </div>
    </section>
  );
}
