import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileUploadButton, ButtonInputLabel } from './styled-components';
var UploaderButton = function (_a) {
    var onChange = _a.onChange, id = _a.id, accept = _a.accept, loading = _a.loading, label = _a.label;
    return (_jsxs(FileUploadButton, { children: [_jsx("input", { type: 'file', onChange: onChange, id: id || 'id', accept: accept }), loading ? ('Loading...') : (_jsx(ButtonInputLabel, { htmlFor: id, children: _jsx("span", { children: label }) }))] }));
};
export default UploaderButton;
//# sourceMappingURL=UploaderButton.js.map