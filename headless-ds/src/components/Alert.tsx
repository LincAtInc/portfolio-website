import { forwardRef } from 'react';
import { AlertPrimitive, type AlertPrimitiveProps } from '../primitives/Alert';
import styles from './Alert.module.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends AlertPrimitiveProps {
  variant?: AlertVariant;
  title?: string;
}

/**
 * DS Alert — wraps headless primitive, consumes design tokens.
 * Agent-readable: variant (4 options).
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, children, className, ...props }, ref) => {
    return (
      <AlertPrimitive
        ref={ref}
        className={`${styles.alert} ${styles[variant]} ${className ?? ''}`}
        {...props}
      >
        {title && <strong className={styles.title}>{title}</strong>}
        {children}
      </AlertPrimitive>
    );
  }
);

Alert.displayName = 'Alert';
