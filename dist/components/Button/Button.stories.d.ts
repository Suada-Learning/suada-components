import type { StoryObj } from '@storybook/react';
import { ButtonSizeEnum, HtmlButtonTypeEnum } from './Button.interface';
declare const meta: {
    title: string;
    component: ({ type, size, label, iconLeft, iconRight, disabled, customStyles, onClick, htmlType, className, }: import("./Button.interface").ButtonState) => import("react").ReactElement;
    parameters: {
        layout: string;
    };
    decorators: ((Story: import("@storybook/core/types").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        type: import("./Button.interface").ButtonType;
        size: import("./Button.interface").ButtonSize;
        label?: import("react").ReactNode;
        iconLeft?: (import("react").ReactElement | null) | undefined;
        iconRight?: (import("react").ReactElement | null) | undefined;
        disabled?: boolean | undefined;
        customStyles?: import("react").CSSProperties | undefined;
        onClick?: (() => void) | undefined;
        htmlType?: import("./Button.interface").HtmlButtonType | undefined;
        id?: string | number | undefined;
        className?: string | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
    tags: string[];
    argTypes: {
        type: {
            control: {
                type: "select";
                options: string[];
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
export declare const Disabled: Story;
export declare const Positive: Story;
export declare const Negative: Story;
export declare const Ghost: Story;
export declare const Dark: Story;
export declare const Text: Story;
