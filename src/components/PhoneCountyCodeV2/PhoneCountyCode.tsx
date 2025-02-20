import React, { useState, useEffect, ReactElement } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { Container, InputContainer, Input, Label, ErrorMessage, Flex } from './styled-components'
import countryList from './countryCode'
import ReactSelect, { components, OptionProps, ValueType } from 'react-select'
import { IComponentProps, IPhoneCountryCodeProps } from './phoneCountryCode.interface'
import { ISelectFilterOption } from '../CourseCard/CourseCard.interface'

export const PhoneCountryCode = ({
  label,
  selectLabel,
  selectValue,
  selectChange,
  inputLabel,
  inputValue,
  inputChange,
  touched,
  error,
  errorMessage,
}: IPhoneCountryCodeProps): ReactElement => {
  const [selectedCountry, setSelectedCountry] = useState<ISelectFilterOption | null>(null)

  const { Option } = components

  // Custom option component for the select dropdown
  const CustomSelectOption = (props: OptionProps<ISelectFilterOption, false>): ReactElement => (
    <Option {...props}>
      <ReactCountryFlag countryCode={props.data.value} /> {props.data.label}
    </Option>
  )

  // Map country list to select options
  const countryOptions = countryList().map(country => ({
    label: country.dial_code,
    value: country.code,
  })) as ISelectFilterOption[]

  // Component to display country flag and dial code
  const CountryDisplay = ({ dialCode, code }: IComponentProps): ReactElement => (
    <div>
      <ReactCountryFlag countryCode={code} /> {dialCode}
    </div>
  )

  useEffect(() => {
    if (selectValue && selectValue.value) {
      setSelectedCountry({
        label: <CountryDisplay dialCode={selectValue.label as string} code={selectValue.value} />,
        value: selectValue.value,
      })
    }
  }, [selectValue])

  const handleSelectChange = (selectedOption: ValueType<ISelectFilterOption, false>): void => {
    if (!selectedOption) {
      setSelectedCountry(null)
      selectChange(null)
      return
    }
    setSelectedCountry({
      label: (
        <CountryDisplay dialCode={selectedOption.label as string} code={selectedOption.value} />
      ),
      value: selectedOption.value,
    })
    selectChange(selectedOption)
  }

  const errorField = touched && error && errorMessage

  // Handle input change to allow only numeric values
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value
    if (/^\d*$/.test(newValue)) {
      inputChange(e)
    }
  }

  return (
    <Flex>
      <InputContainer>
        <ReactSelect
          placeholder={selectLabel}
          options={countryOptions}
          value={selectedCountry}
          onChange={handleSelectChange}
          components={{ Option: CustomSelectOption }}
          isClearable
        />
      </InputContainer>
    </Flex>
  )
}
