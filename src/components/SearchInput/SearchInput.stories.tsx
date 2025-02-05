import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { GlobalStyle } from '../../global.styles'
import { CustomThemeProvider } from '../../theme/ThemeProvider'

const mockFunctions = {
  onSearchSubmit: (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Search submitted')
  },
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Search changed:', event.target.value)
  },
  t: (key: string) => key,
}

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
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
  args: {
    searchText: '',
    ...mockFunctions,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    searchText: '',
    ...mockFunctions,
  },
}
