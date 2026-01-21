import { ChangeEvent, MouseEvent } from 'react'

import { VideoState } from '../Player.interface'

export interface ControlsProps {
  setVideoState: (value: (prev: VideoState) => VideoState) => void
  playbackRate: number
  rewindHandler: () => void
  playPauseHandler: () => void
  handleFastForward: () => void
  formatCurrentTime: string
  played: number
  onSeekMouseDownHandler: (e: MouseEvent<HTMLInputElement>) => void
  seekHandler: (event: ChangeEvent<HTMLInputElement>) => void
  seekMouseUpHandler: (event: MouseEvent<HTMLInputElement>) => void
  volume: number
  muted: boolean
  muteHandler: () => void
  volumeChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  formatDuration: string
  handleFullScreen: () => void
  handlePictureInPicture: () => void
  playing: boolean
  isSubtitlesChecked: boolean
  toggleSubtitlesCheck: () => void
  isFavorite: boolean
  toggleIsFavorite: () => Promise<void>
  isFullscreen: boolean
  isPiPActive: boolean
  subtitle?: boolean
  handleSkipBackward?: () => void
  handleSkipForward?: () => void
  isNextVideo?: boolean
  isPreviousVideo?: boolean
  showFavorite?: boolean
  showDownload?: boolean
  downloadUrl?: string
  downloadFileName?: string
  onDownload?: () => void
  showPictureInPicture?: boolean
  onAddNote?: () => void
}
