import styled from 'styled-components'

export const Content = styled.section<{ isOpened: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background: #212121;
  transform: ${({ isOpened }): string => (isOpened ? `translateX(0px)` : `translateX(0)`)};
`

export const Title = styled.h4<{ isOpened?: boolean }>`
  font-size: 16px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  width: ${({ isOpened }): string => (isOpened ? `unset` : `70px`)};
`
