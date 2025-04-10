import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const ReportProblemIcon = forwardRef<SVGSVGElement, SvgProps>(
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
          d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'
          fill={fill}
        />
      </svg>
    )
  },
)

ReportProblemIcon.displayName = 'ReportProblemIcon'
