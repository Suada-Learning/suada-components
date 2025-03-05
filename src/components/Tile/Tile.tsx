import React, { ReactElement } from 'react'
import {
  CardContainer,
  StyledCard,
  StyledIcon,
  TextWrapper,
  StyledCardContent,
  HeaderText,
  NumberText,
} from './styled-components'
import { ITileProps } from './tile.interface'

export const Tile = ({
  customCardStyles,
  $backgroundColor,
  iconColor,
  icon,
  gap,
  value,
  subIcon,
  text,
}: ITileProps): ReactElement => {
  return (
    <CardContainer className='tile'>
      <StyledCard style={customCardStyles}>
        {icon && (
          <StyledIcon $backgroundColor={$backgroundColor} color={iconColor}>
            {icon}
          </StyledIcon>
        )}
        <StyledCardContent gap={gap}>
          <TextWrapper>
            <NumberText>
              {value} {subIcon}
            </NumberText>
            <HeaderText>{text}</HeaderText>
          </TextWrapper>
        </StyledCardContent>
      </StyledCard>
    </CardContainer>
  )
}
