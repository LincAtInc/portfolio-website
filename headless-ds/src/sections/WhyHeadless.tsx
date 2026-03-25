import { Section } from '../components/Section';
import styles from './WhyHeadless.module.css';
import behaviourIcon from '../assets/icons/behaviour.svg';
import tokensIcon from '../assets/icons/tokens.svg';
import machineIcon from '../assets/icons/machine.svg';

const cards = [
  {
    icon: behaviourIcon,
    iconClass: 'behaviour',
    title: 'Behaviour Separation',
    description:
      'Headless primitives (Radix, React Aria) handle accessibility, keyboard navigation, focus management, and state. Zero opinions on styling. The stable foundation agents can rely on.',
  },
  {
    icon: tokensIcon,
    iconClass: 'tokens',
    title: 'Token-Driven Theming',
    description:
      'Your design system layer maps tokens to component variants. Swap token sets, swap brands. Same component tree, infinite visual identities. Styling becomes data, not code.',
  },
  {
    icon: machineIcon,
    iconClass: 'machine',
    title: 'Machine-Readable',
    description:
      'Structured props + typed variants + token contracts = components an AI agent can understand, generate, and compose without ambiguity. The design system becomes AI infrastructure.',
  },
];

export function WhyHeadless() {
  return (
    <Section id="why-headless">
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
              <img src={card.icon} alt={card.title} width={32} height={32} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
