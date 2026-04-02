import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";
import { Card } from "./Card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "filled", "inset", "glass"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <>
    <Badge variant="primary" className="mb-3">Design Tokens</Badge>
    <h3 className="headline-sm text-on-surface mb-2">Agentic Design Systems</h3>
    <p className="text-sm text-on-surface-variant leading-relaxed">
      Domain knowledge encoded as machine-readable context that AI agents can
      consume and act upon — seeded by the architect, enriched by the team.
    </p>
  </>
);

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: <SampleContent />,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: <SampleContent />,
  },
};

export const Inset: Story = {
  args: {
    variant: "inset",
    children: <SampleContent />,
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: <SampleContent />,
  },
};

export const Hoverable: Story = {
  args: {
    variant: "filled",
    hoverable: true,
    children: <SampleContent />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px]">
      {(["elevated", "filled", "inset", "glass"] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <p className="label-sm text-on-surface-variant mb-3 uppercase tracking-wide">{variant}</p>
          <SampleContent />
        </Card>
      ))}
    </div>
  ),
};
