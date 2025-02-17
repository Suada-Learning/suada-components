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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var EditRounded = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M28.75 26.25H11.25V27.5H28.75V26.25Z', fill: '#68707A' }), _jsx("path", { d: 'M25.875 15.625C26.375 15.125 26.375 14.375 25.875 13.875L23.625 11.625C23.125 11.125 22.375 11.125 21.875 11.625L12.5 21V25H16.5L25.875 15.625ZM22.75 12.5L25 14.75L23.125 16.625L20.875 14.375L22.75 12.5ZM13.75 23.75V21.5L20 15.25L22.25 17.5L16 23.75H13.75Z', fill: '#68707A' })] })));
};
//# sourceMappingURL=EditRounded.js.map