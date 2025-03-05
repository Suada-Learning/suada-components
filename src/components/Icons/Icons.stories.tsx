import React from 'react'
import { Meta } from '@storybook/react'
import * as Icons from '../../icons/index'

export default {
  title: 'Icons',
} as Meta

export const AllIcons = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <Icon style={{ width: 40, height: 40 }} />
          <p style={{ fontSize: 12 }}>{name}</p>
        </div>
      ))}
    </div>
  )
}
