import type { Meta, StoryObj } from "@storybook/react";

import { hstack } from "../../styled-system/patterns";
import { Button } from "./";

const meta: Meta<typeof Button> = {
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
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
  },
};

export const Variants: Story = {
  render: () => (
    <div className={hstack({ gap: "4" })}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className={hstack({ alignItems: "center", gap: "4" })}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className={hstack({ gap: "4" })}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button render={<a href="https://example.com" />}>Link Button</Button>
    </div>
  ),
};
