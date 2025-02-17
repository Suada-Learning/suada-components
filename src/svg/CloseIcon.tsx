import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const CloseIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <path
        d='M30 19.05L28.95 18L24 22.95L19.05 18L18 19.05L22.95 24L18 28.95L19.05 30L24 25.05L28.95 30L30 28.95L25.05 24L30 19.05Z'
        fill='#020210'
      />
    </svg>
  )
}
