import React from 'react'
import { SvgProps } from './svgTypes.interface'

const CaretDown: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
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
      <g id='Caret--down'>
        <path id='Vector' d='M18 9L12 16.5L6 9H18Z' fill='#AEB5C1' />
      </g>
    </svg>
  )
}

export default CaretDown
