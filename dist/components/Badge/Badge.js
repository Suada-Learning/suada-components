import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditButton, Wrapper } from './styled-components';
import { Edit } from '../../svg';
export var Badge = function (_a) {
    var src = _a.src, onEditClick = _a.onEditClick;
    if (!src)
        return _jsx(_Fragment, {});
    return (_jsxs(Wrapper, { children: [_jsx("img", { src: src }), _jsx(EditButton, { onClick: onEditClick, children: _jsx(Edit, { style: { color: '#fff' } }) })] }));
};
//# sourceMappingURL=Badge.js.map