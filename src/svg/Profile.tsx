import React from 'react'
import { SvgProps } from './svgTypes.interface'

const Profile: React.FC<SvgProps> = ({ className, onClick, ...props }) => {
  return (
    <svg
      id='Profile_Picture'
      data-name='Profile Picture'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='156.001'
      height='159'
      viewBox='0 0 156.001 159'
      className={className}
      onClick={onClick}
      {...props}
    >
      <defs>
        <style>
          {`
            .cls-1, .cls-5, .cls-7 {
              fill: none;
            }
            .cls-1, .cls-5 {
              stroke: #06c68f;
            }
            .cls-1 {
              stroke-width: 12px;
            }
            .cls-2 {
              opacity: 0.7;
            }
            .cls-3 {
              fill: #06c68f;
            }
            .cls-4 {
              clip-path: url(#clip-path);
            }
            .cls-5 {
              stroke-width: 5px;
            }
            .cls-6 {
              stroke: none;
            }
          `}
        </style>
        <clipPath id='clip-path'>
          <ellipse
            id='Ellipse_55'
            data-name='Ellipse 55'
            className='cls-1'
            cx='78'
            cy='77.5'
            rx='78'
            ry='77.5'
            transform='translate(0.068 0.317)'
          />
        </clipPath>
      </defs>
      <g
        id='Profile_Picture-2'
        data-name='Profile Picture'
        className='cls-2'
        transform='translate(0.389 -0.645)'
      >
        <g id='Group_411' data-name='Group 411' transform='translate(-0.458 0.328)'>
          <ellipse
            id='Ellipse_53'
            data-name='Ellipse 53'
            className='cls-3'
            cx='22'
            cy='23'
            rx='22'
            ry='23'
            transform='translate(56.068 38.317)'
          />
          <g id='Mask_Group_9' data-name='Mask Group 9' className='cls-4'>
            <ellipse
              id='Ellipse_54'
              data-name='Ellipse 54'
              className='cls-3'
              cx='47.5'
              cy='72'
              rx='47.5'
              ry='72'
              transform='translate(31.068 89.317)'
            />
          </g>
        </g>
        <g
          id='Ellipse_56'
          data-name='Ellipse 56'
          className='cls-5'
          transform='translate(-0.389 4.645)'
        >
          <ellipse className='cls-6' cx='78' cy='77.5' rx='78' ry='77.5' />
          <ellipse className='cls-7' cx='78' cy='77.5' rx='75.5' ry='75' />
        </g>
      </g>
    </svg>
  )
}

export default Profile
