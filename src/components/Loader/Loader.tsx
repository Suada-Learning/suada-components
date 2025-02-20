import React, { ReactElement } from 'react'

import { LoaderCircle, StyledLoaderWrapper } from './styled-components'
import CircularProgress from '@mui/material/CircularProgress'
import { ILoaderProps } from './loader.interface'

export const Loader = ({
  width = '40px',
  height = '40px',
  withBackground = false,
}: ILoaderProps): ReactElement => {
  return (
    <StyledLoaderWrapper className={`${withBackground ? 'withBackground' : ''}`}>
      <LoaderCircle>
        <CircularProgress style={{ width, height }} />
      </LoaderCircle>
    </StyledLoaderWrapper>
  )
}
