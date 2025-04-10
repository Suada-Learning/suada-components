import { ReactElement } from 'react';
import './Input.scss';
import { ITextInputProps } from './Input.interface';
declare const TextInput: ({ title, label, size, icon, name, id, type, value, error, errorMessage, touched, fullWidth, onChange, onBlur, min, max, onFocus, multiline, rows, variant, validate, disabled, readOnly, endAdornment, component, inputStyle, maxCharacter, required, $iconInStart, placeholder, className, enableAutoComplete, }: ITextInputProps) => ReactElement;
export default TextInput;
