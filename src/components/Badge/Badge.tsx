import React, { ReactElement } from 'react'
import { EditButton, Wrapper } from './styled-components'
import { Edit } from '../../icons'

export const Badge = ({
  src,
  onEditClick,
}: {
  src: string
  onEditClick: () => void
}): ReactElement => {
  if (!src) return <></>
  return (
    <Wrapper>
      <img src={src} />
      <EditButton onClick={onEditClick}>
        <Edit style={{ color: '#fff' }} />
      </EditButton>
    </Wrapper>
  )
}
