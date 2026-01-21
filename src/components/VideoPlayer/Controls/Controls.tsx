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
        <CustomTooltip title="Rewind 5 seconds">
          <StyledRewindIconContainer className="rewind-control">
            <RewindIcon onClick={rewindHandler} />
          </StyledRewindIconContainer>
        </CustomTooltip>
        <CustomTooltip title="Forward 10 seconds">
          <StyledRewindIconContainer className="forward-control">
            <RewindIcon forward onClick={handleFastForward} />
          </StyledRewindIconContainer>
        </CustomTooltip>
        <StyledVolumeWrapper>
          <CustomTooltip title={muted ? 'Unmute' : 'Mute'}>
            <StyledVolumeIconContainer onClick={muteHandler}>
              {muted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            </StyledVolumeIconContainer>
          </CustomTooltip>
          <StyledVolumeSlider type='range' value={volume * 100} onChange={volumeChangeHandler} />
        </StyledVolumeWrapper>
        <StyledTimeTrack>
          {formatCurrentTime} /{formatDuration}
        </StyledTimeTrack>
      </StyledControllerLeft>
      <StyledControllerRight>
        {handleSkipBackward && (
          <CustomTooltip title="Previous video">
            <StyledRewindIconContainer className="skip-control">
            <SkipIcon
              onClick={(): void => {
                if (!isPreviousVideo) return
                handleSkipBackward()
              }}
              className={isPreviousVideo ? '' : 'skip-icon-disabled'}
            />
          </StyledRewindIconContainer>
          </CustomTooltip>
        )}
        {handleSkipForward && (
          <CustomTooltip title="Next video">
            <StyledRewindIconContainer className="skip-control">
            <SkipIcon
              forward
              onClick={(): void => {
                if (!isNextVideo) return
                handleSkipForward()
              }}
              className={isNextVideo ? '' : 'skip-icon-disabled'}
            />
          </StyledRewindIconContainer>
          </CustomTooltip>
        )}
        {showFavorite && (
          <CustomTooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
            <StyledHeartIconContainer className="favorite-control">
              <HeartIcon active={isFavorite} onClick={toggleIsFavorite} />
            </StyledHeartIconContainer>
          </CustomTooltip>
        )}
        {showDownload && downloadUrl && (
          <CustomTooltip title="Download video">
            <StyledDownloadIconContainer className="download-control">
              <DownloadIcon onClick={handleDownloadClick} />
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

        {onAddNote && (
          <CustomTooltip title="Add note">
            <StyledNotesIconContainer>
              <NotesIcon onClick={onAddNote} />
            </StyledNotesIconContainer>
          </CustomTooltip>
        )}
        {subtitle && (
          <CustomTooltip title={isSubtitlesChecked ? 'Hide subtitles' : 'Show subtitles'}>
            <StyledSubtitlesIconContainer>
              <SubtitlesIcon active={isSubtitlesChecked} onClick={toggleSubtitlesCheck} />
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
