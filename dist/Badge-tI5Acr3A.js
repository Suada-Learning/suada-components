'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Badge_styledComponents = require('./components/Badge/styled-components.cjs.js');
require('./tslib.es6-Ce89yL0g.js');
var Edit = require('./Edit-rBeg5EiS.js');

var Badge = function Badge(_a) {
  var src = _a.src,
    onEditClick = _a.onEditClick;
  if (!src) return jsxRuntime.jsxRuntimeExports.jsx(jsxRuntime.jsxRuntimeExports.Fragment, {});
  return jsxRuntime.jsxRuntimeExports.jsxs(components_Badge_styledComponents.Wrapper, {
    children: [jsxRuntime.jsxRuntimeExports.jsx("img", {
      src: src
    }), jsxRuntime.jsxRuntimeExports.jsx(components_Badge_styledComponents.EditButton, {
      onClick: onEditClick,
      children: jsxRuntime.jsxRuntimeExports.jsx(Edit.Edit, {
        style: {
          color: '#fff'
        }
      })
    })]
  });
};

exports.Badge = Badge;
//# sourceMappingURL=Badge-tI5Acr3A.js.map
