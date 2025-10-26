import { useContext } from 'react'
import { PiPContext } from './PiPContext'
import { PiPContextType } from './PiPContext.types'

export const usePiP = (): PiPContextType => {
  const context = useContext(PiPContext)
  if (context === undefined) {
    throw new Error('usePiP must be used within a PiPProvider')
  }
  return context
}