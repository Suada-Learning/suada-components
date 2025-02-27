import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { IStyledIconProps } from './tile.interface'

export const CardContainer = styled.div`
  position: relative;
`

export const StyledCard = styled(Card)`
  padding: 16px;
  height: 88px;
  border-radius: 4px;
  border: 1px solid #d6dae0;
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  background-color: #fff;
  box-shadow: none !important;
`

export const StyledIcon = styled.div<IStyledIconProps>`
  width: 56px;
  height: 56px;
  border-radius: var(--Padding-4px, 4px);
  background: ${({ $backgroundColor }): string => $backgroundColor};
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ color }): string => color || '#000000'};
  svg {
    width: 23.172px;
    height: 23.172px;
    flex-shrink: 0;
    color: ${({ color }): string => color || '#000000'};
  }
`
export const TextWrapper = styled.div``
export const StyledCardContent = styled(CardContent)<{ gap: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: ${({ gap }): number => gap || 20}px;
  padding-bottom: 0 !important;
  padding: 10px !important;
  background: #fff;
  .MuiFab-sizeSmall {
    width: 36px !important;
    height: 36px !important;
  }
`
export const HeaderText = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`
export const NumberText = styled.span`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  height: 22px;
  align-items: center;
`
export const Container = styled.div<{ ref?: React.RefObject<HTMLDivElement> }>`
  position: absolute;
  bottom: 28px;
  left: -22px;
  transform: translateY(100%);
  width: 300px;
  background: #fff;
  z-index: 5;
`
