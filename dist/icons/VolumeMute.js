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
export var VolumeMuteIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, dark = _a.dark, props = __rest(_a, ["className", "onClick", "dark"]);
    return (_jsxs("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M23.25 9.30743L22.1925 8.24993L19.5 10.9424L16.8075 8.24993L15.75 9.30743L18.4425 11.9999L15.75 14.6924L16.8075 15.7499L19.5 13.0574L22.1925 15.7499L23.25 14.6924L20.5575 11.9999L23.25 9.30743Z', fill: dark ? '#000' : '#fff' }), _jsx("path", { d: 'M13.5 22.4999C13.4008 22.4995 13.3026 22.4794 13.2112 22.4408C13.1198 22.4022 13.037 22.3458 12.9675 22.2749L7.2525 16.4999H2.25C2.05109 16.4999 1.86032 16.4209 1.71967 16.2803C1.57902 16.1396 1.5 15.9488 1.5 15.7499V8.24993C1.5 8.05102 1.57902 7.86025 1.71967 7.7196C1.86032 7.57895 2.05109 7.49993 2.25 7.49993H7.2525L12.9675 1.72493C13.108 1.58524 13.2981 1.50684 13.4963 1.50684C13.6944 1.50684 13.8845 1.58524 14.025 1.72493C14.1663 1.8634 14.2472 2.0521 14.25 2.24993V21.7499C14.25 21.9488 14.171 22.1396 14.0303 22.2803C13.8897 22.4209 13.6989 22.4999 13.5 22.4999ZM3 14.9999H7.5C7.71863 14.9985 7.92993 15.0787 8.0925 15.2249L12.75 19.9274V4.07243L8.0925 8.77493C7.92993 8.92112 7.71863 9.00136 7.5 8.99993H3V14.9999Z', fill: dark ? '#000' : '#fff' })] })));
};
//# sourceMappingURL=VolumeMute.js.map