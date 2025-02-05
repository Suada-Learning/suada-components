import { jsxs as _jsxs } from "react/jsx-runtime";
import { HtmlButtonTypeEnum } from './Button.interface';
import { StyledButton } from './Button.styles';
export var Button = function (_a) {
    var type = _a.type, size = _a.size, label = _a.label, iconLeft = _a.iconLeft, iconRight = _a.iconRight, disabled = _a.disabled, customStyles = _a.customStyles, onClick = _a.onClick, _b = _a.htmlType, htmlType = _b === void 0 ? HtmlButtonTypeEnum.BUTTON : _b, className = _a.className, themes = _a.themes;
    return (_jsxs(StyledButton, { "$type": type, "$size": size, disabled: !!disabled, style: customStyles, onClick: onClick, type: htmlType, className: className, theme: themes, children: [iconLeft, label, iconRight] }));
};
//# sourceMappingURL=Button.js.map