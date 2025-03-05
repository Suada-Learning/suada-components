import React, { ReactElement } from 'react'
import {
  Field,
  ValidationIcon,
  StyledComponentContainer,
  CharactersContainer,
  Title,
} from './styled-components'
import TextField from '@mui/material/TextField'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import './Input.scss'
import { ITextInputProps } from './Input.interface'

const TextInput = ({
  title,
  label,
  size,
  icon,
  name,
  id = 'standard-basic',
  type,
  value,
  error,
  errorMessage,
  touched,
  fullWidth,
  onChange,
  onBlur,
  min,
  max,
  onFocus,
  multiline,
  rows,
  variant = 'outlined',
  validate = true,
  disabled = false,
  readOnly = false,
  endAdornment,
  component,
  inputStyle,
  maxCharacter,
  required = false,
  $iconInStart = true,
  placeholder = '',
  className = '',
  enableAutoComplete = false,
}: ITextInputProps): ReactElement => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (maxCharacter && event.target.value.length <= maxCharacter) {
      onChange(event)
    }
  }
  const lpIgnore = !enableAutoComplete

  return (
    <Field className={fullWidth ? 'full' : ''} $iconInStart={$iconInStart && !!icon}>
      {title && <Title $required={required}>{title}</Title>}
      <TextField
        error={touched && error ? true : false}
        helperText={touched && error ? (errorMessage as string) : ''}
        id={id}
        label={label}
        variant={variant}
        size={size}
        name={name}
        type={type}
        value={value}
        onChange={maxCharacter ? handleInputChange : onChange}
        required={required}
        onBlur={onBlur}
        onFocus={onFocus}
        style={{ width: '100%' }}
        multiline={multiline}
        rows={rows}
        disabled={disabled}
        InputProps={{
          readOnly,
          endAdornment,
          style: inputStyle,
          inputProps: {
            min,
            max,
            'data-1p-ignore': lpIgnore,
            'data-lpignore': lpIgnore.toString(),
          },
        }}
        inputProps={{
          maxLength: maxCharacter,
        }}
        // The string 'off-unique' is used here because some extensions do not recognize it.
        // This allows the field to behave as if 'off' was set. Using 'off' directly still triggers Google's autoComplete.
        autoComplete={enableAutoComplete ? 'on' : 'off-unique'}
        placeholder={placeholder}
        className={className}
      />
      {maxCharacter && typeof value === 'string' && (
        <CharactersContainer>
          {value?.length ? maxCharacter - value?.length : maxCharacter} - {maxCharacter} symbols
          remaining
        </CharactersContainer>
      )}
      {touched && validate && (
        <ValidationIcon className={`${error ? 'error' : 'valid'}`}>
          {error ? <ErrorOutlineRoundedIcon /> : <CheckCircleOutlineRoundedIcon />}
        </ValidationIcon>
      )}
      {icon && icon}

      {component ? <StyledComponentContainer>{component}</StyledComponentContainer> : null}

      {}
    </Field>
  )
}

export default TextInput
