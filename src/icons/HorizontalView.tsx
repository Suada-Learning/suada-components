import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const HorizontalView = forwardRef<SVGSVGElement, SvgProps>(
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
        <g id='Horizontal-view'>
          <g id='Vector'>
            <path
              d='M17.5 18.75H2.5C2.16859 18.7497 1.85085 18.6178 1.6165 18.3835C1.38216 18.1492 1.25035 17.8314 1.25 17.5V12.5C1.25035 12.1686 1.38216 11.8508 1.6165 11.6165C1.85085 11.3822 2.16859 11.2503 2.5 11.25H17.5C17.8314 11.2503 18.1492 11.3822 18.3835 11.6165C18.6178 11.8508 18.7497 12.1686 18.75 12.5V17.5C18.7497 17.8314 18.6178 18.1492 18.3835 18.3835C18.1492 18.6178 17.8314 18.7497 17.5 18.75ZM2.5 12.5V17.5H17.5V12.5H2.5Z'
              fill='#68707A'
            />
            <path
              d='M17.5 8.75H2.5C2.16859 8.74965 1.85085 8.61785 1.6165 8.3835C1.38216 8.14915 1.25035 7.83141 1.25 7.5V2.5C1.25035 2.16859 1.38216 1.85085 1.6165 1.6165C1.85085 1.38216 2.16859 1.25035 2.5 1.25H17.5C17.8314 1.25035 18.1492 1.38216 18.3835 1.6165C18.6178 1.85085 18.7497 2.16859 18.75 2.5V7.5C18.7497 7.83141 18.6178 8.14915 18.3835 8.3835C18.1492 8.61785 17.8314 8.74965 17.5 8.75ZM2.5 2.5V7.5H17.5V2.5H2.5Z'
              fill='#68707A'
            />
          </g>
        </g>
      </svg>
    )
  },
)

HorizontalView.displayName = 'HorizontalView'
