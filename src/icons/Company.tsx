import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const Company = forwardRef<SVGSVGElement, SvgProps>(
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
          d='M21 1.5H12C11.6023 1.5004 11.221 1.65856 10.9398 1.93978C10.6586 2.221 10.5004 2.6023 10.5 3V10.5H3C2.6023 10.5004 2.221 10.6586 1.93978 10.9398C1.65856 11.221 1.5004 11.6023 1.5 12V22.5H22.5V3C22.4995 2.60232 22.3414 2.22105 22.0602 1.93984C21.7789 1.65864 21.3977 1.50046 21 1.5ZM6.75 21V15.75H9.75V21H6.75ZM21 21H11.25V15C11.25 14.8011 11.171 14.6103 11.0303 14.4697C10.8897 14.329 10.6989 14.25 10.5 14.25H6C5.80109 14.25 5.61032 14.329 5.46967 14.4697C5.32902 14.6103 5.25 14.8011 5.25 15V21H3V12H12V3H21V21Z'
          fill='#020210'
        />
        <path d='M15 6H13.5V7.5H15V6Z' fill='#020210' />
        <path d='M19.5 6H18V7.5H19.5V6Z' fill='#020210' />
        <path d='M15 10.5H13.5V12H15V10.5Z' fill='#020210' />
        <path d='M19.5 10.5H18V12H19.5V10.5Z' fill='#020210' />
        <path d='M15 14.9997H13.5V16.4997H15V14.9997Z' fill='#020210' />
        <path d='M19.5 14.9997H18V16.4997H19.5V14.9997Z' fill='#020210' />
      </svg>
    )
  },
)

Company.displayName = 'Company'
