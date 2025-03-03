import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { WelcomeUser } from './WelcomeUser'
import { IWelcomeUsersProps } from './welcomeUser.interface'

export default {
  title: 'Components/WelcomeUser',
  component: WelcomeUser,
  tags: ['autodocs', 'WelcomeUser'],
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: StoryFn<IWelcomeUsersProps> = args => <WelcomeUser {...args} />

export const DefaultWelcomeUser = Template.bind({})
DefaultWelcomeUser.args = {
  isOpened: true,
  user: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    avatar:
      'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  },
}
