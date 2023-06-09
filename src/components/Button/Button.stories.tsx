import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    // label: { control: "text" },
    // backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: "primary",
  },
};

export const SecondaryButton: Story = {
  args: {
    children: "secondary",
    schema: "secondary",
  },
};
export const TertiaryButton: Story = {
  args: {
    children: "secondary",
    schema: "tertiary",
  },
};
