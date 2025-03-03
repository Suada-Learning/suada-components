import { __rest, __assign } from './node_modules/tslib/tslib.es6.js';
import { j as jsxRuntimeExports } from './_virtual/jsx-runtime.js';

var ExpandMoreIcon = function ExpandMoreIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M24 24H0V0h24v24z',
      fill: 'none',
      opacity: '.87'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z',
      fill: fill
    })]
  }));
};

export { ExpandMoreIcon };
//# sourceMappingURL=ExpandMoreIcon.js.map
