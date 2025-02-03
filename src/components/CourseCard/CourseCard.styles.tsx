import styled from 'styled-components'
import { styled as MUIStyled } from '@mui/material/styles'
import { Typography } from '@mui/material'

// CourseLayout

export const ModalRef = styled.span``

export const GridItemContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const GridItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;

  transition: color 0.3s ease;
`

export const DeleteSpan = styled.span`
  color: #ea382a;
`

export const DisabledTypography = styled(Typography)`
  color: #7a7a7a;
  opacity: 0.7;
`
export const ActionConfig = styled.div<{
  disabled?: boolean
  $hoverColor?: string
  hoverBackground?: string
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  transition: 0.3s ease;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    /* background: ${({ hoverBackground }): string => hoverBackground || 'rgba(0, 0, 0, 0.1)'}; */
    ${({ $hoverColor }): string | undefined =>
      $hoverColor &&
      `svg path {
          fill: ${$hoverColor};
           }`}
  }
  svg {
    font-size: 1rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export const ToolbarItemWrapper = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  width: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const ContentWrapper = styled.div<{ $isGrid: boolean }>`
  margin-top: 30px;

  ${({ $isGrid }): string =>
    !$isGrid
      ? `
      .card {
          grid-template-columns:none
      }
    `
      : `
      .card {
        display: grid;
        grid-template-columns: repeat(4, 1fr);


        @media (max-width: 1450px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `}
`

export const CardActionBar = styled.div<{ $switched: boolean }>`
  width: 100%;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  padding: 6px;
  ${({ $switched }): string =>
    $switched
      ? `
    top: 0px;
    left: 0px;
    grid-template-columns: 1fr 35px;
  `
      : `
    bottom: 0px;
    right: 0px;
    justify-content: end;
    grid-template-columns: 35px 35px;
  `}
  .action_block {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`

export const StylesCardWrapper = styled.div<{ $canOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({ $canOpen }: { $canOpen: boolean }): string => ($canOpen ? 'pointer' : 'default')};
  height: 100%;
  border-radius: 12px !important;
  &:hover {
    .action_block {
      background: rgba(255, 255, 255, 0.59) !important;
    }
  }
`

export const StyledChecked = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgb(0 0 0 / 23%);
`

export const VideoProcessingContainer = styled.div`
  position: relative;
  cursor: pointer;
  .icon_button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const CourseStatusContainer = styled.div<{ $status: boolean }>`
  color: #fff;
  height: 32px;
  padding: 4px 12px;
  text-transform: capitalize;
  border-radius: 4px;
  background: ${({ $status }): string => (!$status ? '#EA382A' : '#00905E')};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 13px;
  }
`

export const TooltipContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    font-size: 14px;
    margin-bottom: 5px;
  }
  div {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .tooltip-text {
      font-size: 12px;
      margin-top: 5px;
      text-align: center;
    }
  }
`
export const StyledCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column !important;
  align-self: flex-end;
  gap: 10px;
  padding-bottom: 10px;
`

export const StyledActionsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  width: 100%;
`

export const StyledActionItem = styled.span<{
  disabled?: boolean
  color?: string
}>`
  display: flex;
  align-items: center;
  height: 14px;
  cursor: ${({ disabled }: { disabled?: boolean }): string => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }: { disabled?: boolean }): string => (disabled ? '#ccc' : '#68707a')};
  font-size: 14px;
  padding-bottom: 10px;
  width: 100%;
  justify-content: center;
  gap: 8px;
  padding: 12px 4px;
  svg path {
    fill: ${({ disabled }: { disabled?: boolean }): string => (disabled ? '#ccc' : '#68707a')};
    width: 16px;
    height: 16px;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: ${({ disabled, color = '#68707a' }): string => (disabled ? '#ccc' : color)};
    svg path {
      fill: ${({ disabled, color = '#68707a' }): string => (disabled ? '#ccc' : color)};
    }
  }
`

export const StyledCourseContent = styled.span`
  color: #20a8c6;
  font-size: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #edf8fa;
`

export const ItemBlock = styled.div`
  text-transform: capitalize;
`
export const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`

// gridConfig

export const StyledCourseCardContent = styled.span`
  color: #20a8c6;
  font-size: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #edf8fa;
`

export const GridItemLessons = styled.div<{ checked?: boolean }>`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-direction: row !important;
  padding-left: 16px;

  // when card is checked
  span {
    background: ${(props): string => (props.checked ? 'none' : '#edf8fa')};
    color: ${(props): string => (props.checked ? '#333333' : '#20a8c6')};
  }
  > div {
    font-size: 12px;
    position: relative;
    padding-left: 12px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
    }

    :not(:last-child) {
      margin-right: 10px;
    }
  }
`
export const StyledToolTipContainer = styled.div`
  width: 100%;
`

export const Action = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  transition: 0.3s ease;
  border-radius: 5px;
  opacity: ${({ disabled }: { disabled?: boolean }): string => (disabled ? '0.5' : '1')};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  svg {
    font-size: 1rem;
    margin-right: 6px;
    width: 20px;
    height: 20px;
  }
  svg path {
    width: 20px;
    height: 20px;
    fill: #717882;
  }
  /* .MuiTypography-body1 {
    font-size: 0.875rem;
  } */
`
export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 20px 0 0;
  text-transform: capitalize;
`

export const GridItemContent = styled.section`
  position: relative;
  z-index: 100;
  font-size: 16px;
  color: #333;
  padding: 16px;
`

export const GridItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const GridTableWrapper = styled.div`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
  padding: 16px;

  th:last-child {
    width: 10px;
  }
`

export const StyledPagination = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-right: 40px;
  margin-left: 16px;
  margin-bottom: 16px;
  margin-top: 20px;
`

export const GridItemImage = styled.figure`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    transition: transform 0.3s ease;
  }
`

export const GridItem = styled.div<{ $isFromUser?: boolean }>`
  display: flex;
  overflow: hidden;
  flex-direction: column;

  &:hover {
    img {
      transform: scale(1.2);
    }

    h3 {
      color: #06c68f;
    }
  }

  ${({ $isFromUser }): string =>
    ($isFromUser &&
      `
  figure {
    position: relative;
    &:after {
      content: 'View Analytics';
      position: absolute;
      top: 0;
      opacity: 0;
      color: #06c68f;
      left: 0;
      font-size: 24px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 100%;
      transition: opacity 0.3s ease;
      z-index: 10;
    }
  }

  &:hover {
    figure {
      &:after {
        opacity: 1;
      }
    }
  }
  `) ||
    ''}
`

export const Root = MUIStyled('div')(({ theme }) => ({
  [`& .CourseLayout-paper`]: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
