import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
var ThemeContext = createContext(undefined);
export var ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (_jsx(ThemeContext.Provider, { value: { theme: theme }, children: _jsx(MUIThemeProvider, { theme: theme, children: children }) }));
};
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
//# sourceMappingURL=ThemeProvider.js.map