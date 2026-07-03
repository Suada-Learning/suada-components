import styled from 'styled-components'

import { StyledQualityMenuProps } from './QualityMenu.interface'
import { DropdownHorizontalPositionEnum, DropdownVerticalPositionEnum } from './useMenuToggle'

export const StyledQualityMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > svg {
    cursor: pointer;
  }
`

export const StyledQualityMenu = styled.div<StyledQualityMenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(71, 85, 105, 0.12);
  width: 200px;
  max-height: 280px;
  ${({ $position }): string => `
    ${
      $position.vertical === DropdownVerticalPositionEnum.Top
        ? 'bottom: calc(100% + 8px);'
        : 'top: calc(100% + 8px);'
    }
    ${
      $position.horizontal === DropdownHorizontalPositionEnum.Left
        ? 'right: calc(100% + 8px);'
        : 'left: calc(100% + 8px);'
    }
  `}
  padding: 8px 16px;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  overflow: auto;

  & > h2 {
    ${{ fontStyle: 'labelM' }}
    color: #0f172a;
  }

  @media screen and (max-width: 1500px) {
    width: 170px;
    gap: 10px;

    & > h2 {
      ${{ fontStyle: 'bodyS' }}
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 150px;
    gap: 8px;
  }
`

export const StyledQualityItem = styled.p`
  ${{ fontStyle: 'labelM' }}
  font-weight: 400;
  color: #020210;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);

  @media screen and (max-width: 1500px) {
    ${{ fontStyle: 'bodyS' }}
  }
`
