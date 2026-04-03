import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Nav } from "./Nav";

const meta = {
  title: "Layout/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnThoughtsPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/thoughts" },
    },
  },
};

export const OnWorkPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/work" },
    },
  },
};
