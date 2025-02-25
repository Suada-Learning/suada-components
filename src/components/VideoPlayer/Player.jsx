// disabled eslint for this file as react-player is not fully compatible with typescript
/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import useOutsideClick from 'helpers/useOutsideClick'
import Hls from 'hls.js'
import { Player, ControlBar, PlaybackRateMenuButton, BigPlayButton } from 'video-react'
// import HdIcon from '@mui/icons-material/Hd'
// import HighQualityIcon from '@mui/icons-material/HighQuality'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption'
import 'video-react/dist/video-react.css'
import {
  ButtonWrapper,
  Container,
  QualityButtonWrapper,
  // StyledQualityMenu,
  StyledQualityMenuItem,
  // StyledVideo,
  SubtitlesMenuContainer,
  DownloadWrapper,
} from './styled-components'
import { useTranslation } from 'react-i18next'

const SubtitlesButton = ({ subtitles, setSubtitles }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const { t } = useTranslation()

  useOutsideClick(ref, () => open && setOpen(false))

  return (
    <QualityButtonWrapper ref={ref}>
      <ButtonWrapper onClick={() => setOpen(!open)}>
        <ClosedCaptionIcon fontSize='small' />
      </ButtonWrapper>

      {open && (
        <SubtitlesMenuContainer>
          <StyledQualityMenuItem onClick={() => setSubtitles('off')} color={subtitles === 'off'}>
            {t('general.off')}
          </StyledQualityMenuItem>

          <StyledQualityMenuItem onClick={() => setSubtitles('on')} color={subtitles === 'on'}>
            {t('general.on')}
          </StyledQualityMenuItem>
        </SubtitlesMenuContainer>
      )}
    </QualityButtonWrapper>
  )
}

// commented out Quality menu for now as we only playing 720p hls videos
// const QualityMenu = ({ setQuality, quality }) => {
//   const [open, setOpen] = useState(false)
//   const ref = useRef()

//   const selectOptions = (i) => {
//     setQuality(i)
//   }

//   useOutsideClick(ref, () => open && setOpen(false))

//   return (
//     <QualityButtonWrapper ref={ref}>
//       <ButtonWrapper onClick={() => setOpen(!open)}>
//         {quality === 2 ? (
//           <HighQualityIcon fontSize="small" />
//         ) : (
//           <HdIcon fontSize="small" />
//         )}
//       </ButtonWrapper>

//       {open && (
//         <StyledQualityMenu>
//           {['360p', '720p', '1080p'].map((item, index) => (
//             <StyledQualityMenuItem
//               key=""
//               onClick={() => selectOptions(index)}
//               color={quality === index}
//             >
//               {item}
//             </StyledQualityMenuItem>
//           ))}
//         </StyledQualityMenu>
//       )}
//     </QualityButtonWrapper>
//   )
// }

const HlsVideoSrc = props => {
  const hlsRef = useRef()

  const { video, url, type, showSubtitles } = props

  useEffect(() => {
    if (!Hls.isSupported()) return

    hlsRef.current = new Hls()
    hlsRef.current.loadSource(url)
    hlsRef.current.attachMedia(video)
    hlsRef.current.subtitleDisplay = false
  }, [url])

  useEffect(() => {
    if (!hlsRef) return
    hlsRef.current.subtitleDisplay = showSubtitles === 'on'
  }, [showSubtitles])

  return (
    <>
      <source src={url} type={type || 'application/x-mpegURL'} />
    </>
  )
}

const VideoPlayer = props => {
  const [subtitles, setSubtitles] = useState('off')

  const ref = useRef()

  useEffect(() => {
    ref.current.playbackRate = 2
    ref.current.forceUpdate()
  }, [])

  return (
    <Container>
      <Player ref={ref} width={700} height={400} poster={props.thumbnail} crossOrigin='anonymous'>
        <BigPlayButton position='center' />

        <HlsVideoSrc isVideoChild video={ref.current} url={props.url} showSubtitles={subtitles} />

        <ControlBar>
          <PlaybackRateMenuButton rates={[3, 2, 1.6, 1.2, 1, 0.5, 0.1]} order={7} />
          {props.subtitle && (
            <SubtitlesButton
              order={7}
              setSubtitles={setSubtitles}
              subtitles={subtitles}
              list={props.subtitle}
            />
          )}
          {/* quality switcher */}
          {/* <QualityMenu order={7} setQuality={setQuality} quality={quality} /> */}
          {props.downloadLink && (
            <DownloadWrapper order={7}>
              <a href={props.downloadLink} rel='noreferrer' target='_blank' download>
                <CloudDownloadIcon fontSize='small' />
              </a>
            </DownloadWrapper>
          )}
        </ControlBar>
      </Player>
    </Container>
  )
}

export default VideoPlayer

HlsVideoSrc.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  video: PropTypes.object,
  showSubtitles: PropTypes.string,
}

VideoPlayer.propTypes = {
  url: PropTypes.string,
  thumbnail: PropTypes.string,
  subtitle: PropTypes.string,
  downloadLink: PropTypes.string,
}

SubtitlesButton.propTypes = {
  setSubtitles: PropTypes.func,
  subtitles: PropTypes.string,
}
