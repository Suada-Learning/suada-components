var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { ButtonSizeEnum, ButtonTypeEnum, } from "./Button.interface";
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  ", "\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  ", "\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"])), { fontStyle: "labelM" }, function (_a) {
    var $size = _a.$size;
    switch ($size) {
        case ButtonSizeEnum.SM:
            return "  \n          width: 159px;\n          height: 40px;\n          padding: 8px; \n        ";
        case ButtonSizeEnum.LG:
            return "\n          width: 167px;\n          height: 48px;\n          padding: 12px;\n        ";
        default:
            return "";
    }
}, function (_a) {
    var $type = _a.$type;
    switch ($type) {
        case ButtonTypeEnum.PRIMARY:
            return "\n          color: var(--neutral-colors-light);\n          background-color: var(--brand-colors-accent);\n\n          & > svg > path {\n            fill: var(--neutral-colors-light);\n          }\n\n          &:not(:disabled):hover {\n            background-color: var(--level-accent-700);    \n          }\n\n          &:disabled {\n            background: var(--level-dark-300); \n          }\n        ";
        case ButtonTypeEnum.SECONDARY:
            return "\n          border: 1px solid var(--brand-colors-accent); \n          color: var(--brand-colors-accent);\n\n          & > svg > path {\n            fill: var(--brand-colors-accent);\n          }\n\n          &:not(:disabled):hover {\n            border: 1px solid var(--level-accent-700);\n            color: var(--level-accent-700);\n\n            & > svg > path {\n              fill: var(--level-accent-700);\n            }\n          }\n\n          &:disabled {\n            border: 1px solid var(--level-dark-300); \n            color: var(--level-dark-300); \n\n            & > svg > path {\n              fill: var(--level-dark-300);\n            }\n          }\n        ";
        case ButtonTypeEnum.GHOST:
            return "\n          background-color: transparent;\n          color: var(--neutral-colors-dark);\n\n          & > svg > path {\n            fill: var(--neutral-colors-dark);\n          }\n\n          &:not(:disabled):hover {\n            background-color: var(--level-grey-100);\n          }\n\n          &:disabled {\n            color: var(--level-dark-300); \n            \n            & > svg > path {\n              fill: var(--level-dark-300);\n            }\n          }\n        ";
        case ButtonTypeEnum.NEGATIVE:
            return "\n          background-color: var(--system-colors-negative);\n          color: var(--neutral-colors-light);\n\n          & > svg > path {\n            fill: var(--neutral-colors-light);\n          }\n\n          &:not(:disabled):hover {\n            background-color: var(--level-negative-700);\n          }\n\n          &:disabled {\n            background: var(--level-negative-500); \n          }\n        ";
        case ButtonTypeEnum.POSITIVE:
            return "\n          background-color: var(--system-colors-positive);\n          color: var(--neutral-colors-light);\n\n          & > svg > path {\n            fill: var(--neutral-colors-light);\n          }\n\n          &:not(:disabled):hover {\n            background-color: var(--level-accent-700);\n          }\n\n          &:disabled {\n            background: var(--level-accent-500); \n          }\n        ";
        case ButtonTypeEnum.DARK:
            return "\n          border: 1px solid var(--neutral-colors-dark); \n          color: var(--neutral-colors-dark));\n\n          & > svg > path {\n            fill: var(--neutral-colors-dark));\n          }\n\n          &:not(:disabled):hover {\n            opacity: 0.8;\n          }\n\n          &:disabled {\n            border: 1px solid var(--level-dark-300); \n            color: var(--level-dark-300); \n          }\n        ";
        case ButtonTypeEnum.TEXT:
            return "\n          border: none; \n          color: var(--neutral-colors-dark));\n          padding-top: 0;\n          padding-bottom: 0;\n          width: fit-content;\n\n          & > svg > path {\n            fill: var(--neutral-colors-dark));\n          }\n\n          &:not(:disabled):hover {\n           color: var(--level-dark-700, #4F4E5B);\n           \n            & > svg > path {\n              fill: var(--level-dark-700, #4F4E5B);\n            }\n          }\n\n          &:disabled {\n            color: var(--level-dark-300); \n\n            & > svg > path {\n              fill: var(--level-dark-300);\n            }\n          }\n        ";
        default:
            return "";
    }
});
var templateObject_1;
//# sourceMappingURL=Button.styles.js.map