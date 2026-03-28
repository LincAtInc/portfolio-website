import { clsx } from "clsx";

interface DataChipProps {
  children: React.ReactNode;
  className?: string;
}

export function DataChip({ children, className }: DataChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md bg-secondary-container/15 px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-secondary-fixed-dim",
        className,
      )}
    >
      {children}
    </span>
  );
}
