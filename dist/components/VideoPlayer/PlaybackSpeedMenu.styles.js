var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { DropdownHorizontalPositionEnum, DropdownVerticalPositionEnum } from './useMenuToggle';
export var StyledPlaybackMenuWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  & > svg {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  & > svg {\n    cursor: pointer;\n  }\n"])));
export var StyledPlaybackMenu = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px 0px rgba(71, 85, 105, 0.12);\n  width: 220px;\n  height: 312px;\n  ", "\n  padding: 8px 16px;\n  transition:\n    opacity 0.3s,\n    visibility 0.3s;\n  overflow: scroll;\n\n  & > h2 {\n    ", "\n    color: #0f172a;\n  }\n\n  @media screen and (max-width: 1500px) {\n    width: 180px;\n    height: 250px;\n    gap: 12px;\n\n    & > h2 {\n      ", "\n      font-weight: 600;\n    }\n  }\n\n  @media screen and (max-width: 1100px) {\n    width: 140px;\n    height: 200px;\n    gap: 8px;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px 0px rgba(71, 85, 105, 0.12);\n  width: 220px;\n  height: 312px;\n  ", "\n  padding: 8px 16px;\n  transition:\n    opacity 0.3s,\n    visibility 0.3s;\n  overflow: scroll;\n\n  & > h2 {\n    ", "\n    color: #0f172a;\n  }\n\n  @media screen and (max-width: 1500px) {\n    width: 180px;\n    height: 250px;\n    gap: 12px;\n\n    & > h2 {\n      ", "\n      font-weight: 600;\n    }\n  }\n\n  @media screen and (max-width: 1100px) {\n    width: 140px;\n    height: 200px;\n    gap: 8px;\n  }\n"])), function (_a) {
    var $position = _a.$position;
    return "\n    ".concat($position.vertical === DropdownVerticalPositionEnum.Top
        ? 'bottom: calc(100% + 8px);'
        : 'top: calc(100% + 8px);', "\n    ").concat($position.horizontal === DropdownHorizontalPositionEnum.Left
        ? 'right: calc(100% + 8px);'
        : 'left: calc(100% + 8px);', "\n  ");
}, { fontStyle: 'labelM' }, { fontStyle: 'bodyS' });
export var StyledPlaybackSpeedItem = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  font-weight: 400;\n  color: #020210;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n  @media screen and (max-width: 1500px) {\n    ", "\n  }\n"], ["\n  ", "\n  font-weight: 400;\n  color: #020210;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);\n\n  @media screen and (max-width: 1500px) {\n    ", "\n  }\n"])), { fontStyle: 'labelM' }, { fontStyle: 'bodyS' });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=PlaybackSpeedMenu.styles.js.map