import { ReactElement, CSSProperties, ReactNode } from 'react';
export declare enum HtmlButtonTypeEnum {
    SUBMIT = "submit",
    RESET = "reset",
    BUTTON = "button"
}
export declare enum ButtonTypeEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    GHOST = "ghost",
    NEGATIVE = "negative",
    POSITIVE = "positive",
    DARK = "dark",
    TEXT = "text"
}
export declare enum ButtonSizeEnum {
    SM = "small",
    LG = "large"
}
export type HtmlButtonType = 'submit' | 'reset' | 'button';
export type ButtonSize = 'small' | 'large';
export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'negative' | 'positive' | 'dark' | 'text';
export interface ButtonState {
    type: ButtonType;
    size: ButtonSize;
    label?: ReactNode;
    iconLeft?: ReactElement | null;
    iconRight?: ReactElement | null;
    disabled?: boolean;
    customStyles?: CSSProperties;
    onClick?: () => void;
    htmlType?: HtmlButtonType;
    id?: string | number;
    className?: string;
    themes?: any;
}
export interface StyledButtonProps {
    $type: ButtonType;
    $size: ButtonSize;
}
