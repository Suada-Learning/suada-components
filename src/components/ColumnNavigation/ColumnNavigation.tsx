import React, { ReactElement } from 'react'
import { ColumnNavigationContainer, NavigationItem } from './styled-components'
import { IColumnNavigationProps } from './columnNavigation.interface'

export const ColumnNavigation = ({
  tabs,
  activeTab,
  setActiveTab,
}: IColumnNavigationProps): ReactElement => (
  <ColumnNavigationContainer>
    {tabs.map((tab, index) => {
      if (tab) {
        const { label, icon } = tab
        return (
          <NavigationItem
            key={index}
            onClick={(): void => setActiveTab(index)}
            active={activeTab === index}
          >
            <p>{label}</p>
            {icon}
          </NavigationItem>
        )
      }
      return null
    })}
  </ColumnNavigationContainer>
)
