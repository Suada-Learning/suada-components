import { useState, useRef } from 'react';
import useDynamicPosition from './useDynamicPosition';
import useOnOutsideClick from './useOnOutsideClick';
export var DropdownVerticalPositionEnum;
(function (DropdownVerticalPositionEnum) {
    DropdownVerticalPositionEnum["Top"] = "top";
    DropdownVerticalPositionEnum["Bottom"] = "bottom";
})(DropdownVerticalPositionEnum || (DropdownVerticalPositionEnum = {}));
export var DropdownHorizontalPositionEnum;
(function (DropdownHorizontalPositionEnum) {
    DropdownHorizontalPositionEnum["Left"] = "left";
    DropdownHorizontalPositionEnum["Right"] = "right";
})(DropdownHorizontalPositionEnum || (DropdownHorizontalPositionEnum = {}));
var useMenuToggle = function (initialIsVisible, offset) {
    if (initialIsVisible === void 0) { initialIsVisible = false; }
    if (offset === void 0) { offset = 8; }
    var _a = useState(initialIsVisible), isVisible = _a[0], setIsVisible = _a[1];
    var menuRef = useRef(null);
    var menuPosition = useDynamicPosition(isVisible, menuRef, offset);
    useOnOutsideClick(menuRef, function () { return setIsVisible(false); });
    var toggleMenu = function () { return setIsVisible(function (prev) { return !prev; }); };
    return { menuRef: menuRef, isVisible: isVisible, setIsVisible: setIsVisible, menuPosition: menuPosition, toggleMenu: toggleMenu };
};
export default useMenuToggle;
//# sourceMappingURL=useMenuToggle.js.map