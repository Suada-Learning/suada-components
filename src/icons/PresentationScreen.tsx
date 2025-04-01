import React, { forwardRef } from 'react'
import { SvgProps } from './svgTypes.interface'

export const PresentationScreen = forwardRef<SVGSVGElement, SvgProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        onClick={onClick}
        {...props}
      >
        <rect width='64' height='64' fill='url(#pattern0)' />
        <defs>
          <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image0_25_133494' transform='scale(0.015625)' />
          </pattern>
          <image
            id='image0_25_133494'
            width='64'
            height='64'
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDElEQVR4nO2Xv2rbQBzHT36B9DU69CkkU3xqIEQydLDnLgXrSsGjEvAQ+gImQzwXWhJIxkJrXbd26Bt0cwvt7mT7hgPLUW3JUkKgvvP3Cz9siztz36/u30eICg2+4MkbjRdJhrfqK4Y2lhm78TD8hD1xHyUZwkTjt9KAI/VLTSEbmR9M8TTRuN6CQT923agpnjV5++d5p9E34PIncGVpmbEbD7mfRONjkwBmeYe/c1ivP/NCABlmtQGowrRxRUVPDKBOijMAXAKKewC4CSqeAnBGPAY17wHgRUjzJghehTVZAGSBOimyAMgCiiwAsoAiC8AZkQU0WQBkAU0WAFlAkwVAFqiTIguALKDIAiALKLIAnBFZQJMFQBbQZAGQBTRZAGXXf68to14QRkNTvXcXyOv9Bzeq6Cn3aTwLITwRyG4/CGPsZMlunwGIxRLww/jE1POXr04PXo8+m8/8me1V5mm5BKj/p1ZbHo5Nme9il5SmaSvoxNlyM+rEmXkmdkSeL+Px6o7sy2jifAipefMyPqs+luIzZ0NI68w7HoK3Ou39TvTjbvrH311eDt6aeRlN2vvd4+XvMDoqa+NCCF6VMWO6GMCmtsJSeZsMlQRQ28cmeXVGKgJo1Ne+3V6u7+wbAmj8H1upYBWvKwa+KYDqELp9YVUAsvqt/duu3NhaCDYEIBZ43QA3H7vdg3QLxJKutCAxKy4AAAAASUVORK5CYII='
          />
        </defs>
      </svg>
    )
  },
)

PresentationScreen.displayName = 'PresentationScreen'
