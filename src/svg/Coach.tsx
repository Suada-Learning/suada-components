import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const Coach: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      width='20'
      height='19'
      viewBox='0 0 20 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <circle cx='10.0108' cy='9.25204' r='9.25204' fill='#9B51E0' />
      <path
        d='M12.1911 8.1147L12.4425 8.40466L12.7876 8.23666L15.0286 7.14571L13.4363 12.3834H6.5854L4.99314 7.14567L7.23412 8.23663L7.57921 8.40464L7.8307 8.11468L10.0109 5.601L12.1911 8.1147ZM13.4222 12.43C13.4222 12.43 13.4222 12.4299 13.4222 12.4298L13.4222 12.43L13.4222 12.43ZM6.59957 12.43L6.59957 12.43L6.59957 12.43ZM9.96119 5.54371L9.96123 5.54375L9.96119 5.54371Z'
        fill='white'
        stroke='white'
      />
    </svg>
  )
}
