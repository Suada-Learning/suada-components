import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import {
  ButtonTypeEnum,
  ButtonSizeEnum,
  HtmlButtonTypeEnum,
} from "./Button.interface";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../global.styles";
// Storybook metadata
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["Secondary", "Primary"],
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

export const Positive: Story = {
  args: {
    type: ButtonTypeEnum.POSITIVE,
    size: ButtonSizeEnum.SM,
    label: "Success Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

export const Negative: Story = {
  args: {
    type: ButtonTypeEnum.NEGATIVE,
    size: ButtonSizeEnum.SM,
    label: "Negative Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

export const Ghost: Story = {
  args: {
    type: ButtonTypeEnum.GHOST,
    size: ButtonSizeEnum.SM,
    label: "Ghost Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

export const Dark: Story = {
  args: {
    type: ButtonTypeEnum.DARK,
    size: ButtonSizeEnum.SM,
    label: "Dark Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};

export const Text: Story = {
  args: {
    type: ButtonTypeEnum.TEXT,
    size: ButtonSizeEnum.SM,
    label: "Text Button",
    htmlType: HtmlButtonTypeEnum.BUTTON,
  },
};
