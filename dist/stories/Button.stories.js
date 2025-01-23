import { Button } from "./Button";
import { ButtonTypeEnum, ButtonSizeEnum, HtmlButtonTypeEnum, } from "./Button.interface";
// Storybook metadata
var meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: {
                type: "select",
                options: Object.values(ButtonTypeEnum),
            },
        },
        size: {
            control: {
                type: "select",
                options: Object.values(ButtonSizeEnum),
            },
        },
        htmlType: {
            control: {
                type: "select",
                options: Object.values(HtmlButtonTypeEnum),
            },
        },
        disabled: {
            control: { type: "boolean" },
        },
        label: {
            control: { type: "text" },
        },
        iconLeft: {
            control: { type: "object" },
        },
        iconRight: {
            control: { type: "object" },
        },
        customStyles: {
            control: { type: "object" },
        },
        className: {
            control: { type: "text" },
        },
        onClick: {
            action: "clicked",
        },
    },
    args: {
        onClick: function () { return console.log("Button clicked!"); },
    },
};
export default meta;
// Primary Button
export var Primary = {
    args: {
        type: ButtonTypeEnum.PRIMARY,
        size: ButtonSizeEnum.SM,
        label: "Primary Button",
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
// Secondary Button
export var Secondary = {
    args: {
        type: ButtonTypeEnum.SECONDARY,
        size: ButtonSizeEnum.SM,
        label: "Secondary Button",
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
// Large Button
export var Large = {
    args: {
        type: ButtonTypeEnum.PRIMARY,
        size: ButtonSizeEnum.LG,
        label: "Large Button",
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
// Small Button
export var Small = {
    args: {
        type: ButtonTypeEnum.SECONDARY,
        size: ButtonSizeEnum.SM,
        label: "Small Button",
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
// Disabled Button
export var Disabled = {
    args: {
        type: ButtonTypeEnum.PRIMARY,
        size: ButtonSizeEnum.SM,
        label: "Disabled Button",
        disabled: true,
        htmlType: HtmlButtonTypeEnum.BUTTON,
    },
};
//# sourceMappingURL=Button.stories.js.map