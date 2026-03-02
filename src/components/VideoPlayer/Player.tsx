import { ReactElement, useEffect, useRef, useState, useMemo, useCallback } from 'react'
import ReactPlayer from 'react-player'
import { createPortal } from 'react-dom'

import { PlayerProps, Note, NoteMarker } from './Player.interface'
import {
  StyledWrapper,
  StyledPlayerLoader,
  StyledControlsContainer,
  StyledVideoPlayerWrapper,
  StyledLoader,
  StyledSubtitles,
  injectHLSSubtitleStyles,
  StyledNoteMarkersOverlay,
  StyledNoteMarker,
  StyledNoteTooltip,
  StyledNoteTime,
  StyledNoteModal,
} from './Player.styles'
import Controls from './Controls'
import usePlayerControls from './usePlayerControls'
import { useHLSSubtitles } from './useHlsSubtitles'
import { FormatSecondsToTimeString } from './timeConversion'
import NoteEditModal from './NoteEditModal'
import { usePiP } from './usePiP'

const MAX_FULLSCREEN_Z_INDEX = 2147483646
const MAX_FULLSCREEN_MARKER_Z_INDEX = 2147483647

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
  // Notes functionality
  notes,
  videoDuration,
  onNoteClick,

  editingNote,
  onNoteEdit,
  onNoteSave,
  onNoteDelete,
  onNoteCancelEdit,
  onAddNote,
}: PlayerProps): ReactElement => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  // Notes state
  const [hoveredNote, setHoveredNote] = useState<Note | null>(null)
  const [internalEditingNote, setInternalEditingNote] = useState<Note | null>(null)
  const [editingTitle, setEditingTitle] = useState<string>('')
  const [editingContent, setEditingContent] = useState<string>('')

  // Use external editing state if provided, otherwise use internal state
  const currentEditingNote = editingNote !== undefined ? editingNote : internalEditingNote

  // Get PiP context for state initialization
  const { syncPiPState } = usePiP()

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

  // Initialize PiP state on component mount/URL change
  useEffect(() => {
    // Sync PiP state with actual browser state on mount and URL changes
    syncPiPState()
  }, [url, syncPiPState]) // Run when URL changes or component mounts

  // Handle adding new notes
  const handleAddNote = useCallback(() => {
    // Stop the video when adding a note
    setIsPlaying(false)

    if (onAddNote) {
      // If external handler is provided, use it (e.g., Notes tab modal)
      onAddNote()
    } else {
      // Only create internal modal if no external handler
      const currentTime = videoPlayerRef.current?.getCurrentTime() || 0
      const newNote: Note = {
        id: `note_${Date.now()}`,
        moment: currentTime,
        title: '',
        description: '',
      }
      setInternalEditingNote(newNote)
      setEditingTitle('')
      setEditingContent('')
    }
  }, [onAddNote, setIsPlaying])

  const { setupHLSSubtitleTracking } = useHLSSubtitles({
    videoPlayerRef,
    isSubtitlesChecked,
    setCurrentSubtitle,
  })

  // Notes functionality
  const noteMarkers = useMemo((): NoteMarker[] | undefined => {
    if (!videoDuration || videoDuration === 0 || !notes) return []

    const markers = notes?.map(note => ({
      id: note.id,
      title: note.title,
      moment: note.moment,
      position: (note.moment / videoDuration) * 100,
    }))
    return markers
  }, [notes, videoDuration])

  const handleNoteClick = useCallback(
    (note: Note) => {
      if (onNoteEdit) {
        onNoteEdit(note)
      } else {
        setInternalEditingNote(note)
        setEditingTitle(note.title)
        setEditingContent(note.description || '')
      }
      if (onNoteClick) {
        onNoteClick(note)
      }
    },
    [onNoteClick, onNoteEdit],
  )

  const handleSaveNote = async (): Promise<void> => {
    if (!currentEditingNote) return

    if (onNoteSave) {
      await onNoteSave(currentEditingNote.id, editingTitle.trim(), editingContent.trim())
    }

    // Clear editing state
    if (onNoteCancelEdit) {
      onNoteCancelEdit()
    } else {
      setInternalEditingNote(null)
      setEditingTitle('')
      setEditingContent('')
    }
  }

  const handleCancelEdit = (): void => {
    if (onNoteCancelEdit) {
      onNoteCancelEdit()
    } else {
      setInternalEditingNote(null)
      setEditingTitle('')
      setEditingContent('')
    }
  }

  const handleDeleteNote = async (): Promise<void> => {
    if (!currentEditingNote) return

    if (onNoteDelete) {
      await onNoteDelete(currentEditingNote.id)
    }

    handleCancelEdit()
  }

  // Sync editing state when external editing note changes
  useEffect(() => {
    if (editingNote) {
      setEditingTitle(editingNote.title)
      setEditingContent(editingNote.description || '')
    }
  }, [editingNote])

  const renderNoteEditModal = (): ReactElement | null => {
    if (!notes || !currentEditingNote) return null

    // Calculate position based on note's timestamp relative to video duration
    const noteTimePosition =
      videoDuration && videoDuration > 0 ? (currentEditingNote.moment / videoDuration) * 100 : 50 // Default to center if no duration

    let modalAlignment: 'left' | 'center' | 'right' = 'center'
    if (noteTimePosition < 25) {
      modalAlignment = 'left'
    } else if (noteTimePosition > 75) {
      modalAlignment = 'right'
    }

    const modalJSX = (
      <StyledNoteModal
        $isFullscreen={isFullscreen}
        $position={noteTimePosition}
        $alignment={modalAlignment}
      >
        <NoteEditModal
          isFullscreen={isFullscreen}
          note={currentEditingNote}
          notePosition={noteTimePosition}
          alignment={modalAlignment}
          editingTitle={editingTitle}
          editingContent={editingContent}
          onTitleChange={(e): void => setEditingTitle(e.target.value)}
          onContentChange={(e): void => setEditingContent(e.target.value)}
          onCancel={handleCancelEdit}
          onDelete={handleDeleteNote}
          onSave={handleSaveNote}
        />
      </StyledNoteModal>
    )

    // In fullscreen, render the modal inside the fullscreen element
    if (isFullscreen && document.fullscreenElement) {
      return createPortal(modalJSX, document.fullscreenElement)
    }

    return modalJSX
  }

  const renderNotesOverlay = (): ReactElement | null => {
    if (!notes || !noteMarkers || noteMarkers.length === 0) return null

    const shouldShowControls = isControlsActive || isFullscreen
    const cssClass = shouldShowControls ? 'controls-visible' : ''

    // Use absolute positioning relative to fullscreen element
    const fullscreenStyle = {
      position: 'absolute' as const,
      left: 0,
      right: 0,
      bottom: 42,
      top: 'auto' as const,
      height: 6,
      zIndex: MAX_FULLSCREEN_Z_INDEX,
      width: '100%',
    }

    const overlayJSX = (
      <StyledNoteMarkersOverlay
        ref={overlayRef}
        className={cssClass}
        $isFullscreen={isFullscreen}
        style={{
          opacity: shouldShowControls ? 1 : 0,
          visibility: shouldShowControls ? 'visible' : 'hidden',
          // Force fullscreen positioning to override any CSS conflicts
          ...(isFullscreen ? fullscreenStyle : {}),
        }}
      >
        {noteMarkers.map(marker => {
          const note = notes?.find(n => n.id === marker.id)
          if (!note) return null

          return (
            <StyledNoteMarker
              key={marker.id}
              $position={marker.position}
              $isFullscreen={isFullscreen}
              onMouseEnter={(): void => setHoveredNote(note)}
              onMouseLeave={(): void => setHoveredNote(null)}
              onClick={(): void => handleNoteClick(note)}
              title={note.title}
              style={{
                opacity: 1,
                visibility: 'visible',
                backgroundColor: '#ffd700',
                zIndex: isFullscreen ? MAX_FULLSCREEN_MARKER_Z_INDEX : 20,
                position: 'absolute',
                left: `${marker.position}%`,
                bottom: isFullscreen ? 0 : undefined,
                transform: 'translateX(-50%)',
                width: isFullscreen ? 12 : undefined,
                height: isFullscreen ? 12 : undefined,
                outline: 'none',
                border: 'none',
              }}
            >
              {hoveredNote?.id === note.id && (
                <StyledNoteTooltip>
                  <div>
                    {note.title.length > 25 ? `${note.title.substring(0, 25)}...` : note.title}
                  </div>
                  <StyledNoteTime>{FormatSecondsToTimeString(note.moment)}</StyledNoteTime>
                </StyledNoteTooltip>
              )}
            </StyledNoteMarker>
          )
        })}
      </StyledNoteMarkersOverlay>
    )

    // Render inside the actual fullscreen element subtree so it's visible
    if (isFullscreen && document.fullscreenElement) {
      return createPortal(overlayJSX, document.fullscreenElement)
    }

    return overlayJSX
  }

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
  }

  return (
    <StyledWrapper
      ref={playerContainerRef}
      tabIndex={0}
      onMouseMove={mouseMoveHandler}
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
          onAddNote={notes ? handleAddNote : undefined}
        />
      </StyledControlsContainer>

      {/* Notes functionality */}
      {renderNotesOverlay()}
      {renderNoteEditModal()}
    </StyledWrapper>
  )
}

export default VideoPlayer
