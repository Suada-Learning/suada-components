var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { WelcomeUser } from './WelcomeUser';
export default {
    title: 'Components/WelcomeUser',
    component: WelcomeUser,
    tags: ['autodocs', 'WelcomeUser'],
    parameters: {
        layout: 'centered',
    },
};
var Template = function (args) { return _jsx(WelcomeUser, __assign({}, args)); };
export var DefaultWelcomeUser = Template.bind({});
DefaultWelcomeUser.args = {
    isOpened: true,
    user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        avatar: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
    },
};
//# sourceMappingURL=WelcomeUser.stories.js.map