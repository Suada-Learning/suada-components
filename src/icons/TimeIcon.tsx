import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const TimeIcon = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, fill = '#718096', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <circle
          cx='12'
          cy='12'
          r='10'
          stroke={fill}
          strokeWidth='1.5'
        />
        <path
          d='M12 6v6l4 2'
          stroke={fill}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  },
)

TimeIcon.displayName = 'TimeIcon'
