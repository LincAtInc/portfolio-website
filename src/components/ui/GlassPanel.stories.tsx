import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GlassPanel } from "./GlassPanel";

const meta = {
  title: "UI/GlassPanel",
  component: GlassPanel,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    intensity: {
      control: "select",
      options: ["subtle", "medium", "strong"],
    },
  },
  decorators: [
    (Story) => (
      <div
        className="p-8 rounded-xl w-[440px]"
        style={{ background: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GlassPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const PanelContent = () => (
  <div className="p-6">
    <h3 className="headline-sm text-on-surface mb-2">NorthStar Prototyping</h3>
    <p className="text-sm text-on-surface-variant leading-relaxed">
      Exploratory AI prototyping that shapes vision early — when possibilities are
      widest and the cost of change is lowest.
    </p>
  </div>
);

export const Subtle: Story = {
  args: {
    intensity: "subtle",
    children: <PanelContent />,
  },
};

export const Medium: Story = {
  args: {
    intensity: "medium",
    children: <PanelContent />,
  },
};

export const Strong: Story = {
  args: {
    intensity: "strong",
    children: <PanelContent />,
  },
};

export const AllIntensities: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["subtle", "medium", "strong"] as const).map((intensity) => (
        <GlassPanel key={intensity} intensity={intensity}>
          <div className="p-6">
            <p className="label-sm text-on-surface-variant mb-2 uppercase tracking-wide">{intensity}</p>
            <h3 className="headline-sm text-on-surface mb-1">NorthStar Prototyping</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Exploratory AI prototyping that shapes vision early — when possibilities are
              widest and the cost of change is lowest.
            </p>
          </div>
        </GlassPanel>
      ))}
    </div>
  ),
};
