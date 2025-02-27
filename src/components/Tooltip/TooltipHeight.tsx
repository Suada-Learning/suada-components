import React, { useRef, useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { IProps } from './toolTipHeight.interface'

export const TooltipHeight: React.FC<IProps> = ({ text, lines }) => {
  const textElementRef = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const isOverflow = textElementRef.current
      ? textElementRef.current.scrollHeight > textElementRef.current.clientHeight
      : false
    setIsOverflowing(isOverflow)
  }, [text])

  return isOverflowing ? (
    <Tooltip title={text}>
      <div
        ref={textElementRef}
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: lines,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {text}
      </div>
    </Tooltip>
  ) : (
    <div
      ref={textElementRef}
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {text}
    </div>
  )
}
