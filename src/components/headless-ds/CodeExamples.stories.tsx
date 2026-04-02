import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CodeExamples } from "./CodeExamples";

const meta = {
  title: "Headless DS/CodeExamples",
  component: CodeExamples,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeExamples>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
