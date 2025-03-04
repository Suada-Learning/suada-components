import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { IRadioButtonProps } from './radioButton.interface'
import { RadioButton } from './RadioButton'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs', 'RadioButton'],
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: StoryFn<IRadioButtonProps> = args => {
  const [selectedValue, setSelectedValue] = useState<string>('option1')

  const handleChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <div>
      <RadioButton
        {...args}
        value='option1'
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      <RadioButton
        {...args}
        value='option2'
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
    </div>
  )
}

export const DefaultRadioButton = Template.bind({})
DefaultRadioButton.args = {
  ariaLabel: 'Radio button',
}
