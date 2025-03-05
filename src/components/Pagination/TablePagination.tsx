import React, { ReactElement } from 'react'
import { default as MUITablePagination } from '@mui/material/TablePagination'
import { useTranslation } from 'react-i18next'
import { styled } from 'styled-components'

interface ITablePaginationV2Props {
  currentPage: number
  rowsPerPage: number
  count: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  rowsPerPageOptions?: number[]
}

const TablePagination = ({
  currentPage,
  rowsPerPage,
  count,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPageOptions,
}: ITablePaginationV2Props): ReactElement => {
  const { t } = useTranslation()
  return (
    <StyledDiv>
      <MUITablePagination
        count={count}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={`${t('grid.rows_per_page')}:`}
        rowsPerPageOptions={rowsPerPageOptions || [10, 25, 50, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledDiv>
  )
}

export default TablePagination

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #fff;
  border-radius: 0 0 14px 14px;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`
