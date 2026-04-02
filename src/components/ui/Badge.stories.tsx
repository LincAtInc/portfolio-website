import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", children: "Design Tokens" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "React" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary", children: "Discovery" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "INC Framework" },
};

export const AllVariants: Story = {
  args: { children: "Badge" },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary">Design Tokens</Badge>
      <Badge variant="secondary">React</Badge>
      <Badge variant="tertiary">Discovery</Badge>
      <Badge variant="outline">INC Framework</Badge>
    </div>
  ),
};
