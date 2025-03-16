import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Content, Title } from './styled-components';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
export var WelcomeUser = function (_a) {
    var isOpened = _a.isOpened, user = _a.user;
    return (_jsxs(Content, { isOpened: isOpened, children: [_jsx(ProfilePicture, { imgSource: user.avatar ||
                    'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png', width: isOpened ? 70 : 60, height: isOpened ? 70 : 60 }), _jsx(Title, { isOpened: isOpened, children: isOpened
                    ? "Hello, ".concat(user.firstName, " ").concat(user.lastName)
                    : "".concat(user.firstName.charAt(0)).concat(user.lastName.charAt(0)) })] }));
};
//# sourceMappingURL=WelcomeUser.js.map