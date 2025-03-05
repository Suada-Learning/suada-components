import { ChangeEvent } from 'react'

export interface ISwitchProps {
  value: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name?: string
  label?: string
  off?: string | React.ReactNode
  on?: string | React.ReactNode
  tooltip?: string
  labelPosition?: 'start' | 'end'
  labelStyle?: React.CSSProperties
}
