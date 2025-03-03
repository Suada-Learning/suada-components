import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as MUICheckBox, FormControlLabel, Tooltip } from '@mui/material';
import { LabelContainer } from './styled-components';
import { Help } from '../../svg';
export var Checkbox = function (_a) {
    var checked = _a.checked, onChange = _a.onChange, label = _a.label, tooltip = _a.tooltip, _b = _a.name, name = _b === void 0 ? 'checkbox' : _b;
    var checkedColor = '#08c694';
    return (_jsx(FormControlLabel, { control: _jsx(MUICheckBox, { checked: checked, onChange: onChange, name: name, sx: {
                color: checked ? checkedColor : undefined,
                '&.Mui-checked': {
                    color: checkedColor,
                },
            } }), label: _jsxs(LabelContainer, { children: [_jsx("span", { children: label }), tooltip && (_jsx(Tooltip, { title: tooltip, children: _jsx(Help, {}) }))] }) }));
};
//# sourceMappingURL=Checkbox.js.map