import type { Meta, StoryObj } from '@storybook/react'
import { GridActionMenu } from './GridActionMenu'
import { GlobalStyle } from '../../global.styles'
import { Container } from './GridActionMenu.styles'
import { actionConfig } from '../CourseCard/CourseCardActionsConfig'
import { CustomThemeProvider } from '../../theme/ThemeProvider'

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
      <CustomThemeProvider>
        <GlobalStyle />
        <Container>
          <Story />
        </Container>
      </CustomThemeProvider>
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
