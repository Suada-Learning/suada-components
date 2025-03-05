import React, { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import { IRangeSliderProps } from './rangeSlider.interface'
import { classes, Root } from './RangeSlider.styles'

const RangeSlider = ({
  label,
  style,
  value = [0, 0],
  onRangeChange,
  min = 0,
  max = 100,
  name = label || '',
}: IRangeSliderProps): ReactElement => {
  const handleChange = (_: Event, newValue: number | number[]): void => {
    onRangeChange(newValue as number[], name)
  }
  return (
    <Root className={classes.root}>
      <Typography id='range-slider' gutterBottom>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {label}
          <span>
            {value[0]} - {value[1]}
          </span>
        </div>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        min={min}
        max={max}
        name={name}
        style={style}
      />
    </Root>
  )
}

export default RangeSlider
