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
import { DrawerTips } from './DrawerTips';
export default {
    title: 'Components/DrawerTips',
    component: DrawerTips,
    tags: ['autodocs', 'DrawerTips'],
    parameters: {
        layout: 'centered',
    },
};
var Template = function (args) { return _jsx(DrawerTips, __assign({}, args)); };
export var DefaultDrawerTips = Template.bind({});
DefaultDrawerTips.args = {
    tips: [
        { icon: 'https://via.placeholder.com/32', text: 'Tip 1: Remember to save your work.' },
        { icon: 'https://via.placeholder.com/32', text: 'Tip 2: Check your email regularly.' },
    ],
    rememberText: 'Remember: Always backup your data.',
};
//# sourceMappingURL=DrawerTips.stories.js.map