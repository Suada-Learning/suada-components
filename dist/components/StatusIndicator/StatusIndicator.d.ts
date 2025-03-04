import { ReactElement } from 'react';
import { IStatusWrapperProps } from './status.interface';
export declare const StatusIndicator: ({ status, }: IStatusWrapperProps) => ReactElement;
export declare const CompanyStatusIndicator: ({ $isActive, }: {
    $isActive: boolean;
}) => ReactElement;
