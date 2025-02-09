import type { Meta, StoryObj } from "@storybook/react";
import Snapshot from "./Snapshot";

const meta: Meta<typeof Snapshot> = {
  title: "Components/Snapshot",
  component: Snapshot,
};

export default meta;

type Story = StoryObj<typeof Snapshot>;

export const Default: Story = {};
