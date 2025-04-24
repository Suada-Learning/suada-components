import { useState, useEffect } from 'react';
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
var defaultPosition = {
    vertical: DropdownVerticalPositionEnum.Top,
    horizontal: DropdownHorizontalPositionEnum.Left,
};
var useDynamicPosition = function (isActive, ref, offset) {
    if (offset === void 0) { offset = 0; }
    var _a = useState(defaultPosition), position = _a[0], setPosition = _a[1];
    useEffect(function () {
        if (isActive && ref.current) {
            var element = ref.current;
            var rect = element.getBoundingClientRect();
            var viewportWidth = window.innerWidth;
            var viewportHeight = window.innerHeight;
            // Vertical Position
            var elementBottom = rect.bottom + offset;
            var elementTop = rect.top - offset;
            var fitsAbove = elementTop >= rect.height + offset; // Checks if there's enough space above with offset
            var fitsBelow = viewportHeight - elementBottom >= rect.height + offset; // Checks if there's enough space below with offset
            var verticalPosition = fitsAbove && !fitsBelow // If it fits above but not below
                ? DropdownVerticalPositionEnum.Top
                : !fitsAbove && fitsBelow // If it doesn't fit above but does below
                    ? DropdownVerticalPositionEnum.Bottom
                    : viewportHeight - elementBottom > elementTop // If it fits both ways, prefer the one with more space
                        ? DropdownVerticalPositionEnum.Bottom
                        : DropdownVerticalPositionEnum.Top;
            // Horizontal Position
            var elementRight = rect.right;
            var elementWidth = rect.width;
            var spaceOnRight = viewportWidth - elementRight; // Space available on the right of the element
            var horizontalPosition = spaceOnRight >= elementWidth + offset // Check if there's enough space on the right including the offset
                ? DropdownHorizontalPositionEnum.Right // Prefer Right if enough space
                : DropdownHorizontalPositionEnum.Left; // Otherwise, fallback to Left
            setPosition({ vertical: verticalPosition, horizontal: horizontalPosition });
        }
    }, [isActive, ref, offset]);
    return position;
};
export default useDynamicPosition;
//# sourceMappingURL=useDynamicPosition.js.map