'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_ColumnNavigation_styledComponents = require('./components/ColumnNavigation/styled-components.cjs.js');

var ColumnNavigation = function ColumnNavigation(_a) {
  var tabs = _a.tabs,
    activeTab = _a.activeTab,
    setActiveTab = _a.setActiveTab;
  return jsxRuntime.jsxRuntimeExports.jsx(components_ColumnNavigation_styledComponents.ColumnNavigationContainer, {
    children: tabs.map(function (tab, index) {
      if (tab) {
        var label = tab.label,
          icon = tab.icon;
        return jsxRuntime.jsxRuntimeExports.jsxs(components_ColumnNavigation_styledComponents.NavigationItem, {
          onClick: function onClick() {
            return setActiveTab(index);
          },
          active: activeTab === index,
          children: [jsxRuntime.jsxRuntimeExports.jsx("p", {
            children: label
          }), icon]
        }, index);
      }
      return null;
    })
  });
};

exports.ColumnNavigation = ColumnNavigation;
//# sourceMappingURL=ColumnNavigation-BkycFv2x.js.map
