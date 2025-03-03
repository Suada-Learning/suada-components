import { Radio } from '@mui/material'
import React, { ChangeEvent, ReactElement } from 'react'
import { IRadioButtonProps } from './radioButton.interface'

export const RadioButton = ({ checked, value, onChange }: IRadioButtonProps): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    onChange && onChange(event.target.value)

  return (
    <Radio
      checked={checked}
      onChange={handleChange}
      value={value}
      sx={{
        '&.Mui-checked': {
          color: '#00905E',
        },
      }}
    />
  )
}
