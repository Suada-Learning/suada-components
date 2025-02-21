import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;

  &.error label {
    color: #f44336;
  }

  &.error .MuiInputBase-root::before {
    border-bottom: 2px solid #f44336;
  }

  div > p,
  > p {
    position: absolute;
    bottom: -26px;
    color: #f44336;
    font-size: 0.75rem;
  }
`

const PREFIX = 'DatePicker'

export const classes = {
  datePicker: `${PREFIX}-datePicker`,
}

export const StyledDatePickerWrapper = styled('div')(() => ({
  [`& .${classes.datePicker}`]: {
    marginTop: 0,
    width: '100%',
    '& .MuiOutlinedInput-root': {
      height: '40px',
    },
  },
}))
