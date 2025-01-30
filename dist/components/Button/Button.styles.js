var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { ButtonSizeEnum, ButtonTypeEnum, } from "./Button.interface";
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 8px;\n  text-transform: capitalize;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  cursor: pointer;\n  white-space: nowrap;\n\n  & > svg > path {\n    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n    & > svg > path {\n      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n    }\n  }\n\n  ", "\n\n  ", "\n"])), function (_a) {
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
            return "\n          color: #FFFFFF;\n          background-color: #08C694;\n\n          & > svg > path {\n            fill: #FFFFFF;\n          }\n\n          &:not(:disabled):hover {\n            background-color: #12A37A;    \n          }\n\n          &:disabled {\n            background: #B3B3B8; \n          }\n        ";
        case ButtonTypeEnum.SECONDARY:
            return "\n          border: 1px solid #08C694; \n          color: #08C694;\n\n          & > svg > path {\n            fill: #08C694;\n          }\n\n          &:not(:disabled):hover {\n            border: 1px solid #12A37A;\n            color: #12A37A;\n\n            & > svg > path {\n              fill: #12A37A;\n            }\n          }\n\n          &:disabled {\n            border: 1px solid #B3B3B8; \n            color: #B3B3B8; \n\n            & > svg > path {\n              fill: #B3B3B8;\n            }\n          }\n        ";
        case ButtonTypeEnum.GHOST:
            return "\n          background-color: transparent;\n          color: #020210;\n\n          & > svg > path {\n            fill: #020210;\n          }\n\n          &:not(:disabled):hover {\n            background-color: #E7E9ED;\n          }\n\n          &:disabled {\n            color: #B3B3B8; \n            \n            & > svg > path {\n              fill: #B3B3B8;\n            }\n          }\n        ";
        case ButtonTypeEnum.NEGATIVE:
            return "\n          background-color: #EA382A;\n          color: #FFFFFF;\n\n          & > svg > path {\n            fill: #FFFFFF;\n          }\n\n          &:not(:disabled):hover {\n            background-color: #C7493D;\n          }\n\n          &:disabled {\n            background: #E5908A; \n          }\n        ";
        case ButtonTypeEnum.POSITIVE:
            return "\n          background-color: #00905E;\n          color: #FFFFFF;\n\n          & > svg > path {\n            fill: #FFFFFF;\n          }\n\n          &:not(:disabled):hover {\n            background-color: #12A37A;\n          }\n\n          &:disabled {\n            background: #72C4AC; \n          }\n        ";
        case ButtonTypeEnum.DARK:
            return "\n          border: 1px solid #020210; \n          color: #020210;\n\n          & > svg > path {\n            fill: #020210;\n          }\n\n          &:not(:disabled):hover {\n            opacity: 0.8;\n          }\n\n          &:disabled {\n            border: 1px solid #B3B3B8; \n            color: #B3B3B8; \n          }\n        ";
        case ButtonTypeEnum.TEXT:
            return "\n          border: none; \n          color: #020210;\n          padding-top: 0;\n          padding-bottom: 0;\n          width: fit-content;\n\n          & > svg > path {\n            fill: #020210;\n          }\n\n          &:not(:disabled):hover {\n           color: #4F4E5B;\n           \n            & > svg > path {\n              fill: #4F4E5B;\n            }\n          }\n\n          &:disabled {\n            color: #B3B3B8; \n\n            & > svg > path {\n              fill: #B3B3B8;\n            }\n          }\n        ";
        default:
            return "";
    }
});
var templateObject_1;
//# sourceMappingURL=Button.styles.js.map