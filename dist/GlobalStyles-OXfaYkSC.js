'use strict';

require('react');
var index = require('./index-CGECY3y4.js');
var emotionReact_esm = require('./emotion-react.esm-BtOw35W9.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(emotionReact_esm.Global, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
  defaultTheme: index.PropTypes.object,
  styles: index.PropTypes.oneOfType([index.PropTypes.array, index.PropTypes.string, index.PropTypes.object, index.PropTypes.func])
} : void 0;

exports.GlobalStyles = GlobalStyles;
//# sourceMappingURL=GlobalStyles-OXfaYkSC.js.map
