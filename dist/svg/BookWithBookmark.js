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
import { jsx as _jsx } from "react/jsx-runtime";
var BookWithBookmark = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M12 15H4C3.73488 14.9997 3.4807 14.8942 3.29323 14.7068C3.10576 14.5193 3.0003 14.2651 3 14V2C3.00026 1.73486 3.10571 1.48066 3.29319 1.29319C3.48066 1.10571 3.73486 1.00026 4 1H12C12.2651 1.0003 12.5193 1.10576 12.7068 1.29323C12.8942 1.4807 12.9997 1.73488 13 2V10.3091L10.5 9.0591L8 10.3091V2H4V14H12V12H13V14C12.9996 14.2651 12.8942 14.5193 12.7067 14.7067C12.5193 14.8942 12.2651 14.9996 12 15ZM10.5 7.9409L12 8.6909V2H9V8.6909L10.5 7.9409Z', fill: '#020210' }) })));
};
export default BookWithBookmark;
//# sourceMappingURL=BookWithBookmark.js.map