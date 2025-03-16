'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Button_Button_interface = require('./components/Button/Button.interface.cjs.js');
var tslib_es6 = require('./tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('./styled-components.esm-DB2-eBHV.js');

var StyledButton = styledComponents_esm.dt.button(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"])), function (_a) {
  var $size = _a.$size;
  switch ($size) {
    case components_Button_Button_interface.ButtonSizeEnum.SM:
      return "  \n          width: 159px;\n          height: 40px;\n          padding: 8px; \n        ";
    case components_Button_Button_interface.ButtonSizeEnum.LG:
      return "\n          width: 167px;\n          height: 48px;\n          padding: 12px;\n        ";
    default:
      return '';
  }
}, function (_a) {
  var theme = _a.theme,
    $type = _a.$type;
  switch ($type) {
    case components_Button_Button_interface.ButtonTypeEnum.PRIMARY:
      return "\n          color: ".concat(theme.colors.neutral[100], ";\n          background-color: ").concat(theme.colors.primary.main, ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[100], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.primary[700], ";    \n          }\n\n          &:disabled {\n            background: ").concat(theme.colors.neutral[400], "; \n          }\n        ");
    case components_Button_Button_interface.ButtonTypeEnum.SECONDARY:
      return "\n          border: 1px solid ".concat(theme.colors.primary.main, "; \n          color: ").concat(theme.colors.primary.main, ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.primary.main, ";\n          }\n\n          &:not(:disabled):hover {\n            border: 1px solid ").concat(theme.colors.primary[700], ";\n            color: ").concat(theme.colors.primary[700], ";\n\n            & > svg > path {\n              fill: ").concat(theme.colors.primary[700], ";\n            }\n          }\n\n          &:disabled {\n            border: 1px solid ").concat(theme.colors.neutral[400], "; \n            color: ").concat(theme.colors.neutral[400], "; \n\n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[400], ";\n            }\n          }\n        ");
    case components_Button_Button_interface.ButtonTypeEnum.GHOST:
      return "\n          background-color: transparent;\n          color: ".concat(theme.colors.neutral[900], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[900], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.neutral[300], ";\n          }\n\n          &:disabled {\n            color: ").concat(theme.colors.neutral[400], "; \n            \n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[400], ";\n            }\n          }\n        ");
    case components_Button_Button_interface.ButtonTypeEnum.NEGATIVE:
      return "\n          background-color: ".concat(theme.colors.system.error.main, ";\n          color: ").concat(theme.colors.neutral[100], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[100], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.system.error[700], ";\n          }\n\n          &:disabled {\n            background: ").concat(theme.colors.system.error[300], "; \n          }\n        ");
    case components_Button_Button_interface.ButtonTypeEnum.POSITIVE:
      return "\n          background-color: ".concat(theme.colors.system.success.main, ";\n          color: ").concat(theme.colors.neutral[100], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[100], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.system.success[700], ";\n          }\n\n          &:disabled {\n            background: ").concat(theme.colors.system.success[300], "; \n          }\n        ");
    case components_Button_Button_interface.ButtonTypeEnum.DARK:
      return "\n          border: 1px solid ".concat(theme.colors.neutral[900], "; \n          color: ").concat(theme.colors.neutral[900], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[900], ";\n          }\n\n          &:not(:disabled):hover {\n            opacity: 0.8;\n          }\n\n          &:disabled {\n            border: 1px solid ").concat(theme.colors.neutral[400], "; \n            color: ").concat(theme.colors.neutral[400], "; \n          }\n        ");
    case components_Button_Button_interface.ButtonTypeEnum.TEXT:
      return "\n          border: none; \n          color: ".concat(theme.colors.neutral[900], ";\n          padding-top: 0;\n          padding-bottom: 0;\n          width: fit-content;\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[900], ";\n          }\n\n          &:not(:disabled):hover {\n           color: ").concat(theme.colors.neutral[600], ";\n           \n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[600], ";\n            }\n          }\n\n          &:disabled {\n            color: ").concat(theme.colors.neutral[400], "; \n\n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[400], ";\n            }\n          }\n        ");
    default:
      return '';
  }
});
var templateObject_1;

var Button = function Button(_a) {
  var type = _a.type,
    size = _a.size,
    label = _a.label,
    iconLeft = _a.iconLeft,
    iconRight = _a.iconRight,
    disabled = _a.disabled,
    customStyles = _a.customStyles,
    onClick = _a.onClick,
    _b = _a.htmlType,
    htmlType = _b === void 0 ? components_Button_Button_interface.HtmlButtonTypeEnum.BUTTON : _b,
    className = _a.className;
  return jsxRuntime.jsxRuntimeExports.jsxs(StyledButton, {
    "$type": type,
    "$size": size,
    disabled: !!disabled,
    style: customStyles,
    onClick: onClick,
    type: htmlType,
    className: className,
    children: [iconLeft, label, iconRight]
  });
};

exports.Button = Button;
//# sourceMappingURL=Button-Brv7sPnX.js.map
