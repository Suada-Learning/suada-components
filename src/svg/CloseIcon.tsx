import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const CloseIcon: React.FC<SvgProps> = ({
  className,
  onClick,
  fill = '#B3B3B8',
  ...props
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 -960 960 960'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <path
        d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'
        fill={fill}
      />
    </svg>
  )
}
