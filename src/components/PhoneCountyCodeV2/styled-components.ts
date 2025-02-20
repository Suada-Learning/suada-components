import styled from 'styled-components'

export const Container = styled.div<{ error: boolean }>`
  display: flex;
  gap: 16px;
  /* height: 40px; */
  width: 60%;
  align-items: center;
  border: 1px solid ${({ error }): string => (error ? 'red' : 'rgba(0, 0, 0, 0.23)')};
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
`
export const InputContainer = styled.div`
  width: 60%;
  gap: 8px;
  min-height: 40px;
  margin-right: 10px;

  & > div > div {
    min-height: 40px;
  }
`
export const Input = styled.input`
  flex: 1;
  gap: 8px;
  width: 100%;
  outline: none;
  border: none;
  border-left: none;
  padding: 6px;
  font-family: 'Open Sans';
  color: black;
  font-size: 15px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Label = styled.div<{ error: boolean }>`
  position: absolute;
  left: 12px;
  top: -11px;
  background: #fff;
  z-index: 1;
  font-size: 13px;
  color: ${({ error }): string => (error ? 'red' : 'rgba(0, 0, 0, 0.54)')};
`
export const ErrorMessage = styled.div`
  position: absolute;
  color: #f44336;
  bottom: -20px;
  left: 6px;
  font-size: 0.75rem;
`
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`
