import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { TabPanel, TabNavigation, activeTabClassName } from './Tabs'
import { ITabPanelProps } from './tabs.interface'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default {
  title: 'Components/Tabs',
  component: TabPanel,
  tags: ['autodocs', 'Tabs'],
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: StoryFn<ITabPanelProps> = args => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <TabNavigation>
      <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
        <Tab label='Tab 1' {...activeTabClassName(0)} />
        <Tab label='Tab 2' {...activeTabClassName(1)} />
        <Tab label='Tab 3' {...activeTabClassName(2)} />
      </Tabs>
      <TabPanel {...args} value={value} index={0}>
        Groups
      </TabPanel>
      <TabPanel {...args} value={value} index={1}>
        Students
      </TabPanel>
      <TabPanel {...args} value={value} index={2}>
        Coaches
      </TabPanel>
    </TabNavigation>
  )
}

export const DefaultTabs = Template.bind({})
DefaultTabs.args = {
  padding: 3,
}
