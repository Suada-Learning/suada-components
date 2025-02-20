import { FormikErrors, FormikTouched } from 'formik'
import { FormEvent } from 'react'

export interface IFilterTypes {
  type?: string
  value?: string
}

/* eslint-disable */
export interface ITextInputProps {
  title?: string
  label?: string
  size?: 'small' | 'medium' | undefined
  icon?: React.ReactElement
  $iconInStart?: boolean
  required?: boolean
  name?: string
  id?: string
  type?: string
  value?: string | number | IFilterTypes | null
  error?: boolean
  errorMessage?: string | string[] | FormikErrors<any> | FormikErrors<any>[]
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
  fullWidth?: boolean
  multiline?: boolean
  rows?: number | string
  validate?: boolean
  disabled?: boolean
  readOnly?: boolean
  min?: number
  max?: number
  onChange?: any
  onBlur?: (
    eventOrPath: string | FormEvent<any>,
  ) => void | ((eventOrTextValue: string | FormEvent<any>) => void)
  onFocus?: (
    eventOrPath: string | FormEvent<any>,
  ) => void | ((eventOrTextValue: string | FormEvent<any>) => void)
  endAdornment?: any
  component?: any
  inputStyle?: React.CSSProperties
  maxCharacter?: number
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  placeholder?: string
  className?: string
  enableAutoComplete?: boolean
}
