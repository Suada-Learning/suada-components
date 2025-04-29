import { ReactElement } from 'react'
import ReactPlayer from 'react-player'

import { PlayerProps } from './Player.interface'
import {
  StyledWrapper,
  StyledPlayerLoader,
  StyledControlsContainer,
  StyledVideoPlayerWrapper,
  StyledLoader,
  StyledSubtitles,
} from './Player.styles'
import Controls from './Controls'
import usePlayerControls from './usePlayerControls'

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
}: PlayerProps): ReactElement => {
  const {
    mouseMoveHandler,
    playerContainerRef,
    playPauseHandler,
    handleFullScreen,
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
    isControlsActive,
    currentSubtitle,
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

  // Make sure we have a valid URL to avoid ReactPlayer errors
  const validUrl = url || ''

  return (
    <StyledWrapper
      tabIndex={0}
      onMouseMove={mouseMoveHandler}
      ref={playerContainerRef}
      style={customStyles}
      onClick={(e): void => e.stopPropagation()}
      data-testid='video-player-wrapper'
    >
      <StyledVideoPlayerWrapper onClick={playPauseHandler} onDoubleClick={handleFullScreen}>
        <ReactPlayer
          key={validUrl}
          url={validUrl}
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
          onReady={onPlayerStart}
          onPlay={(): void => setIsPlaying(true)}
          onPause={(): void => setIsPlaying(false)}
          onEnded={(): void => {
            const totalDuration = videoPlayerRef.current?.getDuration()

            if (totalDuration) {
              handleTrackProgress(totalDuration)
            }

            setVideoState(( prev:any) => ({ ...prev, playing: false }))
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
                renderTextTracksNatively: false,
              },
            },
          }}
        />
      </StyledVideoPlayerWrapper>

      {loading && (
        <StyledPlayerLoader>
          <StyledLoader />
        </StyledPlayerLoader>
      )}

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
          playing={playing}
          isSubtitlesChecked={isSubtitlesChecked}
          toggleSubtitlesCheck={toggleSubtitlesCheck}
          isFavorite={isFavorite}
          toggleIsFavorite={toggleFavorite}
          isFullscreen={isFullscreen}
          subtitle={!!subtitleUrl}
          handleSkipBackward={handlePreviousVideo}
          handleSkipForward={handleNextVideo}
          isNextVideo={isNextVideo}
          isPreviousVideo={isPreviousVideo}
          showFavorite={showFavorite}
        />
      </StyledControlsContainer>

      {isSubtitlesChecked && currentSubtitle && (
        <StyledSubtitles $controls={isControlsActive}>{currentSubtitle}</StyledSubtitles>
      )}
    </StyledWrapper>
  )
}


