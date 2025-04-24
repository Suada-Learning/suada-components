import { useState, useRef, Dispatch, SetStateAction } from 'react'
import useDynamicPosition from './useDynamicPosition'
import useOnOutsideClick from './useOnOutsideClick'

export enum DropdownVerticalPositionEnum {
  Top = 'top',
  Bottom = 'bottom',
}

export enum DropdownHorizontalPositionEnum {
  Left = 'left',
  Right = 'right',
}

export interface IDynamicPosition {
  vertical: DropdownVerticalPositionEnum
  horizontal: DropdownHorizontalPositionEnum
}
type UseMenuToggleHookFnType = (
  initialIsVisible?: boolean,
  offset?: number,
) => {
  menuRef: React.RefObject<HTMLDivElement>
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  menuPosition: IDynamicPosition
  toggleMenu: () => void
}

const useMenuToggle: UseMenuToggleHookFnType = (initialIsVisible = false, offset = 8) => {
  const [isVisible, setIsVisible] = useState<boolean>(initialIsVisible)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuPosition = useDynamicPosition(isVisible, menuRef, offset)

  useOnOutsideClick(menuRef, () => setIsVisible(false))

  const toggleMenu = (): void => setIsVisible(prev => !prev)

  return { menuRef, isVisible, setIsVisible, menuPosition, toggleMenu }
}

export default useMenuToggle
