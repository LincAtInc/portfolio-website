import { forwardRef, type HTMLAttributes } from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export interface AlertPrimitiveProps extends HTMLAttributes<HTMLDivElement> {
  /** Screen-reader-only label for the alert region */
  srLabel?: string;
}

/**
 * Headless Alert primitive.
 * Handles: role="alert" for live region, optional SR label.
 * Styling: none.
 */
export const AlertPrimitive = forwardRef<HTMLDivElement, AlertPrimitiveProps>(
  ({ srLabel, children, ...props }, ref) => {
    return (
      <div ref={ref} role="alert" {...props}>
        {srLabel && <VisuallyHidden.Root>{srLabel}</VisuallyHidden.Root>}
        {children}
      </div>
    );
  }
);

AlertPrimitive.displayName = 'AlertPrimitive';
