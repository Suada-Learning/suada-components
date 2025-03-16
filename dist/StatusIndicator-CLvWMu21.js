import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { GridStatusEnums } from './components/StatusIndicator/status.interface.js';
import { StatusWrapper } from './components/StatusIndicator/styled-components.js';

var StatusIndicator = function StatusIndicator(_a) {
  var _b = _a.status,
    status = _b === void 0 ? GridStatusEnums.SUSPENDED : _b;
  return jsxRuntimeExports.jsx(StatusWrapper, {
    status: status,
    children: status.charAt(0) + status.slice(1).toLowerCase()
  });
};

export { StatusIndicator as S };
//# sourceMappingURL=StatusIndicator-CLvWMu21.js.map
