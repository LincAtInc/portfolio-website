import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DataChip } from "./DataChip";

const meta = {
  title: "UI/DataChip",
  component: DataChip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DataChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "--color-primary" },
};

export const TokenName: Story = {
  args: { children: "bg-surface-container" },
};

export const FilePath: Story = {
  args: { children: "src/components/ui/Button.tsx" },
};

export const Group: Story = {
  args: { children: "token" },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <DataChip>--color-primary</DataChip>
      <DataChip>--color-secondary</DataChip>
      <DataChip>--radius-md</DataChip>
      <DataChip>--space-4</DataChip>
      <DataChip>CLAUDE.md</DataChip>
    </div>
  ),
};
