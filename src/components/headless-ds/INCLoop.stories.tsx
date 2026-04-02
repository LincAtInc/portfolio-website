import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { INCLoop } from "./INCLoop";

const meta = {
  title: "Headless DS/INCLoop",
  component: INCLoop,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof INCLoop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
