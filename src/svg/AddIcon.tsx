import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const AddIcon: React.FC<SvgProps> = ({ className, onClick, fill = 'white', ...props }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <path
        d='M13.25 11.25V6H11.75V11.25H6.5V12.75H11.75V18H13.25V12.75H18.5V11.25H13.25Z'
        fill={fill}
      />
    </svg>
  )
}
