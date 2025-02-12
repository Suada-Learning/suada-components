import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { default as CustomSwitch } from '@mui/material/Switch';
import { Tooltip } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControlLabelStyles, FormControlWrapper, HelpIconStyles, StyledLabel, ToolTipContainer, TooltipTitle, } from './CustomSwitcher.styles';
import { Help } from '../../svg';
export var CustomSwitcher = function (_a) {
    var value = _a.value, onChange = _a.onChange, name = _a.name, label = _a.label, on = _a.on, off = _a.off, tooltip = _a.tooltip, _b = _a.labelPosition, labelPosition = _b === void 0 ? 'start' : _b, labelStyle = _a.labelStyle;
    var Label = function () {
        if (tooltip) {
            return (_jsxs(ToolTipContainer, { children: [_jsx(StyledLabel, { style: labelStyle, children: label }), _jsx(Tooltip, { title: _jsx(TooltipTitle, { children: tooltip }), arrow: true, children: _jsx(Help, { color: 'primary', style: HelpIconStyles }) })] }));
        }
        return _jsx(StyledLabel, { style: labelStyle, children: label });
    };
    return (_jsx(FormControlLabel, { style: FormControlLabelStyles, label: _jsx(Label, {}), labelPlacement: labelPosition, control: _jsxs(FormControlWrapper, { children: [off, _jsx(CustomSwitch, { checked: value, onChange: onChange, name: name, value: value, classes: {
                        switchBase: 'CustomSwitcher-switchBase',
                    } }), on] }) }));
};
//# sourceMappingURL=CustomSwitcher.js.map