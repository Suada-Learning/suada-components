import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const ArrowDropDownIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg viewBox='0 0 24 24' className={className} onClick={onClick} {...props}>
      <path d='M7 10l5 5 5-5z' />
    </svg>
  )
}
