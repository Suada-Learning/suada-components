import styled from 'styled-components'

export const Container = styled.div`
  width: 700px;
  position: relative;
  overflow: hidden;
  .video-react-big-play-button {
    overflow: hidden !important;
  }
`

export const Tracker = styled.track`
  background: rgba(204, 204, 204, 0.17);
`

export const StyledVideo = styled.video`
  width: 660px;
  height: 380px;
  outline: none;
`
export const SubtitlesMenuContainer = styled.div`
  width: 45px;
  position: absolute;
  top: 0;
  left: -10px;
  transform: translateY(-100%);
  background: rgba(43, 51, 63, 0.7);
  height: 80px;
  display: flex;
  flex-direction: column;
  border-radius: 1px;
`
export const QualityButtonWrapper = styled.div`
  position: relative;
  margin-left: 3px;
  margin-right: 3px;
`
export const StyledQualityMenu = styled.div`
  width: 44px;
  position: absolute;
  top: 0;
  left: -10px;
  transform: translateY(-100%);
  background: rgba(43, 51, 63, 0.7);
  height: 80px;
  display: flex;
  flex-direction: column;
  border-radius: 1px;
`

export const StyledQualityMenuItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 4px;
  font-size: 13px;
  color: ${({ color }): string => (color ? '#ff3a52' : '#fff')};
  cursor: pointer;
  margin-top: 3px;
`

export const ButtonWrapper = styled.div`
  margin-top: 5px;
  cursor: pointer;
`
export const DownloadWrapper = styled.div`
  margin-top: 5px;
  margin-left: 3px;
`
