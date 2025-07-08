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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledDatePickerWrapper, classes } from './styled-components';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
export var DatePicker = function (_a) {
    var touched = _a.touched, error = _a.error, errorMessage = _a.errorMessage, _b = _a.value, value = _b === void 0 ? null : _b, _c = _a.onChange, onChange = _c === void 0 ? function () { return undefined; } : _c, minDate = _a.minDate, maxDate = _a.maxDate;
    var ref = useRef(null);
    return (_jsxs(StyledDatePickerWrapper, { className: "".concat(error && touched ? 'error' : ''), ref: ref, children: [_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(DesktopDatePicker, { className: classes.datePicker, 
                    // label={label || 'Select'}
                    value: typeof value === 'string' ? new Date(value) : value, 
                    // onChange={handleChange}
                    format: 'dd.MM.yyyy', onChange: function (date) { return onChange(date); }, slotProps: {
                        popper: {
                            anchorEl: ref.current,
                        },
                    }, slots: {
                        textField: function (params) { return (_jsx(TextField, __assign({}, params, { variant: 'outlined', error: error && touched, InputLabelProps: {
                                style: { top: '-6px' },
                            }, sx: {
                                '& .MuiIconButton-root': {
                                    color: '#08C694',
                                },
                            } }))); },
                    }, minDate: minDate || new Date('1900-01-01'), maxDate: maxDate || new Date() }) }), error && touched && (_jsx(Typography, { variant: 'caption', color: 'error', children: errorMessage }))] }));
};
//# sourceMappingURL=DatePicker.js.map