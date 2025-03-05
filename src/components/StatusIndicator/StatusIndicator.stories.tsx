import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { CompanyStatusIndicator, StatusIndicator } from './StatusIndicator'
import { GridStatusEnums } from './status.interface'

export default {
  title: 'Components/StatusIndicator',
  component: StatusIndicator,
  tags: ['autodocs', 'StatusIndicator'],
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: StoryFn<{ status: GridStatusEnums }> = args => <StatusIndicator {...args} />

export const DefaultStatusIndicator = Template.bind({})
DefaultStatusIndicator.args = {
  status: GridStatusEnums.ACTIVE,
}

const CompanyTemplate: StoryFn<{ $isActive: boolean }> = args => (
  <CompanyStatusIndicator {...args} />
)

export const DefaultCompanyStatusIndicator = CompanyTemplate.bind({})
DefaultCompanyStatusIndicator.args = {
  $isActive: true,
}
