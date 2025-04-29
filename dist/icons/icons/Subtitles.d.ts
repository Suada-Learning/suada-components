import React, { SVGProps } from 'react';
export interface SvgProps extends SVGProps<SVGSVGElement> {
    className?: string;
    onClick?: () => void;
    active?: boolean;
}
export declare const SubtitlesIcon: React.FC<SvgProps>;
