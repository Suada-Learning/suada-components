import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const TrashCanAction = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <path d='M18.75 17.5H17.5V25H18.75V17.5Z' fill='#68707A' />
        <path d='M22.5 17.5H21.25V25H22.5V17.5Z' fill='#68707A' />
        <path
          d='M12.5 13.75V15H13.75V27.5C13.75 27.8315 13.8817 28.1495 14.1161 28.3839C14.3505 28.6183 14.6685 28.75 15 28.75H25C25.3315 28.75 25.6495 28.6183 25.8839 28.3839C26.1183 28.1495 26.25 27.8315 26.25 27.5V15H27.5V13.75H12.5ZM15 27.5V15H25V27.5H15Z'
          fill='#68707A'
        />
        <path d='M22.5 11.25H17.5V12.5H22.5V11.25Z' fill='#68707A' />
      </svg>
    )
  },
)

TrashCanAction.displayName = 'TrashCanAction'
