import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  component: Badge,
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = args => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxdUf7Wbdggm-utxlTr34w-nqSDOPHFIiWw&s',
  onEditClick: () => console.log('Edit clicked'),
}
