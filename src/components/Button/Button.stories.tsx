import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button as BtnComponent } from ".";

enum ButtonStyles {
  Default = "default",
  Destructive = "destructive",
  Outline = "outline",
  Secondary = "secondary",
  Ghost = "ghost",
  Link = "link",
}

const buttonStyles = Object.values(ButtonStyles);

const buttonSizes = ["default", "sm", "lg", "icon"];

const meta = {
  title: "Components/Button",
  component: BtnComponent,
  argTypes: {
    variant: {
      options: buttonStyles,
      // mapping: ButtonStyles,
      control: {
        type: "select",
      },
    },
    size: {
      options: buttonSizes,
      control: {
        type: "select",
      },
    },
    asChild: {
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BtnComponent>;

export default meta;

export const Button: StoryObj<typeof BtnComponent> = {
  render: (props) => {
    return <BtnComponent {...props}>Click Me</BtnComponent>;
  },
};
