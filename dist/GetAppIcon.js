import { __rest, __assign } from './node_modules/tslib/tslib.es6.js';
import { j as jsxRuntimeExports } from './_virtual/jsx-runtime.js';

var GetAppIcon = function GetAppIcon(_a) {
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
      d: 'M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z',
      fill: fill
    })]
  }));
};

export { GetAppIcon };
//# sourceMappingURL=GetAppIcon.js.map
