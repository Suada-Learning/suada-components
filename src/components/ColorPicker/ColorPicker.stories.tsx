import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ColorPicker } from './ColorPicker'
import { IColorPickerParams } from './colorPicker.interface'

export default {
  title: 'Components/ColorPicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: ColorPicker,
} as Meta

const Template: StoryFn<IColorPickerParams> = args => <ColorPicker {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedColor: '#000000',
  setSelectedColor: (color: string) => console.log(color),
}
