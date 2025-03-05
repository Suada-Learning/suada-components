import React, { ReactNode } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createCustomTheme, themeTokens } from './Theme'

interface CustomThemeProviderProps {
  children: ReactNode
  themeName?: 'light' | 'dark'
  customTheme?: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  themeName = 'light',
  customTheme,
}) => {
  const muiTheme = createCustomTheme(customTheme)
  const styledTheme = {
    ...themeTokens,
    colors: customTheme?.colors || themeTokens.colors,
    mode: themeName,
  }

  return (
    <MUIThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </MUIThemeProvider>
  )
}
