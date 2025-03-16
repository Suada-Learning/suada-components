import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { _ as __makeTemplateObject } from './tslib.es6-C0iDBclc.js';
import { d as dt } from './styled-components.esm-C7W1nk2-.js';

var ProfilePictureWrapper = dt.figure(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", ";\n"], ["\n  overflow: hidden;\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
  var width = _a.width;
  return "".concat(width, "px;");
}, function (_a) {
  var height = _a.height;
  return "".concat(height, "px;");
}, function (_a) {
  var shadow = _a.shadow;
  return shadow ? "0px 10px 10px rgba(0,0,0,0.2);" : "none";
});
var templateObject_1;

var ProfilePicture = function ProfilePicture(_a) {
  var imgSource = _a.imgSource,
    shadow = _a.shadow,
    width = _a.width,
    height = _a.height;
  return jsxRuntimeExports.jsx(ProfilePictureWrapper, {
    shadow: shadow,
    width: width,
    height: height,
    children: jsxRuntimeExports.jsx("img", {
      src: imgSource,
      alt: imgSource
    })
  });
};

export { ProfilePicture as P };
//# sourceMappingURL=ProfilePicture-B7t-2qj7.js.map
