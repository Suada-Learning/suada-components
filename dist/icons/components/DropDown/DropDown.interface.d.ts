import { StylesConfig } from 'react-select';
import { FormikTouched } from 'formik';
import { ReactNode } from 'react';
export interface IAsyncSelectOption {
    value: string;
    label: string;
    icon?: string;
}
export interface MUIElementState {
    isSelected: boolean;
    isFocused: boolean;
}
export interface IFilterQuery {
    type?: string;
    id?: string | number;
    originalId?: string;
    min?: number;
    max?: number;
    nestedField?: string;
    label?: string;
    value?: string | number | boolean | string[] | number[];
}
export type AsyncSelectOptionsType = IAsyncSelectOption[];
export interface IAsyncSelectProps {
    data: any;
    isMulti?: boolean;
    onInputChange?: (inputValue: string) => void;
    onChange?: (e: any) => void;
    value?: any;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
    labelDataKey?: string;
    valueDataKey?: string;
    labelDataName?: (data: any) => string;
    valueDataKeyPrimary?: string;
    iconDataKey?: string;
    error?: string | boolean;
    errorMessage?: string;
    touched?: boolean;
    isClearable?: boolean;
}
export interface ISelectFieldProps {
    required?: boolean;
    className?: string;
    isMulti?: boolean;
    onChange?: (value: any) => void;
    options?: any[] | null;
    value: any;
    name?: string;
    placeholder?: string;
    styles?: StylesConfig<IFilterQuery, boolean>;
    isClearable?: boolean;
    onFocus?: () => void;
    isDisabled?: boolean;
    noOptionsMessage?: ((obj: {
        inputValue: string;
    }) => ReactNode) | undefined;
    isLoading?: boolean;
    label?: string;
    error?: boolean;
    touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
    errorMessage?: any;
}
