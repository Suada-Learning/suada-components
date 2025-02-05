import React, { ReactElement } from 'react'
import { ButtonState, HtmlButtonTypeEnum } from './Button.interface'
import { StyledButton } from './Button.styles'

export const Button = ({
  type,
  size,
  label,
  iconLeft,
  iconRight,
  disabled,
  customStyles,
  onClick,
  htmlType = HtmlButtonTypeEnum.BUTTON,
  className,
  themes,
}: ButtonState): ReactElement => {
  return (
    <StyledButton
      $type={type}
      $size={size}
      disabled={!!disabled}
      style={customStyles}
      onClick={onClick}
      type={htmlType}
      className={className}
      theme={themes}
    >
      {iconLeft}
      {label}
      {iconRight}
    </StyledButton>
  )
}
