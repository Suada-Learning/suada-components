import { jsx as _jsx } from "react/jsx-runtime";
import { Uploader } from './Uploader';
import { FileTypes } from './uploader.interface';
export default {
    title: 'Components/Uploader',
    decorators: [
        function (Story) { return (_jsx("div", { style: { padding: '0', display: 'flex', justifyContent: 'center' }, children: _jsx(Story, {}) })); },
    ],
    tags: ['autodocs'],
    component: Uploader,
    argTypes: {
        type: {
            control: 'select',
            options: Object.values(FileTypes),
        },
        disabled: {
            control: 'boolean',
        },
        loading: {
            control: 'number',
        },
        showFullPreview: {
            control: 'boolean',
        },
    },
};
export var Default = {
    args: {
        type: FileTypes.IMAGE,
        label: 'Upload File',
        disabled: false,
        showFullPreview: true,
    },
};
export var Uploaded = {
    args: {
        type: FileTypes.IMAGE,
        label: 'Upload File',
        uploadedFile: {
            id: '1',
            name: 'image.png',
            type: FileTypes.IMAGE,
            size: 1024,
        },
        inputValue: 'image.png',
        disabled: false,
        showFullPreview: true,
    },
};
//# sourceMappingURL=FileUploader.stories.js.map