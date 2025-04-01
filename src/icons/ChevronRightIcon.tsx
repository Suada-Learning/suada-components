import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const ChevronRightIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#68707A', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        fill={fill}
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
      </svg>
    )
  },
)

ChevronRightIcon.displayName = 'ChevronRightIcon'
