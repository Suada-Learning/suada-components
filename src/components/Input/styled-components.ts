import styled from 'styled-components'

export const Field = styled.div<{ $iconInStart?: boolean }>`
  position: relative;
  font-family: sans-serif;
  background-color: white;

  &.full {
    width: 100%;
  }

  p:not(:first-child) {
    position: absolute;
    left: -10px;
    bottom: -24px;
  }

  .MuiFormLabel-root,
  .MuiFormLabel-root,
  fieldset,
  input {
    ${({ $iconInStart }): string =>
      $iconInStart ? 'padding-left: 40px;' : 'padding-right: 40px;'};
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f !important;
  }

  button {
    position: absolute;
    ${({ $iconInStart }): string => ($iconInStart ? 'left: 5px;' : 'right: 5px;')};
    top: 50%;
    transform: translateY(-50%);
    padding: 5px;
  }
`

export const ValidationIcon = styled.div`
  position: absolute;
  bottom: -10px;
  transform: translateY(-50%);
  right: 6px;
  width: unset !important;

  &.error svg {
    color: red;
  }

  &.valid svg {
    color: green;
  }
`

export const StyledComponentContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 4px;
  z-index: 2;
  .btn--small {
    overflow: initial !important;
  }
`
export const CharactersContainer = styled.div`
  width: max-content;
  font-size: 12px;
  color: #68707a;
  margin-top: 5px;
  margin-left: 5px;
  position: absolute;
  bottom: -20px;
  right: 6px;
`

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  min-height: 40px;
  outline: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  transition:
    border 0.3s ease-in,
    box-shadow 0.3s ease-in;

  &:focus {
    border: 1px solid #06c68f;
    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  min-height: 40px;
  resize: none;
  outline: none;
  padding: 10px;
  font-family: sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  transition:
    border 0.3s ease-in,
    box-shadow 0.3s ease-in;

  &:focus {
    border: 1px solid #06c68f;
    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  }
`

export const StyledLabel = styled.p`
  font-size: 16px;
  font-weight: 550;
  padding-top: 0px;
  margin-bottom: 5px;
`

export const ErrorMessage = styled.div`
  position: absolute;
  color: #f44336;
  bottom: -20px;
  left: 6px;
  font-size: 0.75rem;
`

export const Title = styled.h2<{ $required?: boolean }>`
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 5px;

  ${({ $required }): string =>
    $required
      ? `
    &::after {
      content: '*';
      color: red;
      margin-left: 3px;
    }
  `
      : ''}
`
