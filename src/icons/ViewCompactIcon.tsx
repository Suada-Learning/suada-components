import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const ViewCompactIcon: React.FC<SvgProps> = ({
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
        d='M80-170v-620h800v620H80Zm80-440h100v-100H160v100Zm180 0h100v-100H340v100Zm180 0h100v-100H520v100Zm180 0h100v-100H700v100Zm0 180h100v-100H700v100Zm-180 0h100v-100H520v100Zm-180 0h100v-100H340v100Zm-80-100H160v100h100v-100Zm440 280h100v-100H700v100Zm-180 0h100v-100H520v100Zm-180 0h100v-100H340v100Zm-180 0h100v-100H160v100Z'
        fill={fill}
      />
    </svg>
  )
}
