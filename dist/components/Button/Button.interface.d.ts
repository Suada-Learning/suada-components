import { ReactElement, CSSProperties, ReactNode } from "react";
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
export type ButtonSize = "small" | "large";
export interface ButtonState {
    type: ButtonTypeEnum;
    size: ButtonSize;
    label?: ReactNode;
    iconLeft?: ReactElement | null;
    iconRight?: ReactElement | null;
    disabled?: boolean;
    customStyles?: CSSProperties;
    onClick?: () => void;
    htmlType?: HtmlButtonTypeEnum;
    id?: string | number;
    className?: string;
}
export interface StyledButtonProps {
    $type: ButtonTypeEnum;
    $size: ButtonSize;
}
