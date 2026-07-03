import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const NotesIcon = forwardRef<SVGSVGElement, SvgProps>(({ className, onClick, ...props }, ref) => {
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
        d='M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.5L9.5 15.5V17H8V15.5ZM8 12.5H16V14H8V12.5ZM8 9.5H13V11H8V9.5Z'
        fill='currentColor'
      />
    </svg>
  )
})

NotesIcon.displayName = 'NotesIcon'