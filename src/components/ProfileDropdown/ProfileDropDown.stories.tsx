import type { Meta, StoryObj } from '@storybook/react'
import { IUser } from '../CourseCard/CourseCard.interface' // Adjust if IUser is located elsewhere
import { CustomThemeProvider } from '../../theme/ThemeProvider'
import { GlobalStyle } from '../../global.styles'
import { ProfileDropdown } from './ProfileDropdown'

const mockUser: IUser = {
  email: 'JohnDoe@suada.com',
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  avatarThumbnail: 'https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg',
  // Add other IUser properties as needed
}

const meta: Meta<typeof ProfileDropdown> = {
  title: 'Components/ProfileDropdown',
  component: ProfileDropdown,
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
    user: { control: 'object' },
    logout: { action: 'logout' },
  },
  args: {
    user: mockUser,
    logout: () => console.log('Logged out'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: mockUser,
    logout: () => console.log('Logged out'),
  },
}
