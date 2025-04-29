import React, { SVGProps } from 'react';
export interface SvgProps extends SVGProps<SVGSVGElement> {
    className?: string;
    onClick?: () => void;
    forward?: boolean;
}
export declare const RewindIcon: React.FC<SvgProps>;
