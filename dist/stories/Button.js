import { HtmlButtonTypeEnum } from "./Button.interface";
import { StyledButton } from "./Button.styles";
import React from "react";
export var Button = function (_a) {
    var type = _a.type, size = _a.size, label = _a.label, iconLeft = _a.iconLeft, iconRight = _a.iconRight, disabled = _a.disabled, customStyles = _a.customStyles, onClick = _a.onClick, _b = _a.htmlType, htmlType = _b === void 0 ? HtmlButtonTypeEnum.BUTTON : _b, className = _a.className;
    return (React.createElement(StyledButton, { "$type": type, "$size": size, disabled: !!disabled, style: customStyles, onClick: onClick, type: htmlType, className: className },
        iconLeft,
        label,
        iconRight));
};
//# sourceMappingURL=Button.js.map