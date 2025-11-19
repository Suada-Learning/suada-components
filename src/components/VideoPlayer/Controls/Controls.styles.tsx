import styled from 'styled-components'

export const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  background: rgba(86, 90, 98, 0.6);
  backdrop-filter: blur(4px);
  padding: 12px 16px;
  position: relative;
  opacity: 0.8;

  /* Responsive padding adjustments */
  @media screen and (max-width: 768px) {
    padding: 8px 12px;
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 6px 8px;
    gap: 8px;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s ease;

    /* Desktop and large screens */
    @media screen and (min-width: 1501px) {
      width: 24px;
      height: 24px;
    }

    /* Medium to large screens */
    @media screen and (max-width: 1500px) {
      width: 20px;
      height: 20px;
    }

    /* Small to medium screens */
    @media screen and (max-width: 1000px) {
      width: 18px;
      height: 18px;
    }

    /* Tablet screens */
    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }

    /* Mobile screens */
    @media screen and (max-width: 480px) {
      width: 18px;
      height: 18px;
    }

    /* Very small mobile screens */
    @media screen and (max-width: 320px) {
      width: 16px;
      height: 16px;
    }

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  & > p {
    color: var(--neutral-colors-light);
    font-family: 'Poppins', sans-serif;
    ${{ fontStyle: 'descriptor' }}
  }
`

type SliderProps = {
  value: number
}

export const StyledSlider = styled.input<SliderProps>`
  width: 100%;
  height: 2px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ value, theme }): string => {
    // Handle different theme structures
    let primaryColor = 'var(--brand-colors-accent)';
    if (theme?.colors?.primary?.main) {
      primaryColor = theme.colors.primary.main;
    } else if (typeof theme?.colors?.primary === 'string') {
      primaryColor = theme.colors.primary;
    }
    
    return `linear-gradient(
      to right,
      ${primaryColor} 0%,
      ${primaryColor} ${value}%,
      var(--level-dark-200) ${value}%,
      var(--level-dark-200) 100%
    )`;
  }};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;

  /* Enhanced mobile touch target */
  @media (hover: none) and (pointer: coarse) {
    height: 4px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }): string => theme?.colors?.primary?.main || 'var(--brand-colors-accent)'};
    cursor: pointer;

    /* Larger touch target for mobile */
    @media (hover: none) and (pointer: coarse) {
      width: 16px;
      height: 16px;
    }

    /* Responsive adjustments */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }): string => {
      // Handle different theme structures
      if (theme?.colors?.primary?.main) {
        return theme.colors.primary.main;
      }
      if (typeof theme?.colors?.primary === 'string') {
        return theme.colors.primary;
      }
      return 'var(--brand-colors-accent)';
    }};
    cursor: pointer;
    border: none;

    /* Larger touch target for mobile */
    @media (hover: none) and (pointer: coarse) {
      width: 16px;
      height: 16px;
    }

    /* Responsive adjustments */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  /* Enhance visibility on focus for accessibility */
  &:focus {
    outline: 2px solid var(--brand-colors-accent);
    outline-offset: 2px;
  }
`

export const StyledVolumeWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  /* Responsive gap adjustments */
  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }

  & > svg {
    cursor: pointer;
  }

  & > input {
    display: none;
  }

  &:hover > input {
    display: block;
  }

  /* Always show volume slider on touch devices */
  @media (hover: none) and (pointer: coarse) {
    & > input {
      display: block;
    }
  }

  /* Hide volume slider on very small screens */
  @media screen and (max-width: 320px) {
    & > input {
      display: none !important;
    }
  }
`

