'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_WelcomeUser_styledComponents = require('./components/WelcomeUser/styled-components.cjs.js');
var ProfilePicture = require('./ProfilePicture-Vk7cDkXG.js');

var WelcomeUser = function WelcomeUser(_a) {
  var isOpened = _a.isOpened,
    user = _a.user;
  return jsxRuntime.jsxRuntimeExports.jsxs(components_WelcomeUser_styledComponents.Content, {
    isOpened: isOpened,
    children: [jsxRuntime.jsxRuntimeExports.jsx(ProfilePicture.ProfilePicture, {
      imgSource: user.avatar || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      width: isOpened ? 70 : 60,
      height: isOpened ? 70 : 60
    }), jsxRuntime.jsxRuntimeExports.jsx(components_WelcomeUser_styledComponents.Title, {
      isOpened: isOpened,
      children: isOpened ? "Hello, ".concat(user.firstName, " ").concat(user.lastName) : "".concat(user.firstName.charAt(0)).concat(user.lastName.charAt(0))
    })]
  });
};

exports.WelcomeUser = WelcomeUser;
//# sourceMappingURL=WelcomeUser-joP_Ee7F.js.map
