import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonPrimitiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element (Radix Slot pattern) */
  asChild?: boolean;
}

/**
 * Headless Button primitive.
 * Handles: semantic HTML, ref forwarding, slot composition.
 * Styling: none — that's the DS layer's job.
 */
export const ButtonPrimitive = forwardRef<HTMLButtonElement, ButtonPrimitiveProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} {...props} />;
  }
);

ButtonPrimitive.displayName = 'ButtonPrimitive';
