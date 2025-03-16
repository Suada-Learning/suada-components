'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
require('../../Middleware-BpA40f7i.js');
require('react');

var Field = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  position: relative;\n  font-family: sans-serif;\n  background-color: white;\n\n  &.full {\n    width: 100%;\n  }\n\n  p:not(:first-child) {\n    position: absolute;\n    left: -10px;\n    bottom: -24px;\n  }\n\n  .MuiFormLabel-root,\n  .MuiFormLabel-root,\n  fieldset,\n  input {\n    ", ";\n  }\n\n  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {\n    border-color: #d32f2f !important;\n  }\n\n  button {\n    position: absolute;\n    ", ";\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 5px;\n  }\n"], ["\n  position: relative;\n  font-family: sans-serif;\n  background-color: white;\n\n  &.full {\n    width: 100%;\n  }\n\n  p:not(:first-child) {\n    position: absolute;\n    left: -10px;\n    bottom: -24px;\n  }\n\n  .MuiFormLabel-root,\n  .MuiFormLabel-root,\n  fieldset,\n  input {\n    ", ";\n  }\n\n  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {\n    border-color: #d32f2f !important;\n  }\n\n  button {\n    position: absolute;\n    ", ";\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 5px;\n  }\n"])), function (_a) {
  var $iconInStart = _a.$iconInStart;
  return $iconInStart ? 'padding-left: 40px;' : 'padding-right: 40px;';
}, function (_a) {
  var $iconInStart = _a.$iconInStart;
  return $iconInStart ? 'left: 5px;' : 'right: 5px;';
});
var ValidationIcon = styledComponents_esm.dt.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  bottom: -10px;\n  transform: translateY(-50%);\n  right: 6px;\n  width: unset !important;\n\n  &.error svg {\n    color: red;\n  }\n\n  &.valid svg {\n    color: green;\n  }\n"], ["\n  position: absolute;\n  bottom: -10px;\n  transform: translateY(-50%);\n  right: 6px;\n  width: unset !important;\n\n  &.error svg {\n    color: red;\n  }\n\n  &.valid svg {\n    color: green;\n  }\n"])));
var StyledComponentContainer = styledComponents_esm.dt.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 2;\n  .btn--small {\n    overflow: initial !important;\n  }\n"], ["\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 2;\n  .btn--small {\n    overflow: initial !important;\n  }\n"])));
var CharactersContainer = styledComponents_esm.dt.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  width: max-content;\n  font-size: 12px;\n  color: #68707a;\n  margin-top: 5px;\n  margin-left: 5px;\n  position: absolute;\n  bottom: -20px;\n  right: 6px;\n"], ["\n  width: max-content;\n  font-size: 12px;\n  color: #68707a;\n  margin-top: 5px;\n  margin-left: 5px;\n  position: absolute;\n  bottom: -20px;\n  right: 6px;\n"])));
var StyledInput = styledComponents_esm.dt.input(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  border-radius: 6px;\n  border: 1px solid #e6e6e6;\n  min-height: 40px;\n  outline: none;\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-family: sans-serif;\n  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  transition:\n    border 0.3s ease-in,\n    box-shadow 0.3s ease-in;\n\n  &:focus {\n    border: 1px solid #06c68f;\n    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  }\n"], ["\n  width: 100%;\n  border-radius: 6px;\n  border: 1px solid #e6e6e6;\n  min-height: 40px;\n  outline: none;\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-family: sans-serif;\n  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  transition:\n    border 0.3s ease-in,\n    box-shadow 0.3s ease-in;\n\n  &:focus {\n    border: 1px solid #06c68f;\n    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  }\n"])));
var StyledTextArea = styledComponents_esm.dt.textarea(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  border-radius: 6px;\n  border: 1px solid #e6e6e6;\n  min-height: 40px;\n  resize: none;\n  outline: none;\n  padding: 10px;\n  font-family: sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  transition:\n    border 0.3s ease-in,\n    box-shadow 0.3s ease-in;\n\n  &:focus {\n    border: 1px solid #06c68f;\n    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  }\n"], ["\n  width: 100%;\n  border-radius: 6px;\n  border: 1px solid #e6e6e6;\n  min-height: 40px;\n  resize: none;\n  outline: none;\n  padding: 10px;\n  font-family: sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  transition:\n    border 0.3s ease-in,\n    box-shadow 0.3s ease-in;\n\n  &:focus {\n    border: 1px solid #06c68f;\n    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);\n  }\n"])));
var StyledLabel = styledComponents_esm.dt.p(templateObject_7 || (templateObject_7 = tslib_es6.__makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 550;\n  padding-top: 0px;\n  margin-bottom: 5px;\n\n  ", "\n"], ["\n  font-size: 16px;\n  font-weight: 550;\n  padding-top: 0px;\n  margin-bottom: 5px;\n\n  ", "\n"])), function (_a) {
  var $required = _a.$required;
  return $required ? "\n    &::after {\n      content: '*';\n      color: red;\n      margin-left: 3px;\n    }\n  " : '';
});
var ErrorMessage = styledComponents_esm.dt.div(templateObject_8 || (templateObject_8 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"], ["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"])));
var Title = styledComponents_esm.dt.h2(templateObject_9 || (templateObject_9 = tslib_es6.__makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 550;\n  margin-bottom: 5px;\n\n  ", "\n"], ["\n  font-size: 16px;\n  font-weight: 550;\n  margin-bottom: 5px;\n\n  ", "\n"])), function (_a) {
  var $required = _a.$required;
  return $required ? "\n    &::after {\n      content: '*';\n      color: red;\n      margin-left: 3px;\n    }\n  " : '';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

exports.CharactersContainer = CharactersContainer;
exports.ErrorMessage = ErrorMessage;
exports.Field = Field;
exports.StyledComponentContainer = StyledComponentContainer;
exports.StyledInput = StyledInput;
exports.StyledLabel = StyledLabel;
exports.StyledTextArea = StyledTextArea;
exports.Title = Title;
exports.ValidationIcon = ValidationIcon;
//# sourceMappingURL=styled-components.cjs.js.map
