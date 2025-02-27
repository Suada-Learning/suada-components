import styled from 'styled-components'

export const Wrapper = styled.div`
  aspect-ratio: 1;
  width: 410px;
  scale: 0.4;
  transform: translate(-75%, -76%);
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 14px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`

export const ScaledIframe = styled.iframe`
  width: 410px;
  height: 410px;
  border: 0;
  border-radius: 4px;
`

export const EditButton = styled.div`
  background-color: rgb(6, 198, 143);
  position: absolute;
  right: -12px;
  scale: 2.5;
  top: -12px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  display: flex;
`
