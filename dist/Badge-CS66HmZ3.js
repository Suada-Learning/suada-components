import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { Wrapper, EditButton } from './components/Badge/styled-components.js';
import './tslib.es6-C0iDBclc.js';
import { E as Edit } from './Edit-BMFpOjke.js';

var Badge = function Badge(_a) {
  var src = _a.src,
    onEditClick = _a.onEditClick;
  if (!src) return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  return jsxRuntimeExports.jsxs(Wrapper, {
    children: [jsxRuntimeExports.jsx("img", {
      src: src
    }), jsxRuntimeExports.jsx(EditButton, {
      onClick: onEditClick,
      children: jsxRuntimeExports.jsx(Edit, {
        style: {
          color: '#fff'
        }
      })
    })]
  });
};

export { Badge as B };
//# sourceMappingURL=Badge-CS66HmZ3.js.map
