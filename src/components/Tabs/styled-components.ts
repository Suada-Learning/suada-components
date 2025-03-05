import styled from 'styled-components'

export const StyledTabNavigationContainer = styled.div<{
  $isTransparent?: boolean
}>`
  .MuiTabs-indicator {
    top: 0 !important;
    background-color: #0074d9 !important;
  }

  .MuiTab-root {
    min-width: 90px !important;
    width: fit-content !important;
    padding: 0 8px !important;
  }

  .Mui-selected {
    color: #0074d9 !important;
    background-color: #f2f7fb;
  }

  .MuiPaper-root {
    border: none !important;
  }

  background: ${({ $isTransparent }): string => ($isTransparent ? 'transparent' : '#fff')};

  & > header {
    background-color: ${({ $isTransparent }): string =>
      $isTransparent ? 'transparent ' : '#FFFFFF'};
    padding-left: 16px;
  }

  & > header > .MuiTabs-root > .MuiTabs-fixed {
    overflow: auto !important;
  }
`
