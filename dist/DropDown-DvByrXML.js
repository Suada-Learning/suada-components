import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { S as StateManagedSelect$1 } from './react-select.esm-CmSRAipB.js';
import { StyledLabel } from './components/Input/styled-components.js';
import './tslib.es6-C0iDBclc.js';
import { C as CaretDown } from './CaretDown-C-E9uhT1.js';
import { ContainerSelect, customStyles, ErrorMessage } from './components/DropDown/DropDown.styles.js';

var DropDown = function DropDown(props) {
  var DropdownIndicator = function DropdownIndicator() {
    return jsxRuntimeExports.jsx(CaretDown, {});
  };
  return jsxRuntimeExports.jsxs(ContainerSelect, {
    error: !!(props.error && props.touched),
    children: [props.label && jsxRuntimeExports.jsx(StyledLabel, {
      "$required": props.required,
      children: props.label
    }), jsxRuntimeExports.jsx(StateManagedSelect$1, {
      className: props.className,
      isMulti: props.isMulti,
      onChange: props.onChange,
      options: props.options || undefined,
      value: props.value,
      placeholder: props.placeholder,
      styles: props.styles || customStyles,
      isClearable: props.isClearable,
      onFocus: props.onFocus,
      isDisabled: props.isDisabled,
      isLoading: props.isLoading,
      components: {
        DropdownIndicator: DropdownIndicator
      }
    }), props.touched && props.error && props.errorMessage && jsxRuntimeExports.jsx(ErrorMessage, {
      children: props.errorMessage
    })]
  });
};

export { DropDown as D };
//# sourceMappingURL=DropDown-DvByrXML.js.map
