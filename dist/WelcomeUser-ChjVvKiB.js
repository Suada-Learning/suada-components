import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { Content, Title } from './components/WelcomeUser/styled-components.js';
import { P as ProfilePicture } from './ProfilePicture-B7t-2qj7.js';

var WelcomeUser = function WelcomeUser(_a) {
  var isOpened = _a.isOpened,
    user = _a.user;
  return jsxRuntimeExports.jsxs(Content, {
    isOpened: isOpened,
    children: [jsxRuntimeExports.jsx(ProfilePicture, {
      imgSource: user.avatar || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      width: isOpened ? 70 : 60,
      height: isOpened ? 70 : 60
    }), jsxRuntimeExports.jsx(Title, {
      isOpened: isOpened,
      children: isOpened ? "Hello, ".concat(user.firstName, " ").concat(user.lastName) : "".concat(user.firstName.charAt(0)).concat(user.lastName.charAt(0))
    })]
  });
};

export { WelcomeUser as W };
//# sourceMappingURL=WelcomeUser-ChjVvKiB.js.map
