import { j as jsxRuntimeExports } from '../../../_virtual/jsx-runtime.js';
import { createContext } from 'react';
import ThemeProvider$1 from '../../../node_modules/@mui/material/styles/ThemeProvider.js';

var ThemeContext = /*#__PURE__*/createContext(undefined);
var ThemeProvider = function ThemeProvider(_a) {
  var children = _a.children,
    theme = _a.theme;
  return jsxRuntimeExports.jsx(ThemeContext.Provider, {
    value: {
      theme: theme
    },
    children: jsxRuntimeExports.jsx(ThemeProvider$1, {
      theme: theme,
      children: children
    })
  });
};

export { ThemeProvider };
//# sourceMappingURL=ThemeProvider.js.map
