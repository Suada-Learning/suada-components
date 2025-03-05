// Tooltip.stories.tsx
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { TooltipHeight } from './TooltipHeight'

export default {
  title: 'Components/Tooltip',

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'add some text in text field'],
  component: TooltipHeight,
} as Meta

const Template: StoryFn = args => <TooltipHeight {...args} />

export const DefaultTooltip = Template.bind({})
DefaultTooltip.args = {
  children: <span> hover over me to see 2 line tooltip sfafas</span>,
  title: 'Tooltip text',
  text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  lines: 1,
}
