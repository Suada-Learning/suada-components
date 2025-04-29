import { Dispatch, SetStateAction } from 'react';
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
type UseMenuToggleHookFnType = (initialIsVisible?: boolean, offset?: number) => {
    menuRef: React.RefObject<HTMLDivElement>;
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    menuPosition: IDynamicPosition;
    toggleMenu: () => void;
};
declare const useMenuToggle: UseMenuToggleHookFnType;
export default useMenuToggle;
