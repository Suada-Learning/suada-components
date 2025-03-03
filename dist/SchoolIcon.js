import { __rest, __assign } from './node_modules/tslib/tslib.es6.js';
import { j as jsxRuntimeExports } from './_virtual/jsx-runtime.js';

var SchoolIcon = function SchoolIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z'
    })]
  }));
};

export { SchoolIcon };
//# sourceMappingURL=SchoolIcon.js.map
