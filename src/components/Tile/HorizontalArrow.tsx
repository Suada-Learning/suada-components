import React from 'react'
import { ISvgV2Props } from './tile.interface'

const HorizontalArrowIcon: React.FC<ISvgV2Props> = ({ className, onClick, rotate }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      style={{ transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path
        d='M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z'
        fill='white'
      />
    </svg>
  )
}

export default HorizontalArrowIcon
