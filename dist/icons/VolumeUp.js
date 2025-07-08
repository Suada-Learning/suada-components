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
export var VolumeUpIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, dark = _a.dark, props = __rest(_a, ["className", "onClick", "dark"]);
    return (_jsxs("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M20.37 6.05993L19.2225 7.02743C20.4014 8.42388 21.0298 10.2027 20.9898 12.0298C20.9497 13.8569 20.2439 15.6065 19.005 16.9499L20.1075 17.9999C21.5952 16.3878 22.443 14.2878 22.4913 12.0946C22.5396 9.90139 21.7853 7.76606 20.37 6.08993V6.05993Z', fill: dark ? '#000' : '#fff' }), _jsx("path", { d: 'M16.185 8.99993C16.8921 9.83845 17.2687 10.9064 17.2438 12.003C17.2189 13.0996 16.7944 14.1493 16.05 14.9549L17.1525 15.9749C18.1447 14.8997 18.7098 13.499 18.7415 12.0363C18.7733 10.5736 18.2695 9.14972 17.325 8.03243L16.185 8.99993Z', fill: dark ? '#000' : '#fff' }), _jsx("path", { d: 'M13.5 22.4999C13.4008 22.4995 13.3026 22.4794 13.2112 22.4408C13.1198 22.4022 13.037 22.3458 12.9675 22.2749L7.2525 16.4999H2.25C2.05109 16.4999 1.86032 16.4209 1.71967 16.2803C1.57902 16.1396 1.5 15.9488 1.5 15.7499V8.24993C1.5 8.05102 1.57902 7.86025 1.71967 7.7196C1.86032 7.57895 2.05109 7.49993 2.25 7.49993H7.2525L12.9675 1.72493C13.108 1.58524 13.2981 1.50684 13.4963 1.50684C13.6944 1.50684 13.8845 1.58524 14.025 1.72493C14.1663 1.8634 14.2472 2.0521 14.25 2.24993V21.7499C14.25 21.9488 14.171 22.1396 14.0303 22.2803C13.8897 22.4209 13.6989 22.4999 13.5 22.4999ZM3 14.9999H7.56C7.65923 15.0003 7.75739 15.0204 7.8488 15.0591C7.94021 15.0977 8.02304 15.1541 8.0925 15.2249L12.75 19.9274V4.07243L8.0925 8.77493C8.02304 8.8458 7.94021 8.90217 7.8488 8.9408C7.75739 8.97942 7.65923 8.99952 7.56 8.99993H3V14.9999Z', fill: dark ? '#000' : '#fff' })] })));
};
//# sourceMappingURL=VolumeUp.js.map