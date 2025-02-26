import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { AudioPlayer } from './AudioPlayer'

export default {
  title: 'Components/AudioPLayer',
  component: AudioPlayer,
  tags: ['autodocs', 'audio-player'],

  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} as Meta

const Template: StoryFn<typeof AudioPlayer> = args => <AudioPlayer {...args} />

export const DefaultAudioPlayer = Template.bind({})
DefaultAudioPlayer.args = {
  url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
}
