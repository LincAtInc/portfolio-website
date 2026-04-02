import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Architecture } from "./Architecture";

const meta = {
  title: "Headless DS/Architecture",
  component: Architecture,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Architecture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
