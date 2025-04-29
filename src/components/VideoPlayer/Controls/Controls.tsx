import { FC } from 'react'

import { ControlsProps } from './Controls.interface'
import {
  StyledControls,
  StyledSlider,
  StyledVolumeWrapper,
  StyledVolumeSlider,
  StyledControllerLeft,
  StyledControllerRight,
  StyledTimeTrack,
  StyledHeartIconContainer,
  StyledSubtitlesIconContainer,
  StyledFullscreenIconContainer,
  StyledVolumeIconContainer,
  StyledPlayPauseIconContainer,
} from './Controls.styles'
import {
  HeartIcon,
  MaximizeIcon,
  MinimizeIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
  SkipIcon,
  SubtitlesIcon,
  VolumeMuteIcon,
  VolumeUpIcon,
} from '../../../icons'

import PlaybackSpeedMenu from '../PlaybackSpeedMenu'

const Controls: FC<ControlsProps> = ({
  setVideoState,
  playbackRate,
  rewindHandler,
  playPauseHandler,
  handleFastForward,
  formatCurrentTime,
  played,
  onSeekMouseDownHandler,
  seekHandler,
  seekMouseUpHandler,
  volume,
  muted,
  muteHandler,
  volumeChangeHandler,
  formatDuration,
  handleFullScreen,
  playing,
  isSubtitlesChecked,
  toggleSubtitlesCheck,
  isFavorite,
  toggleIsFavorite,
  isFullscreen,
  subtitle,
  handleSkipBackward,
  handleSkipForward,
  isNextVideo,
  isPreviousVideo,
  showFavorite,
}) => (
  <StyledControls>
    <StyledSlider
      type='range'
      min={0}
      max={100}
      value={played * 100}
      onMouseDown={onSeekMouseDownHandler}
      onChange={seekHandler}
      onMouseUp={seekMouseUpHandler}
    />
    <StyledControllerLeft>
      <StyledPlayPauseIconContainer onClick={playPauseHandler}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </StyledPlayPauseIconContainer>
      <RewindIcon onClick={rewindHandler} />
      <RewindIcon forward onClick={handleFastForward} />
      <StyledVolumeWrapper>
        <StyledVolumeIconContainer onClick={muteHandler}>
          {muted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
        </StyledVolumeIconContainer>
        <StyledVolumeSlider type='range' value={volume * 100} onChange={volumeChangeHandler} />
      </StyledVolumeWrapper>
      <StyledTimeTrack>
        {formatCurrentTime} /{formatDuration}
      </StyledTimeTrack>
    </StyledControllerLeft>
    <StyledControllerRight>
      {handleSkipBackward && (
        <SkipIcon
          onClick={(): void => {
            if (!isPreviousVideo) return
            handleSkipBackward()
          }}
          className={isPreviousVideo ? '' : 'skip-icon-disabled'}
        />
      )}
      {handleSkipForward && (
        <SkipIcon
          forward
          onClick={(): void => {
            if (!isNextVideo) return
            handleSkipForward()
          }}
          className={isNextVideo ? '' : 'skip-icon-disabled'}
        />
      )}
      {showFavorite && (
        <StyledHeartIconContainer>
          <HeartIcon active={isFavorite} onClick={toggleIsFavorite} />
        </StyledHeartIconContainer>
      )}

      <PlaybackSpeedMenu
        playbackSpeed={playbackRate}
        onPlaybackSpeedChange={(speed: number): void =>
          setVideoState(prev => ({ ...prev, playbackRate: speed }))
        }
        customMenuWrapperStyles={{
          position: 'unset',
        }}
        customMenuStyles={{
          right: '8px',
          left: 'auto',
        }}
      />

      {subtitle && (
        <StyledSubtitlesIconContainer>
          <SubtitlesIcon active={isSubtitlesChecked} onClick={toggleSubtitlesCheck} />
        </StyledSubtitlesIconContainer>
      )}
      <StyledFullscreenIconContainer onClick={handleFullScreen}>
        {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
      </StyledFullscreenIconContainer>
    </StyledControllerRight>
  </StyledControls>
)

export default Controls
