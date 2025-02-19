import { jsx as _jsx } from "react/jsx-runtime";
import { ProfilePictureWrapper } from './ProfilePicture.styles';
var ProfilePicture = function (_a) {
    var imgSource = _a.imgSource, shadow = _a.shadow, width = _a.width, height = _a.height;
    return (_jsx(ProfilePictureWrapper, { shadow: shadow, width: width, height: height, children: _jsx("img", { src: imgSource, alt: imgSource }) }));
};
export default ProfilePicture;
//# sourceMappingURL=ProfilePicture.js.map