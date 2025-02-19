import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { NavigationBar } from './NavigationBar'
import { IExpansionItemProps } from './ExpansionItem.interface'
import { IUser, IPermissionsBool, IUserCompany } from '../CourseCard/CourseCard.interface'

// Mock data for the story
export const mockUser: IUser = {
  id: 'user1',
  role: 'SUPER_ADMIN',
  companyId: 'company1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@gmail.com',
}

const mockPermissions: IPermissionsBool = {
  userPermission: true,
  viewQuestion: true,
  viewCompanyPage: true,
  viewLesson: true,
  viewCourse: true,
  viewGroup: true,
  viewAdmin: true,
  viewCoach: true,
  viewModule: true,
  viewQuiz: true,
  viewSuperAdminPage: true,
  viewSettingPage: true,
}

const mockCompany: IUserCompany = {
  id: 'company1',
  name: 'Company One',
  platformService: true,
}

const mockState = {
  userPermission: mockPermissions,
  currentUser: mockUser,
  selectedCompany: mockCompany,
}

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  args: {
    state: mockState,
  },
} as Meta

const Template: StoryFn<IExpansionItemProps> = args => <NavigationBar {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpened: true,
  currentUser: mockUser,
  role: 'SUPER_ADMIN',
  state: mockState,
}
