import { ReactElement } from 'react';
export interface ILoadingProps {
    type: FileTypes;
    loading: boolean | number;
}
export interface IAudio {
    link: string;
    fileType: string;
    name: string;
}
export interface IAttachment {
    name: string;
    type: string;
    link: string;
    value: string;
}
export interface IUploadedFile {
    id?: string;
    title?: string;
    links?: Array<{
        type: string;
        url: string;
    }>;
    link?: string;
    name?: string;
    fileType?: string;
}
export interface IUploaderProps {
    placeHolder?: string;
    type?: FileTypes;
    label?: ReactElement | string;
    inputValue: string;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    loading?: boolean | number;
    uploadedFile?: IAttachment | null | IAudio | IUploadedFile;
    id?: string;
    accept?: string;
    multiple?: boolean;
    name?: string;
    showFullPreview?: boolean;
    fileExtension?: string;
    deleteFile: () => void;
    inputClassName?: string;
    error?: string;
    touched?: boolean;
    nameClassName?: string;
    required?: boolean;
}
export declare enum FileTypes {
    DOCUMENT = "document",
    IMAGE = "image",
    VIDEO = "video",
    AUDIO = "audio",
    FILE = "file"
}
export interface IUploaderButtonProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    accept: string;
    loading: boolean;
    label: ReactElement;
}
