export interface IRadioButtonProps {
    value?: string;
    checked: boolean;
    ariaLabel?: string;
    name?: string;
    onChange?: (value: string) => void;
}
