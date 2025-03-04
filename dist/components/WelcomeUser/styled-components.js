var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Content = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 0;\n  background: #212121;\n  transform: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 0;\n  background: #212121;\n  transform: ", ";\n"])), function (_a) {
    var isOpened = _a.isOpened;
    return (isOpened ? "translateX(0px)" : "translateX(0)");
});
export var Title = styled.h4(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 16px;\n  margin-top: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  width: ", ";\n"], ["\n  font-size: 16px;\n  margin-top: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  width: ", ";\n"])), function (_a) {
    var isOpened = _a.isOpened;
    return (isOpened ? "unset" : "70px");
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled-components.js.map