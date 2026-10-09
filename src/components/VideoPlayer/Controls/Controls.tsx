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
  StyledPictureInPictureIconContainer,
  StyledVolumeIconContainer,
  StyledPlayPauseIconContainer,
  StyledDownloadIconContainer,
  StyledRewindIconContainer,
  StyledNotesIconContainer,
} from './Controls.styles'
import {
  HeartIcon,
  MaximizeIcon,
  MinimizeIcon,
  PauseIcon,
  PlayIcon,
  PictureInPictureIcon,
  RewindIcon,
  SkipIcon,
  SubtitlesIcon,
  VolumeMuteIcon,
  VolumeUpIcon,
  DownloadIcon,
  NotesIcon,
} from '../../../icons'
import { CustomTooltip } from '../../Tooltip'

import { SEEK_INTERVAL_SECONDS } from '../constants'
import PlaybackSpeedMenu from '../PlaybackSpeedMenu'
import QualityMenu from '../QualityMenu'

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
  handlePictureInPicture,
  playing,
  isSubtitlesChecked,
  toggleSubtitlesCheck,
  isFavorite,
  toggleIsFavorite,
  isFullscreen,
  isPiPActive,
  subtitle,
  handleSkipBackward,
  handleSkipForward,
  isNextVideo,
  isPreviousVideo,
  showFavorite,
  showDownload,
  downloadUrl,
  downloadFileName,
  onDownload,
  showPictureInPicture = true,
  qualityLevels,
  selectedQuality,
  onQualityChange,
  onAddNote,
}) => {
  const handleDownloadClick = async (): Promise<void> => {
    if (onDownload) {
      onDownload()
    } else if (downloadUrl) {
      try {
        // Fetch the video file to create a blob for download
        const response = await fetch(downloadUrl)
        if (!response.ok) throw new Error('Download failed')
        
        const blob = await response.blob()
        const blobUrl = window.URL.createObjectURL(blob)
        
        // Create download link
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = downloadFileName || 'video-download'
        link.style.display = 'none'
        
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Clean up blob URL
        window.URL.revokeObjectURL(blobUrl)
      } catch (error) {
        console.error('Download failed:', error)
        // Fallback to direct link method
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = downloadFileName || 'video-download'
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  return (
    <StyledControls>
      <StyledSlider
        type='range'
        aria-label='Seek'
        min={0}
        max={100}
        value={played * 100}
        onMouseDown={onSeekMouseDownHandler}
        onChange={seekHandler}
        onMouseUp={seekMouseUpHandler}
      />
      <StyledControllerLeft>
        <CustomTooltip title={playing ? 'Pause' : 'Play'}>
          <StyledPlayPauseIconContainer onClick={playPauseHandler}>
            {playing ? <PauseIcon /> : <PlayIcon />}
          </StyledPlayPauseIconContainer>
        </CustomTooltip>
        <CustomTooltip title={`Rewind ${SEEK_INTERVAL_SECONDS} seconds`}>
          <StyledRewindIconContainer className="rewind-control" onClick={rewindHandler}>
            <RewindIcon />
          </StyledRewindIconContainer>
        </CustomTooltip>
        <CustomTooltip title={`Forward ${SEEK_INTERVAL_SECONDS} seconds`}>
          <StyledRewindIconContainer className="forward-control" onClick={handleFastForward}>
            <RewindIcon forward />
          </StyledRewindIconContainer>
        </CustomTooltip>
        <StyledVolumeWrapper>
          <CustomTooltip title={muted ? 'Unmute' : 'Mute'}>
            <StyledVolumeIconContainer onClick={muteHandler}>
              {muted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            </StyledVolumeIconContainer>
          </CustomTooltip>
          <StyledVolumeSlider
            type='range'
            aria-label='Volume'
            value={volume * 100}
            onChange={volumeChangeHandler}
          />
        </StyledVolumeWrapper>
        <StyledTimeTrack>
          {formatCurrentTime} /{formatDuration}
        </StyledTimeTrack>
      </StyledControllerLeft>
      <StyledControllerRight>
        {handleSkipBackward && (
          <CustomTooltip title="Previous video">
            <StyledRewindIconContainer
              className="skip-control"
              onClick={handleSkipBackward}
              disabled={!isPreviousVideo}
            >
              <SkipIcon className={isPreviousVideo ? '' : 'skip-icon-disabled'} />
            </StyledRewindIconContainer>
          </CustomTooltip>
        )}
        {handleSkipForward && (
          <CustomTooltip title="Next video">
            <StyledRewindIconContainer
              className="skip-control"
              onClick={handleSkipForward}
              disabled={!isNextVideo}
            >
              <SkipIcon forward className={isNextVideo ? '' : 'skip-icon-disabled'} />
            </StyledRewindIconContainer>
          </CustomTooltip>
        )}
        {showFavorite && (
          <CustomTooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
            <StyledHeartIconContainer
              className="favorite-control"
              onClick={toggleIsFavorite}
              aria-pressed={isFavorite}
            >
              <HeartIcon active={isFavorite} />
            </StyledHeartIconContainer>
          </CustomTooltip>
        )}
        {showDownload && downloadUrl && (
          <CustomTooltip title="Download video">
            <StyledDownloadIconContainer className="download-control" onClick={handleDownloadClick}>
              <DownloadIcon />
            </StyledDownloadIconContainer>
          </CustomTooltip>
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

        <QualityMenu
          levels={qualityLevels}
          selectedLevel={selectedQuality}
          onLevelChange={onQualityChange}
          customMenuWrapperStyles={{
            position: 'unset',
          }}
          customMenuStyles={{
            right: '8px',
            left: 'auto',
          }}
        />

        {onAddNote && (
          <CustomTooltip title="Add note">
            <StyledNotesIconContainer onClick={onAddNote}>
              <NotesIcon />
            </StyledNotesIconContainer>
          </CustomTooltip>
        )}
        {subtitle && (
          <CustomTooltip title={isSubtitlesChecked ? 'Hide subtitles' : 'Show subtitles'}>
            <StyledSubtitlesIconContainer
              onClick={toggleSubtitlesCheck}
              aria-pressed={isSubtitlesChecked}
            >
              <SubtitlesIcon active={isSubtitlesChecked} />
            </StyledSubtitlesIconContainer>
          </CustomTooltip>
        )}
        {showPictureInPicture && (
          <CustomTooltip title={isPiPActive ? 'Exit picture-in-picture' : 'Enter picture-in-picture'}>
            <StyledPictureInPictureIconContainer
              className={isPiPActive ? 'pip-active' : ''}
              onClick={handlePictureInPicture}
            >
              <PictureInPictureIcon />
            </StyledPictureInPictureIconContainer>
          </CustomTooltip>
        )}
        <CustomTooltip title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}>
          <StyledFullscreenIconContainer onClick={handleFullScreen}>
            {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
          </StyledFullscreenIconContainer>
        </CustomTooltip>
      </StyledControllerRight>
    </StyledControls>
  )
}

export default Controls
