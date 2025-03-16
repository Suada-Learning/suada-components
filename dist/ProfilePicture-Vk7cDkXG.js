'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var tslib_es6 = require('./tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('./styled-components.esm-DB2-eBHV.js');

var ProfilePictureWrapper = styledComponents_esm.dt.figure(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  overflow: hidden;\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", ";\n"], ["\n  overflow: hidden;\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
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
  return jsxRuntime.jsxRuntimeExports.jsx(ProfilePictureWrapper, {
    shadow: shadow,
    width: width,
    height: height,
    children: jsxRuntime.jsxRuntimeExports.jsx("img", {
      src: imgSource,
      alt: imgSource
    })
  });
};

exports.ProfilePicture = ProfilePicture;
//# sourceMappingURL=ProfilePicture-Vk7cDkXG.js.map
