import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { CustomThemeProvider } from '../../theme/ThemeProvider'
import { GlobalStyle } from '../../global.styles'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  decorators: [
    Story => (
      <CustomThemeProvider>
        <GlobalStyle />
        <Story />
      </CustomThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    withBackground: { control: 'boolean' },
  },
  args: {
    width: '40px',
    height: '40px',
    withBackground: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBackground: Story = {
  args: {
    withBackground: true,
  },
}
