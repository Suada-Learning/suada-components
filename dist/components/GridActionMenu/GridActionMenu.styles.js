import { __makeTemplateObject } from '../../node_modules/tslib/tslib.es6.js';
import dt from '../../node_modules/styled-components/dist/styled-components.esm.js';

var Container = dt.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ActionsContent = dt.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 5px;\n"], ["\n  padding: 5px;\n"])));
var StyledIconButton = dt.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"])));
dt.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])), function (_a) {
  var hoverBackground = _a.hoverBackground;
  return hoverBackground || "rgba(0, 0, 0, 0.1)";
}, function (_a) {
  var $hoverColor = _a.$hoverColor;
  return $hoverColor && "svg path {\n          fill: ".concat($hoverColor, ";\n           }");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { ActionsContent, Container, StyledIconButton };
//# sourceMappingURL=GridActionMenu.styles.js.map
