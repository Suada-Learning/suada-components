import React, { forwardRef, SVGProps } from 'react'

export interface SvgProps extends SVGProps<SVGSVGElement> {
  className?: string
  onClick?: () => void
  black?: boolean
}

export const Learning = forwardRef<SVGSVGElement, SvgProps>(
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
        <path d='M22.5 6H12V7.5H22.5V6Z' fill='#020210' />
        <path
          d='M4.5 7.9425L2.5575 6L1.5 7.0575L4.5 10.0575L10.5 4.0575L9.4425 3L4.5 7.9425Z'
          fill='#020210'
        />
        <path d='M22.5 16.5H12V18H22.5V16.5Z' fill='#020210' />
        <path
          d='M4.5 18.4425L2.5575 16.5L1.5 17.5575L4.5 20.5575L10.5 14.5575L9.4425 13.5L4.5 18.4425Z'
          fill='#020210'
        />
      </svg>
    )
  },
)

Learning.displayName = 'Learning'
