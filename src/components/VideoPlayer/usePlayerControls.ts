import { useState, useRef, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player'

import {
  UsePlayerControlsProps,
  ProgressState,
  UsePlayerControlsState,
  VideoState,
} from './Player.interface'

import { SubtitleEntry, parseVTT } from './parseVtt'
import { FormatSecondsToTimeString } from './timeConversion'
import useEventListener from './useEventListener'

let count = 0

const defaultVideoState: VideoState = {
  muted: false,
  volume: 0.3,
  prevVolume: 0.3,
  playbackRate: 1.0,
  played: 0.0,
  seeking: false,
  buffer: true,
}

function usePlayerControls({
  startTime = 0,
  setLoading,
  handleTrackProgress,
  url,
  subtitleUrl,
  setIsPlaying,
  isPlaying,
  shouldPlayerBeFocusedOnSpaceClick,
}: UsePlayerControlsProps): UsePlayerControlsState {
  const [startPlayed, setStartPlayed] = useState<boolean>(false)
  const [videoState, setVideoState] = useState<VideoState>(defaultVideoState)
  const [isSubtitlesChecked, setIsSubtitlesChecked] = useState<boolean>(false)
  const [isPiPActive, setIsPiPActive] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [isControlsActive, setIsControlsActive] = useState<boolean>(false)
  const videoPlayerRef = useRef<ReactPlayer | null>(null)
  const controlRef = useRef<HTMLDivElement | null>(null)
  const playerContainerRef = useRef<HTMLDivElement | null>(null)
  const [subtitles, setSubtitles] = useState<SubtitleEntry[]>([])
  const [currentSubtitle, setCurrentSubtitle] = useState<string>('')
  const lastSubtitleIndexRef = useRef<number | null>(null)
  const lastPlaybackTimeRef = useRef<number>(0)
  const lastCallTimeRef = useRef(Date.now())

  const { muted, volume, prevVolume, playbackRate, played, seeking } = videoState

  const currentTime = videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : 0
  const duration = videoPlayerRef.current ? videoPlayerRef.current.getDuration() : 0

  const formatCurrentTime = FormatSecondsToTimeString(currentTime)
  const formatDuration = FormatSecondsToTimeString(duration)

  // Using previous method for old videos(we used to parse subtitles via link)
  useEffect(() => {
    if (subtitleUrl) {
      fetch(subtitleUrl)
        .then(response => response.text())
        .then(content => {
          const parsedSubtitles = parseVTT(content)
          setSubtitles(parsedSubtitles)
        })
        .catch(error => {
          console.error('Error fetching external subtitles:', error)
        })
    }
  }, [subtitleUrl])

  useEffect(() => {
    const handleFullscreenChange = (): void => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    const handlePiPEnter = (): void => {
      setIsPiPActive(true)
    }

    const handlePiPLeave = (): void => {
      setIsPiPActive(false)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('enterpictureinpicture', handlePiPEnter)
    document.addEventListener('leavepictureinpicture', handlePiPLeave)

    // Add event listeners to the video element when it's available
    const videoElement = videoPlayerRef.current?.getInternalPlayer()
    if (videoElement && videoElement instanceof HTMLVideoElement) {
      videoElement.addEventListener('enterpictureinpicture', handlePiPEnter)
      videoElement.addEventListener('leavepictureinpicture', handlePiPLeave)
    }

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('enterpictureinpicture', handlePiPEnter)
      document.removeEventListener('leavepictureinpicture', handlePiPLeave)
      
      // Clean up video element listeners using the captured reference
      if (videoElement && videoElement instanceof HTMLVideoElement) {
        videoElement.removeEventListener('enterpictureinpicture', handlePiPEnter)
        videoElement.removeEventListener('leavepictureinpicture', handlePiPLeave)
      }
    }
  }, [url]) // Re-run when URL changes to ensure proper cleanup and setup

  useEffect(() => {
    setStartPlayed(false)
  }, [url])

  // Cleanup effect to handle component unmounting while in PiP mode
  useEffect(() => {
    const currentVideoPlayerRef = videoPlayerRef.current
    
    return () => {
      // Check if we're in PiP mode when component unmounts
      if (document.pictureInPictureElement) {
        // Try to keep the video element alive by cloning it
        const videoElement = currentVideoPlayerRef?.getInternalPlayer()
        if (videoElement && videoElement instanceof HTMLVideoElement) {
          // Create a warning for the user that PiP will exit
          console.log('Component unmounting while in Picture-in-Picture mode')
        }
      }
    }
  }, [])

  const playPauseHandler = useCallback((): void => {
    setIsPlaying(prev => !prev)
  }, [setIsPlaying])

  const rewindHandler = useCallback((): void => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5)
    }
  }, [videoPlayerRef])

  const handleFastForward = useCallback((): void => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10)
    }
  }, [videoPlayerRef])

  const progressHandler = useCallback(
    async (state: ProgressState): Promise<void> => {
      if (count > 2) {
        if (controlRef.current) {
          controlRef.current.style.visibility = 'hidden'
          setIsControlsActive(false)
        }
      } else if (
        controlRef.current &&
        controlRef.current.style.visibility === 'visible' &&
        isControlsActive
      ) {
        count += 1
      }

      // Only process external VTT subtitles if we have them and no HLS subtitles are active
      const videoElement = videoPlayerRef.current?.getInternalPlayer()
      const hasHLSSubtitles = videoElement?.textTracks?.length > 0

      if (subtitles.length > 0 && !hasHLSSubtitles && isSubtitlesChecked) {
        let currentSubtitleEntry: SubtitleEntry | undefined

        if (lastSubtitleIndexRef.current !== null) {
          if (state.playedSeconds > lastPlaybackTimeRef.current) {
            for (let i = lastSubtitleIndexRef.current; i < subtitles.length; i++) {
              const sub = subtitles[i]
              if (state.playedSeconds >= sub.start && state.playedSeconds <= sub.end) {
                currentSubtitleEntry = sub
                lastSubtitleIndexRef.current = i
                break
              }
            }
          } else {
            for (let i = lastSubtitleIndexRef.current; i >= 0; i--) {
              const sub = subtitles[i]
              if (state.playedSeconds >= sub.start && state.playedSeconds <= sub.end) {
                currentSubtitleEntry = sub
                lastSubtitleIndexRef.current = i
                break
              }
            }
          }
        }

        if (!currentSubtitleEntry) {
          currentSubtitleEntry = subtitles.find(
            sub => state.playedSeconds >= sub.start && state.playedSeconds <= sub.end,
          )

          if (currentSubtitleEntry) {
            lastSubtitleIndexRef.current = subtitles.indexOf(currentSubtitleEntry)
          }
        }

        lastPlaybackTimeRef.current = state.playedSeconds

        if (currentSubtitleEntry) {
          setCurrentSubtitle(currentSubtitleEntry.text)
        } else {
          setCurrentSubtitle('') // Clear subtitle if none should be displayed
          lastSubtitleIndexRef.current = null
        }
      }

      if (!seeking) {
        setVideoState(prev => ({ ...prev, ...state }))

        const currentTime = Math.floor(state.playedSeconds)
        const now = Date.now()

        // Check if 8 seconds have passed since the last API call
        if (now - lastCallTimeRef.current > 8000) {
          lastCallTimeRef.current = now
          handleTrackProgress(currentTime)
        }
      }
    },
    [seeking, handleTrackProgress, isControlsActive, subtitles, isSubtitlesChecked],
  )

  const seekHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const v = parseFloat(e.target.value) / 100
    setVideoState(prev => ({ ...prev, played: v }))
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(v)
    }
  }

  const seekMouseUpHandler = (): void => {
    setVideoState(prev => ({ ...prev, seeking: false }))
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(videoState.played)
    }
  }

  const volumeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const volume = e.target.value

    const newVolume = parseFloat(volume) / 100

    setVideoState(prev => ({
      ...prev,
      volume: newVolume,
      muted: newVolume === 0,
      prevVolume: newVolume === 0 ? 0.1 : newVolume,
    }))
  }

  const muteHandler = (): void => {
    if (videoState.muted) {
      setVideoState(prev => ({
        ...prev,
        muted: false,
        volume: prevVolume,
      }))
    } else {
      setVideoState(prev => ({
        ...prev,
        muted: true,
        prevVolume: volume,
        volume: 0,
      }))
    }
  }

  const onSeekMouseDownHandler = (): void => {
    setVideoState(prev => ({ ...prev, seeking: true }))
  }

  const mouseMoveHandler = (): void => {
    if (controlRef.current) {
      controlRef.current.style.visibility = 'visible'
      setIsControlsActive(true)
    }
    count = 0
  }

  const bufferStartHandler = useCallback((): void => {
    setVideoState(prev => ({ ...prev, buffer: true }))
  }, [setVideoState])

  const bufferEndHandler = useCallback(() => {
    if (startPlayed) {
      setVideoState(prev => ({ ...prev, buffer: false }))
      setIsPlaying(true)
    }
  }, [startPlayed, setVideoState, setIsPlaying])

  const onPlayerStart = useCallback(() => {
    if (videoPlayerRef.current && !startPlayed) {
      videoPlayerRef.current.seekTo(startTime)
      setStartPlayed(true)
    }
    setLoading(false)
  }, [startTime, startPlayed, setLoading])

  const handleFullScreen = (): void => {
    const playerContainer = playerContainerRef.current

    if (!playerContainer) {
      return
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error)
    } else {
      playerContainer.requestFullscreen().catch(console.error)
    }
  }

  const handlePictureInPicture = (): void => {
    const videoElement = videoPlayerRef.current?.getInternalPlayer()
    
    if (!videoElement || !(videoElement instanceof HTMLVideoElement)) {
      return
    }

    if (!document.pictureInPictureEnabled) {
      console.warn('Picture-in-Picture is not supported in this browser')
      return
    }

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(error => {
        console.error('Failed to exit picture-in-picture:', error)
      })
    } else {
      // Ensure the video is playing before entering PiP mode
      if (videoElement.paused && isPlaying) {
        videoElement.play().then(() => {
          videoElement.requestPictureInPicture().catch(error => {
            console.error('Failed to enter picture-in-picture:', error)
          })
        }).catch(error => {
          console.error('Failed to play video before PiP:', error)
        })
      } else {
        videoElement.requestPictureInPicture().catch(error => {
          console.error('Failed to enter picture-in-picture:', error)
        })
      }
    }
  }

  const handleKeyDown = useCallback(
    (event: Event | KeyboardEvent): void => {
      if ('code' in event) {
        switch (event.code) {
          case 'ArrowLeft':
            event.preventDefault()
            rewindHandler()
            break
          case 'ArrowRight':
            event.preventDefault()
            handleFastForward()
            break
          case 'ArrowUp':
            event.preventDefault()
            setVideoState(prev => {
              const newVolume = Math.min(prev.volume + 0.1, 1)
              return {
                ...prev,
                volume: newVolume,
                muted: newVolume === 0,
                prevVolume: newVolume === 0 ? 0.1 : newVolume,
              }
            })
            break
          case 'ArrowDown':
            event.preventDefault()
            setVideoState(prev => {
              const newVolume = Math.max(prev.volume - 0.1, 0)
              return {
                ...prev,
                volume: newVolume,
                muted: newVolume === 0,
                prevVolume: newVolume === 0 ? 0.1 : newVolume,
              }
            })
            break
        }
      }
    },
    [rewindHandler, handleFastForward, setVideoState],
  )

  const handleSpaceKeyDown = useCallback(
    (event: Event | KeyboardEvent): void => {
      if ('code' in event) {
        switch (event.code) {
          case 'Space':
            if (
              event.target &&
              (event.target instanceof HTMLInputElement ||
                event.target instanceof HTMLTextAreaElement)
            ) {
              break
            }

            event.preventDefault()
            playPauseHandler()
            break
        }
      }
    },
    [playPauseHandler],
  )

  const isPlayerFocused = (): boolean => {
    const focusedElement = document.activeElement
    return !!playerContainerRef.current?.contains(focusedElement)
  }

  const toggleSubtitlesCheck = (): void => setIsSubtitlesChecked(prev => !prev)

  useEventListener('keydown', handleKeyDown, playerContainerRef, isPlayerFocused)

  useEventListener(
    'keydown',
    handleSpaceKeyDown,
    shouldPlayerBeFocusedOnSpaceClick ? playerContainerRef : null,
    shouldPlayerBeFocusedOnSpaceClick ? isPlayerFocused : undefined,
  )

  return {
    mouseMoveHandler,
    playerContainerRef,
    playPauseHandler,
    handleFullScreen,
    handlePictureInPicture,
    videoPlayerRef,
    volume,
    muted,
    progressHandler,
    bufferStartHandler,
    bufferEndHandler,
    onPlayerStart,
    setVideoState,
    playbackRate,
    controlRef,
    rewindHandler,
    handleFastForward,
    formatCurrentTime,
    played,
    onSeekMouseDownHandler,
    seekHandler,
    seekMouseUpHandler,
    muteHandler,
    volumeChangeHandler,
    formatDuration,
    isSubtitlesChecked,
    toggleSubtitlesCheck,
    isFullscreen,
    isPiPActive,
    isControlsActive,
    currentSubtitle,
    setCurrentSubtitle,
    playing: isPlaying,
  }
}

export default usePlayerControls
