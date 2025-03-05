import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from './Loader';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
import { GlobalStyle } from '../../global.styles';
var meta = {
    title: 'Components/Loader',
    component: Loader,
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        withBackground: { control: 'boolean' },
    },
    args: {
        width: '40px',
        height: '40px',
        withBackground: false,
    },
};
export default meta;
export var Default = {};
export var WithBackground = {
    args: {
        withBackground: true,
    },
};
//# sourceMappingURL=Loader.stories.js.map