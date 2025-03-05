import React, { ReactElement, useState } from 'react'
import colors from './colors'

import { Container, Grid, ColorContainer, ColorContainerInput } from './styled.components'
import { debounce } from 'lodash'
import { IColorPickerParams } from './colorPicker.interface'

export const ColorPicker = ({
  selectedColor,
  setSelectedColor,
}: IColorPickerParams): ReactElement => {
  const [customColor, setCustomColor] = useState('#828282')
  // Debounce the setSelectedColor function
  const debouncedSetSelectedColor = debounce(color => {
    setSelectedColor(color)
  }, 300)

  return (
    <Container>
      <Grid>
        <ColorContainerInput
          color={'#828282'}
          type='color'
          value={selectedColor || customColor}
          onChange={(e): void => {
            setCustomColor(e.target.value)
            debouncedSetSelectedColor(e.target.value)
          }}
        />
        {colors.map(color => (
          <ColorContainer
            key={color}
            color={color}
            onClick={(): void => setSelectedColor(color)}
            className={`${selectedColor && selectedColor === color && 'selected'}`}
            data-testid={`color-container-${color}`}
          />
        ))}
      </Grid>
    </Container>
  )
}
