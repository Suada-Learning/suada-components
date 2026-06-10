import { Meta, StoryObj } from '@storybook/react';
import { Uploader } from './Uploader';
import { FileTypes } from './uploader.interface';
declare const _default: Meta;
export default _default;
export declare const Default: StoryObj<typeof Uploader>;
export declare const Uploaded: {
    args: {
        type: FileTypes;
        label: string;
        uploadedFile: {
            id: string;
            name: string;
            type: FileTypes;
            size: number;
        };
        inputValue: string;
        disabled: boolean;
        showFullPreview: boolean;
    };
};
