import { forwardRef } from 'react';
import { InputPrimitive, type InputPrimitiveProps } from '../primitives/Input';
import styles from './Input.module.css';

export interface InputProps extends InputPrimitiveProps {}

/**
 * DS Input — wraps headless primitive, consumes design tokens.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${className ?? ''}`}>
        <InputPrimitive ref={ref} {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';
