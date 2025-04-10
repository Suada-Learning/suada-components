import { ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
interface ThemeContextType {
    theme: Theme;
}
export declare const ThemeProvider: ({ children, theme }: {
    children: ReactNode;
    theme: Theme;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
