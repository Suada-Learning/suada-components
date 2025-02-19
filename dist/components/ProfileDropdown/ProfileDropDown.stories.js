import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CustomThemeProvider } from '../../theme/ThemeProvider';
import { GlobalStyle } from '../../global.styles';
import { ProfileDropdown } from './ProfileDropdown';
var mockUser = {
    email: 'JohnDoe@suada.com',
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    avatarThumbnail: 'https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg',
    // Add other IUser properties as needed
};
var meta = {
    title: 'Components/ProfileDropdown',
    component: ProfileDropdown,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        user: { control: 'object' },
        logout: { action: 'logout' },
    },
    args: {
        user: mockUser,
        logout: function () { return console.log('Logged out'); },
    },
};
export default meta;
export var Default = {
    args: {
        user: mockUser,
        logout: function () { return console.log('Logged out'); },
    },
};
//# sourceMappingURL=ProfileDropDown.stories.js.map