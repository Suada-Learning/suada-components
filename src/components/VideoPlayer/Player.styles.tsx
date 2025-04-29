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
