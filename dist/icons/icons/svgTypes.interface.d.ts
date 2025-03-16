import { SVGProps } from "react";
export interface SvgProps extends SVGProps<SVGSVGElement> {
    className?: string;
    onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
    red?: boolean;
    black?: boolean;
    white?: boolean;
}
