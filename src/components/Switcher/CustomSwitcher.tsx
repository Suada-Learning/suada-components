import React, { ReactElement } from 'react'
import Switch from '@mui/material/Switch'
import { Tooltip } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import {
  FormControlLabelStyles,
  FormControlWrapper,
  HelpIconStyles,
  StyledLabel,
  ToolTipContainer,
  TooltipTitle,
} from './CustomSwitcher.styles'
import { ISwitchProps } from './CustomSwitcher.interface'
import { Help } from '../../icons'

export const CustomSwitcher: React.FC<ISwitchProps> = ({
  value,
  onChange,
  name,
  label,
  on,
  off,
  tooltip,
  labelPosition = 'start',
  labelStyle,
}) => {
  const Label = (): ReactElement => {
    if (tooltip) {
      return (
        <ToolTipContainer>
          <StyledLabel style={labelStyle}>{label}</StyledLabel>
          <Tooltip title={<TooltipTitle>{tooltip}</TooltipTitle>} arrow placement='right'>
            <div>
              {' '}
              {/* Adding wrapper div to ensure tooltip attaches properly */}
              <Help color='primary' style={HelpIconStyles} />
            </div>
          </Tooltip>
        </ToolTipContainer>
      )
    }
    return <StyledLabel style={labelStyle}>{label}</StyledLabel>
  }

  return (
    <FormControlLabel
      style={FormControlLabelStyles}
      label={<Label />}
      labelPlacement={labelPosition}
      control={
        <FormControlWrapper>
          {off}
          <Switch
            checked={value}
            onChange={onChange}
            name={name}
            value={value}
            classes={{
              switchBase: 'CustomSwitcher-switchBase',
            }}
          />
          {on}
        </FormControlWrapper>
      }
    />
  )
}
