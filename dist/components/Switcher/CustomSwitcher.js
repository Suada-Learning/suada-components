import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { FormControlLabelStyles, FormControlWrapper, ToolTipContainer, StyledLabel, TooltipTitle, HelpIconStyles } from './CustomSwitcher.styles.js';
import '../../node_modules/tslib/tslib.es6.js';
import { Help } from '../../icons/Help.js';
import FormControlLabel from '../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import Switch from '../../node_modules/@mui/material/Switch/Switch.js';
import Tooltip from '../../node_modules/@mui/material/Tooltip/Tooltip.js';

var CustomSwitcher = function CustomSwitcher(_a) {
  var value = _a.value,
    onChange = _a.onChange,
    name = _a.name,
    label = _a.label,
    on = _a.on,
    off = _a.off,
    tooltip = _a.tooltip,
    _b = _a.labelPosition,
    labelPosition = _b === undefined ? 'start' : _b,
    labelStyle = _a.labelStyle;
  var Label = function Label() {
    if (tooltip) {
      return jsxRuntimeExports.jsxs(ToolTipContainer, {
        children: [jsxRuntimeExports.jsx(StyledLabel, {
          style: labelStyle,
          children: label
        }), jsxRuntimeExports.jsx(Tooltip, {
          title: jsxRuntimeExports.jsx(TooltipTitle, {
            children: tooltip
          }),
          arrow: true,
          children: jsxRuntimeExports.jsx(Help, {
            color: 'primary',
            style: HelpIconStyles
          })
        })]
      });
    }
    return jsxRuntimeExports.jsx(StyledLabel, {
      style: labelStyle,
      children: label
    });
  };
  return jsxRuntimeExports.jsx(FormControlLabel, {
    style: FormControlLabelStyles,
    label: jsxRuntimeExports.jsx(Label, {}),
    labelPlacement: labelPosition,
    control: jsxRuntimeExports.jsxs(FormControlWrapper, {
      children: [off, jsxRuntimeExports.jsx(Switch, {
        checked: value,
        onChange: onChange,
        name: name,
        value: value,
        classes: {
          switchBase: 'CustomSwitcher-switchBase'
        }
      }), on]
    })
  });
};

export { CustomSwitcher };
//# sourceMappingURL=CustomSwitcher.js.map
