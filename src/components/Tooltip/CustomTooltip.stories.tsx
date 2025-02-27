import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { CustomTooltip } from './CustomTooltip'

export default {
  title: 'Components/Tooltip',
  component: CustomTooltip,
  decorators: [
    Story => (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<typeof CustomTooltip> = args => <CustomTooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Hover over me to see the tooltip',
  children: <span>Hover over me</span>,
}
