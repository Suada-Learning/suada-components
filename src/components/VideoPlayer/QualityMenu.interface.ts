import { CSSProperties } from 'react'
import { IDynamicPosition } from './useDynamicPosition'

export const AUTO_QUALITY_LEVEL = -1

export interface QualityLevelOption {
  label: string
  value: number
}

export interface QualityMenuProps {
  levels: QualityLevelOption[]
  selectedLevel: number
  onLevelChange: (level: number) => void
  menuWrapperClassName?: string
  labelIconClassName?: string
  customMenuWrapperStyles?: CSSProperties
  customMenuStyles?: CSSProperties
}

export interface StyledQualityMenuProps {
  $position: IDynamicPosition
}
