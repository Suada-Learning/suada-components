import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const Checkmark = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <g id='Checkmark'>
          <path
            id='Vector'
            d='M8.125 15.0009L2.5 9.37594L3.38375 8.49219L8.125 13.2328L16.6163 4.74219L17.5 5.62594L8.125 15.0009Z'
            fill='#00905E'
          />
        </g>
      </svg>
    )
  },
)

Checkmark.displayName = 'Checkmark'
