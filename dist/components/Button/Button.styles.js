import { __makeTemplateObject } from '../../node_modules/tslib/tslib.es6.js';
import dt from '../../node_modules/styled-components/dist/styled-components.esm.js';
import { ButtonSizeEnum, ButtonTypeEnum } from './Button.interface.js';

var StyledButton = dt.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"])), function (_a) {
  var $size = _a.$size;
  switch ($size) {
    case ButtonSizeEnum.SM:
      return "  \n          width: 159px;\n          height: 40px;\n          padding: 8px; \n        ";
    case ButtonSizeEnum.LG:
      return "\n          width: 167px;\n          height: 48px;\n          padding: 12px;\n        ";
    default:
      return '';
  }
}, function (_a) {
  var theme = _a.theme,
    $type = _a.$type;
  switch ($type) {
    case ButtonTypeEnum.PRIMARY:
      return "\n          color: ".concat(theme.colors.neutral[100], ";\n          background-color: ").concat(theme.colors.primary.main, ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[100], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.primary[700], ";    \n          }\n\n          &:disabled {\n            background: ").concat(theme.colors.neutral[400], "; \n          }\n        ");
    case ButtonTypeEnum.SECONDARY:
      return "\n          border: 1px solid ".concat(theme.colors.primary.main, "; \n          color: ").concat(theme.colors.primary.main, ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.primary.main, ";\n          }\n\n          &:not(:disabled):hover {\n            border: 1px solid ").concat(theme.colors.primary[700], ";\n            color: ").concat(theme.colors.primary[700], ";\n\n            & > svg > path {\n              fill: ").concat(theme.colors.primary[700], ";\n            }\n          }\n\n          &:disabled {\n            border: 1px solid ").concat(theme.colors.neutral[400], "; \n            color: ").concat(theme.colors.neutral[400], "; \n\n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[400], ";\n            }\n          }\n        ");
    case ButtonTypeEnum.GHOST:
      return "\n          background-color: transparent;\n          color: ".concat(theme.colors.neutral[900], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[900], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.neutral[300], ";\n          }\n\n          &:disabled {\n            color: ").concat(theme.colors.neutral[400], "; \n            \n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[400], ";\n            }\n          }\n        ");
    case ButtonTypeEnum.NEGATIVE:
      return "\n          background-color: ".concat(theme.colors.system.error.main, ";\n          color: ").concat(theme.colors.neutral[100], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[100], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.system.error[700], ";\n          }\n\n          &:disabled {\n            background: ").concat(theme.colors.system.error[300], "; \n          }\n        ");
    case ButtonTypeEnum.POSITIVE:
      return "\n          background-color: ".concat(theme.colors.system.success.main, ";\n          color: ").concat(theme.colors.neutral[100], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[100], ";\n          }\n\n          &:not(:disabled):hover {\n            background-color: ").concat(theme.colors.system.success[700], ";\n          }\n\n          &:disabled {\n            background: ").concat(theme.colors.system.success[300], "; \n          }\n        ");
    case ButtonTypeEnum.DARK:
      return "\n          border: 1px solid ".concat(theme.colors.neutral[900], "; \n          color: ").concat(theme.colors.neutral[900], ";\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[900], ";\n          }\n\n          &:not(:disabled):hover {\n            opacity: 0.8;\n          }\n\n          &:disabled {\n            border: 1px solid ").concat(theme.colors.neutral[400], "; \n            color: ").concat(theme.colors.neutral[400], "; \n          }\n        ");
    case ButtonTypeEnum.TEXT:
      return "\n          border: none; \n          color: ".concat(theme.colors.neutral[900], ";\n          padding-top: 0;\n          padding-bottom: 0;\n          width: fit-content;\n\n          & > svg > path {\n            fill: ").concat(theme.colors.neutral[900], ";\n          }\n\n          &:not(:disabled):hover {\n           color: ").concat(theme.colors.neutral[600], ";\n           \n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[600], ";\n            }\n          }\n\n          &:disabled {\n            color: ").concat(theme.colors.neutral[400], "; \n\n            & > svg > path {\n              fill: ").concat(theme.colors.neutral[400], ";\n            }\n          }\n        ");
    default:
      return '';
  }
});
var templateObject_1;

export { StyledButton };
//# sourceMappingURL=Button.styles.js.map
