import { StorybookConfig } from "storybook/internal/types";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
  ],
  framework: {
    name: "@storybook/react",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
