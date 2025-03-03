import React, { ReactElement } from 'react'
import { StyledTabNavigationContainer } from './styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ITabPanelProps } from './tabs.interface'

export const TabPanel = (props: ITabPanelProps): ReactElement => {
  const { children, value, index, padding = 3, ...other } = props

  return (
    <Typography
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box bgcolor='#f5f6fa' p={padding}>
          {children}
        </Box>
      )}
    </Typography>
  )
}

export const activeTabClassName = (index: number | string): object => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const TabNavigation = (props: {
  children: React.ReactNode
  transparent?: boolean
  style?: React.CSSProperties
}): ReactElement => {
  return (
    <StyledTabNavigationContainer $isTransparent={props.transparent} style={props.style}>
      {props.children}
    </StyledTabNavigationContainer>
  )
}
