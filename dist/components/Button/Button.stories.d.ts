import type { StoryObj } from '@storybook/react';
import { ButtonTypeEnum, ButtonSizeEnum, HtmlButtonTypeEnum } from './Button.interface';
declare const meta: {
    title: string;
    component: ({ type, size, label, iconLeft, iconRight, disabled, customStyles, onClick, htmlType, className, themes, }: import("./Button.interface").ButtonState) => import("react").ReactElement;
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
        themes: {
            control: {
                type: "select";
            };
            options: string[];
            mapping: {
                light: {
                    colors: {
                        primary: {
                            main: string;
                            700: string;
                        };
                        neutral: {
                            100: string;
                            400: string;
                            900: string;
                        };
                        system: {
                            success: {
                                main: string;
                                700: string;
                                300: string;
                            };
                            error: {
                                main: string;
                                700: string;
                                300: string;
                            };
                        };
                    };
                };
                dark: {
                    colors: {
                        primary: {
                            main: string;
                            700: string;
                        };
                        neutral: {
                            100: string;
                            400: string;
                            900: string;
                        };
                        system: {
                            success: {
                                main: string;
                                700: string;
                                300: string;
                            };
                            error: {
                                main: string;
                                700: string;
                                300: string;
                            };
                        };
                    };
                };
            };
            defaultValue: string;
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
