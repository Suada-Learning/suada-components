import React, { ReactElement } from 'react'
import { IDrawerTipsProps } from './drawerTips.interface'
import { DrawerTipsContainer, styles, TipItem } from './styled-component'

export const DrawerTips = ({ tips, rememberText }: IDrawerTipsProps): ReactElement => {
  const renderRememberText = (text: string): ReactElement | null => {
    const words = text.split(' ')
    if (words.length) {
      return (
        <>
          <strong>{words[0]}</strong>
          {words.slice(1).join(' ')}
        </>
      )
    }
    return null
  }

  return (
    <DrawerTipsContainer>
      {tips.map((tip, index) => (
        <TipItem key={index}>
          <img src={tip.icon} alt='tipSVG' style={styles.svg} />
          <span>{tip.text}</span>
        </TipItem>
      ))}
      {rememberText && <div>{renderRememberText(rememberText)}</div>}
    </DrawerTipsContainer>
  )
}
