import { useState, useEffect, RefObject } from 'react'

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

type UseDynamicPositionHookFnType = (
  isActive: boolean,
  ref: RefObject<HTMLElement>,
  offset?: number,
) => IDynamicPosition

const defaultPosition: IDynamicPosition = {
  vertical: DropdownVerticalPositionEnum.Top,
  horizontal: DropdownHorizontalPositionEnum.Left,
}

const useDynamicPosition: UseDynamicPositionHookFnType = (isActive, ref, offset = 0) => {
  const [position, setPosition] = useState<IDynamicPosition>(defaultPosition)

  useEffect(() => {
    if (isActive && ref.current) {
      const element = ref.current
      const rect = element.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Vertical Position
      const elementBottom = rect.bottom + offset
      const elementTop = rect.top - offset
      const fitsAbove = elementTop >= rect.height + offset // Checks if there's enough space above with offset
      const fitsBelow = viewportHeight - elementBottom >= rect.height + offset // Checks if there's enough space below with offset

      const verticalPosition =
        fitsAbove && !fitsBelow // If it fits above but not below
          ? DropdownVerticalPositionEnum.Top
          : !fitsAbove && fitsBelow // If it doesn't fit above but does below
          ? DropdownVerticalPositionEnum.Bottom
          : viewportHeight - elementBottom > elementTop // If it fits both ways, prefer the one with more space
          ? DropdownVerticalPositionEnum.Bottom
          : DropdownVerticalPositionEnum.Top

      // Horizontal Position
      const elementRight = rect.right
      const elementWidth = rect.width
      const spaceOnRight = viewportWidth - elementRight // Space available on the right of the element

      const horizontalPosition =
        spaceOnRight >= elementWidth + offset // Check if there's enough space on the right including the offset
          ? DropdownHorizontalPositionEnum.Right // Prefer Right if enough space
          : DropdownHorizontalPositionEnum.Left // Otherwise, fallback to Left

      setPosition({ vertical: verticalPosition, horizontal: horizontalPosition })
    }
  }, [isActive, ref, offset])

  return position
}

export default useDynamicPosition
