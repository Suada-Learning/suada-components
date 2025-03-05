import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ColumnNavigationContainer, NavigationItem } from './styled-components';
export var ColumnNavigation = function (_a) {
    var tabs = _a.tabs, activeTab = _a.activeTab, setActiveTab = _a.setActiveTab;
    return (_jsx(ColumnNavigationContainer, { children: tabs.map(function (tab, index) {
            if (tab) {
                var label = tab.label, icon = tab.icon;
                return (_jsxs(NavigationItem, { onClick: function () { return setActiveTab(index); }, active: activeTab === index, children: [_jsx("p", { children: label }), icon] }, index));
            }
            return null;
        }) }));
};
//# sourceMappingURL=ColumnNavigation.js.map