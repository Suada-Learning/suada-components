import styled from 'styled-components'

export const Whiteboard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  border: 1px solid #e7e9ed;
  border-radius: 4px;
  flex-direction: column;
  padding: 40px;
`

export const CenteredText = styled.div<{ marginTop?: string }>`
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  gap: 8px;
  margin-top: ${({ marginTop }): string => marginTop || '0px'};

  h1 {
    font-size: 18px;
    font-weight: 800;
  }

  h4 {
    color: #68707a;
    font-size: 16px;
    font-weight: 500;
  }
`
