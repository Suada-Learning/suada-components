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
import { NavigationBar } from './NavigationBar';
// Mock data for the story
export var mockUser = {
    id: 'user1',
    role: 'SUPER_ADMIN',
    companyId: 'company1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
};
var mockPermissions = {
    userPermission: true,
    viewQuestion: true,
    viewCompanyPage: true,
    viewLesson: true,
    viewCourse: true,
    viewGroup: true,
    viewAdmin: true,
    viewCoach: true,
    viewModule: true,
    viewQuiz: true,
    viewSuperAdminPage: true,
    viewSettingPage: true,
};
var mockCompany = {
    id: 'company1',
    name: 'Company One',
    platformService: true,
};
var mockState = {
    userPermission: mockPermissions,
    currentUser: mockUser,
    selectedCompany: mockCompany,
};
export default {
    title: 'Components/NavigationBar',
    component: NavigationBar,
    tags: ['autodocs'],
    args: {
        state: mockState,
    },
};
var Template = function (args) { return _jsx(NavigationBar, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    isOpened: true,
    currentUser: mockUser,
    role: 'SUPER_ADMIN',
    state: mockState,
};
//# sourceMappingURL=NavigationBar.stories.js.map