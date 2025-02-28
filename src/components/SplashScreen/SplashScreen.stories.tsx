import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { SplashScreen } from './SplashScreen'
import { Button } from '../Button'

export default {
  title: 'Components/SplashScreen',
  component: SplashScreen,
  tags: ['autodocs', 'SplashScreen'],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} as Meta

const Template: StoryFn<typeof SplashScreen> = args => <SplashScreen {...args} />

export const DefaultSplashScreen = Template.bind({})
DefaultSplashScreen.args = {
  title: 'You don’t have any groups yet.',
  subTitle: 'As soon as you add a group, it will appear here',
  createButton: () => <Button type='primary' size='small' label='Create Group' />,
  marginTop: 20,
  minHeight: '80vh',
  height: 'auto',
  contentMaxWidth: '80%',
  textMarginTop: '10px',
  isSearchOrFilter: false,
}
