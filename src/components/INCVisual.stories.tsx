import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { INCVisual } from "./INCVisual";

const meta = {
  title: "Brand/INCVisual",
  component: INCVisual,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0f172a" }],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof INCVisual>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
