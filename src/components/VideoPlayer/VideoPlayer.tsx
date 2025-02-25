// disabled eslint for this file as react-player is not fully compatible with typescript
/* eslint-disable */

import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import styled from 'styled-components'

export const VideoPlayer = (props: any) => {
  const player = useRef<any>()
  const hlsRef = useRef<any>()

  useEffect(() => {
    const video = player.current
    if (Hls.isSupported()) {
      hlsRef.current = new Hls()
      hlsRef.current.attachMedia(video)
      hlsRef.current.on(Hls.Events.MEDIA_ATTACHED, () => {
        hlsRef.current.loadSource(props.url)
        // hlsRef.current.loadLevel = level
        hlsRef.current.on(Hls.Events.MANIFEST_PARSED, (event: any, data: any) => {
          hlsRef.current.autoLevelEnabled = true
        })
      })
    }
  }, [props.url])

  return (
    <VideoContainer>
      <StyledVideo
        // ref={player}
        autoPlay
        controls
        src={props.url}
        // playing
        // controls
        // autoLevelEnabled
        // pip
        // light
      />
    </VideoContainer>
  )
}

const VideoContainer = styled.div``
const StyledVideo = styled.video<{ src: any; autoPlay: any }>`
  width: 660px;
  height: 380px;
  outline: none;
`
