import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeProvider";

const meta = {
  title: "Theme/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="relative w-[400px] h-[200px] bg-surface-container rounded-xl flex items-end justify-end p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
