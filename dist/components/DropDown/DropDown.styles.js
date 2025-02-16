var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
export var customStyles = {
    option: function (provided, state) { return (__assign(__assign({}, provided), { '&:hover': {
            backgroundColor: 'rgba(6, 198, 144, 0.1)',
        }, backgroundColor: state.isSelected ? 'rgba(6, 198, 144, 0.3)' : 'transparent', color: '#000', fontFamily: "'Helvetica neue', sans-serif", borderRadius: '6px' })); },
    control: function (provided, state) { return (__assign(__assign({}, provided), { borderRadius: '6px', transition: 'border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in', boxShadow: '0 1px 9px 5px rgb(0 0 0 / 3%)', outline: 'none', borderColor: state.isFocused ? '#06c68f !important' : 'rgba(0, 0, 0, 0.1)', fontFamily: "'Helvetica neue', sans-serif", border: state.isFocused ? '1px solid #06c68f' : '1px solid rgba(0, 0, 0, 0.1)' })); },
    menu: function (provided, state) { return (__assign(__assign({}, provided), { zIndex: '99', transition: 'border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in', boxShadow: '0 1px 9px 5px rgb(0 0 0 / 3%)', fontFamily: "'Helvetica neue', sans-serif", outline: 'none', border: state.isFocused ? '1px solid #06c68f' : '1px solid rgba(0, 0, 0, 0.1)', borderColor: state.isFocused ? '#06c68f !important' : 'rgba(0, 0, 0, 0.1)', borderRadius: '6px', minHeight: '40px' })); },
};
import styled from 'styled-components';
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n    &:hover {\n      border-color: ", ";\n    }\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  & > .css-1m92ju6-control {\n    border-color: ", ";\n  }\n  & > .css-1n7v3ny-option {\n    background-color: rgba(6, 198, 144, 0.1) !important;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n    &:hover {\n      border-color: ", ";\n    }\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  & > .css-1m92ju6-control {\n    border-color: ", ";\n  }\n  & > .css-1n7v3ny-option {\n    background-color: rgba(6, 198, 144, 0.1) !important;\n  }\n"])), function (_a) {
    var error = _a.error;
    return (error ? '#f44336' : 'rgba(0, 0, 0, 0.23)');
}, function (_a) {
    var error = _a.error;
    return (error ? '#f44336' : 'rgba(0, 0, 0, 0.23)');
}, function (_a) {
    var error = _a.error;
    return (error ? '#f44336' : 'rgba(0, 0, 0, 0.54) ');
}, function (_a) {
    var error = _a.error;
    return (error ? '#f44336' : '#06c68f');
});
export var ErrorMessage = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"], ["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"])));
export var ContainerSelect = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  .css-1hb7zxy-IndicatorsContainer {\n    padding-right: 10px;\n    cursor: pointer;\n  }\n  .css-1okebmr-indicatorSeparator {\n    display: none;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n  .css-yk16xz-control {\n    border-color: ", ";\n    outline: none;\n  }\n  .css-1wa3eu0-placeholder {\n    color: ", ";\n  }\n  .css-1hb7zxy-IndicatorsContainer {\n    padding-right: 10px;\n    cursor: pointer;\n  }\n  .css-1okebmr-indicatorSeparator {\n    display: none;\n  }\n"])), function (_a) {
    var error = _a.error;
    return (error ? '#f44336' : 'rgba(0, 0, 0, 0.23)');
}, function (_a) {
    var error = _a.error;
    return (error ? '#f44336' : 'rgba(0, 0, 0, 0.54) ');
});
export var SelectFieldWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 372px !important;\n  height: 40px !important;\n  .selectField {\n    width: 372px !important;\n  }\n"], ["\n  width: 372px !important;\n  height: 40px !important;\n  .selectField {\n    width: 372px !important;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=DropDown.styles.js.map