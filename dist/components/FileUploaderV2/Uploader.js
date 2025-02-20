import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import CancelIcon from '@mui/icons-material/Cancel';
import CircularProgress from '@mui/material/CircularProgress';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Container, ItemContainer, CancelButton, InputFileContainer, UploadInput, ImagePlaceholder, InputLabel, VideoPlaceholder, DefaultPlaceholder, LoadingProgressContainer, CircularProgressStyles, FlexContainer, ErrorText, Title, } from './styled-components';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HeadsetIcon from '@mui/icons-material/Headset';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { FileTypes } from './uploader.interface';
import { Input } from '../TextInput';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider';
var Loading = function (_a) {
    var type = _a.type, loading = _a.loading;
    if ([FileTypes.VIDEO, FileTypes.AUDIO].includes(type)) {
        return _jsxs(LoadingProgressContainer, { children: [Math.round(loading), " %"] });
    }
    return (_jsx(LoadingProgressContainer, { children: _jsx(CircularProgress, { style: CircularProgressStyles }) }));
};
var handleFileClick = function (link) {
    if (link) {
        window.open(link, '_blank');
    }
};
export var Uploader = function (_a) {
    var type = _a.type, uploadedFile = _a.uploadedFile, label = _a.label, inputValue = _a.inputValue, onInputChange = _a.onInputChange, onFileChange = _a.onFileChange, disabled = _a.disabled, loading = _a.loading, deleteFile = _a.deleteFile, id = _a.id, accept = _a.accept, name = _a.name, multiple = _a.multiple, placeHolder = _a.placeHolder, _b = _a.showFullPreview, showFullPreview = _b === void 0 ? false : _b, inputClassName = _a.inputClassName, touched = _a.touched, error = _a.error, nameClassName = _a.nameClassName, _c = _a.required, required = _c === void 0 ? false : _c;
    var t = useTranslation().t;
    var InlineFilePreview = function () {
        var file = uploadedFile;
        switch (type) {
            case FileTypes.IMAGE:
                return (_jsx(ImagePlaceholder, { onClick: function () {
                        handleFileClick(file.link);
                    }, children: _jsx("img", { src: file === null || file === void 0 ? void 0 : file.link, alt: '' }) }));
            case FileTypes.VIDEO:
                return (_jsx(VideoPlaceholder, { onClick: function () {
                        var _a, _b;
                        handleFileClick((_b = (_a = file.links) === null || _a === void 0 ? void 0 : _a[4]) === null || _b === void 0 ? void 0 : _b.url);
                    }, children: _jsx(OndemandVideoIcon, { color: 'secondary' }) }));
            case FileTypes.AUDIO:
                return (_jsx(DefaultPlaceholder, { onClick: function () {
                        handleFileClick(file.link);
                    }, children: _jsx(HeadsetIcon, { color: 'secondary' }) }));
            default:
                return (_jsx(DefaultPlaceholder, { onClick: function () {
                        handleFileClick(file.link);
                    }, children: _jsx(InsertDriveFileIcon, { color: 'secondary' }) }));
        }
    };
    return (_jsxs(Container, { children: [label && _jsx(Title, { "$required": required, children: label }), _jsxs(FlexContainer, { children: [_jsx(ItemContainer, { width: '75%', children: _jsx(Input, { label: '', placeholder: placeHolder ? placeHolder : 'Supported formats are PNG, JPG, JPEG', name: 'file', size: 'small', type: 'text', fullWidth: true, touched: touched, error: !!error, value: inputValue, onChange: onInputChange, disabled: disabled }) }), showFullPreview ? (_jsxs(_Fragment, { children: [_jsx(ItemContainer, { width: '23%', children: loading ? (_jsx(Loading, { type: type, loading: loading })) : (_jsxs(InputFileContainer, { children: [_jsx(UploadInput, { type: 'file', className: nameClassName, name: name, id: id, onChange: onFileChange, multiple: multiple, accept: accept }), _jsxs(InputLabel, { htmlFor: id, children: [_jsx(FileUploadOutlinedIcon, {}), t('general.upload') || 'Upload', ' '] })] })) }), uploadedFile && type === FileTypes.IMAGE && (_jsx(ImagePlaceholder, { height: 160, children: uploadedFile.link && _jsx("img", { src: uploadedFile.link, alt: 'Input Image' }) })), uploadedFile && (_jsx(CancelButton, { onClick: deleteFile, right: '160px', top: '37px', children: _jsx(CancelIcon, { style: { color: 'rgba(179, 179, 184, 1)' } }) }))] })) : (_jsxs(_Fragment, { children: [_jsxs(ItemContainer, { width: '23%', children: [!uploadedFile && !loading && (_jsxs(InputFileContainer, { children: [_jsx(UploadInput, { type: 'file', className: inputClassName, name: name, id: id, onChange: onFileChange, multiple: multiple, accept: accept }), _jsxs(InputLabel, { htmlFor: id, children: [_jsx(FileUploadOutlinedIcon, {}), t('general.upload')] })] })), loading && _jsx(Loading, { type: type, loading: loading }), uploadedFile && InlineFilePreview()] }), uploadedFile && (_jsx(CancelButton, { onClick: deleteFile, children: _jsx(CancelIcon, { style: { color: '#06C68F' } }) })), ' '] }))] }), error && touched && _jsx(ErrorText, { children: error })] }));
};
//# sourceMappingURL=Uploader.js.map