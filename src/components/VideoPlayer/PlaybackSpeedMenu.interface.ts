import { CSSProperties } from 'react'
import { IDynamicPosition } from './useDynamicPosition'

export type OnPlaybackSpeedChangeFnType = (speed: number) => void

export interface PlaybackSpeedMenuProps {
  playbackSpeed: number
  onPlaybackSpeedChange: OnPlaybackSpeedChangeFnType
  menuWrapperClassName?: string
  labelIconClassName?: string
  customMenuWrapperStyles?: CSSProperties
  customMenuStyles?: CSSProperties
}

export interface StyledPlaybackMenuProps {
  $position: IDynamicPosition
}

export interface PlaybackSpeedItem {
  label: string
  value: number
}
