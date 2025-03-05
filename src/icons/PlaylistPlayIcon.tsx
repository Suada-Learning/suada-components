import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const PlaylistPlayIcon: React.FC<SvgProps> = ({
  className,
  onClick,
  fill = '#68707A',
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
        d='M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z'
        fill={fill}
      />
    </svg>
  )
}
