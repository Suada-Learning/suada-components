import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { TranslationProvider } from '../src/components/Providers/TranslationProvider'
import translations from '../public/locales/en/translation.json'
import { themes } from '../src/theme/Theme'
import { GlobalStyle } from '../src/global.styles'
import { MemoryRouter } from 'react-router-dom'

export const withProviders = (Story, context) => {
  const theme = themes[context.globals.theme] || themes.light

  const flattenTranslations = (obj: Record<string, any>, prefix = ''): Record<string, string> => {
    return Object.keys(obj).reduce(
      (acc, key) => {
        const value = obj[key]
        const newKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'object' && value !== null) {
          Object.assign(acc, flattenTranslations(value, newKey))
        } else {
          acc[newKey] = value
        }

        return acc
      },
      {} as Record<string, string>,
    )
  }
  const flattenedTranslations = flattenTranslations(translations)

  return (
    <TranslationProvider translations={flattenedTranslations}>
      <MuiThemeProvider theme={createTheme(theme)}>
        <StyledThemeProvider theme={theme}>
          <MemoryRouter>
            <GlobalStyle />
            <Story />
          </MemoryRouter>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </TranslationProvider>
  )
}
