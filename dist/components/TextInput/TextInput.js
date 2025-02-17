import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { Field, Title, CharactersContainer, ValidationIcon, StyledComponentContainer } from './styled-components.js';
import ErrorOutlineRoundedIcon from '../../node_modules/@mui/icons-material/esm/ErrorOutlineRounded.js';
import CheckCircleOutlineRoundedIcon from '../../node_modules/@mui/icons-material/esm/CheckCircleOutlineRounded.js';
import TextField from '../../node_modules/@mui/material/TextField/TextField.js';

var TextInput = function TextInput(_a) {
  var title = _a.title,
    label = _a.label,
    size = _a.size,
    icon = _a.icon,
    name = _a.name,
    _b = _a.id,
    id = _b === undefined ? 'standard-basic' : _b,
    type = _a.type,
    value = _a.value,
    error = _a.error,
    errorMessage = _a.errorMessage,
    touched = _a.touched,
    fullWidth = _a.fullWidth,
    onChange = _a.onChange,
    onBlur = _a.onBlur,
    min = _a.min,
    max = _a.max,
    onFocus = _a.onFocus,
    multiline = _a.multiline,
    rows = _a.rows,
    _c = _a.variant,
    variant = _c === undefined ? 'outlined' : _c,
    _d = _a.validate,
    validate = _d === undefined ? true : _d,
    _e = _a.disabled,
    disabled = _e === undefined ? false : _e,
    _f = _a.readOnly,
    readOnly = _f === undefined ? false : _f,
    endAdornment = _a.endAdornment,
    component = _a.component,
    inputStyle = _a.inputStyle,
    maxCharacter = _a.maxCharacter,
    _g = _a.required,
    required = _g === undefined ? false : _g,
    _h = _a.$iconInStart,
    $iconInStart = _h === undefined ? true : _h,
    _j = _a.placeholder,
    placeholder = _j === undefined ? '' : _j,
    _k = _a.className,
    className = _k === undefined ? '' : _k,
    _l = _a.enableAutoComplete,
    enableAutoComplete = _l === undefined ? false : _l;
  var handleInputChange = function handleInputChange(event) {
    if (maxCharacter && event.target.value.length <= maxCharacter) {
      onChange(event);
    }
  };
  var lpIgnore = !enableAutoComplete;
  return jsxRuntimeExports.jsxs(Field, {
    className: fullWidth ? 'full' : '',
    "$iconInStart": $iconInStart && !!icon,
    children: [title && jsxRuntimeExports.jsx(Title, {
      "$required": required,
      children: title
    }), jsxRuntimeExports.jsx(TextField, {
      error: touched && error ? true : false,
      helperText: touched && error ? errorMessage : '',
      id: id,
      label: label,
      variant: variant,
      size: size,
      name: name,
      type: type,
      value: value,
      onChange: maxCharacter ? handleInputChange : onChange,
      required: required,
      onBlur: onBlur,
      onFocus: onFocus,
      style: {
        width: '100%'
      },
      multiline: multiline,
      rows: rows,
      disabled: disabled,
      InputProps: {
        readOnly: readOnly,
        endAdornment: endAdornment,
        style: inputStyle,
        inputProps: {
          min: min,
          max: max,
          'data-1p-ignore': lpIgnore,
          'data-lpignore': lpIgnore.toString()
        }
      },
      inputProps: {
        maxLength: maxCharacter
      },
      // The string 'off-unique' is used here because some extensions do not recognize it.
      // This allows the field to behave as if 'off' was set. Using 'off' directly still triggers Google's autoComplete.
      autoComplete: enableAutoComplete ? 'on' : 'off-unique',
      placeholder: placeholder,
      className: className
    }), maxCharacter && typeof value === 'string' && jsxRuntimeExports.jsxs(CharactersContainer, {
      children: [(value === null || value === undefined ? undefined : value.length) ? maxCharacter - (value === null || value === undefined ? undefined : value.length) : maxCharacter, " - ", maxCharacter, " symbols remaining"]
    }), touched && validate && jsxRuntimeExports.jsx(ValidationIcon, {
      className: "".concat(error ? 'error' : 'valid'),
      children: error ? jsxRuntimeExports.jsx(ErrorOutlineRoundedIcon, {}) : jsxRuntimeExports.jsx(CheckCircleOutlineRoundedIcon, {})
    }), icon && icon, component ? jsxRuntimeExports.jsx(StyledComponentContainer, {
      children: component
    }) : null]
  });
};

export { TextInput as default };
//# sourceMappingURL=TextInput.js.map
