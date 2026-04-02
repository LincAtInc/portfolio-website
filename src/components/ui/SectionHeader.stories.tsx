import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "UI/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[640px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: "The Approach",
    title: "Ideate < Narrate > Create",
    description:
      "N is not a step between I and C — it is the amplifier that radiates into both. Everyone contributes to N. Anyone can draw from it.",
    align: "left",
  },
};

export const WithoutLabel: Story = {
  args: {
    title: "Featured Projects",
    description:
      "A selection of systems built across healthcare, retail, and enterprise — each one proof that design and engineering can move together.",
    align: "left",
  },
};

export const Centered: Story = {
  args: {
    label: "The Approach",
    title: "Ideate < Narrate > Create",
    description:
      "N is not a step between I and C — it is the amplifier that radiates into both. Everyone contributes to N. Anyone can draw from it.",
    align: "center",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Featured Projects",
    align: "left",
  },
};
