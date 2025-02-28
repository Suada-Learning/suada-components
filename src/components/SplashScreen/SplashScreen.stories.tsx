import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { SplashScreen } from './SplashScreen'

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
  title: 'Welcome to the App',
  subTitle: 'This is a subtitle',
  createButton: () => <button>Create</button>,
  marginTop: 20,
  minHeight: '80vh',
  height: 'auto',
  contentMaxWidth: '80%',
  textMarginTop: '10px',
  isSearchOrFilter: false,
}
