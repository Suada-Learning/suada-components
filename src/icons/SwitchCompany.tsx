import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const SwitchCompany = forwardRef<SVGSVGElement, SvgProps>(
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
        <path
          d='M8.5575 19.9425L5.8725 17.25H21V15.75H5.8725L8.5575 13.0575L7.5 12L3 16.5L7.5 21L8.5575 19.9425Z'
          fill='#08C694'
        />
        <path
          d='M21 7.5L16.5 3L15.4425 4.0575L18.1275 6.75H3V8.25H18.1275L15.4425 10.9425L16.5 12L21 7.5Z'
          fill='#08C694'
        />
      </svg>
    )
  },
)

SwitchCompany.displayName = 'SwitchCompany'
