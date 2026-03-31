import { Button } from "@design-system/core";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "solid",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "solid",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "solid",
    disabled: true,
  },
};
