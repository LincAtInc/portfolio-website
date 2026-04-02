import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pipeline } from "./Pipeline";

const meta = {
  title: "Headless DS/Pipeline",
  component: Pipeline,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Pipeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
