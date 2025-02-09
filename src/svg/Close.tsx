import React from 'react'
import { SvgProps } from './svgTypes.interface'

const Close: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <g id='Close'>
        <path
          id='Vector'
          d='M15 5.875L14.125 5L10 9.125L5.875 5L5 5.875L9.125 10L5 14.125L5.875 15L10 10.875L14.125 15L15 14.125L10.875 10L15 5.875Z'
          fill='#EA382A'
        />
      </g>
    </svg>
  )
}

export default Close
