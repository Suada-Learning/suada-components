import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../src/global.styles";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
