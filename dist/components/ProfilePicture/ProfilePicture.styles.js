var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var ProfilePictureWrapper = styled.figure(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", ";\n"], ["\n  overflow: hidden;\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px;");
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px;");
}, function (_a) {
    var shadow = _a.shadow;
    return (shadow ? "0px 10px 10px rgba(0,0,0,0.2);" : "none");
});
var templateObject_1;
//# sourceMappingURL=ProfilePicture.styles.js.map