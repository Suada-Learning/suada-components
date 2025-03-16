'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var reactSelect_esm = require('./react-select.esm-CfpjqB9i.js');
var components_Input_styledComponents = require('./components/Input/styled-components.cjs.js');
require('./tslib.es6-Ce89yL0g.js');
var CaretDown = require('./CaretDown-BOBT0B5x.js');
var components_DropDown_DropDown_styles = require('./components/DropDown/DropDown.styles.cjs.js');

var DropDown = function DropDown(props) {
  var DropdownIndicator = function DropdownIndicator() {
    return jsxRuntime.jsxRuntimeExports.jsx(CaretDown.CaretDown, {});
  };
  return jsxRuntime.jsxRuntimeExports.jsxs(components_DropDown_DropDown_styles.ContainerSelect, {
    error: !!(props.error && props.touched),
    children: [props.label && jsxRuntime.jsxRuntimeExports.jsx(components_Input_styledComponents.StyledLabel, {
      "$required": props.required,
      children: props.label
    }), jsxRuntime.jsxRuntimeExports.jsx(reactSelect_esm.StateManagedSelect$1, {
      className: props.className,
      isMulti: props.isMulti,
      onChange: props.onChange,
      options: props.options || undefined,
      value: props.value,
      placeholder: props.placeholder,
      styles: props.styles || components_DropDown_DropDown_styles.customStyles,
      isClearable: props.isClearable,
      onFocus: props.onFocus,
      isDisabled: props.isDisabled,
      isLoading: props.isLoading,
      components: {
        DropdownIndicator: DropdownIndicator
      }
    }), props.touched && props.error && props.errorMessage && jsxRuntime.jsxRuntimeExports.jsx(components_DropDown_DropDown_styles.ErrorMessage, {
      children: props.errorMessage
    })]
  });
};

exports.DropDown = DropDown;
//# sourceMappingURL=DropDown-WZLwuR76.js.map
