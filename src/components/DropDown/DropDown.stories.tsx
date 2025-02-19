import type { Meta, StoryObj } from '@storybook/react'
import { CustomThemeProvider } from '../../theme/ThemeProvider'
import { GlobalStyle } from '../../global.styles'
import { DropDown } from './DropDown'
import { SelectFieldWrapper } from './DropDown.styles'

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <CustomThemeProvider>
        <SelectFieldWrapper>
          <GlobalStyle />
          <Story />
        </SelectFieldWrapper>
      </CustomThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    isMulti: { control: 'boolean' },
    isClearable: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    placeholder: { control: 'text' },
    className: { control: 'text' },
    errorMessage: { control: 'text' },
  },
  args: {
    label: 'Select an option',
    options: options,
    isMulti: false,
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    placeholder: 'Choose...',
    className: '',
    errorMessage: '',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: options,
    isMulti: false,
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    placeholder: 'Choose...',
    className: '',
    errorMessage: '',
  },
}
