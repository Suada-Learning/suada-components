import React, { ReactElement } from 'react';
import { ITabPanelProps } from './tabs.interface';
export declare const TabPanel: (props: ITabPanelProps) => ReactElement;
export declare const activeTabClassName: (index: number | string) => object;
export declare const TabNavigation: (props: {
    children: React.ReactNode;
    transparent?: boolean;
    style?: React.CSSProperties;
}) => ReactElement;
