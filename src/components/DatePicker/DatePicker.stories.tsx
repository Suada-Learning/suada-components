import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { IDatePickerProps } from './datePicker.interface'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ padding: '20px', maxWidth: '300px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<IDatePickerProps> = args => <DatePicker {...args} />

export const Default = Template.bind({})
Default.args = {
  touched: false,
  error: false,
  errorMessage: '',
  value: null,
  onChange: () => {},
}
