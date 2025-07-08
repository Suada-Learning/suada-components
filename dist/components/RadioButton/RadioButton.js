import { jsx as _jsx } from "react/jsx-runtime";
import { Radio } from '@mui/material';
export var RadioButton = function (_a) {
    var checked = _a.checked, value = _a.value, onChange = _a.onChange;
    var handleChange = function (event) {
        return onChange && onChange(event.target.value);
    };
    return (_jsx(Radio, { checked: checked, onChange: handleChange, value: value, sx: {
            '&.Mui-checked': {
                color: '#00905E',
            },
        } }));
};
//# sourceMappingURL=RadioButton.js.map