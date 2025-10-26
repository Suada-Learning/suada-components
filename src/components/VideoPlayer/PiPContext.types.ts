export interface PiPVideoState {
  url: string
  currentTime: number
  isPlaying: boolean
  volume: number
  muted: boolean
}

export interface PiPContextType {
  isPiPActive: boolean
  pipVideoState: PiPVideoState | null
  enterPiP: (videoElement: HTMLVideoElement, videoState: PiPVideoState) => Promise<boolean>
  exitPiP: () => Promise<boolean>
  updateVideoState: (state: Partial<PiPVideoState>) => void
  registerVideoElement: (element: HTMLVideoElement) => void
  unregisterVideoElement: () => void
}