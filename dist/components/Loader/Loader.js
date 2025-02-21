import { jsx as _jsx } from "react/jsx-runtime";
import { LoaderCircle, StyledLoaderWrapper } from './styled-components';
import CircularProgress from '@mui/material/CircularProgress';
export var Loader = function (_a) {
    var _b = _a.width, width = _b === void 0 ? '40px' : _b, _c = _a.height, height = _c === void 0 ? '40px' : _c, _d = _a.withBackground, withBackground = _d === void 0 ? false : _d;
    return (_jsx(StyledLoaderWrapper, { className: "".concat(withBackground ? 'withBackground' : ''), children: _jsx(LoaderCircle, { children: _jsx(CircularProgress, { style: { width: width, height: height } }) }) }));
};
//# sourceMappingURL=Loader.js.map