<<<<<<< HEAD
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
=======
import { jsx as _jsx } from "react/jsx-runtime";
>>>>>>> 394c0df (feat: add build files)
import { LoaderCircle } from './styled-components';
import CircularProgress from '@mui/material/CircularProgress';
export var Loader = function (_a) {
    var _b = _a.width, width = _b === void 0 ? '40px' : _b, _c = _a.height, height = _c === void 0 ? '40px' : _c, _d = _a.withBackground, withBackground = _d === void 0 ? false : _d;
<<<<<<< HEAD
    return (_jsx(_Fragment, { children: _jsx(LoaderCircle, { children: _jsx(CircularProgress, { style: { width: width, height: height } }) }) }));
=======
    return (_jsx(LoaderCircle, { children: _jsx(CircularProgress, { style: { width: width, height: height } }) }));
>>>>>>> 394c0df (feat: add build files)
};
//# sourceMappingURL=Loader.js.map