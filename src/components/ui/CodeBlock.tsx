import { clsx } from "clsx";

interface CodeBlockProps {
  title?: string;
  language?: string;
  children: string;
  className?: string;
}

export function CodeBlock({
  title,
  language,
  children,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={clsx(
        "rounded-sm overflow-hidden ghost-border",
        className,
      )}
    >
      {title && (
        <div className="bg-gradient-signature px-4 py-2 flex items-center justify-between">
          <span className="label-sm text-white/90">{title}</span>
          {language && (
            <span className="label-sm text-white/60">{language}</span>
          )}
        </div>
      )}
      <pre className="bg-surface-container-highest p-4 overflow-x-auto">
        <code className="font-[family-name:var(--font-mono)] text-sm text-on-surface-variant leading-relaxed">
          {children}
        </code>
      </pre>
    </div>
  );
}
