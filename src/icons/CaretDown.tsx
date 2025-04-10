import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const CaretDown = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
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
  },
)

CaretDown.displayName = 'CaretDown'
