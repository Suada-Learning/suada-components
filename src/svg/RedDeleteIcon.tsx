import React from 'react'
import { SvgProps } from './svgTypes.interface'

const RedDeleteIcon: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='20'
      height='20'
      viewBox='0 0 256 256'
      className={className}
      onClick={onClick}
      {...props}
    >
      <g
        fill='#fa5252'
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{ mixBlendMode: 'normal' }}
      >
        <g transform='scale(12.8,12.8)'>
          <path d='M8.75,7.5h-1.25v7.5h1.25z'></path>
          <path d='M12.5,7.5h-1.25v7.5h1.25z'></path>
          <path d='M2.5,3.75v1.25h1.25v12.5c0,0.3315 0.1317,0.6495 0.36612,0.8839c0.23442,0.2344 0.55236,0.3661 0.88388,0.3661h10c0.3315,0 0.6495,-0.1317 0.8839,-0.3661c0.2344,-0.2344 0.3661,-0.5524 0.3661,-0.8839v-12.5h1.25v-1.25zM5,17.5v-12.5h10v12.5z'></path>
          <path d='M12.5,1.25h-5v1.25h5z'></path>
        </g>
      </g>
    </svg>
  )
}

export default RedDeleteIcon
