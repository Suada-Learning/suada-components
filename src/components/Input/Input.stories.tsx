import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TextInput from './Input'
import { ITextInputProps } from './Input.interface'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs', 'input'],
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ padding: '20px', maxWidth: '400px', height: '20px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
} as Meta

export const Default: StoryObj<ITextInputProps> = {
  args: {
    label: 'Enter text',
    size: 'small',
    error: false,
    disabled: false,
    fullWidth: true,
    required: false,
  },
}
