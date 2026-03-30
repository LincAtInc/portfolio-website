import styles from './RoleItem.module.css';

interface RoleItemProps {
  name: string;
  ai: string;
}

export function RoleItem({ name, ai }: RoleItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>
      <span className={styles.ai}>{ai}</span>
    </li>
  );
}
