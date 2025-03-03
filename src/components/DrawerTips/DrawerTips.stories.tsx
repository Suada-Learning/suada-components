import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { DrawerTips } from './DrawerTips'
import { IDrawerTipsProps } from './drawerTips.interface'

export default {
  title: 'Components/DrawerTips',
  component: DrawerTips,
  tags: ['autodocs', 'DrawerTips'],
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: StoryFn<IDrawerTipsProps> = args => <DrawerTips {...args} />

export const DefaultDrawerTips = Template.bind({})
DefaultDrawerTips.args = {
  tips: [
    { icon: 'https://via.placeholder.com/32', text: 'Tip 1: Remember to save your work.' },
    { icon: 'https://via.placeholder.com/32', text: 'Tip 2: Check your email regularly.' },
  ],
  rememberText: 'Remember: Always backup your data.',
}
