import React, { Dispatch, RefObject, SetStateAction } from 'react'
import ReactPlayer from 'react-player'
import { ControlsProps } from './Controls/Controls.interface'

export interface VideoState {
  muted: boolean
  volume: number
  prevVolume: number
  playbackRate: number
  played: number
  seeking: boolean
  buffer: boolean
}

type HandleNextVideo = () => void
type HandlePreviousVideo = () => void

export interface Note {
  id: string
  title: string
  moment: number
  description?: string
  thumbnail?: string
}

export interface NoteMarker {
  id: string
  title: string
  moment: number
  position: number
}

export interface PlayerProps {
  customStyles?: React.CSSProperties
  startTime?: number
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  url: string
  subtitle: string
  handleTrackProgress: (currentTime: number) => void
  handleNextVideo?: HandleNextVideo
  handlePreviousVideo?: HandlePreviousVideo
  isNextVideo?: boolean
  isPreviousVideo?: boolean
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayerBeFocusedOnSpaceClick?: boolean
  showFavorite?: boolean
  isFavorite?: boolean
  toggleFavorite?: () => Promise<void>
  showDownload?: boolean
  downloadUrl?: string
  downloadFileName?: string
  onDownload?: () => void
  showPictureInPicture?: boolean
  // Notes functionality props
  notes?: Note[]
  videoDuration?: number
  onNoteClick?: (note: Note) => void
  courseId?: string
  moduleId?: string
  lessonId?: string
  // Note editing props (optional - for external control)
  editingNote?: Note | null
  onNoteEdit?: (note: Note) => void
  onNoteSave?: (noteId: string, title: string, content: string) => Promise<void>
  onNoteDelete?: (noteId: string) => Promise<void>
  onNoteCancelEdit?: () => void
  onAddNote?: () => void
}

export interface UsePlayerControlsProps {
  startTime?: number
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  url: string
  handleTrackProgress: (currentTime: number) => void
  subtitleUrl: string
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayerBeFocusedOnSpaceClick: boolean
}

export interface ProgressState {
  played: number
  playedSeconds: number
  loaded: number
  loadedSeconds: number
}

export interface UsePlayerControlsState
  extends Omit<ControlsProps, 'isFavorite' | 'toggleIsFavorite'> {
  mouseMoveHandler: () => void
  playerContainerRef: RefObject<HTMLDivElement>
  videoPlayerRef: RefObject<ReactPlayer>
  progressHandler: (state: ProgressState) => Promise<void>
  bufferStartHandler: () => void
  bufferEndHandler: () => void
  onPlayerStart: () => void
  controlRef: RefObject<HTMLDivElement>
  isFullscreen: boolean
  isPiPActive: boolean
  handlePictureInPicture: () => void
  isControlsActive: boolean
  currentSubtitle: string
  setCurrentSubtitle: Dispatch<SetStateAction<string>>
}
