import React, { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ExpansionMenuItem, ExpansionMenuItemList } from './styled-components'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/system'
import { IExpansionItemProps } from './ExpansionItem.interface'

const ExpansionPanelCustom = styled(Accordion)(() => ({
  backgroundColor: 'transparent',
  color: '#06c68f',
  padding: '4px 8px',

  boxShadow: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0 !important',
  },

  '& .MuiAccordionSummary-root': {
    height: '44px !important',
    minHeight: 'unset !important',
  },
}))

const ExpansionPanelSummaryCustom = styled(AccordionSummary)(() => ({
  fontSize: '14px',
  backgroundColor: 'transparent',
  color: 'black',
  borderRadius: '4px',
  padding: '10px 14px',

  '.MuiAccordionSummary-content': {
    margin: '0 !important',
  },

  '& svg': {
    color: '#ababab !important',
  },
  transition: 'color .3s ease',

  '&:hover': {
    backgroundColor: '#EAF5F2',
  },
  '& .MuiIconButton-root': {
    color: 'inherit',
  },
}))

const ExpansionPanelDetailsCustom = styled(AccordionDetails)(() => ({
  color: 'black ',
  padding: '0',

  '& a:hover': {
    backgroundColor: '#EAF5F2',
    color: 'black',
  },
  '& a.active': {
    backgroundColor: '#EAF5F2',
    color: '#06c68f',

    '& svg path': {
      fill: '#06c68f',
    },
  },
}))

const Typo = styled(Typography)(() => ({
  display: 'flex',
  fontSize: '16px',
  fontFamily: 'Open Sans',
  fontWeight: '500',
}))

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 15,
  },
  navlink: {
    '&:hover': {
      backgroundColor: '#EAF5F2',
    },
  },
  closed: {
    visibility: 'hidden',
  },
}))

const ExpansionNavMenu = (props: IExpansionItemProps): ReactElement => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState('')
  const classes = useStyles()

  return (
    <>
      {props.item.canView && (
        <ExpansionPanelCustom
          square
          expanded={expanded === `panel${props.index}`}
          onChange={(_, newExpanded): void => setExpanded(newExpanded ? `panel${props.index}` : '')}
          key={props.index}
        >
          <ExpansionPanelSummaryCustom
            aria-controls='panel3d-content'
            id='panel3d-header'
            expandIcon={props.isOpened ? <ExpandMoreIcon /> : false}
          >
            <Typo>
              {props.item.icon}
              {props.isOpened && (
                <span className={classes.root}>{t(`navigation.${props.item.title}`)}</span>
              )}
            </Typo>
          </ExpansionPanelSummaryCustom>
          <ExpansionPanelDetailsCustom>
            <ExpansionMenuItemList>
              {props.item.children?.map((i, index: number) => {
                return (
                  <React.Fragment key={index}>
                    {i.canView && (
                      <ExpansionMenuItem $isOpened={props.isOpened as boolean} key={index}>
                        <NavLink to={i.path || ''}>
                          {i.icon}
                          {props.isOpened && (
                            <span className={classes.root}>{t(`navigation.${i.title}`)}</span>
                          )}
                        </NavLink>
                      </ExpansionMenuItem>
                    )}
                  </React.Fragment>
                )
              })}
            </ExpansionMenuItemList>
          </ExpansionPanelDetailsCustom>
        </ExpansionPanelCustom>
      )}
    </>
  )
}

export default ExpansionNavMenu
