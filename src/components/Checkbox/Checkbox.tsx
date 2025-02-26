import { Checkbox as MUICheckBox, FormControlLabel, Tooltip } from '@mui/material'
import React, { ReactElement } from 'react'
import { LabelContainer } from './styled-components'
import { ICheckboxV2Props } from './checkboxV2.interface'
import { Help } from '../../svg'

export const Checkbox = ({
  checked,
  onChange,
  label,
  tooltip,
  name = 'checkbox',
}: ICheckboxV2Props): ReactElement => {
  const checkedColor = '#08c694'
  return (
    <FormControlLabel
      control={
        <MUICheckBox
          checked={checked}
          onChange={onChange}
          name={name}
          sx={{
            color: checked ? checkedColor : undefined,
            '&.Mui-checked': {
              color: checkedColor,
            },
          }}
        />
      }
      label={
        <LabelContainer>
          <span>{label}</span>
          {tooltip && (
            <Tooltip title={tooltip}>
              <Help />
            </Tooltip>
          )}
        </LabelContainer>
      }
    />
  )
}
