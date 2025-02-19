import styled from 'styled-components'

// ExpansionNavMenu

export const ExpansionMenuItemList = styled.ul`
  width: 100%;
  padding: 0;
`

export const ExpansionMenuItem = styled.li<{ $isOpened: boolean }>`
  & > a {
    border-radius: 4px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 14px;
    font-size: 16px;
    margin-block: 4px;
    transition: all 0.3s ease;
    font-family: 'Open Sans';
    font-weight: 500;
    color: #020210;
    transition: 0.3s ease;

    &:hover {
      color: #06c68f;
    }
    &.active {
      background-color: #06c68f;
      color: white;
    }
  }
`

// NavigationBar

export const Container = styled.div<{ $isOpened: boolean }>`
  width: ${({ $isOpened }): string => ($isOpened ? `240px` : `70px`)};
  max-height: 80vh;
  overflow-y: auto;
`

export const StyledExpansionPanel = styled.div<{ $isOpened: boolean }>`
  padding: 4px 8px;
  display: flex;
  width: 100%;
  transition: all 0.3s ease;

  & > a {
    transition: all 0.3s ease;
    color: #ababab;
    width: 100%;

    & > div {
      transition: all 0.3s ease;

      & svg path {
        transition: all 0.3s ease;
      }
    }
  }

  & > a.active {
    color: white;
  }
  & > a.active > div {
    background-color: #eaf5f2;
    color: #06c68f;
    & svg path {
      fill: #06c68f;
    }
  }
`

export const StyledExpansionPanelSummary = styled.div`
  width: 100%;
  transition: color 0.3s ease;
  border-radius: 4px;
  color: black;
  padding: 10px 14px;

  &:hover {
    background-color: #eaf5f2;
  }
`

export const StyledTypography = styled.div`
  display: flex;
  max-height: 40px;
  width: 100%;
  gap: 14px;
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: 500;
`
