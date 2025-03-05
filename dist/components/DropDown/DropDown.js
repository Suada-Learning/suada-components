import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactSelect from 'react-select';
import { StyledLabel } from '../Input/styled-components';
import { CaretDown } from '../../icons';
import { ContainerSelect, customStyles, ErrorMessage } from './DropDown.styles';
export var DropDown = function (props) {
    var DropdownIndicator = function () { return _jsx(CaretDown, {}); };
    return (_jsxs(ContainerSelect, { error: !!(props.error && props.touched), children: [props.label && _jsx(StyledLabel, { children: props.label }), _jsx(ReactSelect, { className: props.className, isMulti: props.isMulti, onChange: props.onChange, options: props.options || undefined, value: props.value, placeholder: props.placeholder, styles: props.styles || customStyles, isClearable: props.isClearable, onFocus: props.onFocus, isDisabled: props.isDisabled, isLoading: props.isLoading, components: { DropdownIndicator: DropdownIndicator } }), props.touched && props.error && props.errorMessage && (_jsx(ErrorMessage, { children: props.errorMessage }))] }));
};
//# sourceMappingURL=DropDown.js.map