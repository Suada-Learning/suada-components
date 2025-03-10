import React, { ReactElement } from 'react'
import ReactSelect from 'react-select'
import { StyledLabel } from '../Input/styled-components'
import { CaretDown } from '../../icons'
import { ContainerSelect, customStyles, ErrorMessage } from './DropDown.styles'
import { ISelectFieldProps } from './DropDown.interface'

export const DropDown = (props: ISelectFieldProps): ReactElement => {
  const DropdownIndicator = (): ReactElement => <CaretDown />

  return (
    <ContainerSelect error={!!(props.error && props.touched)}>
      {props.label && <StyledLabel $required={props.required}>{props.label}</StyledLabel>}
      <ReactSelect
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
      />

      {props.touched && props.error && props.errorMessage && (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      )}
    </ContainerSelect>
  )
}
