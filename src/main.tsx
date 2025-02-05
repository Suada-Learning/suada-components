import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './theme/Theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themes.dark}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
