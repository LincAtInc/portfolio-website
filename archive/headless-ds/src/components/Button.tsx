import { forwardRef } from 'react';
import { ButtonPrimitive, type ButtonPrimitiveProps } from '../primitives/Button';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonPrimitiveProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

/**
 * DS Button — wraps headless primitive, consumes design tokens.
 * Agent-readable: variant (3 options), size (3 options), fullWidth (boolean).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, className, ...props }, ref) => {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return <ButtonPrimitive ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';
