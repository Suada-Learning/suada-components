import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const ExpandMoreIcon: React.FC<SvgProps> = ({
  className,
  onClick,
  fill = '#68707A',
  ...props
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
      <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' fill={fill} />
    </svg>
  )
}
