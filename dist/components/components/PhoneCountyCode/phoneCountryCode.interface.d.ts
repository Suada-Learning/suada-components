import { IPhoneFields, ISelectFilterOption } from '../CourseCard/CourseCard.interface';
export interface IPhoneCountryCodeProps {
    label?: string;
    selectLabel: string;
    selectValue: IPhoneFields | null;
    selectChange: (option: ISelectFilterOption | null) => void;
    inputLabel: string;
    inputValue?: string;
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched?: boolean;
    error?: boolean;
    errorMessage?: string;
}
export interface IComponentProps {
    dialCode: string;
    code: string;
}
