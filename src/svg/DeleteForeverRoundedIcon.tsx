import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const DeleteForeverRoundedIcon: React.FC<SvgProps> = ({
  className,
  onClick,
  fill = '#B3B3B8',
  ...props
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 -960 960 960'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      {...props}
    >
      <path
        d='M376-300l104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z'
        fill={fill}
      />
    </svg>
  )
}
