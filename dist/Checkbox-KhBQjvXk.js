import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { LabelContainer } from './components/Checkbox/styled-components.js';
import './tslib.es6-C0iDBclc.js';
import { H as Help } from './Help-B2pAksRq.js';
import { F as FormControlLabel } from './FormControlLabel-C9YVrYB9.js';
import { T as Tooltip } from './Tooltip-DizAB59I.js';
import { C as Checkbox$1 } from './Checkbox-D9OUSkEa.js';

var Checkbox = function Checkbox(_a) {
  var checked = _a.checked,
    onChange = _a.onChange,
    label = _a.label,
    tooltip = _a.tooltip,
    _b = _a.name,
    name = _b === void 0 ? 'checkbox' : _b;
  var checkedColor = '#08c694';
  return jsxRuntimeExports.jsx(FormControlLabel, {
    control: jsxRuntimeExports.jsx(Checkbox$1, {
      checked: checked,
      onChange: onChange,
      name: name,
      sx: {
        color: checked ? checkedColor : undefined,
        '&.Mui-checked': {
          color: checkedColor
        }
      }
    }),
    label: jsxRuntimeExports.jsxs(LabelContainer, {
      children: [jsxRuntimeExports.jsx("span", {
        children: label
      }), tooltip && jsxRuntimeExports.jsx(Tooltip, {
        title: tooltip,
        children: jsxRuntimeExports.jsx(Help, {})
      })]
    })
  });
};

export { Checkbox as C };
//# sourceMappingURL=Checkbox-KhBQjvXk.js.map
