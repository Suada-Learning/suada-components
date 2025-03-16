'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Loader_styledComponents = require('./components/Loader/styled-components.cjs.js');
var CircularProgress = require('./CircularProgress-c3gMOn08.js');

var Loader = function Loader(_a) {
  var _b = _a.width,
    width = _b === void 0 ? '40px' : _b,
    _c = _a.height,
    height = _c === void 0 ? '40px' : _c;
    _a.withBackground;
  return jsxRuntime.jsxRuntimeExports.jsx(jsxRuntime.jsxRuntimeExports.Fragment, {
    children: jsxRuntime.jsxRuntimeExports.jsx(components_Loader_styledComponents.LoaderCircle, {
      children: jsxRuntime.jsxRuntimeExports.jsx(CircularProgress.CircularProgress, {
        style: {
          width: width,
          height: height
        }
      })
    })
  });
};

exports.Loader = Loader;
//# sourceMappingURL=Loader-B2vDk66W.js.map
