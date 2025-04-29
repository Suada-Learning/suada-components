import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { VideoPlayer } from './Player'

// Define the Meta for the component

type VideoPlayerProps = React.ComponentProps<typeof VideoPlayer>

const meta: Meta<typeof VideoPlayer> = {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'centered',
    // Disable docs to avoid ref-related errors
    docs: {
      disable: true,
    },
  },
  decorators: [
    Story => (
      // Add error boundary for storybook
      <div style={{ width: '800px', height: '450px' }}>{Story()}</div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: 'text',
      description: 'Video URL to play',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle URL',
    },
    startTime: {
      control: { type: 'number', min: 0, step: 10 },
      description: 'Start time in seconds',
      defaultValue: 0,
    },
    isPlaying: {
      control: 'boolean',
      description: 'Controls whether the video is playing',
      defaultValue: false,
    },
    shouldPlayerBeFocusedOnSpaceClick: {
      control: 'boolean',
      description: 'Controls focus behavior on space click',
      defaultValue: false,
    },
    customStyles: {
      control: 'object',
      description: 'Custom styles for the player wrapper',
    },
    showFavorite: {
      control: 'boolean',
      description: 'Show favorite button',
      defaultValue: true,
    },
    isFavorite: {
      control: 'boolean',
      description: 'Is video marked as favorite',
      defaultValue: false,
    },
    isNextVideo: {
      control: 'boolean',
      description: 'Is there a next video available',
      defaultValue: true,
    },
    isPreviousVideo: {
      control: 'boolean',
      description: 'Is there a previous video available',
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof VideoPlayer>

// Wrapper component to handle state

const PlayerWrapper = (args: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(args.isPlaying || false)
  const [loading, setLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(args.isFavorite || false)

  // Ensure we have default handlers for everything
  const handleTrackProgress = (currentTime: number) => {
    console.log('Track progress:', currentTime)
  }

  const handleNextVideo = () => {
    console.log('Next video requested')
  }

  const handlePreviousVideo = () => {
    console.log('Previous video requested')
  }

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite)
    console.log('Favorite toggled to:', !isFavorite)
    return Promise.resolve()
  }

  // Provide all required props with defaults
  const allProps = {
    url: args.url || 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    startTime: args.startTime || 0,
    loading: loading,
    setLoading: setLoading,
    handleTrackProgress: handleTrackProgress,
    subtitle: args.subtitle || '',
    handleNextVideo: args.isNextVideo ? handleNextVideo : undefined,
    handlePreviousVideo: args.isPreviousVideo ? handlePreviousVideo : undefined,
    isNextVideo: !!args.isNextVideo,
    isPreviousVideo: !!args.isPreviousVideo,
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying,
    shouldPlayerBeFocusedOnSpaceClick: args.shouldPlayerBeFocusedOnSpaceClick || false,
    showFavorite: !!args.showFavorite,
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
    customStyles: args.customStyles || { borderRadius: '8px', overflow: 'hidden' },
  }

  return <VideoPlayer {...allProps} />
}

// Default story
export const Default: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    startTime: 0,
    shouldPlayerBeFocusedOnSpaceClick: true,
    showFavorite: true,
    isNextVideo: true,
    isPreviousVideo: true,
    customStyles: { borderRadius: '8px', overflow: 'hidden' },
  },
}

// With Subtitles
export const WithSubtitles: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    subtitle: 'https://example.com/subtitles.vtt',
  },
}

// Playing State
export const Playing: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isPlaying: true,
  },
}

// Favorited
export const Favorited: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isFavorite: true,
  },
}

// No Controls
export const NoControls: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isNextVideo: false,
    isPreviousVideo: false,
    showFavorite: false,
  },
}
