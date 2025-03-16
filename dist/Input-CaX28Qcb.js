'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Input_styledComponents = require('./components/Input/styled-components.cjs.js');
var _commonjsHelpers = require('./_commonjsHelpers-CxXfaUfr.js');
var interopRequireDefault = require('./interopRequireDefault-BBOtkihg.js');
var createSvgIcon = require('./createSvgIcon-DLn4QZlg.js');
var TextField = require('./TextField-ETLmdbpw.js');

var ErrorOutlineRounded = {};

var hasRequiredErrorOutlineRounded;

function requireErrorOutlineRounded () {
	if (hasRequiredErrorOutlineRounded) return ErrorOutlineRounded;
	hasRequiredErrorOutlineRounded = 1;

	var _interopRequireDefault = interopRequireDefault.requireInteropRequireDefault();
	Object.defineProperty(ErrorOutlineRounded, "__esModule", {
	  value: true
	});
	ErrorOutlineRounded.default = void 0;
	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ createSvgIcon.requireCreateSvgIcon());
	var _jsxRuntime = jsxRuntime.requireJsxRuntime();
	ErrorOutlineRounded.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
	  d: "M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m1-3h-2v-2h2z"
	}), 'ErrorOutlineRounded');
	return ErrorOutlineRounded;
}

var ErrorOutlineRoundedExports = /*@__PURE__*/ requireErrorOutlineRounded();
var ErrorOutlineRoundedIcon = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(ErrorOutlineRoundedExports);

var CheckCircleOutlineRounded = {};

var hasRequiredCheckCircleOutlineRounded;

function requireCheckCircleOutlineRounded () {
	if (hasRequiredCheckCircleOutlineRounded) return CheckCircleOutlineRounded;
	hasRequiredCheckCircleOutlineRounded = 1;

	var _interopRequireDefault = interopRequireDefault.requireInteropRequireDefault();
	Object.defineProperty(CheckCircleOutlineRounded, "__esModule", {
	  value: true
	});
	CheckCircleOutlineRounded.default = void 0;
	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ createSvgIcon.requireCreateSvgIcon());
	var _jsxRuntime = jsxRuntime.requireJsxRuntime();
	CheckCircleOutlineRounded.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
	  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.88-11.71L10 14.17l-1.88-1.88a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0"
	}), 'CheckCircleOutlineRounded');
	return CheckCircleOutlineRounded;
}

var CheckCircleOutlineRoundedExports = /*@__PURE__*/ requireCheckCircleOutlineRounded();
var CheckCircleOutlineRoundedIcon = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(CheckCircleOutlineRoundedExports);

var TextInput = function TextInput(_a) {
  var title = _a.title,
    label = _a.label,
    size = _a.size,
    icon = _a.icon,
    name = _a.name,
    _b = _a.id,
    id = _b === void 0 ? 'standard-basic' : _b,
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
    variant = _c === void 0 ? 'outlined' : _c,
    _d = _a.validate,
    validate = _d === void 0 ? true : _d,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    _f = _a.readOnly,
    readOnly = _f === void 0 ? false : _f,
    endAdornment = _a.endAdornment,
    component = _a.component,
    inputStyle = _a.inputStyle,
    maxCharacter = _a.maxCharacter,
    _g = _a.required,
    required = _g === void 0 ? false : _g,
    _h = _a.$iconInStart,
    $iconInStart = _h === void 0 ? true : _h,
    _j = _a.placeholder,
    placeholder = _j === void 0 ? '' : _j,
    _k = _a.className,
    className = _k === void 0 ? '' : _k,
    _l = _a.enableAutoComplete,
    enableAutoComplete = _l === void 0 ? false : _l;
  var handleInputChange = function handleInputChange(event) {
    if (maxCharacter && event.target.value.length <= maxCharacter) {
      onChange(event);
    }
  };
  var lpIgnore = !enableAutoComplete;
  return jsxRuntime.jsxRuntimeExports.jsxs(components_Input_styledComponents.Field, {
    className: fullWidth ? 'full' : '',
    "$iconInStart": $iconInStart && !!icon,
    children: [title && jsxRuntime.jsxRuntimeExports.jsx(components_Input_styledComponents.Title, {
      "$required": required,
      children: title
    }), jsxRuntime.jsxRuntimeExports.jsx(TextField.TextField, {
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
    }), maxCharacter && typeof value === 'string' && jsxRuntime.jsxRuntimeExports.jsxs(components_Input_styledComponents.CharactersContainer, {
      children: [(value === null || value === void 0 ? void 0 : value.length) ? maxCharacter - (value === null || value === void 0 ? void 0 : value.length) : maxCharacter, " - ", maxCharacter, " symbols remaining"]
    }), touched && validate && jsxRuntime.jsxRuntimeExports.jsx(components_Input_styledComponents.ValidationIcon, {
      className: "".concat(error ? 'error' : 'valid'),
      children: error ? jsxRuntime.jsxRuntimeExports.jsx(ErrorOutlineRoundedIcon, {}) : jsxRuntime.jsxRuntimeExports.jsx(CheckCircleOutlineRoundedIcon, {})
    }), icon && icon, component ? jsxRuntime.jsxRuntimeExports.jsx(components_Input_styledComponents.StyledComponentContainer, {
      children: component
    }) : null]
  });
};

exports.TextInput = TextInput;
//# sourceMappingURL=Input-CaX28Qcb.js.map
