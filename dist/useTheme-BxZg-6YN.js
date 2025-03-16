'use strict';

var React = require('react');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var useTheme$1 = require('./useTheme-CdtrrMwt.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function useTheme() {
  const theme = useTheme$1.useTheme(DefaultPropsProvider.defaultTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useDebugValue(theme);
  }
  return theme[createTheme.THEME_ID] || theme;
}

exports.useTheme = useTheme;
//# sourceMappingURL=useTheme-BxZg-6YN.js.map
