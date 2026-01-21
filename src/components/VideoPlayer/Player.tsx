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

const CONTROLS_CHECK_DELAY = 100
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
  courseId,
  moduleId,
  lessonId,
  editingNote,
  onNoteEdit,
  onNoteSave,
  onNoteDelete,
  onNoteCancelEdit,
  onAddNote,
}: PlayerProps): ReactElement => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<MutationObserver | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Notes state
  const [hoveredNote, setHoveredNote] = useState<Note | null>(null)
  const [areControlsVisible, setAreControlsVisible] = useState<boolean>(false)
  const [internalEditingNote, setInternalEditingNote] = useState<Note | null>(null)
  const [editingTitle, setEditingTitle] = useState<string>('')
  const [editingContent, setEditingContent] = useState<string>('')

  // Use external editing state if provided, otherwise use internal state
  const currentEditingNote = editingNote !== undefined ? editingNote : internalEditingNote
  
  const actionId = lessonId || moduleId || courseId || ''
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

  // Handle adding new notes
  const handleAddNote = useCallback(() => {
    if (onAddNote) {
      onAddNote()
    } else {
      // Create a new note at current time if no external handler
      const currentTime = videoPlayerRef.current?.getCurrentTime() || 0
      const newNote: Note = {
        id: `note_${Date.now()}`,
        timeInSeconds: currentTime,
        title: '',
        content: '',
      }
      setInternalEditingNote(newNote)
      setEditingTitle('')
      setEditingContent('')
    }
  }, [onAddNote])

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

  const renderNoteEditModal = (): ReactElement | null => {
    if (!currentEditingNote) return null

    const noteMarker = noteMarkers?.find(marker => marker.id === currentEditingNote.id)
    const notePosition = noteMarker?.position || 0

    let modalAlignment: 'left' | 'center' | 'right' = 'center'
    if (notePosition < 25) {
      modalAlignment = 'left'
    } else if (notePosition > 75) {
      modalAlignment = 'right'
    }

    const modalJSX = (
      <StyledNoteModal
        $isFullscreen={isFullscreen}
        $position={notePosition}
        $alignment={modalAlignment}
      >
        <NoteEditModal
          isFullscreen={isFullscreen}
          note={currentEditingNote}
          notePosition={notePosition}
          alignment={modalAlignment}
          editingTitle={editingNote ? (currentEditingNote.title) : editingTitle}
          editingContent={editingNote ? (currentEditingNote.description || '') : editingContent}
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
    if (!noteMarkers || noteMarkers.length === 0) return null

    const shouldShowControls = areControlsVisible || isFullscreen
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

  // Track controls visibility for notes (when not in fullscreen mode)
  useEffect(() => {
    const handleControlsToggle = (): void => {
      // Show notes initially when controls become visible (non-fullscreen mode)
      if (!isFullscreen) {
        // Clear any existing hide timeout
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current)
          hideTimeoutRef.current = null
        }
      }
    }

    handleControlsToggle()
  }, [areControlsVisible, isFullscreen])

  // Observe the video player controls visibility
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    const checkControlsVisibility = (): void => {
      // Look for the controls element using various selectors
      const controlsSelectors = [
        '[class*="StyledControlsContainer"]',
        '[class*="Controls"]',
        '[class*="controls"]',
        'div[style*="visibility"]',
      ]

      let controlsElement: Element | null = null
      for (const selector of controlsSelectors) {
        controlsElement = container.querySelector(selector)
        if (controlsElement) break
      }

      if (controlsElement) {
        const style = window.getComputedStyle(controlsElement)
        const isVisible = style.visibility === 'visible'
        setAreControlsVisible(isVisible)
      }
    }

    // Create MutationObserver to watch for style changes
    observerRef.current = new MutationObserver(() => {
      checkControlsVisibility()
    })

    // Observe the entire container for style changes
    observerRef.current.observe(container, {
      attributes: true,
      subtree: true,
      attributeFilter: ['style', 'class'],
    })

    // Also listen for mouse events to trigger checks
    const handleMouseMove = (): void => {
      setAreControlsVisible(true)
      checkControlsVisibility()
    }

    const handleMouseLeave = (): void => {
      setTimeout(checkControlsVisibility, CONTROLS_CHECK_DELAY)
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Initial check
    setTimeout(checkControlsVisibility, CONTROLS_CHECK_DELAY)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

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
      ref={containerRef}
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
          onAddNote={handleAddNote}
        />
      </StyledControlsContainer>

      {/* Notes functionality */}
      {renderNotesOverlay()}
      {renderNoteEditModal()}
    </StyledWrapper>
  )
}

export default VideoPlayer
