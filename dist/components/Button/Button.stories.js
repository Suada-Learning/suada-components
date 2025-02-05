import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '.';
import { ButtonTypeEnum, ButtonSizeEnum, HtmlButtonTypeEnum } from './Button.interface';
import { GlobalStyle } from '../../global.styles';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
// Storybook metadata
var meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['Secondary', 'Primary'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: Object.values(ButtonSizeEnum),
            },
        },
        htmlType: {
            control: {
                type: 'select',
                options: Object.values(HtmlButtonTypeEnum),
            },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'text' },
        },
        iconLeft: {
            control: { type: 'object' },
        },
        iconRight: {
            control: { type: 'object' },
        },
        customStyles: {
            control: { type: 'object' },
        },
        className: {
            control: { type: 'text' },
        },
        onClick: {
            action: 'clicked',
        },
    },
    args: {
        onClick: function () { return console.log('Button clicked!'); },
    },
};
export default meta;
// Primary Button
export var Primary = {
    args: {
        type: ButtonTypeEnum.PRIMARY,
        size: ButtonSizeEnum.SM,
        label: 'Primary Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
// Secondary Button
export var Secondary = {
    args: {
        type: ButtonTypeEnum.SECONDARY,
        size: ButtonSizeEnum.SM,
        label: 'Secondary Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
// Disabled Button
export var Disabled = {
    args: {
        type: ButtonTypeEnum.PRIMARY,
        size: ButtonSizeEnum.SM,
        label: 'Disabled Button',
        disabled: true,
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
export var Positive = {
    args: {
        type: ButtonTypeEnum.POSITIVE,
        size: ButtonSizeEnum.SM,
        label: 'Success Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
export var Negative = {
    args: {
        type: ButtonTypeEnum.NEGATIVE,
        size: ButtonSizeEnum.SM,
        label: 'Negative Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
export var Ghost = {
    args: {
        type: ButtonTypeEnum.GHOST,
        size: ButtonSizeEnum.SM,
        label: 'Ghost Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
export var Dark = {
    args: {
        type: ButtonTypeEnum.DARK,
        size: ButtonSizeEnum.SM,
        label: 'Dark Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
export var Text = {
    args: {
        type: ButtonTypeEnum.TEXT,
        size: ButtonSizeEnum.SM,
        label: 'Text Button',
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
//# sourceMappingURL=Button.stories.js.map