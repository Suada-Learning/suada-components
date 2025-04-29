import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const VideoCheckmarkIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
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
      <path
        d='M9.75 18L3 11.25L4.0605 10.1895L9.75 15.8782L19.9395 5.68945L21 6.74995L9.75 18Z'
        fill='#020210'
      />
    </svg>
  )
}
