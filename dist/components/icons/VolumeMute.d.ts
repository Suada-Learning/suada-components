import React, { SVGProps } from 'react';
export interface SvgProps extends SVGProps<SVGSVGElement> {
    className?: string;
    onClick?: () => void;
    dark?: boolean;
    props?: SVGProps<SVGSVGElement>;
}
export declare const VolumeMuteIcon: React.FC<SvgProps>;
