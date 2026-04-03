import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CTAFooter } from "./CTAFooter";

const meta = {
  title: "Layout/CTAFooter",
  component: CTAFooter,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof CTAFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
