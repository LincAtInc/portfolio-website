import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HowNExpands } from "./HowNExpands";

const meta = {
  title: "Brand/HowNExpands",
  component: HowNExpands,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof HowNExpands>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
