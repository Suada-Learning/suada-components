import { CSSProperties } from 'react'
import { MUIElementState } from './DropDown.interface'

export const customStyles: object = {
  option: (provided: CSSProperties, state: MUIElementState) => ({
    ...provided,
    '&:hover': {
      backgroundColor: 'rgba(6, 198, 144, 0.1)',
    },
    backgroundColor: state.isSelected ? 'rgba(6, 198, 144, 0.3)' : 'transparent',
    color: '#000',
    fontFamily: "'Helvetica neue', sans-serif",
    borderRadius: '6px',
  }),
  control: (provided: CSSProperties, state: MUIElementState) => ({
    ...provided,
    borderRadius: '6px',
    transition: 'border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in',
    boxShadow: '0 1px 9px 5px rgb(0 0 0 / 3%)',
    outline: 'none',
    borderColor: state.isFocused ? '#06c68f !important' : 'rgba(0, 0, 0, 0.1)',
    fontFamily: "'Helvetica neue', sans-serif",
    border: state.isFocused ? '1px solid #06c68f' : '1px solid rgba(0, 0, 0, 0.1)',
  }),
  menu: (provided: CSSProperties, state: MUIElementState) => ({
    ...provided,
    zIndex: '99',
    transition: 'border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in',
    boxShadow: '0 1px 9px 5px rgb(0 0 0 / 3%)',
    fontFamily: "'Helvetica neue', sans-serif",
    outline: 'none',
    border: state.isFocused ? '1px solid #06c68f' : '1px solid rgba(0, 0, 0, 0.1)',
    borderColor: state.isFocused ? '#06c68f !important' : 'rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    minHeight: '40px',
  }),
}

import styled from 'styled-components'

export const Container = styled.div<{ error: boolean }>`
  width: 100%;
  position: relative;
  .css-yk16xz-control {
    border-color: ${({ error }): string => (error ? '#f44336' : 'rgba(0, 0, 0, 0.23)')};
    outline: none;
    &:hover {
      border-color: ${({ error }): string => (error ? '#f44336' : 'rgba(0, 0, 0, 0.23)')};
    }
  }
  .css-1wa3eu0-placeholder {
    color: ${({ error }): string => (error ? '#f44336' : 'rgba(0, 0, 0, 0.54) ')};
  }
  & > .css-1m92ju6-control {
    border-color: ${({ error }): string => (error ? '#f44336' : '#06c68f')};
  }
  & > .css-1n7v3ny-option {
    background-color: rgba(6, 198, 144, 0.1) !important;
  }
`

export const ErrorMessage = styled.div`
  position: absolute;
  color: #f44336;
  bottom: -20px;
  left: 6px;
  font-size: 0.75rem;
`

export const ContainerSelect = styled.div<{ error: boolean }>`
  width: 100%;
  position: relative;
  .css-yk16xz-control {
    border-color: ${({ error }): string => (error ? '#f44336' : 'rgba(0, 0, 0, 0.23)')};
    outline: none;
  }
  .css-1wa3eu0-placeholder {
    color: ${({ error }): string => (error ? '#f44336' : 'rgba(0, 0, 0, 0.54) ')};
  }
  .css-1hb7zxy-IndicatorsContainer {
    padding-right: 10px;
    cursor: pointer;
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
`

export const SelectFieldWrapper = styled.div`
  width: 372px !important;
  height: 40px !important;
  .selectField {
    width: 372px !important;
  }
`
