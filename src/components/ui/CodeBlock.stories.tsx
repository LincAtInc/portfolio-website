import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CodeBlock } from "./CodeBlock";

const meta = {
  title: "UI/CodeBlock",
  component: CodeBlock,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[560px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitle: Story = {
  args: {
    title: "CLAUDE.md",
    language: "yaml",
    children: `Brand: Healthcare
Primary: #059669  // trust, clinical calm
Radius: 0.75rem   // soft, approachable
Tone: professional, reassuring`,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: `export function Button({ variant, children }) {
  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}`,
  },
};

export const TitleOnly: Story = {
  args: {
    title: "tokens.css",
    children: `:root {
  --color-primary: #2563eb;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
}`,
  },
};

export const LongCode: Story = {
  args: {
    title: "Button.tsx",
    language: "tsx",
    children: `import { clsx } from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={clsx(variantStyles[variant], sizeStyles[size])}
        {...props}
      >
        {children}
      </button>
    );
  },
);`,
  },
};
