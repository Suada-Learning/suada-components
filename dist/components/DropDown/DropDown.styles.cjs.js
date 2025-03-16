'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
require('../../Middleware-BpA40f7i.js');
require('react');

var customStyles = {
  option: function option(provided, state) {
    return tslib_es6.__assign(tslib_es6.__assign({}, provided), {
      '&:hover': {
        backgroundColor: 'rgba(6, 198, 144, 0.1)'
      },
      backgroundColor: state.isSelected ? 'rgba(6, 198, 144, 0.3)' : 'transparent',
      color: '#000',
      fontFamily: "'Helvetica neue', sans-serif",
      borderRadius: '6px'
    });
  },
  control: function control(provided, state) {
    return tslib_es6.__assign(tslib_es6.__assign({}, provided), {
      borderRadius: '6px',
      transition: 'border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in',
      boxShadow: '0 1px 9px 5px rgb(0 0 0 / 3%)',
      outline: 'none',
      borderColor: state.isFocused ? '#06c68f !important' : 'rgba(0, 0, 0, 0.1)',
      fontFamily: "'Helvetica neue', sans-serif",
      border: state.isFocused ? '1px solid #06c68f' : '1px solid rgba(0, 0, 0, 0.1)'
    });
  },
  menu: function menu(provided, state) {
    return tslib_es6.__assign(tslib_es6.__assign({}, provided), {
      zIndex: '99',
      transition: 'border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in',
      boxShadow: '0 1px 9px 5px rgb(0 0 0 / 3%)',
      fontFamily: "'Helvetica neue', sans-serif",
      outline: 'none',
      border: state.isFocused ? '1px solid #06c68f' : '1px solid rgba(0, 0, 0, 0.1)',
      borderColor: state.isFocused ? '#06c68f !important' : 'rgba(0, 0, 0, 0.1)',
      borderRadius: '6px',
      minHeight: '40px'
    });
  }
};
var Container = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n    &:hover {\n      border-color: ", ";\n    }\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  & > .css-1m92ju6-control {\n    border-color: ", ";\n  }\n  & > .css-1n7v3ny-option {\n    background-color: rgba(6, 198, 144, 0.1) !important;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n    &:hover {\n      border-color: ", ";\n    }\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  & > .css-1m92ju6-control {\n    border-color: ", ";\n  }\n  & > .css-1n7v3ny-option {\n    background-color: rgba(6, 198, 144, 0.1) !important;\n  }\n"])), function (_a) {
  var error = _a.error;
  return error ? '#f44336' : 'rgba(0, 0, 0, 0.23)';
}, function (_a) {
  var error = _a.error;
  return error ? '#f44336' : 'rgba(0, 0, 0, 0.23)';
}, function (_a) {
  var error = _a.error;
  return error ? '#f44336' : 'rgba(0, 0, 0, 0.54) ';
}, function (_a) {
  var error = _a.error;
  return error ? '#f44336' : '#06c68f';
});
var ErrorMessage = styledComponents_esm.dt.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"], ["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"])));
var ContainerSelect = styledComponents_esm.dt.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  .css-1hb7zxy-IndicatorsContainer {\n    padding-right: 10px;\n    cursor: pointer;\n  }\n  .css-1okebmr-indicatorSeparator {\n    display: none;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  .css-1hb7zxy-IndicatorsContainer {\n    padding-right: 10px;\n    cursor: pointer;\n  }\n  .css-1okebmr-indicatorSeparator {\n    display: none;\n  }\n"])), function (_a) {
  var error = _a.error;
  return error ? '#f44336' : 'rgba(0, 0, 0, 0.23)';
}, function (_a) {
  var error = _a.error;
  return error ? '#f44336' : 'rgba(0, 0, 0, 0.54) ';
});
var SelectFieldWrapper = styledComponents_esm.dt.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  width: 372px !important;\n  height: 40px !important;\n  .selectField {\n    width: 372px !important;\n  }\n"], ["\n  width: 372px !important;\n  height: 40px !important;\n  .selectField {\n    width: 372px !important;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.Container = Container;
exports.ContainerSelect = ContainerSelect;
exports.ErrorMessage = ErrorMessage;
exports.SelectFieldWrapper = SelectFieldWrapper;
exports.customStyles = customStyles;
//# sourceMappingURL=DropDown.styles.cjs.js.map
