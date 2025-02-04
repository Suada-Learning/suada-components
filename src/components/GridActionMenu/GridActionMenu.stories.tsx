import type { Meta, StoryObj } from '@storybook/react'
import { GridActionMenu } from './GridActionMenu'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../../global.styles'
import { Container } from './GridActionMenu.styles'
import { actionConfig } from '../CourseCard/CourseCardActionsConfig'

const mockRow = {
  id: 1,
  isBought: false,
  video: true,
}

const mockFunctions = {
  actionHandler: (action: string, item: unknown) => console.log(action, item),
}

const meta: Meta<typeof GridActionMenu> = {
  title: 'Components/GridActionMenu',
  component: GridActionMenu,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Story />
        </Container>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  args: {
    actionConfig: actionConfig(mockFunctions.actionHandler, { deleteCourse: true }, key => key),
    row: mockRow,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    actionConfig: actionConfig(mockFunctions.actionHandler, { deleteCourse: true }, key => key),
    row: mockRow,
  },
}
