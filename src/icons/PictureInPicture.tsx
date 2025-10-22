import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const PictureInPictureIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
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
        d='M19 7H22V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5H17V7H4V17H13V15H20V7H19ZM15 13H22V7H15V13Z'
        fill='white'
      />
    </svg>
  )
}