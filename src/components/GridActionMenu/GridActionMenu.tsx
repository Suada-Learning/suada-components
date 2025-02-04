import React, { ReactElement, useState } from 'react'
import Popover from '@mui/material/Popover'
import { Container, ActionsContent, StyledIconButton } from './GridActionMenu.styles'
import { IGridActionMenuProps } from './gridActionMenu.interface'
import MoreVertRoundedIcon from '../../svg/MoreVertRoundedIcon'

export const GridActionMenu = (props: IGridActionMenuProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event: React.BaseSyntheticEvent): void => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <div>
      {props.actionConfig && props.actionConfig.length > 0 && (
        <Container onClick={(e): void => e.stopPropagation()}>
          <div onClick={handleClick}>
            {props.button ?? (
              <StyledIconButton className='more'>
                {props.icon ?? <MoreVertRoundedIcon />}
              </StyledIconButton>
            )}
          </div>

          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={(): void => {
              setAnchorEl(null)
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <ActionsContent>
              {props?.actionConfig?.map((i, index) => (
                <div key={index} onClick={(): void => setAnchorEl(null)}>
                  {i.render(props.row)}
                </div>
              ))}
            </ActionsContent>
          </Popover>
        </Container>
      )}
    </div>
  )
}
