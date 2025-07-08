import { useCallback, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

interface UseHLSSubtitlesProps {
  videoPlayerRef: React.RefObject<ReactPlayer | null>
  isSubtitlesChecked: boolean
  setCurrentSubtitle: (subtitle: string) => void
}

interface UseHLSSubtitlesReturn {
  extractHLSSubtitleText: () => void
  setupHLSSubtitleTracking: () => void
}

export const useHLSSubtitles = ({
  videoPlayerRef,
  isSubtitlesChecked,
  setCurrentSubtitle,
}: UseHLSSubtitlesProps): UseHLSSubtitlesReturn => {
  const hlsSubtitleTrackRef = useRef<TextTrack | null>(null)

  const extractHLSSubtitleText = useCallback(() => {
    const videoElement = videoPlayerRef.current?.getInternalPlayer()
    if (!videoElement || !videoElement.textTracks) return

    for (let i = 0; i < videoElement.textTracks.length; i++) {
      const track = videoElement.textTracks[i]
      if (track.kind === 'subtitles' || track.kind === 'captions') {
        hlsSubtitleTrackRef.current = track

        const handleCueChange = (): void => {
          if (isSubtitlesChecked && track.activeCues && track.activeCues.length > 0) {
            const currentCue = track.activeCues[0] as VTTCue
            if (currentCue && currentCue.text) {
              setCurrentSubtitle(currentCue.text)
            }
          } else if (isSubtitlesChecked) {
            setCurrentSubtitle('')
          }
        }

        track.removeEventListener('cuechange', handleCueChange)
        track.addEventListener('cuechange', handleCueChange)

        track.mode = isSubtitlesChecked ? 'showing' : 'hidden'
        break
      }
    }
  }, [isSubtitlesChecked, setCurrentSubtitle, videoPlayerRef])

  const setupHLSSubtitleTracking = useCallback(() => {
    const videoElement = videoPlayerRef.current?.getInternalPlayer()
    if (!videoElement) return

    videoElement.classList.add('hls-video-player')

    const checkTextTracks = (attempt = 0): void => {
      const textTracks = videoElement.textTracks

      if (textTracks && textTracks.length > 0) {
        extractHLSSubtitleText()
      } else if (attempt < 5) {
        setTimeout(() => checkTextTracks(attempt + 1), 300 * (attempt + 1))
      }
    }

    checkTextTracks()

    videoElement.addEventListener('loadedmetadata', () => {
      checkTextTracks()
    })
  }, [extractHLSSubtitleText, videoPlayerRef])

  useEffect(() => {
    extractHLSSubtitleText()
  }, [isSubtitlesChecked, extractHLSSubtitleText])

  useEffect(() => {
    const videoElement = videoPlayerRef.current?.getInternalPlayer()
    if (videoElement && videoElement.textTracks && videoElement.textTracks.length > 0) {
      extractHLSSubtitleText()
    }
  }, [videoPlayerRef.current, extractHLSSubtitleText])

  return {
    extractHLSSubtitleText,
    setupHLSSubtitleTracking,
  }
}
