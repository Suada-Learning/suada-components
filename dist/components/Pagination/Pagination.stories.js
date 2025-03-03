import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pagination } from './Pagination';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
import { GlobalStyle } from '../../global.styles';
var meta = {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs', 'pagination'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        currentPage: { control: 'number' },
        totalPages: { control: 'number' },
        perPage: { control: 'select', options: [12, 24, 48] },
        handleChange: { action: 'Page Changed' },
        handlePerPageChange: { action: 'Per Page Changed' },
    },
    args: {
        currentPage: 1,
        totalPages: 10,
        perPage: 12,
    },
};
export default meta;
export var Default = {};
//# sourceMappingURL=Pagination.stories.js.map