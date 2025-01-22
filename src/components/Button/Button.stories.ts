import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  ButtonTypeEnum,
  ButtonSizeEnum,
  HtmlButtonTypeEnum,
} from "./Button.interface";

// Storybook metadata
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: Object.values(ButtonTypeEnum),
      },
    },
    size: {
      control: {
        type: "select",
        options: Object.values(ButtonSizeEnum),
      },
    },
    htmlType: {
      control: {
        type: "select",
        options: Object.values(HtmlButtonTypeEnum),
      },
    },
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    iconLeft: {
      control: { type: "object" },
    },
    iconRight: {
      control: { type: "object" },
    },
    customStyles: {
      control: { type: "object" },
    },
    className: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    onClick: () => console.log("Button clicked!"),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    type: ButtonTypeEnum.PRIMARY,
    size: ButtonSizeEnum.SM,
    label: "Primary Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    type: ButtonTypeEnum.SECONDARY,
    size: ButtonSizeEnum.SM,
    label: "Secondary Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

// Large Button
export const Large: Story = {
  args: {
    type: ButtonTypeEnum.PRIMARY,
    size: ButtonSizeEnum.LG,
    label: "Large Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

// Small Button
export const Small: Story = {
  args: {
    type: ButtonTypeEnum.SECONDARY,
    size: ButtonSizeEnum.SM,
    label: "Small Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

// Disabled Button
export const Disabled: Story = {
  args: {
    type: ButtonTypeEnum.PRIMARY,
    size: ButtonSizeEnum.SM,
    label: "Disabled Button",
    disabled: true,
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};
