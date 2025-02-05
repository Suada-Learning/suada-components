import React from 'react'
import { Preview } from '@storybook/react'
import { GlobalStyle } from '../src/global.styles'
import { themes } from '../src/theme/Theme'
import { ThemeProvider } from 'styled-components'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      return (
        <ThemeProvider theme={themes.dark}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
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
