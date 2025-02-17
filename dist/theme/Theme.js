var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createTheme } from '@mui/material/styles';
var defaultColors = {
    primary: {
        100: '#E6F7F1',
        200: '#CCEFE4',
        300: '#99DFC9',
        400: '#66CFAE',
        500: '#33BF93',
        600: '#00AF78',
        700: '#008C60',
        800: '#006948',
        900: '#004630',
        main: '#00AF78',
    },
    secondary: {
        100: '#EFE6F7',
        200: '#DFCCEF',
        300: '#BF99DF',
        400: '#9F66CF',
        500: '#7F33BF',
        600: '#5F00AF',
        700: '#4C008C',
        800: '#390069',
        900: '#260046',
        main: '#5F00AF',
    },
    tertiary: {
        100: '#E6F7F7',
        200: '#CCEFEF',
        300: '#99DFDF',
        400: '#66CFCF',
        500: '#33BFBF',
        600: '#00AFAF',
        700: '#008C8C',
        800: '#006969',
        900: '#004646',
        main: '#00AFAF',
    },
    neutral: {
        100: '#F7F7F7',
        200: '#EFEFEF',
        300: '#DFDFDF',
        400: '#CFCFCF',
        500: '#BFBFBF',
        600: '#AFAFAF',
        700: '#8C8C8C',
        800: '#696969',
        900: '#464646',
        main: '#696969',
    },
    system: {
        error: {
            100: '#FFE6E6',
            200: '#FFCCCC',
            300: '#FF9999',
            400: '#FF6666',
            500: '#FF3333',
            600: '#FF0000',
            700: '#CC0000',
            800: '#990000',
            900: '#660000',
            main: '#FF0000',
        },
        warning: {
            100: '#FFF3E6',
            200: '#FFE6CC',
            300: '#FFCD99',
            400: '#FFB466',
            500: '#FF9B33',
            600: '#FF8200',
            700: '#CC6800',
            800: '#994E00',
            900: '#663400',
            main: '#FF8200',
        },
        success: {
            100: '#E6F7E6',
            200: '#CCEFCC',
            300: '#99DF99',
            400: '#66CF66',
            500: '#33BF33',
            600: '#00AF00',
            700: '#008C00',
            800: '#006900',
            900: '#004600',
            main: '#00AF00',
        },
        info: {
            100: '#E6F0FF',
            200: '#CCE0FF',
            300: '#99C2FF',
            400: '#66A3FF',
            500: '#3385FF',
            600: '#0066FF',
            700: '#0052CC',
            800: '#003D99',
            900: '#002966',
            main: '#0066FF',
        },
    },
};
export var createCustomTheme = function (customColors) {
    var colors = customColors ? __assign(__assign({}, defaultColors), customColors) : defaultColors;
    return createTheme({
        palette: {
            primary: {
                main: colors.primary.main,
                light: colors.primary[300],
                dark: colors.primary[700],
                contrastText: '#ffffff',
            },
            secondary: {
                main: colors.secondary.main,
                light: colors.secondary[300],
                dark: colors.secondary[700],
                contrastText: '#ffffff',
            },
            error: {
                main: colors.system.error.main,
                light: colors.system.error[300],
                dark: colors.system.error[700],
            },
            warning: {
                main: colors.system.warning.main,
                light: colors.system.warning[300],
                dark: colors.system.warning[700],
            },
            success: {
                main: colors.system.success.main,
                light: colors.system.success[300],
                dark: colors.system.success[700],
            },
            info: {
                main: colors.system.info.main,
                light: colors.system.info[300],
                dark: colors.system.info[700],
            },
            grey: {
                100: colors.neutral[100],
                200: colors.neutral[200],
                300: colors.neutral[300],
                400: colors.neutral[400],
                500: colors.neutral[500],
                600: colors.neutral[600],
                700: colors.neutral[700],
                800: colors.neutral[800],
                900: colors.neutral[900],
            },
        },
    });
};
export var themes = {
    light: {
        colors: {
            primary: { main: '#08C694', 700: '#12A37A' },
            neutral: { 100: '#FFFFFF', 400: '#B3B3B8', 900: '#020210' },
            system: {
                success: { main: '#00905E', 700: '#12A37A', 300: '#72C4AC' },
                error: { main: '#EA382A', 700: '#C7493D', 300: '#E5908A' },
            },
        },
    },
    dark: {
        colors: {
            primary: { main: '#065F46', 700: '#047857' },
            neutral: { 100: '#E5E5E5', 400: '#6B7280', 900: '#1F2937' },
            system: {
                success: { main: '#047857', 700: '#065F46', 300: '#A7F3D0' },
                error: { main: '#DC2626', 700: '#B91C1C', 300: '#FCA5A5' },
            },
        },
    },
};
// For styled-components
export var themeTokens = {
    colors: defaultColors,
};
//# sourceMappingURL=Theme.js.map