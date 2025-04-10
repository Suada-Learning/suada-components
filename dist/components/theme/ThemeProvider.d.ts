import React, { ReactNode } from 'react';
interface CustomThemeProviderProps {
    children: ReactNode;
    themeName?: 'light' | 'dark';
    customTheme?: any;
}
export declare const CustomThemeProvider: React.FC<CustomThemeProviderProps>;
export {};
