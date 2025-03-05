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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CourseCard } from './CourseCard';
import { GlobalStyle } from '../../global.styles';
import { StylesCardWrapper } from './CourseCard.styles';
import { actionConfig } from './CourseCardActionsConfig';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
var mockItem = {
    id: '1',
    name: 'Sample Course',
    actions: actionConfig(function () { }, {}, function () { return ''; }),
    state: 'published',
    finished: 3,
    level: 'beginner',
    currency: '$',
    price: '99.99',
    numberOfModules: 5,
    numberOfLessons: 20,
    duration: 120,
    avatar: {
        link: 'https://149357281.v2.pressablecdn.com/wp-content/uploads/2023/07/GettyImages-1306184112-scaled.jpg',
        name: 'Course Avatar',
    },
    coaches: ['John Doe'],
    groups: [{ name: 'Group 1' }],
    video: {
        link: 'https://example.com/video.mp4',
        type: 'video/mp4',
    },
    isBought: false,
};
var mockFunctions = {
    getCourseLevel: function (level) { return level; },
    formatDuration: function (duration) { return "".concat(duration, " mins"); },
    actionHandler: function (action, item) {
        console.log(action, item);
    },
    navigate: function (url) { return console.log("Navigating to ".concat(url)); },
    RedirectToCourse: function (item) { return console.log("Redirecting to course ".concat(item.id)); },
    selectItem: function (id) { return console.log("Selected item ".concat(id)); },
    getCourseState: function (state) { return state; },
};
var meta = {
    title: 'Components/CourseCard',
    component: CourseCard,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(StylesCardWrapper, { "$canOpen": true, children: _jsx(Story, {}) })] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        $canOpen: { control: 'boolean' },
        fromCertificateBuilder: { control: 'boolean' },
        fromWizard: { control: 'boolean' },
        actions: { control: 'object' },
        groupId: { control: 'text' },
        user: { control: 'object' },
        selectedItem: { control: 'object' },
        courseoriginalid: { control: 'text' },
        gridStyle: { control: 'text' },
        companyMode: { control: 'boolean' },
        activeTab: { control: 'number' },
        withTooltips: { control: 'boolean' },
        state: { control: 'object' },
    },
    args: __assign({ item: mockItem, $canOpen: true, fromCertificateBuilder: false, fromWizard: false, actions: [], groupId: '', user: undefined, selectedItem: [], courseoriginalid: '123', gridStyle: 'card', companyMode: false, activeTab: 0, withTooltips: true, state: {} }, mockFunctions),
};
export default meta;
export var Default = {
    args: __assign({ item: mockItem, $canOpen: true, fromCertificateBuilder: false, fromWizard: false, actions: actionConfig(mockFunctions.actionHandler, { deleteCourse: true }, function (key) { return key; }), groupId: '', user: undefined, selectedItem: [], courseoriginalid: '123', gridStyle: 'card', companyMode: false, activeTab: 0, withTooltips: true, state: {} }, mockFunctions),
};
//# sourceMappingURL=CourseCard.stories.js.map