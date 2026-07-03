import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { VideoPlayer } from './Player'
import { Note } from './Player.interface'

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
    showDownload: {
      control: 'boolean',
      description: 'Show download button',
      defaultValue: false,
    },
    downloadUrl: {
      control: 'text',
      description: 'URL for downloading the video',
    },
    downloadFileName: {
      control: 'text',
      description: 'Filename for the downloaded video',
    },
    showPictureInPicture: {
      control: 'boolean',
      description: 'Show picture-in-picture button',
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

  const handleDownload = () => {
    console.log('Download requested for:', args.downloadFileName || 'video')
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
    showDownload: !!args.showDownload,
    downloadUrl: args.downloadUrl,
    downloadFileName: args.downloadFileName,
    onDownload: args.showDownload ? handleDownload : undefined,
    showPictureInPicture: args.showPictureInPicture !== false,
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

// With Download
export const WithDownload: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    showDownload: true,
    downloadUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    downloadFileName: 'sample-video.mp4',
  },
}

// Download Only
export const DownloadOnly: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isNextVideo: false,
    isPreviousVideo: false,
    showFavorite: false,
    showDownload: true,
    downloadUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    downloadFileName: 'lesson-video.mp4',
  },
}

// All Features
export const AllFeatures: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    showDownload: true,
    downloadUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    downloadFileName: 'complete-lesson.mp4',
    subtitle: 'https://example.com/subtitles.vtt',
    isFavorite: true,
  },
}

// Without Picture-in-Picture
export const WithoutPictureInPicture: Story = {
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    showPictureInPicture: false,
  },
}

// With Notes
export const WithNotes: Story = {
  render: (args) => {
    const [notes, setNotes] = useState<Note[]>([
      {
        id: 'note1',
        moment: 15,
        title: 'Important Concept',
        description: 'This explains the key principle behind the topic.',
      },
      {
        id: 'note2', 
        moment: 45,
        title: 'Remember This',
        description: 'Don\'t forget to apply this in practice.',
      },
      {
        id: 'note3',
        moment: 90,
        title: 'Follow-up',
        description: 'Check the documentation for more details.',
      },
    ])
    
    const [editingNote, setEditingNote] = useState<Note | null>(null)

    const handleNoteClick = (note: Note) => {
      console.log('Note clicked:', note)
      // You could seek to the note time here
    }

    const handleNoteEdit = (note: Note) => {
      setEditingNote(note)
      console.log('Editing note:', note)
    }

    const handleNoteSave = async (noteId: string, title: string, content: string) => {
      setNotes(prev => prev.map(note => 
        note.id === noteId 
          ? { ...note, title, content }
          : note
      ))
      setEditingNote(null)
      console.log('Note saved:', { noteId, title, content })
      return Promise.resolve()
    }

    const handleNoteDelete = async (noteId: string) => {
      setNotes(prev => prev.filter(note => note.id !== noteId))
      console.log('Note deleted:', noteId)
      return Promise.resolve()
    }

    const handleNoteCancelEdit = () => {
      setEditingNote(null)
      console.log('Note edit cancelled')
    }

    const handleAddNote = () => {
      const newNote: Note = {
        id: `note_${Date.now()}`,
        moment: 30, // Default time for demo
        title: '',
        description: '',
      }
      setNotes(prev => [...prev, newNote])
      setEditingNote(newNote)
      console.log('Adding new note at time 30s')
    }

    const notesProps = {
      notes,
      videoDuration: 120, // 2 minutes for demo
      onNoteClick: handleNoteClick,
      courseId: 'demo-course',
      moduleId: 'demo-module', 
      lessonId: 'demo-lesson',
      editingNote,
      onNoteEdit: handleNoteEdit,
      onNoteSave: handleNoteSave,
      onNoteDelete: handleNoteDelete,
      onNoteCancelEdit: handleNoteCancelEdit,
      onAddNote: handleAddNote,
    }

    return <PlayerWrapper {...args} {...notesProps} />
  },
  args: {
    ...Default.args,
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
}
