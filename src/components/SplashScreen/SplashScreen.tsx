import React, { ReactElement } from 'react'
import { CenteredText, Whiteboard } from './styled-components'
import { ISplashScreenProps } from './splashScreen.interface'
import Presentation from '../PresentationIcon/Presentation'

export const SplashScreen = ({
  title,
  subTitle,
  createButton = false,
  marginTop = 0,
  minHeight = '75vh',
  height = 'auto',
  contentMaxWidth = '100%',
  textMarginTop = '0px',
  isSearchOrFilter = false,
}: ISplashScreenProps): ReactElement => {
  return (
    <Whiteboard
      style={{
        marginTop,
        minHeight,
        height,
        justifyContent: isSearchOrFilter ? 'flex-start' : 'center',
      }}
    >
      <CenteredText style={{ maxWidth: contentMaxWidth }} marginTop={textMarginTop}>
        <Presentation />
        {title && <h1>{title}</h1>}
        {subTitle && <h4>{subTitle}</h4>}
        {createButton && <div>{createButton()}</div>}
      </CenteredText>
    </Whiteboard>
  )
}
