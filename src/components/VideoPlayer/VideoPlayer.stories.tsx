import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { VideoPlayer } from './VideoPlayer'

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = args => <VideoPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  url: 'https://stream-akamai.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8',
}
