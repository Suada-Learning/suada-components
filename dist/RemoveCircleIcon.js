import { __rest, __assign } from './node_modules/tslib/tslib.es6.js';
import { j as jsxRuntimeExports } from './_virtual/jsx-runtime.js';

var RemoveCircleIcon = function RemoveCircleIcon(_a) {
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
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
      fill: fill
    })]
  }));
};

export { RemoveCircleIcon };
//# sourceMappingURL=RemoveCircleIcon.js.map
