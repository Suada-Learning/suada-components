import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,

  tags: ['autodocs', 'checkbox'],
  decorators: [
    Story => (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}
      >
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </div>
    ),
  ],

  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    tooltip: { control: 'text' },
  },
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />

export const Checked = Template.bind({})

Checked.args = {
  checked: true,
  label: 'Checkbox Label',
  tooltip: 'Tooltip Text',
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  checked: false,
  label: 'Checkbox Label',
  tooltip: 'Tooltip Text',
}
