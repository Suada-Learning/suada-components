import { ReactElement } from 'react'

export interface ISplashScreenProps {
  title?: string
  subTitle?: string
  createButton?: (() => ReactElement) | false
  marginTop?: number
  minHeight?: string
  height?: string
  contentMaxWidth?: string
  textMarginTop?: string
  isSearchOrFilter?: boolean
}
