import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GlobalStyle } from '../../global.styles';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
import { CustomSwitcher } from './CustomSwitcher';
var meta = {
    title: 'Components/CustomSwitcher',
    component: CustomSwitcher,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        value: { control: 'boolean' },
        name: { control: 'text' },
        label: { control: 'text' },
        on: { control: 'text' },
        off: { control: 'text' },
        tooltip: { control: 'text' },
        labelPosition: {
            control: 'select',
            options: ['start', 'end', 'top', 'bottom'],
        },
        labelStyle: { control: 'object' },
        onChange: { action: 'changed' },
    },
    args: {
        value: false,
        name: 'custom-switch',
        label: 'Enable feature',
        on: 'On',
        off: 'Off',
        tooltip: 'This is a switch component',
        labelPosition: 'start',
    },
};
export default meta;
export var Default = {
    args: {
        value: false,
    },
};
export var Checked = {
    args: {
        value: true,
    },
};
//# sourceMappingURL=CustomSwitcher.stories.js.map