import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CancelIcon from '@mui/icons-material/Cancel';
import { Container, ItemContainer, CancelButton, InputFileContainer, UploadInput, ImagePlaceholder, InputLabel, ErrorText, Title, styles, } from './styled-components';
import { Input } from '../Input';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider';
var ImageWithFallback = function (_a) {
    var src = _a.src, alt = _a.alt;
    var _b = useState(false), hasError = _b[0], setHasError = _b[1];
    if (hasError) {
        return _jsx(CircularProgress, {});
    }
    return (_jsx("img", { src: src, alt: alt, style: styles.thumbnail, onError: function () { return setHasError(true); } }));
};
var Loading = function (_a) {
    var type = _a.type, loading = _a.loading;
    if (['video', 'audio'].includes(type)) {
        return _jsxs("div", { style: { marginLeft: '19px', marginTop: '2px' }, children: [Math.round(loading), " %"] });
    }
    return (_jsx("div", { style: { marginLeft: '19px', marginTop: '2px' }, children: _jsx(CircularProgress, { style: { width: '32px', height: '32px' } }) }));
};
export var Uploader = function (_a) {
    var type = _a.type, uploadedFile = _a.uploadedFile, label = _a.label, inputValue = _a.inputValue, onInputChange = _a.onInputChange, onFileChange = _a.onFileChange, disabled = _a.disabled, loading = _a.loading, deleteFile = _a.deleteFile, id = _a.id, accept = _a.accept, name = _a.name, multiple = _a.multiple, fileExtension = _a.fileExtension, error = _a.error, _b = _a.required, required = _b === void 0 ? false : _b;
    var t = useTranslation().t;
    var filePreview = function () {
        var _a;
        // pdf is in file type too so we need to check for pdf explicitly
        if (((_a = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.link) === null || _a === void 0 ? void 0 : _a.split('.').pop()) === 'pdf') {
            return (_jsx(ImagePlaceholder, { children: _jsx("div", { style: { fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }, children: "PDF" }) }));
        }
        switch (type) {
            case 'image':
                return (_jsx(ImagePlaceholder, { children: _jsx(ImageWithFallback, { src: (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.link) || '', alt: 'Image Thumbnail' }) }));
            case 'file':
                return (_jsx(ImagePlaceholder, { children: _jsx("div", { style: { fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }, children: "FILE" }) }));
            case 'video':
                return (_jsx("div", { style: { marginTop: '3px' }, children: _jsx("div", { style: { fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }, children: "VIDEO" }) }));
            case 'audio':
                return (_jsx("div", { style: { marginTop: '3px' }, children: _jsx("div", { style: { fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }, children: "AUDIO" }) }));
            default:
                return (_jsx(ImagePlaceholder, { children: _jsx("div", { style: { fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }, children: "FILE" }) }));
        }
    };
    return (_jsxs("div", { children: [label && _jsx(Title, { "$required": required, children: label }), _jsxs(Container, { children: [_jsxs(ItemContainer, { children: [!uploadedFile && !loading && (_jsxs(InputFileContainer, { children: [_jsx(UploadInput, { type: 'file', name: name, id: id, onChange: onFileChange, multiple: multiple, accept: accept }), _jsx(InputLabel, { htmlFor: id, children: t('actions.choose_file') || 'Choose File' })] })), loading && _jsx(Loading, { type: type || 'file', loading: loading }), !disabled && uploadedFile && filePreview()] }), _jsx(ItemContainer, { children: _jsx(Input, { label: inputValue ? '' : "".concat(t('form_fields.file_name') || 'File name', " ").concat(fileExtension || ''), name: 'file', size: 'small', type: 'text', fullWidth: true, value: inputValue || '', onChange: onInputChange, disabled: disabled }) }), uploadedFile && (_jsx(CancelButton, { onClick: function (e) {
                            e.stopPropagation();
                            if (deleteFile) {
                                deleteFile();
                            }
                        }, children: _jsx(CancelIcon, { style: { color: '#06C68F' } }) }))] }), error && _jsx(ErrorText, { children: error })] }));
};
//# sourceMappingURL=Uploader.js.map