/**
 * Global Picture-in-Picture Manager
 * This module manages PiP state across component unmounts and route changes
 */

interface PiPVideoState {
  url: string
  currentTime: number
  isPlaying: boolean
  volume: number
  playbackRate: number
}

class PictureInPictureManager {
  private videoElement: HTMLVideoElement | null = null
  private pipContainer: HTMLDivElement | null = null
  private currentVideoState: PiPVideoState | null = null
  private onStateChange: ((state: PiPVideoState) => void) | null = null

  constructor() {
    // Listen for PiP events globally
    document.addEventListener('leavepictureinpicture', this.handlePiPExit.bind(this))
    document.addEventListener('enterpictureinpicture', this.handlePiPEnter.bind(this))
  }

  /**
   * Register a video element for PiP management
   */
  registerVideo(
    videoElement: HTMLVideoElement,
    url: string,
    onStateChange?: (state: PiPVideoState) => void
  ): void {
    this.videoElement = videoElement
    this.onStateChange = onStateChange || null
    
    // Store current video state
    this.currentVideoState = {
      url,
      currentTime: videoElement.currentTime,
      isPlaying: !videoElement.paused,
      volume: videoElement.volume,
      playbackRate: videoElement.playbackRate
    }

    // Add listeners to track state changes
    videoElement.addEventListener('timeupdate', this.handleTimeUpdate.bind(this))
    videoElement.addEventListener('play', this.handlePlayStateChange.bind(this))
    videoElement.addEventListener('pause', this.handlePlayStateChange.bind(this))
    videoElement.addEventListener('volumechange', this.handleVolumeChange.bind(this))
    videoElement.addEventListener('ratechange', this.handleRateChange.bind(this))
  }

  /**
   * Unregister the current video element
   */
  unregisterVideo(): void {
    if (this.videoElement) {
      this.videoElement.removeEventListener('timeupdate', this.handleTimeUpdate.bind(this))
      this.videoElement.removeEventListener('play', this.handlePlayStateChange.bind(this))
      this.videoElement.removeEventListener('pause', this.handlePlayStateChange.bind(this))
      this.videoElement.removeEventListener('volumechange', this.handleVolumeChange.bind(this))
      this.videoElement.removeEventListener('ratechange', this.handleRateChange.bind(this))
    }
    
    this.videoElement = null
    this.onStateChange = null
  }

  /**
   * Create a persistent video element for PiP
   */
  private createPersistentVideo(originalVideo: HTMLVideoElement): HTMLVideoElement {
    const persistentVideo = originalVideo.cloneNode(true) as HTMLVideoElement
    
    // Copy all relevant properties
    persistentVideo.src = originalVideo.src
    persistentVideo.currentTime = originalVideo.currentTime
    persistentVideo.volume = originalVideo.volume
    persistentVideo.playbackRate = originalVideo.playbackRate
    persistentVideo.muted = originalVideo.muted
    
    // Set properties for PiP
    persistentVideo.style.position = 'fixed'
    persistentVideo.style.top = '-9999px'
    persistentVideo.style.left = '-9999px'
    persistentVideo.style.width = '1px'
    persistentVideo.style.height = '1px'
    persistentVideo.style.opacity = '0'
    persistentVideo.style.pointerEvents = 'none'
    
    return persistentVideo
  }

  /**
   * Enter picture-in-picture mode with persistence
   */
  async enterPiP(): Promise<void> {
    if (!this.videoElement || !document.pictureInPictureEnabled) {
      return
    }

    try {
      // If already in PiP, exit first
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
      }

      // Create a container if it doesn't exist
      if (!this.pipContainer) {
        this.pipContainer = document.createElement('div')
        this.pipContainer.id = 'suada-pip-container'
        this.pipContainer.style.position = 'fixed'
        this.pipContainer.style.top = '-9999px'
        this.pipContainer.style.left = '-9999px'
        this.pipContainer.style.width = '1px'
        this.pipContainer.style.height = '1px'
        this.pipContainer.style.zIndex = '-1'
        document.body.appendChild(this.pipContainer)
      }

      // Create persistent video element
      const persistentVideo = this.createPersistentVideo(this.videoElement)
      this.pipContainer.appendChild(persistentVideo)

      // Wait for video to load
      await new Promise<void>((resolve) => {
        if (persistentVideo.readyState >= 2) {
          resolve()
        } else {
          persistentVideo.addEventListener('loadedmetadata', () => resolve(), { once: true })
        }
      })

      // Enter PiP mode
      await persistentVideo.requestPictureInPicture()
      
      // Update the reference to the persistent video
      this.videoElement = persistentVideo
      
    } catch (error) {
      console.error('Failed to enter picture-in-picture:', error)
    }
  }

  /**
   * Exit picture-in-picture mode
   */
  async exitPiP(): Promise<void> {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
      }
    } catch (error) {
      console.error('Failed to exit picture-in-picture:', error)
    }
  }

  /**
   * Check if currently in PiP mode
   */
  isPiPActive(): boolean {
    return !!document.pictureInPictureElement
  }

  /**
   * Get current video state
   */
  getCurrentState(): PiPVideoState | null {
    return this.currentVideoState
  }

  /**
   * Restore video state to a new video element
   */
  restoreStateToVideo(videoElement: HTMLVideoElement): void {
    if (!this.currentVideoState) return

    videoElement.currentTime = this.currentVideoState.currentTime
    videoElement.volume = this.currentVideoState.volume
    videoElement.playbackRate = this.currentVideoState.playbackRate
    
    if (this.currentVideoState.isPlaying) {
      videoElement.play().catch(console.error)
    }
  }

  private handleTimeUpdate(): void {
    if (this.videoElement && this.currentVideoState) {
      this.currentVideoState.currentTime = this.videoElement.currentTime
      this.notifyStateChange()
    }
  }

  private handlePlayStateChange(): void {
    if (this.videoElement && this.currentVideoState) {
      this.currentVideoState.isPlaying = !this.videoElement.paused
      this.notifyStateChange()
    }
  }

  private handleVolumeChange(): void {
    if (this.videoElement && this.currentVideoState) {
      this.currentVideoState.volume = this.videoElement.volume
      this.notifyStateChange()
    }
  }

  private handleRateChange(): void {
    if (this.videoElement && this.currentVideoState) {
      this.currentVideoState.playbackRate = this.videoElement.playbackRate
      this.notifyStateChange()
    }
  }

  private handlePiPEnter(): void {
    console.log('Entered picture-in-picture mode')
  }

  private handlePiPExit(): void {
    console.log('Exited picture-in-picture mode')
    this.cleanup()
  }

  private notifyStateChange(): void {
    if (this.onStateChange && this.currentVideoState) {
      this.onStateChange(this.currentVideoState)
    }
  }

  private cleanup(): void {
    // Clean up the persistent container
    if (this.pipContainer && this.pipContainer.parentNode) {
      this.pipContainer.parentNode.removeChild(this.pipContainer)
      this.pipContainer = null
    }
  }
}

// Create a singleton instance
export const pipManager = new PictureInPictureManager()