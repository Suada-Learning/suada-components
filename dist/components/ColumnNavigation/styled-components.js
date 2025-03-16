var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var ColumnNavigationContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.03);\n  background: #fff;\n  border-radius: 28px;\n  padding: 10px 30px;\n  padding-bottom: 34px;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 1660px) {\n    padding: 10px 20px;\n    padding-bottom: 24px;\n  }\n"], ["\n  box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.03);\n  background: #fff;\n  border-radius: 28px;\n  padding: 10px 30px;\n  padding-bottom: 34px;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 1660px) {\n    padding: 10px 20px;\n    padding-bottom: 24px;\n  }\n"])));
export var NavigationItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  @media (max-width: 1660px) {\n    font-size: 0.9rem;\n    padding: 5px;\n  }\n  font-weight: 600;\n  color: #000;\n  position: relative;\n  transition: font-weight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  svg {\n    fill: ", ";\n  }\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transform: translateY(-50%);\n    width: ", ";\n    height: 2px;\n    border-radius: 20px;\n    background-color: ", ";\n    transition:\n      width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),\n      background-color 0.3s ease-in-out;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  @media (max-width: 1660px) {\n    font-size: 0.9rem;\n    padding: 5px;\n  }\n  font-weight: 600;\n  color: #000;\n  position: relative;\n  transition: font-weight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  svg {\n    fill: ", ";\n  }\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transform: translateY(-50%);\n    width: ", ";\n    height: 2px;\n    border-radius: 20px;\n    background-color: ", ";\n    transition:\n      width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),\n      background-color 0.3s ease-in-out;\n  }\n"])), function (_a) {
    var active = _a.active;
    return (active ? ' #06c68f' : '#ccc');
}, function (_a) {
    var active = _a.active;
    return (active ? '100%' : '50%');
}, function (_a) {
    var active = _a.active;
    return (active ? '#06c68f' : '#ccc');
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled-components.js.map