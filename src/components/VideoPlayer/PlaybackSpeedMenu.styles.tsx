import styled from 'styled-components'

import { StyledPlaybackMenuProps } from './PlaybackSpeedMenu.interface'
import { DropdownHorizontalPositionEnum, DropdownVerticalPositionEnum } from './useMenuToggle'

export const StyledPlaybackMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > svg {
    cursor: pointer;
  }
`

export const StyledPlaybackMenu = styled.div<StyledPlaybackMenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(71, 85, 105, 0.12);
  width: 220px;
  height: 312px;
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
  overflow: scroll;

  & > h2 {
    ${{ fontStyle: 'labelM' }}
    color: #0f172a;
  }

  @media screen and (max-width: 1500px) {
    width: 180px;
    height: 250px;
    gap: 12px;

    & > h2 {
      ${{ fontStyle: 'bodyS' }}
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 140px;
    height: 200px;
    gap: 8px;
  }
`

export const StyledPlaybackSpeedItem = styled.p`
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
