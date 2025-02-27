import React, { ReactElement } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { ITooltipProps } from './customTooltip.interface'

export const CustomTooltip = ({ title, children }: ITooltipProps): ReactElement => (
  <div>
    <Tooltip title={title}>{children}</Tooltip>
  </div>
)
