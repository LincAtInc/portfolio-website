import { forwardRef, type InputHTMLAttributes } from 'react';
import * as Label from '@radix-ui/react-label';

export interface InputPrimitiveProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

/**
 * Headless Input primitive.
 * Handles: label association, semantic HTML.
 * Uses Radix Label for accessible label-input binding.
 */
export const InputPrimitive = forwardRef<HTMLInputElement, InputPrimitiveProps>(
  ({ label, helperText, id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div>
        <Label.Root htmlFor={inputId}>{label}</Label.Root>
        <input ref={ref} id={inputId} {...props} />
        {helperText && <div>{helperText}</div>}
      </div>
    );
  }
);

InputPrimitive.displayName = 'InputPrimitive';
