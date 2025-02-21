import { styled as muiStyles } from '@mui/material/styles'

const PREFIX = 'RangeSlider'

export const classes = {
  root: `${PREFIX}-root`,
}

export const Root = muiStyles('div')({
  [`&.${classes.root}`]: {
    width: '100%',
  },
})
