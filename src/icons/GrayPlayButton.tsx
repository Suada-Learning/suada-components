import React from 'react'
import { SvgProps } from './svgTypes.interface'

export const PlayGrayButtonSVG: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0,0,256,256'
    >
      <g
        fill-opacity='0.52941'
        fill='#7a7a7a'
        fill-rule='nonzero'
        stroke='none'
        stroke-width='1'
        stroke-linecap='butt'
        stroke-linejoin='miter'
        stroke-miterlimit='10'
        stroke-dasharray=''
        stroke-dashoffset='0'
        font-family='none'
        font-weight='none'
        font-size='none'
        text-anchor='none'
        className={className}
        onClick={onClick}
        {...props}
      >
        <g transform='translate(-8,-0.00053) scale(10.66667,10.66667)'>
          <path d='M5.25,21.0001c-0.19891,0 -0.38968,-0.0791 -0.53033,-0.2197c-0.14065,-0.1407 -0.21967,-0.3314 -0.21967,-0.5303v-16.50004c-0.00001,-0.13034 0.03395,-0.25843 0.09852,-0.37164c0.06458,-0.11322 0.15754,-0.20765 0.26973,-0.27399c0.11219,-0.06635 0.23973,-0.10231 0.37005,-0.10434c0.13032,-0.00203 0.25892,0.02993 0.37313,0.09274l14.99997,8.24997c0.1177,0.0647 0.2159,0.1599 0.2842,0.2755c0.0684,0.1156 0.1044,0.2474 0.1044,0.3817c0,0.1343 -0.036,0.2662 -0.1044,0.3818c-0.0683,0.1156 -0.1665,0.2107 -0.2842,0.2754l-14.99997,8.25c-0.11074,0.0609 -0.23506,0.0928 -0.36143,0.0929zM6,5.01823v13.96347l12.6936,-6.9816z'></path>
        </g>
      </g>
    </svg>
  )
}
