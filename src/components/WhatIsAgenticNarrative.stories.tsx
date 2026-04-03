import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WhatIsAgenticNarrative } from "./WhatIsAgenticNarrative";

const meta = {
  title: "Brand/WhatIsAgenticNarrative",
  component: WhatIsAgenticNarrative,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof WhatIsAgenticNarrative>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
