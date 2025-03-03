import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardContainer, StyledCard, StyledIcon, TextWrapper, StyledCardContent, HeaderText, NumberText, } from './styled-components';
export var Tile = function (_a) {
    var customCardStyles = _a.customCardStyles, $backgroundColor = _a.$backgroundColor, iconColor = _a.iconColor, icon = _a.icon, gap = _a.gap, value = _a.value, subIcon = _a.subIcon, text = _a.text;
    return (_jsx(CardContainer, { className: 'tile', children: _jsxs(StyledCard, { style: customCardStyles, children: [icon && (_jsx(StyledIcon, { "$backgroundColor": $backgroundColor, color: iconColor, children: icon })), _jsx(StyledCardContent, { gap: gap, children: _jsxs(TextWrapper, { children: [_jsxs(NumberText, { children: [value, " ", subIcon] }), _jsx(HeaderText, { children: text })] }) })] }) }));
};
//# sourceMappingURL=Tile.js.map