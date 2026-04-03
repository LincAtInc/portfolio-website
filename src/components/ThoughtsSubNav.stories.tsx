import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThoughtsSubNav } from "./ThoughtsSubNav";

const meta = {
  title: "Layout/ThoughtsSubNav",
  component: ThoughtsSubNav,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/thoughts",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThoughtsSubNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActiveScoutBees: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/thoughts/scout-bees" },
    },
  },
};

export const ActiveDyslexicAdvantage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/thoughts/dyslexic-advantage" },
    },
  },
};
