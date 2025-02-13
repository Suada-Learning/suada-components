import type { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../global.styles'
import { CustomThemeProvider } from '../../theme/ThemeProvider'
import { CustomSwitcher } from './CustomSwitcher'

const meta: Meta<typeof CustomSwitcher> = {
  title: 'Components/CustomSwitcher',
  component: CustomSwitcher,
  tags: ['autodocs'],

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
    value: { control: 'boolean' },
    name: { control: 'text' },
    label: { control: 'text' },
    on: { control: 'text' },
    off: { control: 'text' },
    tooltip: { control: 'text' },
    labelPosition: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
    },
    labelStyle: { control: 'object' },
    onChange: { action: 'changed' },
  },
  args: {
    value: false,
    name: 'custom-switch',
    label: 'Enable feature',
    on: 'On',
    off: 'Off',
    tooltip: 'This is a switch component',
    labelPosition: 'start',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: false,
  },
}

export const Checked: Story = {
  args: {
    value: true,
  },
}
