import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { LoaderCircle } from './components/Loader/styled-components.js';
import { C as CircularProgress } from './CircularProgress-BiWi7PmO.js';

var Loader = function Loader(_a) {
  var _b = _a.width,
    width = _b === void 0 ? '40px' : _b,
    _c = _a.height,
    height = _c === void 0 ? '40px' : _c;
    _a.withBackground;
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(LoaderCircle, {
      children: jsxRuntimeExports.jsx(CircularProgress, {
        style: {
          width: width,
          height: height
        }
      })
    })
  });
};

export { Loader as L };
//# sourceMappingURL=Loader-f7mIIoi_.js.map
