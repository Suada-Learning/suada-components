import { CSSProperties, ReactNode } from 'react';
export interface ITileProps {
    customCardStyles: CSSProperties;
    $backgroundColor: string;
    iconColor: string;
    icon: ReactNode;
    gap: number;
    value: string | number | undefined;
    subIcon?: ReactNode;
    text: string;
}
export interface IStyledIconProps {
    $backgroundColor: string;
}
export interface ISvgV2Props {
    className?: string;
    onClick?: () => void;
    rotate?: boolean;
}
