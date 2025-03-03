import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const Send: React.FC<SvgProps> = ({ className, onClick, fill = '#68707A', ...props }) => {
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
        d='M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z'
        fill={fill}
      />
    </svg>
  )
}
