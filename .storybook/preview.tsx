import React from 'react'
import { Preview } from '@storybook/react'
import { GlobalStyle } from '../src/global.styles'
import { CustomThemeProvider } from '../src/theme/ThemeProvider'
import { themes } from '../src/theme/Theme'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedTheme = themes[context.globals.theme] || themes.light
      return (
        <CustomThemeProvider themeName={selectedTheme}>
          <GlobalStyle />
          <Story />
        </CustomThemeProvider>
      )
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Select theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: Object.keys(themes),
        showName: true,
      },
    },
  },
}

export default preview
