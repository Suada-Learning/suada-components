import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CustomThemeProvider } from '../../theme/ThemeProvider';
import { GlobalStyle } from '../../global.styles';
import { DropDown } from './DropDown';
import { SelectFieldWrapper } from './DropDown.styles';
var options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];
var meta = {
    title: 'Components/DropDown',
    component: DropDown,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsx(CustomThemeProvider, { children: _jsxs(SelectFieldWrapper, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] }) })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: { control: 'text' },
        options: { control: 'object' },
        isMulti: { control: 'boolean' },
        isClearable: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
        isLoading: { control: 'boolean' },
        placeholder: { control: 'text' },
        className: { control: 'text' },
        errorMessage: { control: 'text' },
    },
    args: {
        label: 'Select an option',
        options: options,
        isMulti: false,
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        placeholder: 'Choose...',
        className: '',
        errorMessage: '',
    },
};
export default meta;
export var Default = {
    args: {
        label: 'Select an option',
        options: options,
        isMulti: false,
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        placeholder: 'Choose...',
        className: '',
        errorMessage: '',
    },
};
//# sourceMappingURL=DropDown.stories.js.map