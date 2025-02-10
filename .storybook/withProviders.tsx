import React from 'react'
import { TranslationProvider } from '../src/components/Providers/TranslationProvider/TranslationProvider'
import { ThemeProvider } from '../src/components/Providers/ThemeProvider/ThemeProvider'

export const withProviders = (Story, context) => {
  const { theme, translations } = context.globals

  return (
    <TranslationProvider translations={translations}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </TranslationProvider>
  )
}
