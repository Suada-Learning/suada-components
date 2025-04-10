import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const TrendingUpOutlinedIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#68707A', ...props }, ref) => {
    return (
      <svg
        ref={ref}
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
          d='M136-240l-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z'
          fill={fill}
        />
      </svg>
    )
  },
)

TrendingUpOutlinedIcon.displayName = 'TrendingUpOutlinedIcon'
