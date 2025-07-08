import { styled } from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  .MuiPagination-ul {
    flex-wrap: nowrap;
  }
  .MuiPaginationItem-root {
    background: #ffffff;
    border: 1px solid #e7e9ed !important;
    border-radius: 4px !important;
    width: 32px !important;
    height: 32px !important;
    padding: 6px 6px !important;

    &:hover {
      border: 1px solid #cdccd0;
      background-color: #ffffff;
    }

    &.Mui-selected {
      background: ${({ theme }) => theme.colors.primary};
      color: white;

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        border: none;
      }
    }
  }
`
