import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WhyHeadless } from "./WhyHeadless";

const meta = {
  title: "Headless DS/WhyHeadless",
  component: WhyHeadless,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof WhyHeadless>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
