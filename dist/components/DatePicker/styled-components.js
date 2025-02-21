var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var DatePickerWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  &.error label {\n    color: #f44336;\n  }\n\n  &.error .MuiInputBase-root::before {\n    border-bottom: 2px solid #f44336;\n  }\n\n  div > p,\n  > p {\n    position: absolute;\n    bottom: -26px;\n    color: #f44336;\n    font-size: 0.75rem;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n\n  &.error label {\n    color: #f44336;\n  }\n\n  &.error .MuiInputBase-root::before {\n    border-bottom: 2px solid #f44336;\n  }\n\n  div > p,\n  > p {\n    position: absolute;\n    bottom: -26px;\n    color: #f44336;\n    font-size: 0.75rem;\n  }\n"])));
var PREFIX = 'DatePicker';
export var classes = {
    datePicker: "".concat(PREFIX, "-datePicker"),
};
export var StyledDatePickerWrapper = styled('div')(function () {
    var _a;
    return (_a = {},
        _a["& .".concat(classes.datePicker)] = {
            marginTop: 0,
            width: '100%',
            '& .MuiOutlinedInput-root': {
                height: '40px',
            },
        },
        _a);
});
var templateObject_1;
//# sourceMappingURL=styled-components.js.map