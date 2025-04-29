export interface IDatePickerProps {
  error?: boolean
  errorMessage?: string
  name?: string
  label?: string
  touched?: boolean
  value?: Date | string | null
  onChange?: (date: Date | null) => void
  styles?: React.CSSProperties
  format?: string
  minDate?: Date | string
  maxDate?: Date | string
}
