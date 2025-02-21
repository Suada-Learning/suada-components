import { ChangeEvent } from 'react';
export interface ICheckboxV2Props {
    checked: boolean;
    onChange: (e?: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    tooltip?: string;
    name?: string;
}
