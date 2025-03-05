import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import RangeSlider from './RangeSlider'
import { CustomThemeProvider } from '../../theme/ThemeProvider'
import { GlobalStyle } from '../../global.styles'

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs', 'range-slider'],
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
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },

    onRangeChange: { action: 'rangeChanged' },
  },
  args: {
    label: 'Select Range',
    min: 0,
    max: 100,
    value: [20, 80],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomRange: Story = {
  args: {
    label: 'Custom Range',
    min: 10,
    max: 90,
    value: [30, 60],
  },
}
