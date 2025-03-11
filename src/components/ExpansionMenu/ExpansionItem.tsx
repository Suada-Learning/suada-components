import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { IExpansionItemProps } from './ExpansionItem.interface'
import {
  StyledExpansionPanel,
  StyledExpansionPanelSummary,
  StyledTypography,
} from './styled-components'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'

const ExpansionItem = ({ item, index, isOpened }: IExpansionItemProps): ReactElement => {
  const { t } = useTranslation()

  if (!item.canView) return <></>

  return (
    <StyledExpansionPanel className='expansionPanel' $isOpened={isOpened as boolean} key={index}>
      {item.openInNewTab ? (
        <a href={item.path} target='_blank'>
          <StyledExpansionPanelSummary>
            <StyledTypography>
              {item.icon}
              {isOpened && <span>{t(`navigation.${item.title}`)}</span>}
            </StyledTypography>
          </StyledExpansionPanelSummary>
        </a>
      ) : (
        <NavLink to={item.path as string}>
          <StyledExpansionPanelSummary>
            <StyledTypography>
              {item.icon}
              {isOpened && <span>{t(`navigation.${item.title}`)}</span>}
            </StyledTypography>
          </StyledExpansionPanelSummary>
        </NavLink>
      )}
    </StyledExpansionPanel>
  )
}

export default ExpansionItem
