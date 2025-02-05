export interface IColorShades {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  main: string
}

export interface IThemeColors {
  primary: IColorShades
  secondary: IColorShades
  tertiary: IColorShades
  neutral: IColorShades
  system: {
    error: IColorShades
    warning: IColorShades
    success: IColorShades
    info: IColorShades
  }
}
