import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, ReactNode } from 'react';
export interface IPaginationV2Props {
    currentPage: number;
    totalPages: number;
    perPage?: number;
    handleChange: (event: ChangeEvent<unknown>, value: number) => void;
    handlePerPageChange?: (event: SelectChangeEvent<number>, child: ReactNode) => void;
}
