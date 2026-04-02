import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Section } from "./Section";

const meta = {
  title: "UI/Section",
  component: Section,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: "select",
      options: ["base", "low", "mid", "high", "highest"],
    },
    as: {
      control: "select",
      options: ["section", "div", "article", "aside"],
    },
    narrow: { control: "boolean" },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const SectionContent = () => (
  <div>
    <h2 className="headline-md text-on-surface mb-4">Section Title</h2>
    <p className="text-on-surface-variant leading-relaxed max-w-xl">
      This section demonstrates the tone-based background system. Each tone maps
      to a design token rather than a hardcoded colour value.
    </p>
  </div>
);

export const Base: Story = {
  args: { tone: "base", children: <SectionContent /> },
};

export const Low: Story = {
  args: { tone: "low", children: <SectionContent /> },
};

export const Mid: Story = {
  args: { tone: "mid", children: <SectionContent /> },
};

export const High: Story = {
  args: { tone: "high", children: <SectionContent /> },
};

export const Highest: Story = {
  args: { tone: "highest", children: <SectionContent /> },
};

export const Narrow: Story = {
  args: { tone: "base", narrow: true, children: <SectionContent /> },
};

export const AllTones: Story = {
  render: () => (
    <div>
      {(["base", "low", "mid", "high", "highest"] as const).map((tone) => (
        <Section key={tone} tone={tone}>
          <p className="label-sm text-on-surface-variant mb-2 uppercase">tone=&quot;{tone}&quot;</p>
          <p className="text-on-surface">
            Section background determined by design token, not hardcoded colour.
          </p>
        </Section>
      ))}
    </div>
  ),
};
