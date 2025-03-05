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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchInput } from './SearchInput';
import { GlobalStyle } from '../../global.styles';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
var mockFunctions = {
    onSearchSubmit: function (event) {
        event.preventDefault();
        console.log('Search submitted');
    },
    handleSearchChange: function (event) {
        console.log('Search changed:', event.target.value);
    },
    t: function (key) { return key; },
};
var meta = {
    title: 'Components/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    args: __assign({ searchText: '' }, mockFunctions),
};
export default meta;
export var Default = {
    args: __assign({ searchText: '' }, mockFunctions),
};
//# sourceMappingURL=SearchInput.stories.js.map