import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LogicNode } from "./LogicNode";

const meta = {
  title: "UI/LogicNode",
  component: LogicNode,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["ideate", "narrate", "create"],
    },
    pulse: { control: "boolean" },
  },
} satisfies Meta<typeof LogicNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ideate: Story = {
  args: { variant: "ideate", children: "Ideate" },
};

export const Narrate: Story = {
  args: { variant: "narrate", children: "Narrate" },
};

export const Create: Story = {
  args: { variant: "create", children: "Create" },
};

export const WithPulse: Story = {
  args: { variant: "narrate", pulse: true, children: "Live Context" },
};

export const INCRow: Story = {
  args: { children: "INC" },
  render: () => (
    <div className="flex items-center gap-3">
      <LogicNode variant="ideate">I · Ideate</LogicNode>
      <span className="text-on-surface-variant text-sm">→</span>
      <LogicNode variant="narrate" pulse>N · Narrate</LogicNode>
      <span className="text-on-surface-variant text-sm">→</span>
      <LogicNode variant="create">C · Create</LogicNode>
    </div>
  ),
};

export const AllWithPulse: Story = {
  args: { children: "Node" },
  render: () => (
    <div className="flex flex-col gap-3">
      <LogicNode variant="ideate" pulse>Ideate — pulsing</LogicNode>
      <LogicNode variant="narrate" pulse>Narrate — pulsing</LogicNode>
      <LogicNode variant="create" pulse>Create — pulsing</LogicNode>
    </div>
  ),
};
