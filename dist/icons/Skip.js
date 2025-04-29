var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export var SkipIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, forward = _a.forward, props = __rest(_a, ["className", "onClick", "forward"]);
    return (_jsx("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: forward ? (_jsxs(_Fragment, { children: [_jsx("path", { d: 'M3.75001 21.0001C3.55109 21.0001 3.36033 20.921 3.21968 20.7804C3.07902 20.6397 3.00001 20.449 3.00001 20.2501V3.75005C2.99948 3.61789 3.03389 3.48794 3.09974 3.37336C3.16559 3.25878 3.26055 3.16363 3.37501 3.09755C3.48902 3.03173 3.61835 2.99707 3.75001 2.99707C3.88166 2.99707 4.01099 3.03173 4.12501 3.09755L18.375 11.3476C18.4904 11.413 18.5864 11.5078 18.6532 11.6225C18.72 11.7371 18.7552 11.8674 18.7552 12.0001C18.7552 12.1327 18.72 12.263 18.6532 12.3776C18.5864 12.4923 18.4904 12.5871 18.375 12.6526L4.12501 20.9026C4.0107 20.9673 3.88139 21.001 3.75001 21.0001ZM4.50001 5.04755V18.9526L16.5 12.0001L4.50001 5.04755Z', fill: 'white' }), _jsx("path", { d: 'M22.5 3.00005H21V21.0001H22.5V3.00005Z', fill: 'white' })] })) : (_jsxs(_Fragment, { children: [_jsx("path", { d: 'M20.25 21.0001C20.1186 21.001 19.9893 20.9673 19.875 20.9026L5.625 12.6526C5.50958 12.5871 5.41357 12.4923 5.34678 12.3776C5.27998 12.263 5.24479 12.1327 5.24479 12.0001C5.24479 11.8674 5.27998 11.7371 5.34678 11.6225C5.41357 11.5078 5.50958 11.413 5.625 11.3476L19.875 3.09755C19.989 3.03173 20.1183 2.99707 20.25 2.99707C20.3817 2.99707 20.511 3.03173 20.625 3.09755C20.7395 3.16363 20.8344 3.25878 20.9003 3.37336C20.9661 3.48794 21.0005 3.61789 21 3.75005V20.2501C21 20.449 20.921 20.6397 20.7803 20.7804C20.6397 20.921 20.4489 21.0001 20.25 21.0001ZM7.5 12.0001L19.5 18.9526V5.04755L7.5 12.0001Z', fill: 'white' }), _jsx("path", { d: 'M3 3.00005H1.5V21.0001H3V3.00005Z', fill: 'white' })] })) })));
};
//# sourceMappingURL=Skip.js.map