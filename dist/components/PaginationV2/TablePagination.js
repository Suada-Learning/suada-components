var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUITablePagination } from '@mui/material/TablePagination';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
var TablePagination = function (_a) {
    var currentPage = _a.currentPage, rowsPerPage = _a.rowsPerPage, count = _a.count, handleChangePage = _a.handleChangePage, handleChangeRowsPerPage = _a.handleChangeRowsPerPage, rowsPerPageOptions = _a.rowsPerPageOptions;
    var t = useTranslation().t;
    return (_jsx(StyledDiv, { children: _jsx(MUITablePagination, { count: count, page: currentPage - 1, onPageChange: handleChangePage, rowsPerPage: rowsPerPage, labelRowsPerPage: "".concat(t('grid.rows_per_page'), ":"), rowsPerPageOptions: rowsPerPageOptions || [10, 25, 50, 100], onRowsPerPageChange: handleChangeRowsPerPage }) }));
};
export default TablePagination;
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  background: #fff;\n  border-radius: 0 0 14px 14px;\n  box-shadow:\n    0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  background: #fff;\n  border-radius: 0 0 14px 14px;\n  box-shadow:\n    0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"])));
var templateObject_1;
//# sourceMappingURL=TablePagination.js.map