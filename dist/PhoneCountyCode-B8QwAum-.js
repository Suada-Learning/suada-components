'use strict';

var tslib_es6 = require('./tslib.es6-Ce89yL0g.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');
var components_PhoneCountyCode_styledComponents = require('./components/PhoneCountyCode/styled-components.cjs.js');
var components_PhoneCountyCode_countryCode = require('./components/PhoneCountyCode/countryCode.cjs.js');
var reactSelect_esm = require('./react-select.esm-CfpjqB9i.js');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"];
var DEFAULT_CDN_URL = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/';
var DEFAULT_CDN_SUFFIX = 'svg';
// offset between uppercase ascii and regional indicator symbols
var OFFSET = 127397;
var ReactCountryFlag = function ReactCountryFlag(_ref) {
  var _ref$cdnSuffix = _ref.cdnSuffix,
    cdnSuffix = _ref$cdnSuffix === void 0 ? DEFAULT_CDN_SUFFIX : _ref$cdnSuffix,
    _ref$cdnUrl = _ref.cdnUrl,
    cdnUrl = _ref$cdnUrl === void 0 ? DEFAULT_CDN_URL : _ref$cdnUrl,
    countryCode = _ref.countryCode,
    style = _ref.style,
    _ref$svg = _ref.svg,
    svg = _ref$svg === void 0 ? false : _ref$svg,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (typeof countryCode !== 'string') {
    return null;
  }
  if (svg) {
    var flagUrl = "" + cdnUrl + countryCode.toLowerCase() + "." + cdnSuffix;
    return React.createElement("img", Object.assign({}, props, {
      src: flagUrl,
      style: _extends({
        display: 'inline-block',
        width: '1em',
        height: '1em',
        verticalAlign: 'middle'
      }, style)
    }));
  }
  var emoji = countryCode.toUpperCase().replace(/./g, function (_char) {
    return String.fromCodePoint(_char.charCodeAt(0) + OFFSET);
  });
  return React.createElement("span", Object.assign({
    role: "img"
  }, props, {
    style: _extends({
      display: 'inline-block',
      fontSize: '1em',
      lineHeight: '1em',
      verticalAlign: 'middle'
    }, style)
  }), emoji);
};

var PhoneCountryCode = function PhoneCountryCode(_a) {
  _a.label;
    var selectLabel = _a.selectLabel,
    selectValue = _a.selectValue,
    selectChange = _a.selectChange;
    _a.inputLabel;
    _a.inputValue;
    _a.inputChange;
    _a.touched;
    _a.error;
    _a.errorMessage;
  var _b = React.useState(null),
    selectedCountry = _b[0],
    setSelectedCountry = _b[1];
  var Option = reactSelect_esm.components.Option;
  // Custom option component for the select dropdown
  var CustomSelectOption = function CustomSelectOption(props) {
    return jsxRuntime.jsxRuntimeExports.jsxs(Option, tslib_es6.__assign({}, props, {
      children: [jsxRuntime.jsxRuntimeExports.jsx(ReactCountryFlag, {
        countryCode: props.data.value
      }), " ", props.data.label]
    }));
  };
  // Map country list to select options
  var countryOptions = components_PhoneCountyCode_countryCode().map(function (country) {
    return {
      label: country.dial_code,
      value: country.code
    };
  });
  // Component to display country flag and dial code
  var CountryDisplay = function CountryDisplay(_a) {
    var dialCode = _a.dialCode,
      code = _a.code;
    return jsxRuntime.jsxRuntimeExports.jsxs("div", {
      children: [jsxRuntime.jsxRuntimeExports.jsx(ReactCountryFlag, {
        countryCode: code
      }), " ", dialCode]
    });
  };
  React.useEffect(function () {
    if (selectValue && selectValue.value) {
      setSelectedCountry({
        label: jsxRuntime.jsxRuntimeExports.jsx(CountryDisplay, {
          dialCode: selectValue.label,
          code: selectValue.value
        }),
        value: selectValue.value
      });
    }
  }, [selectValue]);
  var handleSelectChange = function handleSelectChange(selectedOption) {
    if (!selectedOption) {
      setSelectedCountry(null);
      selectChange(null);
      return;
    }
    setSelectedCountry({
      label: jsxRuntime.jsxRuntimeExports.jsx(CountryDisplay, {
        dialCode: selectedOption.label,
        code: selectedOption.value
      }),
      value: selectedOption.value
    });
    selectChange(selectedOption);
  };
  return jsxRuntime.jsxRuntimeExports.jsx(components_PhoneCountyCode_styledComponents.Flex, {
    children: jsxRuntime.jsxRuntimeExports.jsx(components_PhoneCountyCode_styledComponents.InputContainer, {
      children: jsxRuntime.jsxRuntimeExports.jsx(reactSelect_esm.StateManagedSelect$1, {
        placeholder: selectLabel,
        options: countryOptions,
        value: selectedCountry,
        onChange: handleSelectChange,
        components: {
          Option: CustomSelectOption
        },
        isClearable: true
      })
    })
  });
};

exports.PhoneCountryCode = PhoneCountryCode;
//# sourceMappingURL=PhoneCountyCode-B8QwAum-.js.map
