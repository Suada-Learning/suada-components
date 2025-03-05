import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  height: 100%;
`
export const ColorContainerInput = styled.input<{ color: string }>`
  cursor: pointer;
  width: 160px;
  height: 156px;
  background: ${({ color }): string => color};
  position: relative;
  border: 1px solid transparent;
  transform: scale(0.87);
  transition: 0.3s ease;

  &:hover,
  &.selected {
    border: 2px solid #06c68f;
    transform: scale(1);
  }

  &.disabled {
    pointer-events: none;
    background: gray;
  }

  &:before {
    content: 'Custom ✎';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    text-align: center;
    padding: 2px 0;
    width: 80px;
    height: 20px;
    background: white;
    z-index: 50;
    transition: 0.3s ease;
  }
`
export const ColorContainer = styled.div<{ color: string }>`
  cursor: pointer;
  width: 160px;
  height: 156px;
  background: ${({ color }): string => color};
  position: relative;
  border: 1px solid transparent;
  transform: scale(0.87);
  transition: 0.3s ease;

  &:hover,
  &.selected {
    border: 2px solid #06c68f;
    transform: scale(1);
  }

  &.disabled {
    pointer-events: none;
    background: gray;
  }
`
