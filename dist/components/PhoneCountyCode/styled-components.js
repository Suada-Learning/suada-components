var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  gap: 16px;\n  /* height: 40px; */\n  width: 60%;\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  padding: 5px;\n  margin-bottom: 5px;\n"], ["\n  display: flex;\n  gap: 16px;\n  /* height: 40px; */\n  width: 60%;\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  padding: 5px;\n  margin-bottom: 5px;\n"])), function (_a) {
    var error = _a.error;
    return (error ? 'red' : 'rgba(0, 0, 0, 0.23)');
});
export var InputContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 60%;\n  gap: 8px;\n  min-height: 40px;\n  margin-right: 10px;\n\n  & > div > div {\n    min-height: 40px;\n  }\n"], ["\n  width: 60%;\n  gap: 8px;\n  min-height: 40px;\n  margin-right: 10px;\n\n  & > div > div {\n    min-height: 40px;\n  }\n"])));
export var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  gap: 8px;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-left: none;\n  padding: 6px;\n  font-family: 'Open Sans';\n  color: black;\n  font-size: 15px;\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"], ["\n  flex: 1;\n  gap: 8px;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-left: none;\n  padding: 6px;\n  font-family: 'Open Sans';\n  color: black;\n  font-size: 15px;\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])));
export var Label = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 12px;\n  top: -11px;\n  background: #fff;\n  z-index: 1;\n  font-size: 13px;\n  color: ", ";\n"], ["\n  position: absolute;\n  left: 12px;\n  top: -11px;\n  background: #fff;\n  z-index: 1;\n  font-size: 13px;\n  color: ", ";\n"])), function (_a) {
    var error = _a.error;
    return (error ? 'red' : 'rgba(0, 0, 0, 0.54)');
});
export var ErrorMessage = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"], ["\n  position: absolute;\n  color: #f44336;\n  bottom: -20px;\n  left: 6px;\n  font-size: 0.75rem;\n"])));
export var Flex = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled-components.js.map