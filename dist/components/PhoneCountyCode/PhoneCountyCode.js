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
import { useState, useEffect } from 'react';
import { InputContainer, Flex } from './styled-components';
import countryList from './countryCode';
import ReactSelect, { components } from 'react-select';
import ReactCountryFlag from 'react-country-flag';
export var PhoneCountryCode = function (_a) {
    var label = _a.label, selectLabel = _a.selectLabel, selectValue = _a.selectValue, selectChange = _a.selectChange, inputLabel = _a.inputLabel, inputValue = _a.inputValue, inputChange = _a.inputChange, touched = _a.touched, error = _a.error, errorMessage = _a.errorMessage;
    var _b = useState(null), selectedCountry = _b[0], setSelectedCountry = _b[1];
    var Option = components.Option;
    // Custom option component for the select dropdown
    var CustomSelectOption = function (props) { return (_jsxs(Option, __assign({}, props, { children: [_jsx(ReactCountryFlag, { countryCode: props.data.value }), " ", props.data.label] }))); };
    // Map country list to select options
    var countryOptions = countryList().map(function (country) { return ({
        label: country.dial_code,
        value: country.code,
    }); });
    // Component to display country flag and dial code
    var CountryDisplay = function (_a) {
        var dialCode = _a.dialCode, code = _a.code;
        return (_jsxs("div", { children: [_jsx(ReactCountryFlag, { countryCode: code }), " ", dialCode] }));
    };
    useEffect(function () {
        if (selectValue && selectValue.value) {
            setSelectedCountry({
                label: _jsx(CountryDisplay, { dialCode: selectValue.label, code: selectValue.value }),
                value: selectValue.value,
            });
        }
    }, [selectValue]);
    var handleSelectChange = function (selectedOption) {
        if (!selectedOption) {
            setSelectedCountry(null);
            selectChange(null);
            return;
        }
        setSelectedCountry({
            label: (_jsx(CountryDisplay, { dialCode: selectedOption.label, code: selectedOption.value })),
            value: selectedOption.value,
        });
        selectChange(selectedOption);
    };
    var errorField = touched && error && errorMessage;
    // Handle input change to allow only numeric values
    var handleNumberChange = function (e) {
        var newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            inputChange(e);
        }
    };
    return (_jsx(Flex, { children: _jsx(InputContainer, { children: _jsx(ReactSelect, { placeholder: selectLabel, options: countryOptions, value: selectedCountry, onChange: handleSelectChange, components: { Option: CustomSelectOption }, isClearable: true }) }) }));
};
//# sourceMappingURL=PhoneCountyCode.js.map