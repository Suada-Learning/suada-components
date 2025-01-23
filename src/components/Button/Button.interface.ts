import { ReactElement, CSSProperties, ReactNode } from "react";

export enum HtmlButtonTypeEnum {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export enum ButtonTypeEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
  NEGATIVE = "negative",
  POSITIVE = "positive",
  DARK = "dark",
  TEXT = "text",
}

export enum ButtonSizeEnum {
  SM = "small",
  LG = "large",
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
