var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var ActionsContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 5px;\n"], ["\n  padding: 5px;\n"])));
export var StyledIconButton = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"])));
export var Action = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])), function (_a) {
    var hoverBackground = _a.hoverBackground;
    return hoverBackground || "rgba(0, 0, 0, 0.1)";
}, function (_a) {
    var $hoverColor = _a.$hoverColor;
    return $hoverColor &&
        "svg path {\n          fill: ".concat($hoverColor, ";\n           }");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=GridActionMenu.styles.js.map