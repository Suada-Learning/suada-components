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
    loading: 0,
    showFullPreview: true,
  },
}
