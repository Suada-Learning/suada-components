import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const CheckBoxOutlineBlankIcon: React.FC<SvgProps> = ({
  className,
  onClick,
  fill = '#68707A',
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill={fill}
      className={className}
      onClick={onClick}
      {...props}
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' />
    </svg>
  )
}
