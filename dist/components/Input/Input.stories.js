import { jsx as _jsx } from "react/jsx-runtime";
import TextInput from './Input';
export default {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs', 'input'],
    decorators: [
        function (Story) { return (_jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsx("div", { style: { padding: '20px', maxWidth: '400px', height: '20px' }, children: _jsx(Story, {}) }) })); },
    ],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        error: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
    },
};
export var Default = {
    args: {
        label: 'Enter text',
        size: 'small',
        error: false,
        disabled: false,
        fullWidth: true,
        required: false,
    },
};
//# sourceMappingURL=Input.stories.js.map