import React, { ReactElement } from 'react'
import { Pagination as MUIPagination } from '@mui/material'
import { Select } from '@mui/material'
import { IPaginationV2Props } from './pagination.interface'
import { PaginationWrapper } from './styled-components'

export const Pagination = ({
  currentPage,
  totalPages,
  handleChange,
  perPage,
  themeColor,
  handlePerPageChange,
}: IPaginationV2Props): ReactElement => {
  return (
    <PaginationWrapper $themeColor={themeColor}>
      {perPage && (
        <Select
          variant='standard'
          native
          value={perPage}
          onChange={handlePerPageChange}
          inputProps={{
            name: 'perPage',
            id: 'perPage',
          }}
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={48}>48</option>
        </Select>
      )}
      <MUIPagination
        count={totalPages}
        shape='rounded'
        variant='outlined'
        page={currentPage}
        onChange={handleChange}
      />
    </PaginationWrapper>
  )
}
