import styled from 'styled-components'

export const ColumnNavigationContainer = styled.div`
  box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.03);
  background: #fff;
  border-radius: 28px;
  padding: 10px 30px;
  padding-bottom: 34px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1660px) {
    padding: 10px 20px;
    padding-bottom: 24px;
  }
`

export const NavigationItem = styled.div<{
  active?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  @media (max-width: 1660px) {
    font-size: 0.9rem;
    padding: 5px;
  }
  font-weight: 600;
  color: #000;
  position: relative;
  transition: font-weight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  svg {
    fill: ${({ active }): string => (active ? ' #06c68f' : '#ccc')};
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-50%);
    width: ${({ active }): string => (active ? '100%' : '50%')};
    height: 2px;
    border-radius: 20px;
    background-color: ${({ active }): string => (active ? '#06c68f' : '#ccc')};
    transition:
      width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      background-color 0.3s ease-in-out;
  }
`
