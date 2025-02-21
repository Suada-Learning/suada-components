import React, { ReactElement } from 'react';
interface ITablePaginationV2Props {
    currentPage: number;
    rowsPerPage: number;
    count: number;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    rowsPerPageOptions?: number[];
}
declare const TablePagination: ({ currentPage, rowsPerPage, count, handleChangePage, handleChangeRowsPerPage, rowsPerPageOptions, }: ITablePaginationV2Props) => ReactElement;
export default TablePagination;
