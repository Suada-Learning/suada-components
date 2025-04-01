import React, { SVGProps } from 'react';
export interface SvgProps extends SVGProps<SVGSVGElement> {
    className?: string;
    onClick?: () => void;
    black?: boolean;
}
export declare const Learning: React.ForwardRefExoticComponent<Omit<SvgProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
