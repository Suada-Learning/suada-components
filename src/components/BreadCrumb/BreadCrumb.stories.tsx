import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof Breadcrumb> = args => <Breadcrumb {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    { label: 'Home', link: '/', icon: null, state: {} },
    { label: 'Category', link: '/category', icon: null, state: {} },
    { label: 'Subcategory', link: '/category/subcategory', icon: null, state: {} },
  ],
}
