'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
require('../../Middleware-BpA40f7i.js');
require('react');

var DatePickerWrapper = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  &.error label {\n    color: #f44336;\n  }\n\n  &.error .MuiInputBase-root::before {\n    border-bottom: 2px solid #f44336;\n  }\n\n  div > p,\n  > p {\n    position: absolute;\n    bottom: -26px;\n    color: #f44336;\n    font-size: 0.75rem;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n\n  &.error label {\n    color: #f44336;\n  }\n\n  &.error .MuiInputBase-root::before {\n    border-bottom: 2px solid #f44336;\n  }\n\n  div > p,\n  > p {\n    position: absolute;\n    bottom: -26px;\n    color: #f44336;\n    font-size: 0.75rem;\n  }\n"])));
var PREFIX = 'DatePicker';
var classes = {
  datePicker: "".concat(PREFIX, "-datePicker")
};
var StyledDatePickerWrapper = styledComponents_esm.dt('div')(function () {
  var _a;
  return _a = {}, _a["& .".concat(classes.datePicker)] = {
    marginTop: 0,
    width: '100%',
    '& .MuiOutlinedInput-root': {
      height: '40px'
    }
  }, _a;
});
var templateObject_1;

exports.DatePickerWrapper = DatePickerWrapper;
exports.StyledDatePickerWrapper = StyledDatePickerWrapper;
exports.classes = classes;
//# sourceMappingURL=styled-components.cjs.js.map
