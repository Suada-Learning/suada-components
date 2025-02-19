import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { StyledExpansionPanel, StyledExpansionPanelSummary, StyledTypography, } from './styled-components';
var ExpansionItem = function (_a) {
    var item = _a.item, index = _a.index, isOpened = _a.isOpened;
    var t = useTranslation().t;
    if (!item.canView)
        return _jsx(_Fragment, {});
    return (_jsx(StyledExpansionPanel, { className: 'expansionPanel', "$isOpened": isOpened, children: item.openInNewTab ? (_jsx("a", { href: item.path, target: '_blank', children: _jsx(StyledExpansionPanelSummary, { children: _jsxs(StyledTypography, { children: [item.icon, isOpened && _jsx("span", { children: t("navigation.".concat(item.title)) })] }) }) })) : (_jsx(NavLink, { to: item.path, children: _jsx(StyledExpansionPanelSummary, { children: _jsxs(StyledTypography, { children: [item.icon, isOpened && _jsx("span", { children: t("navigation.".concat(item.title)) })] }) }) })) }, index));
};
export default ExpansionItem;
//# sourceMappingURL=ExpansionItem.js.map