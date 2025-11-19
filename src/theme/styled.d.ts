import 'styled-components'
import type { IThemeColors } from './interfaces'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors
    mode?: 'light' | 'dark'
  }
}