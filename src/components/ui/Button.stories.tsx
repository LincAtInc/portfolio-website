import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", size: "md", children: "Book a Conversation" },
};

export const Secondary: Story = {
  args: { variant: "secondary", size: "md", children: "Learn More" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary", size: "md", children: "View System" },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Learn More" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Book a Conversation</Button>
      <Button variant="secondary">Learn More</Button>
      <Button variant="tertiary">View System</Button>
      <Button variant="ghost">Learn More</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" size="sm">Book a Conversation</Button>
      <Button variant="primary" size="md">Book a Conversation</Button>
      <Button variant="primary" size="lg">Book a Conversation</Button>
    </div>
  ),
};
