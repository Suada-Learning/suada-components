import { ReactElement, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { PlayerProps } from './Player.interface'
import {
  StyledWrapper,
  StyledPlayerLoader,
  StyledControlsContainer,
  StyledVideoPlayerWrapper,
  StyledLoader,
  StyledSubtitles,
  injectHLSSubtitleStyles,
} from './Player.styles'
import Controls from './Controls'
import { AUTO_QUALITY_LEVEL, QualityLevelOption } from './QualityMenu.interface'
import usePlayerControls from './usePlayerControls'
import { useHLSSubtitles } from './useHlsSubtitles'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'

type HlsLike = { levels?: { height: number }[]; currentLevel: number }

const buildQualityOptions = (
  levels: { height: number }[],
  autoLabel: string,
): QualityLevelOption[] => {
  const firstIndexByHeight = new Map<number, number>()
  levels.forEach((level, index) => {
    if (level.height && !firstIndexByHeight.has(level.height)) {
      firstIndexByHeight.set(level.height, index)
    }
  })

  const resolutions = Array.from(firstIndexByHeight.entries())
    .sort(([a], [b]) => b - a)
    .map(([height, index]) => ({ label: `${height}p`, value: index }))

  return [{ label: autoLabel, value: AUTO_QUALITY_LEVEL }, ...resolutions]
}

export const VideoPlayer = ({
  customStyles,
  startTime = 0,
  loading,
  setLoading,
  handleTrackProgress,
  url,
  subtitle: subtitleUrl,
  handleNextVideo,
  handlePreviousVideo,
  isNextVideo,
  isPreviousVideo,
  isPlaying,
  setIsPlaying,
  shouldPlayerBeFocusedOnSpaceClick = false,
  showFavorite,
  isFavorite = false,
  toggleFavorite = async (): Promise<void> => {},
  showDownload,
  downloadUrl,
  downloadFileName,
  onDownload,
  showPictureInPicture = true,
}: PlayerProps): ReactElement => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { t } = useTranslation()
  const [qualityLevels, setQualityLevels] = useState<QualityLevelOption[]>([])
  const [selectedQuality, setSelectedQuality] = useState<number>(AUTO_QUALITY_LEVEL)
  const {
    mouseMoveHandler,
    playerContainerRef,
    playPauseHandler,
    handleFullScreen,
    handlePictureInPicture,
    videoPlayerRef,
    playing,
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
  } = usePlayerControls({
    startTime,
    setLoading,
    handleTrackProgress,
    url,
    subtitleUrl,
    isPlaying,
    setIsPlaying,
    shouldPlayerBeFocusedOnSpaceClick,
  })

  const { setupHLSSubtitleTracking } = useHLSSubtitles({
    videoPlayerRef,
    isSubtitlesChecked,
    setCurrentSubtitle,
  })

  useEffect(() => {
    const cleanup = injectHLSSubtitleStyles()
    return cleanup
  }, [])

  const handlePlayerReady = (): void => {
    onPlayerStart()
    setupHLSSubtitleTracking()

    const videoElement = videoPlayerRef.current?.getInternalPlayer()
    if (videoElement && videoElement instanceof HTMLVideoElement) {
      videoRef.current = videoElement
    }

    const hls = videoPlayerRef.current?.getInternalPlayer('hls') as HlsLike | undefined
    setQualityLevels(
      hls?.levels?.length ? buildQualityOptions(hls.levels, t('general.quality_auto')) : [],
    )
    setSelectedQuality(AUTO_QUALITY_LEVEL)
  }

  // -1 restores adaptive (ABR) selection, still capped to player size.
  const handleQualityChange = (level: number): void => {
    const hls = videoPlayerRef.current?.getInternalPlayer('hls') as HlsLike | undefined
    if (hls) hls.currentLevel = level
    setSelectedQuality(level)
  }

  return (
    <StyledWrapper
      tabIndex={0}
      onMouseMove={mouseMoveHandler}
      ref={playerContainerRef}
      style={customStyles}
      onClick={(e): void => e.stopPropagation()}
    >
      <StyledVideoPlayerWrapper onClick={playPauseHandler} onDoubleClick={handleFullScreen}>
        <ReactPlayer
          key={url}
          url={url}
          ref={videoPlayerRef}
          className='react-player'
          width='100%'
          height='100%'
          playing={isPlaying}
          volume={volume}
          muted={muted}
          onProgress={progressHandler}
          onBuffer={bufferStartHandler}
          onBufferEnd={bufferEndHandler}
          onReady={handlePlayerReady}
          onPlay={(): void => setIsPlaying(true)}
          onPause={(): void => setIsPlaying(false)}
          onEnded={(): void => {
            const totalDuration = videoPlayerRef.current?.getDuration()

            if (totalDuration) {
              handleTrackProgress(totalDuration)
            }

            setVideoState(prev => ({ ...prev, playing: false }))
            if (handleNextVideo) handleNextVideo()
          }}
          controls={false}
          pip
          playbackRate={playbackRate}
          preload='metadata'
          config={{
            file: {
              hlsOptions: {
                autoStartLoad: true,
                renderTextTracksNatively: true,
                capLevelToPlayerSize: true,
                capLevelOnFPSDrop: true,
              },
            },
          }}
        />

        {loading && (
          <StyledPlayerLoader>
            <StyledLoader />
          </StyledPlayerLoader>
        )}

        {/* Show custom subtitles - either external VTT or extracted HLS subtitles */}
        {isSubtitlesChecked && currentSubtitle && (
          <StyledSubtitles $controls={isControlsActive}>{currentSubtitle}</StyledSubtitles>
        )}
      </StyledVideoPlayerWrapper>

      <StyledControlsContainer ref={controlRef}>
        <Controls
          setVideoState={setVideoState}
          playbackRate={playbackRate}
          rewindHandler={rewindHandler}
          playPauseHandler={playPauseHandler}
          handleFastForward={handleFastForward}
          formatCurrentTime={formatCurrentTime}
          played={played}
          onSeekMouseDownHandler={onSeekMouseDownHandler}
          seekHandler={seekHandler}
          seekMouseUpHandler={seekMouseUpHandler}
          volume={volume}
          muted={muted}
          muteHandler={muteHandler}
          volumeChangeHandler={volumeChangeHandler}
          formatDuration={formatDuration}
          handleFullScreen={handleFullScreen}
          handlePictureInPicture={handlePictureInPicture}
          playing={playing}
          isSubtitlesChecked={isSubtitlesChecked}
          toggleSubtitlesCheck={toggleSubtitlesCheck}
          isFavorite={isFavorite}
          toggleIsFavorite={toggleFavorite}
          isFullscreen={isFullscreen}
          isPiPActive={isPiPActive}
          subtitle={
            !!subtitleUrl || videoPlayerRef.current?.getInternalPlayer()?.textTracks?.length > 0
          }
          handleSkipBackward={handlePreviousVideo}
          handleSkipForward={handleNextVideo}
          isNextVideo={isNextVideo}
          isPreviousVideo={isPreviousVideo}
          showFavorite={showFavorite}
          showDownload={showDownload}
          downloadUrl={downloadUrl}
          downloadFileName={downloadFileName}
          onDownload={onDownload}
          showPictureInPicture={showPictureInPicture}
          qualityLevels={qualityLevels}
          selectedQuality={selectedQuality}
          onQualityChange={handleQualityChange}
        />
      </StyledControlsContainer>
    </StyledWrapper>
  )
}

export default VideoPlayer
