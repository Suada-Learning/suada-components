import styled, { keyframes } from 'styled-components'

export const StyledVideoPlayerWrapper = styled.div`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .react-player {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    height: 50%;

    & > video {
      height: fit-content;
      width: 100%;
      object-fit: contain;
      border-radius: 8px;
      background-color: var(--neutral-colors-dark);
    }
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  & > ${StyledVideoPlayerWrapper} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const StyledPlayerLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #e7e9ed;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: var(--neutral-colors-light);
  justify-content: center;
  z-index: 5;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 3px solid var(--neutral-colors-light);
  border-right: 3px solid var(--neutral-colors-light);
  border-bottom: 3px solid var(--neutral-colors-light);
  border-left: 3px solid var(--brand-colors-accent);
  transform: translateZ(0);
  animation: ${rotate} 1.1s infinite linear;
  border-radius: 50%;
  width: 46px;
  height: 46px;

  &:after {
    border-radius: 50%;
    width: 46px;
    height: 46px;
  }
`

export const StyledControlsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-end;
  position: absolute;
  flex-direction: column;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`

export const StyledSubtitles = styled.div<{ $controls: boolean }>`
  background-color: rgba(2, 2, 16, 0.32);
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 8px;
  position: absolute;
  z-index: 100;
  bottom: ${({ $controls }): string => ($controls ? '60px' : '10px')};
  right: 0;
  left: 0;
  width: fit-content;
  margin: 0 auto;
  max-width: 80%;
  width: fit-content;
`

export const HLS_SUBTITLE_STYLES = `
  /* Hide native HLS subtitles completely - comprehensive approach */
  video::cue {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::-webkit-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::cue-region {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::-webkit-media-text-track-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  /* Target ReactPlayer specifically */
  .react-player video::cue {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .react-player video::-webkit-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .react-player video::cue-region {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .react-player video::-webkit-media-text-track-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  /* Additional selectors for different browsers */
  video::-moz-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::-ms-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  /* Hide any subtitle overlays */
  .react-player video + div[style*="position: absolute"] {
    display: none !important;
  }
  
  /* Target HLS video player specifically */
  .hls-video-player::cue {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .hls-video-player::-webkit-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .hls-video-player::-webkit-media-text-track-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .hls-video-player::cue-region {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
`

export const injectHLSSubtitleStyles = (): (() => void) => {
  const addSubtitleStyles = (): void => {
    const existingStyle = document.getElementById('hls-subtitle-styles')
    if (existingStyle) {
      existingStyle.remove()
    }

    const style = document.createElement('style')
    style.id = 'hls-subtitle-styles'
    style.textContent = HLS_SUBTITLE_STYLES
    document.head.appendChild(style)
  }

  addSubtitleStyles()

  // Return cleanup function
  return () => {
    const existingStyle = document.getElementById('hls-subtitle-styles')
    if (existingStyle) {
      existingStyle.remove()
    }
  }
}

// Notes functionality styles
export const StyledNoteMarkersOverlay = styled.div<{ $isFullscreen?: boolean }>`
  position: absolute;
  bottom: 45px;
  left: 80px;
  right: 80px;
  height: 6px;
  z-index: ${(props): number => (props.$isFullscreen ? 2147483646 : 15)};
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  overflow: visible;

  ${(props): string =>
    props.$isFullscreen
      ? `
    position: absolute;
    left: 0;
    right: 0;
    bottom: 42px;
    top: auto;
    height: 6px;
    z-index: 2147483646;
    width: 100%;
    opacity: 1;
    visibility: visible;
  `
      : ''}

  ${(props): string =>
    !props.$isFullscreen
      ? `
    ${StyledWrapper}:hover & {
      opacity: 1 !important;
    }
  `
      : ''}

  &.controls-visible {
    opacity: 1 !important;
  }
`

const noteMarkerPulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
  }
`

export const StyledNoteMarker = styled.div<{ $position: number; $isFullscreen?: boolean }>`
  position: absolute;
  ${(props): string =>
    props.$isFullscreen
      ? `top: auto; bottom: 0; transform: translateX(-50%);`
      : `bottom: -2px; transform: translateX(-50%);`}
  left: 0;
  right: 0;
  bottom: -3px;
  width: ${(props): string => (props.$isFullscreen ? '12px' : '10px')};
  height: ${(props): string => (props.$isFullscreen ? '12px' : '10px')};
  background-color: #ffd700;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: auto;
  border: 2px solid #fff;
  box-shadow: ${(props): string =>
    props.$isFullscreen ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
  transition: all 0.2s ease;
  z-index: ${(props): number => (props.$isFullscreen ? 2147483647 : 20)};

  &:hover {
    transform: translateX(-50%) scale(1.2);
    background-color: #ffed4e;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffd700;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    animation: ${noteMarkerPulse} 3s infinite;
  }
`

export const StyledNoteTooltip = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  pointer-events: none;
  z-index: 2147483647;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`

export const StyledNoteTime = styled.div`
  font-size: 10px;
  opacity: 0.8;
  margin-top: 2px;
`

export const StyledModalOverlay = styled.div<{ $isFullscreen?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${(props): number => (props.$isFullscreen ? 2147483646 : 999)};
  pointer-events: none;
`

export const StyledNoteModal = styled.div<{
  $isFullscreen?: boolean
  $position?: number
  $alignment?: 'left' | 'center' | 'right'
}>`
  position: absolute;
  bottom: 70px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e2e8f0;
  z-index: ${(props): number => (props.$isFullscreen ? 2147483647 : 1000)};
  width: 320px;
  height: 270px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  pointer-events: auto;

  ${(props): string => {
    const position = props.$position || 50
    const alignment = props.$alignment || 'center'
    const modalWidth = 320
    const margin = 20

    // Position modal based on the timestamp position on progress bar
    if (alignment === 'left') {
      return `
        left: ${margin}px;
        &::after { left: calc(${position}% - ${margin}px); }
        &::before { left: calc(${position}% - ${margin}px); }
      `
    } else if (alignment === 'right') {
      return `
        right: ${margin}px;
        &::after { right: calc(${100 - position}% - ${margin}px); }
        &::before { right: calc(${100 - position}% - ${margin}px); }
      `
    } else {
      // Center the modal horizontally relative to timestamp position
      return `
        left: ${position}%;
        transform: translateX(-50%);
        &::after { left: 50%; }
        &::before { left: 50%; }
      `
    }
  }}

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    border: 8px solid transparent;
  }

  &::after {
    border-top-color: white;
    z-index: 2;
  }

  &::before {
    border-top-color: #e2e8f0;
    z-index: 1;
    margin-top: 1px;
  }
`
