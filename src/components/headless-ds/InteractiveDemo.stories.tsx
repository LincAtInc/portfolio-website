import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InteractiveDemo } from "./InteractiveDemo";

const meta = {
  title: "Headless DS/InteractiveDemo",
  component: InteractiveDemo,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof InteractiveDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
