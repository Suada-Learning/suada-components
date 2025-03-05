import React, { createContext, useContext, ReactNode } from 'react'
import { ThemeProvider as MUIThemeProvider, Theme } from '@mui/material/styles'

interface ThemeContextType {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children, theme }: { children: ReactNode; theme: Theme }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
