import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field, ValidationIcon, StyledComponentContainer, CharactersContainer, Title, } from './styled-components';
import TextField from '@mui/material/TextField';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import './TextInput.scss';
var TextInput = function (_a) {
    var title = _a.title, label = _a.label, size = _a.size, icon = _a.icon, name = _a.name, _b = _a.id, id = _b === void 0 ? 'standard-basic' : _b, type = _a.type, value = _a.value, error = _a.error, errorMessage = _a.errorMessage, touched = _a.touched, fullWidth = _a.fullWidth, onChange = _a.onChange, onBlur = _a.onBlur, min = _a.min, max = _a.max, onFocus = _a.onFocus, multiline = _a.multiline, rows = _a.rows, _c = _a.variant, variant = _c === void 0 ? 'outlined' : _c, _d = _a.validate, validate = _d === void 0 ? true : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.readOnly, readOnly = _f === void 0 ? false : _f, endAdornment = _a.endAdornment, component = _a.component, inputStyle = _a.inputStyle, maxCharacter = _a.maxCharacter, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.$iconInStart, $iconInStart = _h === void 0 ? true : _h, _j = _a.placeholder, placeholder = _j === void 0 ? '' : _j, _k = _a.className, className = _k === void 0 ? '' : _k, _l = _a.enableAutoComplete, enableAutoComplete = _l === void 0 ? false : _l;
    var handleInputChange = function (event) {
        if (maxCharacter && event.target.value.length <= maxCharacter) {
            onChange(event);
        }
    };
    var lpIgnore = !enableAutoComplete;
    return (_jsxs(Field, { className: fullWidth ? 'full' : '', "$iconInStart": $iconInStart && !!icon, children: [title && _jsx(Title, { "$required": required, children: title }), _jsx(TextField, { error: touched && error ? true : false, helperText: touched && error ? errorMessage : '', id: id, label: label, variant: variant, size: size, name: name, type: type, value: value, onChange: maxCharacter ? handleInputChange : onChange, required: required, onBlur: onBlur, onFocus: onFocus, style: { width: '100%' }, multiline: multiline, rows: rows, disabled: disabled, InputProps: {
                    readOnly: readOnly,
                    endAdornment: endAdornment,
                    style: inputStyle,
                    inputProps: {
                        min: min,
                        max: max,
                        'data-1p-ignore': lpIgnore,
                        'data-lpignore': lpIgnore.toString(),
                    },
                }, inputProps: {
                    maxLength: maxCharacter,
                }, 
                // The string 'off-unique' is used here because some extensions do not recognize it.
                // This allows the field to behave as if 'off' was set. Using 'off' directly still triggers Google's autoComplete.
                autoComplete: enableAutoComplete ? 'on' : 'off-unique', placeholder: placeholder, className: className }), maxCharacter && typeof value === 'string' && (_jsxs(CharactersContainer, { children: [(value === null || value === void 0 ? void 0 : value.length) ? maxCharacter - (value === null || value === void 0 ? void 0 : value.length) : maxCharacter, " - ", maxCharacter, " symbols remaining"] })), touched && validate && (_jsx(ValidationIcon, { className: "".concat(error ? 'error' : 'valid'), children: error ? _jsx(ErrorOutlineRoundedIcon, {}) : _jsx(CheckCircleOutlineRoundedIcon, {}) })), icon && icon, component ? _jsx(StyledComponentContainer, { children: component }) : null] }));
};
export default TextInput;
//# sourceMappingURL=TextInput.js.map