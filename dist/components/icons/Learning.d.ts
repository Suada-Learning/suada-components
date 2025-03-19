import React, { SVGProps } from 'react';
export interface SvgProps extends SVGProps<SVGSVGElement> {
    className?: string;
    onClick?: () => void;
    black?: boolean;
}
export declare const Learning: React.FC<SvgProps>;
