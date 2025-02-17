var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { styled } from 'styled-components';
export var StyledLabel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 550;\n"], ["\n  font-size: 16px;\n  font-weight: 550;\n"])));
export var ToolTipContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])));
export var TooltipTitle = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 14px;\n"], ["\n  font-size: 14px;\n"])));
export var HelpIconStyles = {
    color: '#06C68F',
};
export var FormControlLabelStyles = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 0,
};
export var FormControlWrapper = styled(ToolTipContainer)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #06c68f;\n\n  .CustomSwitcher-switchBase {\n    &.checked {\n      color: #06c68f;\n    }\n    &.checked + .track {\n      background-color: #06c68f;\n    }\n  }\n"], ["\n  color: #06c68f;\n\n  .CustomSwitcher-switchBase {\n    &.checked {\n      color: #06c68f;\n    }\n    &.checked + .track {\n      background-color: #06c68f;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=CustomSwitcher.styles.js.map