import { Theme } from '@mui/material/styles';
import { IThemeColors } from './interfaces';
export declare const createCustomTheme: (customColors?: Partial<IThemeColors>) => Theme;
export declare const themes: {
    light: {
        colors: {
            primary: {
                main: string;
                700: string;
            };
            neutral: {
                100: string;
                400: string;
                900: string;
            };
            system: {
                success: {
                    main: string;
                    700: string;
                    300: string;
                };
                error: {
                    main: string;
                    700: string;
                    300: string;
                };
            };
        };
    };
    dark: {
        colors: {
            primary: {
                main: string;
                700: string;
            };
            neutral: {
                100: string;
                400: string;
                900: string;
            };
            system: {
                success: {
                    main: string;
                    700: string;
                    300: string;
                };
                error: {
                    main: string;
                    700: string;
                    300: string;
                };
            };
        };
    };
};
export declare const themeTokens: {
    colors: IThemeColors;
};
