import React, { ReactElement, useRef } from 'react'
import { TextField, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { StyledDatePickerWrapper, classes } from './styled-components'
import { IDatePickerProps } from './datePicker.interface'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
export const DatePicker = ({
  touched,
  error,
  errorMessage,
  value = null,
  onChange = (): void => undefined,
}: IDatePickerProps): ReactElement => {
  const ref = useRef(null)

  return (
    <StyledDatePickerWrapper className={`${error && touched ? 'error' : ''}`} ref={ref}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          className={classes.datePicker}
          // label={label || 'Select'}
          value={typeof value === 'string' ? new Date(value) : value}
          // onChange={handleChange}
          format='dd.MM.yyyy'
          onChange={(date): void => onChange(date)}
          slotProps={{
            popper: {
              anchorEl: ref.current,
            },
          }}
          slots={{
            textField: (params): JSX.Element => (
              <TextField
                {...params}
                variant='outlined'
                error={error && touched}
                InputLabelProps={{
                  style: { top: '-6px' },
                }}
                sx={{
                  '& .MuiIconButton-root': {
                    color: '#08C694',
                  },
                }}
              />
            ),
          }}
          minDate={new Date('1900-01-01')} // Customize as needed
          maxDate={new Date()} // Customize as needed
        />
      </LocalizationProvider>
      {error && touched && (
        <Typography variant='caption' color='error'>
          {errorMessage}
        </Typography>
      )}
    </StyledDatePickerWrapper>
  )
}
