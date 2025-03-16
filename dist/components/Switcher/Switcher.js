var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
export default function SwitchesGroup() {
    var _a = React.useState({
        checked: true,
    }), state = _a[0], setState = _a[1];
    var handleChange = function (name) { return function (event) {
        var _a;
        if (!event.target.checked) {
            setTimeout(function () {
                // dispatch({
                //   type: SET_SELECTED_COMPANY_ID,
                //   payload: null
                // });
                // clearCompanyModee();
            }, 300);
        }
        setState(__assign(__assign({}, state), (_a = {}, _a[name] = event.target.checked, _a)));
    }; };
    return (_jsx(FormControl, { variant: 'standard', component: 'fieldset', children: _jsx(FormGroup, { children: _jsx(FormControlLabel, { control: _jsx(Switch, { checked: state.checked, onChange: handleChange('checked'), value: 'checked' }), label: 'Company mode' }) }) }));
}
//# sourceMappingURL=Switcher.js.map