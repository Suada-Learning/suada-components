import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const MarkunreadMailboxIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
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
        d='M240-400v-160h-80v400h640v-400H400v-80h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-240h320v160H320v320h-80Zm-80-160v160-160 400-400Z'
        fill='#06C68F'
      />
    </svg>
  )
}
