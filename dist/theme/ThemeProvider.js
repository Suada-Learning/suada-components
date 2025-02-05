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
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createCustomTheme, themeTokens } from './Theme';
export var CustomThemeProvider = function (_a) {
    var children = _a.children, _b = _a.themeName, themeName = _b === void 0 ? 'light' : _b, customTheme = _a.customTheme;
    var muiTheme = createCustomTheme(customTheme);
    var styledTheme = __assign(__assign({}, themeTokens), { colors: (customTheme === null || customTheme === void 0 ? void 0 : customTheme.colors) || themeTokens.colors, mode: themeName });
    return (_jsx(MUIThemeProvider, { theme: muiTheme, children: _jsx(StyledThemeProvider, { theme: styledTheme, children: children }) }));
};
//# sourceMappingURL=ThemeProvider.js.map