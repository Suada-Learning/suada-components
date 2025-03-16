'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Checkbox_styledComponents = require('./components/Checkbox/styled-components.cjs.js');
require('./tslib.es6-Ce89yL0g.js');
var Help = require('./Help-D8EYV2zr.js');
var FormControlLabel = require('./FormControlLabel-84xf0uTZ.js');
var Tooltip = require('./Tooltip-A_p9Z47e.js');
var Checkbox$1 = require('./Checkbox-DmMyEZhN.js');

var Checkbox = function Checkbox(_a) {
  var checked = _a.checked,
    onChange = _a.onChange,
    label = _a.label,
    tooltip = _a.tooltip,
    _b = _a.name,
    name = _b === void 0 ? 'checkbox' : _b;
  var checkedColor = '#08c694';
  return jsxRuntime.jsxRuntimeExports.jsx(FormControlLabel.FormControlLabel, {
    control: jsxRuntime.jsxRuntimeExports.jsx(Checkbox$1.Checkbox, {
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
    label: jsxRuntime.jsxRuntimeExports.jsxs(components_Checkbox_styledComponents.LabelContainer, {
      children: [jsxRuntime.jsxRuntimeExports.jsx("span", {
        children: label
      }), tooltip && jsxRuntime.jsxRuntimeExports.jsx(Tooltip.Tooltip, {
        title: tooltip,
        children: jsxRuntime.jsxRuntimeExports.jsx(Help.Help, {})
      })]
    })
  });
};

exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox-CxKOYsSZ.js.map
