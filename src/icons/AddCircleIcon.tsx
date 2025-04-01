import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const AddCircleIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#68707A', ...props }, ref) => {
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
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path
          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'
          fill={fill}
        />
      </svg>
    )
  },
)

AddCircleIcon.displayName = 'AddCircleIcon'
