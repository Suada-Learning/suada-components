import { Meta, StoryObj } from '@storybook/react'
import { Uploader } from './Uploader'
import { FileTypes } from './uploader.interface'

export default {
  title: 'Components/Uploader',
  decorators: [
    Story => (
      <div style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  component: Uploader,
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(FileTypes),
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'number',
    },
    showFullPreview: {
      control: 'boolean',
    },
  },
} as Meta

export const Default: StoryObj<typeof Uploader> = {
  args: {
    type: FileTypes.IMAGE,
    label: 'Upload File',
    disabled: false,
    showFullPreview: true,
  },
}
export const Uploaded = {
  args: {
    type: FileTypes.IMAGE,  
    label: 'Upload File',
    uploadedFile: {
      id: '1',
      name: 'image.png',
      type: FileTypes.IMAGE,
      size: 1024,
    },
    inputValue: 'image.png',
    disabled: false,
    showFullPreview: true,
  },
}
