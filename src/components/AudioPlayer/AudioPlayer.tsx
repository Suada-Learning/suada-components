import React from 'react'

export interface IAudioPlayerProps {
  url: string
}

export const AudioPlayer = (props: IAudioPlayerProps): React.JSX.Element => {
  return (
    <audio controls autoPlay>
      <source src={props.url} />
    </audio>
  )
}
