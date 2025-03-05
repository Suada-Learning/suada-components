import styled from 'styled-components'
import { Theme } from '@mui/material/styles'
import { styled as muiStyled } from '@mui/system'

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &.withBackground {
    background: rgba(255, 255, 255, 1);
  }
`

export const LoaderCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
