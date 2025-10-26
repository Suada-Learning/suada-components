import React, { createContext, useState, useCallback, useRef, useEffect } from 'react'
import { PiPContextType, PiPVideoState } from './PiPContext.types'

export const PiPContext = createContext<PiPContextType | undefined>(undefined)

interface PiPProviderProps {
  children: React.ReactNode
}

export const PiPProvider: React.FC<PiPProviderProps> = ({ children }) => {
  const [isPiPActive, setIsPiPActive] = useState(false)
  const [pipVideoState, setPipVideoState] = useState<PiPVideoState | null>(null)
  const videoElementRef = useRef<HTMLVideoElement | null>(null)

  const updateVideoState = useCallback((state: Partial<PiPVideoState>) => {
    setPipVideoState(prev => prev ? { ...prev, ...state } : null)
  }, [])

  const registerVideoElement = useCallback((element: HTMLVideoElement) => {
    videoElementRef.current = element
  }, [])

  const unregisterVideoElement = useCallback(() => {
    videoElementRef.current = null
  }, [])

  const enterPiP = useCallback(async (videoElement: HTMLVideoElement, videoState: PiPVideoState): Promise<boolean> => {
    if (!document.pictureInPictureEnabled) {
      console.warn('Picture-in-Picture is not supported in this browser')
      return false
    }

    if (document.pictureInPictureElement) {
      console.warn('Another video is already in Picture-in-Picture mode')
      return false
    }

    try {
      // Store video state
      setPipVideoState(videoState)
      videoElementRef.current = videoElement

      // Ensure video is playing before entering PiP
      if (videoElement.paused && videoState.isPlaying) {
        await videoElement.play()
      }

      await videoElement.requestPictureInPicture()
      return true
    } catch (error) {
      console.error('Failed to enter picture-in-picture:', error)
      return false
    }
  }, [])

  const exitPiP = useCallback(async (): Promise<boolean> => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
      }
      return true
    } catch (error) {
      console.error('Failed to exit picture-in-picture:', error)
      return false
    }
  }, [])

  // Listen for PiP events
  useEffect(() => {
    const handlePiPEnter = () => {
      setIsPiPActive(true)
    }

    const handlePiPLeave = () => {
      setIsPiPActive(false)
      // Keep the video state for potential restoration
      // but don't clear it immediately
    }

    document.addEventListener('enterpictureinpicture', handlePiPEnter)
    document.addEventListener('leavepictureinpicture', handlePiPLeave)

    return () => {
      document.removeEventListener('enterpictureinpicture', handlePiPEnter)
      document.removeEventListener('leavepictureinpicture', handlePiPLeave)
    }
  }, [])

  const value: PiPContextType = {
    isPiPActive,
    pipVideoState,
    enterPiP,
    exitPiP,
    updateVideoState,
    registerVideoElement,
    unregisterVideoElement,
  }

  return <PiPContext.Provider value={value}>{children}</PiPContext.Provider>
}