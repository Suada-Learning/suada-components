import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { CustomThemeProvider } from '../../theme/ThemeProvider'
import { GlobalStyle } from '../../global.styles'

const meta: Meta<typeof Pagination> = {
  title: 'Components/PaginationV2',
  component: Pagination,
  tags: ['autodocs', 'pagination'],
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
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    perPage: { control: 'select', options: [12, 24, 48] },
    handleChange: { action: 'Page Changed' },
    handlePerPageChange: { action: 'Per Page Changed' },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    perPage: 12,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