export const StyledVolumeSlider = styled.input<SliderProps>`
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background: ${({ value, theme }): string => {
    // Handle different theme structures
    let primaryColor = 'var(--neutral-colors-light)';
    if (theme?.colors?.primary?.main) {
      primaryColor = theme.colors.primary.main;
    } else if (typeof theme?.colors?.primary === 'string') {
      primaryColor = theme.colors.primary;
    }
    
    return `linear-gradient(
      to right,
      ${primaryColor} 0%,
      ${primaryColor} ${value}%,
      var(--level-grey-500) ${value}%,
      var(--level-grey-500) 100%
    )`;
  }};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  /* Responsive width adjustments */
  @media screen and (max-width: 768px) {
    width: 80px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
  }

  @media screen and (max-width: 320px) {
    width: 50px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }): string => {
      // Handle different theme structures
      if (theme?.colors?.primary?.main) {
        return theme.colors.primary.main;
      }
      if (typeof theme?.colors?.primary === 'string') {
        return theme.colors.primary;
      }
      return 'var(--neutral-colors-light)';
    }};
    cursor: pointer;

    /* Responsive thumb size */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }): string => {
      // Handle different theme structures
      if (theme?.colors?.primary?.main) {
        return theme.colors.primary.main;
      }
      if (typeof theme?.colors?.primary === 'string') {
        return theme.colors.primary;
      }
      return 'var(--neutral-colors-light)';
    }};
    cursor: pointer;
    border: none;

    /* Responsive thumb size */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`

export const StyledControllerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  
  /* Responsive gap adjustments */
  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }

  @media screen and (max-width: 320px) {
    gap: 6px;
  }

  /* Hide rewind/forward controls on very small screens */
  @media screen and (max-width: 480px) {
    .rewind-control,
    .forward-control {
      display: none;
    }
  }
`

export const StyledControllerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

  /* Responsive gap adjustments */
  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
    
    /* Hide less essential controls on mobile */
    .skip-control,
    .favorite-control,
    .download-control {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    gap: 6px;
  }

  .skip-icon-disabled {
    cursor: default;

    & > path {
      fill: var(--level-dark-300);
    }
  }
`

export const StyledTimeTrack = styled.div`
  color: #FFFFFF;
  ${{ fontStyle: 'descriptor' }}
  text-align: right;
  white-space: nowrap;
  font-size: 14px;
  
  /* Responsive font size adjustments */
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`

// Base styles for icon containers
const BaseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 24px;
  min-height: 24px;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.1s ease;

  /* Enhanced touch targets for mobile */
  @media (hover: none) and (pointer: coarse) {
    min-width: 32px;
    min-height: 32px;
  }

  & > svg > path {
    fill: #FFFFFF !important;
    transition: fill 0.2s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    
    & > svg > path {
      fill: ${({ theme }): string => {
        // Handle different theme structures
        if (theme?.colors?.primary?.main) {
          return theme.colors.primary.main;
        }
        if (typeof theme?.colors?.primary === 'string') {
          return theme.colors.primary;
        }
        return '#08C694';
      }} !important;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid var(--brand-colors-accent);
    outline-offset: 2px;
  }
`

export const StyledHeartIconContainer = styled(BaseIconContainer)`
  /* Additional specific styles if needed */
`

export const StyledDownloadIconContainer = styled(BaseIconContainer)`
  & > svg {
    width: 24px !important;
    height: 24px !important;
    
    @media screen and (max-width: 1500px) {
      width: 20px !important;
      height: 20px !important;
    }

    @media screen and (max-width: 1000px) {
      width: 16px !important;
      height: 16px !important;
    }

    @media screen and (max-width: 768px) {
      width: 20px !important;
      height: 20px !important;
    }

    @media screen and (max-width: 480px) {
      width: 18px !important;
      height: 18px !important;
    }
  }
`

export const StyledSubtitlesIconContainer = styled(BaseIconContainer)`
  /* Additional specific styles if needed */
`

export const StyledFullscreenIconContainer = styled(BaseIconContainer)`
  /* Additional specific styles if needed */
`

export const StyledPictureInPictureIconContainer = styled(BaseIconContainer)`
  &.pip-active {
    background-color: rgba(8, 198, 148, 0.2);
    
    & > svg > path {
      fill: #08C694 !important;
    }
  }
`

export const StyledVolumeIconContainer = styled(BaseIconContainer)`
  /* Additional specific styles if needed */
`

export const StyledPlayPauseIconContainer = styled(BaseIconContainer)`
  /* Additional specific styles if needed */
`

export const StyledRewindIconContainer = styled(BaseIconContainer)`
  /* Additional specific styles if needed */
`
