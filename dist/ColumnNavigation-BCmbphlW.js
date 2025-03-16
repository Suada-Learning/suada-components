import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { ColumnNavigationContainer, NavigationItem } from './components/ColumnNavigation/styled-components.js';

var ColumnNavigation = function ColumnNavigation(_a) {
  var tabs = _a.tabs,
    activeTab = _a.activeTab,
    setActiveTab = _a.setActiveTab;
  return jsxRuntimeExports.jsx(ColumnNavigationContainer, {
    children: tabs.map(function (tab, index) {
      if (tab) {
        var label = tab.label,
          icon = tab.icon;
        return jsxRuntimeExports.jsxs(NavigationItem, {
          onClick: function onClick() {
            return setActiveTab(index);
          },
          active: activeTab === index,
          children: [jsxRuntimeExports.jsx("p", {
            children: label
          }), icon]
        }, index);
      }
      return null;
    })
  });
};

export { ColumnNavigation as C };
//# sourceMappingURL=ColumnNavigation-BCmbphlW.js.map
