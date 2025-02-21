import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pagination as MUIPagination } from '@mui/material';
import { Select } from '@mui/material';
import { PaginationWrapper } from './styled-components';
export var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, handleChange = _a.handleChange, perPage = _a.perPage, handlePerPageChange = _a.handlePerPageChange;
    return (_jsxs(PaginationWrapper, { children: [perPage && (_jsxs(Select, { variant: 'standard', native: true, value: perPage, onChange: handlePerPageChange, inputProps: {
                    name: 'perPage',
                    id: 'perPage',
                }, children: [_jsx("option", { value: 12, children: "12" }), _jsx("option", { value: 24, children: "24" }), _jsx("option", { value: 48, children: "48" })] })), _jsx(MUIPagination, { count: totalPages, shape: 'rounded', variant: 'outlined', page: currentPage, onChange: handleChange })] }));
};
//# sourceMappingURL=Pagination.js.map