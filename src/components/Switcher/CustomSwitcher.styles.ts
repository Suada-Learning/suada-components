import { styled } from 'styled-components'

export const StyledLabel = styled.div`
  font-size: 16px;
  font-weight: 550;
`

export const ToolTipContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TooltipTitle = styled.span`
  font-size: 14px;
`

export const HelpIconStyles = {
  color: '#06C68F',
}

export const FormControlLabelStyles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 0,
}

export const FormControlWrapper = styled(ToolTipContainer)`
  color: #06c68f;

  .CustomSwitcher-switchBase {
    &.checked {
      color: #06c68f;
    }
    &.checked + .track {
      background-color: #06c68f;
    }
  }
`
