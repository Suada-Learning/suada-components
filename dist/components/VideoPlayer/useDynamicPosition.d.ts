import { RefObject } from 'react';
export declare enum DropdownVerticalPositionEnum {
    Top = "top",
    Bottom = "bottom"
}
export declare enum DropdownHorizontalPositionEnum {
    Left = "left",
    Right = "right"
}
export interface IDynamicPosition {
    vertical: DropdownVerticalPositionEnum;
    horizontal: DropdownHorizontalPositionEnum;
}
type UseDynamicPositionHookFnType = (isActive: boolean, ref: RefObject<HTMLElement>, offset?: number) => IDynamicPosition;
declare const useDynamicPosition: UseDynamicPositionHookFnType;
export default useDynamicPosition;
