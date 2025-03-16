import { Button } from '.';
import { ButtonTypeEnum, ButtonSizeEnum, HtmlButtonTypeEnum } from './Button.interface';
import { themes } from '../../theme/Theme';
// Storybook metadata
var meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: Object.values(ButtonTypeEnum),
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
        themes: {
            control: { type: 'select' },
            options: Object.keys(themes),
            mapping: themes,
            defaultValue: 'light',
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