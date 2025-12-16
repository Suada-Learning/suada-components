import { useContext } from 'react'
import { PiPContext } from './PiPContext'
import { PiPContextType } from './PiPContext.types'

// Default implementation when PiPProvider is not available
const defaultPiPContext: PiPContextType = {
  isPiPActive: false,
  pipVideoState: null,
  enterPiP: async () => {
    console.warn('PiP functionality requires PiPProvider wrapper')
    return false
  },
  exitPiP: async () => {
    console.warn('PiP functionality requires PiPProvider wrapper')
    return false
  },
  updateVideoState: () => {
    console.warn('PiP functionality requires PiPProvider wrapper')
  },
  registerVideoElement: () => {
    // No-op when provider is not available
  },
  unregisterVideoElement: () => {
    // No-op when provider is not available
  },
}

export const usePiP = (): PiPContextType => {
  const context = useContext(PiPContext)
  if (context === undefined) {
    return defaultPiPContext
  }
  return context
}