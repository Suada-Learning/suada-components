import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: {
      primary?: {
        main: string
        [key: string]: any
      }
      secondary?: {
        main?: string
        [key: string]: any
      }
      tertiary?: {
        main?: string
        [key: string]: any
      }
      neutral?: {
        main?: string
        [key: string]: any
      }
      system?: {
        [key: string]: any
      }
      [key: string]: any
    }
    mode?: 'light' | 'dark'
    [key: string]: any
  }
}