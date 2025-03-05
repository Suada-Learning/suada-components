import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { IColumnNavigationProps } from './columnNavigation.interface'
import { ColumnNavigation } from './ColumnNavigation'
import { Home, Settings } from '@mui/icons-material'

export default {
  title: 'Components/ColumnNavigation',
  component: ColumnNavigation,
  tags: ['autodocs', 'CourseNavigation'],
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: StoryFn<IColumnNavigationProps> = args => {
  const [activeTab, setActiveTab] = useState(0)
  return <ColumnNavigation {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
}

export const DefaultColumnNavigation = Template.bind({})
DefaultColumnNavigation.args = {
  tabs: [
    { label: 'Home', icon: <Home /> },
    { label: 'Settings', icon: <Settings /> },
  ],
}
