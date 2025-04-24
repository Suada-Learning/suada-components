import styled from 'styled-components'

export const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  background: #565a62;
  padding: 12px 16px;
  position: relative;

  svg {
    cursor: pointer;

    @media screen and (max-width: 1500px) {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 1000px) {
      width: 16px;
      height: 16px;
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
  background: ${({ value }): string =>
    `linear-gradient(
    to right,
    var(--brand-colors-accent) 0%,
    var(--brand-colors-accent) ${value}%,
    var(--level-dark-200) ${value}%,
    var(--level-dark-200) 100%
  )`};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--brand-colors-accent);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--brand-colors-accent);
    cursor: pointer;
  }
`

export const StyledVolumeWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  & > svg {
    cursor: pointer;
  }

  & > input {
    display: none;
  }

  &:hover > input {
    display: block;
  }
`

export const StyledVolumeSlider = styled.input<SliderProps>`
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background: ${({ value }): string =>
    `linear-gradient(
    to right,
    var(--neutral-colors-light) 0%,
    var(--neutral-colors-light) ${value}%,
    var(--level-grey-500) ${value}%,
    var(--level-grey-500) 100%
  )`};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--neutral-colors-light);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--neutral-colors-light);
    cursor: pointer;
  }
`

export const StyledControllerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const StyledControllerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .skip-icon-disabled {
    cursor: default;

    & > path {
      fill: var(--level-dark-300);
    }
  }
`

export const StyledTimeTrack = styled.div`
  color: var(--neutral-colors-light);
  ${{ fontStyle: 'descriptor' }}
  text-align: right;
  white-space: nowrap;
`

export const StyledHeartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg > path {
    fill: var(--neutral-colors-light);
  }
`

export const StyledSubtitlesIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledFullscreenIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const StyledVolumeIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const StyledPlayPauseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
