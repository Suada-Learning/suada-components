import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const CloseOutlineAction = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='40'
        height='40'
        viewBox='0 0 256 256'
        className={className}
        onClick={onClick}
        {...props}
      >
        <g
          fill='#68707a'
          fillRule='nonzero'
          stroke='none'
          strokeWidth='1'
          strokeLinecap='butt'
          strokeLinejoin='miter'
          strokeMiterlimit='10'
          fontFamily='none'
          fontWeight='none'
          fontSize='none'
          textAnchor='none'
          style={{ mixBlendMode: 'normal' }}
        >
          <g transform='scale(6.4,6.4)'>
            <path d='M20,11.25c-4.875,0 -8.75,3.875 -8.75,8.75c0,4.875 3.875,8.75 8.75,8.75c4.875,0 8.75,-3.875 8.75,-8.75c0,-4.875 -3.875,-8.75 -8.75,-8.75zM20,27.5c-4.125,0 -7.5,-3.375 -7.5,-7.5c0,-4.125 3.375,-7.5 7.5,-7.5c4.125,0 7.5,3.375 7.5,7.5c0,4.125 -3.375,7.5 -7.5,7.5z' />
            <path d='M23.375,24.375l-3.375,-3.375l-3.375,3.375l-1,-1l3.375,-3.375l-3.375,-3.375l1,-1l3.375,3.375l3.375,-3.375l1,1l-3.375,3.375l3.375,3.375z' />
          </g>
        </g>
      </svg>
    )
  },
)

CloseOutlineAction.displayName = 'CloseOutlineAction'
