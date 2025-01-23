import type { StoryObj } from "@storybook/react";
import { ButtonTypeEnum, ButtonSizeEnum, HtmlButtonTypeEnum } from "./Button.interface";
declare const meta: {
    title: string;
    component: ({ type, size, label, iconLeft, iconRight, disabled, customStyles, onClick, htmlType, className, }: import("./Button.interface").ButtonState) => import("react").ReactElement;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        type: {
            control: {
                type: "select";
                options: ButtonTypeEnum[];
            };
        };
        size: {
            control: {
                type: "select";
                options: ButtonSizeEnum[];
            };
        };
        htmlType: {
            control: {
                type: "select";
                options: HtmlButtonTypeEnum[];
            };
        };
        disabled: {
            control: {
                type: "boolean";
            };
        };
        label: {
            control: {
                type: "text";
            };
        };
        iconLeft: {
            control: {
                type: "object";
            };
        };
        iconRight: {
            control: {
                type: "object";
            };
        };
        customStyles: {
            control: {
                type: "object";
            };
        };
        className: {
            control: {
                type: "text";
            };
        };
        onClick: {
            action: string;
        };
    };
    args: {
        onClick: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
export declare const Disabled: Story;
