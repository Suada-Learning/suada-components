import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Tile } from './Tile'
import { UserActivity } from '../../icons'

export default {
  title: 'Components/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta

const Template: StoryFn<typeof Tile> = args => <Tile {...args} />

export const Default = Template.bind({})
Default.args = {
  customCardStyles: { width: '400px' },
  $backgroundColor: 'lightblue',
  iconColor: 'darkblue',
  gap: 10,
  value: '10',
  text: 'Sample Tile',
  icon: <UserActivity />,
}
