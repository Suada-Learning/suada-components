import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { IPhoneCountryCodeProps } from './phoneCountryCode.interface'
import { PhoneCountryCode } from './PhoneCountyCode'

export default {
  title: 'Components/PhoneCountryCode',
  component: PhoneCountryCode,
  tags: ['autodocs', 'phoneCountryCode'],
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<IPhoneCountryCodeProps> = args => <PhoneCountryCode {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Phone Number',
  selectLabel: 'Select Country',
  inputLabel: 'Enter number',
  selectValue: null,
  inputValue: '',
  selectChange: () => {},
  inputChange: () => {},
  touched: false,
  error: false,
  errorMessage: '',
}
