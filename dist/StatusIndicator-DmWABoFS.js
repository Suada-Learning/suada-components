'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_StatusIndicator_status_interface = require('./components/StatusIndicator/status.interface.cjs.js');
var components_StatusIndicator_styledComponents = require('./components/StatusIndicator/styled-components.cjs.js');

var StatusIndicator = function StatusIndicator(_a) {
  var _b = _a.status,
    status = _b === void 0 ? components_StatusIndicator_status_interface.GridStatusEnums.SUSPENDED : _b;
  return jsxRuntime.jsxRuntimeExports.jsx(components_StatusIndicator_styledComponents.StatusWrapper, {
    status: status,
    children: status.charAt(0) + status.slice(1).toLowerCase()
  });
};

exports.StatusIndicator = StatusIndicator;
//# sourceMappingURL=StatusIndicator-DmWABoFS.js.map
