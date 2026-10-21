import React, { ReactElement, useId } from 'react'
import ReactSelect from 'react-select'
import { StyledLabel } from '../Input/styled-components'
import { CaretDown } from '../../icons'
import { ContainerSelect, customStyles, ErrorMessage } from './DropDown.styles'
import { ISelectFieldProps } from './DropDown.interface'

export const DropDown = (props: ISelectFieldProps): ReactElement => {
  const DropdownIndicator = (): ReactElement => <CaretDown />

  /* react-select names its input from nothing by default: the placeholder is not a label, so
     without one of these the control is anonymous to a screen reader. */
  const generatedId = useId()
  const inputId = props.inputId || `${generatedId}-input`

  return (
    <ContainerSelect error={!!(props.error && props.touched)}>
      {props.label && (
        <StyledLabel htmlFor={inputId} $required={props.required}>
          {props.label}
        </StyledLabel>
      )}
      <ReactSelect
        inputId={inputId}
        aria-label={props.ariaLabel}
        className={props.className}
        isMulti={props.isMulti}
        onChange={props.onChange}
        options={props.options || undefined}
        value={props.value}
        placeholder={props.placeholder}
        styles={props.styles || customStyles}
        isClearable={props.isClearable}
        onFocus={props.onFocus}
        isDisabled={props.isDisabled}
        isLoading={props.isLoading}
        components={{ DropdownIndicator }}
        noOptionsMessage={props.noOptionsMessage}
      />

      {props.touched && props.error && props.errorMessage && (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      )}
    </ContainerSelect>
  )
}
