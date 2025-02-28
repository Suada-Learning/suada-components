import React, { ReactElement } from 'react'
import AddMore from './add-more.png'
import { ImageContainer } from './styled-components'

const Presentation = (): ReactElement => {
  return (
    <ImageContainer>
      <img src={AddMore} alt='Add More' />
    </ImageContainer>
  )
}

export default Presentation
