import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const GetAppIcon = forwardRef<SVGSVGElement, SvgProps>(
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
          d='M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z'
          fill={fill}
        />
      </svg>
    )
  },
)

GetAppIcon.displayName = 'GetAppIcon'
