import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const TrashCanRed = forwardRef<SVGSVGElement, SvgProps>(
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
        <path d='M10.5 9H9V18H10.5V9Z' fill='#EA382A' />
        <path d='M15 9H13.5V18H15V9Z' fill='#EA382A' />
        <path
          d='M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z'
          fill='#EA382A'
        />
        <path d='M15 1.5H9V3H15V1.5Z' fill='#EA382A' />
      </svg>
    )
  },
)

TrashCanRed.displayName = 'TrashCanRed'
