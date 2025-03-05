import React from 'react'
import { VideoPlayer } from './Player'
import { StoryFn } from '@storybook/react/*'

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs', 'video-player'],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

const Template: StoryFn<typeof VideoPlayer> = args => <VideoPlayer {...args} />
export const Default = Template.bind({})
Default.args = {
  url: 'https://dl29bi0xnzte0.cloudfront.net/lesson-562ceec7-ece7-4b00-92a7-aee4055d08aa/master.m3u8',
  thumbnail: 'https://via.placeholder.com/700x400',
  // subtitle: 'off',
  // downloadLink: 'https://example.com/sample-video.mp4',
}

export const WithoutSubtitles = Template.bind({})
WithoutSubtitles.args = {
  ...Default.args,
  subtitle: 'off',
}

export const WithoutDownload = Template.bind({})
WithoutDownload.args = {
  ...Default.args,
  downloadLink: '',
}
