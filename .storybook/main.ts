import { StorybookConfig } from "storybook/internal/types";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"], // Updated to match story files
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},
};

export default config;
