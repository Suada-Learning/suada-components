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
import { SplashScreen } from './SplashScreen';
import { Button } from '../Button';
export default {
    title: 'Components/SplashScreen',
    component: SplashScreen,
    tags: ['autodocs', 'SplashScreen'],
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
var Template = function (args) { return _jsx(SplashScreen, __assign({}, args)); };
export var DefaultSplashScreen = Template.bind({});
DefaultSplashScreen.args = {
    title: 'You don’t have any groups yet.',
    subTitle: 'As soon as you add a group, it will appear here',
    createButton: function () { return _jsx(Button, { type: 'primary', size: 'small', label: 'Create Group' }); },
    marginTop: 20,
    minHeight: '80vh',
    height: 'auto',
    contentMaxWidth: '80%',
    textMarginTop: '10px',
    isSearchOrFilter: false,
};
//# sourceMappingURL=SplashScreen.stories.js.map