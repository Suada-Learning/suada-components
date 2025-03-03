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
export var Search = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M18.1249 17.2399L13.4048 12.5198C14.539 11.1582 15.1046 9.41166 14.9839 7.64363C14.8632 5.8756 14.0655 4.22217 12.7568 3.02729C11.4481 1.83241 9.7291 1.18808 7.95741 1.22834C6.18572 1.2686 4.49776 1.99035 3.24467 3.24345C1.99157 4.49654 1.26982 6.1845 1.22956 7.95619C1.1893 9.72787 1.83363 11.4469 3.02851 12.7556C4.22339 14.0643 5.87682 14.862 7.64485 14.9827C9.41288 15.1034 11.1594 14.5378 12.521 13.4036L17.2411 18.1237L18.1249 17.2399ZM2.4999 8.12368C2.4999 7.01116 2.8298 5.92363 3.44789 4.9986C4.06597 4.07357 4.94448 3.3526 5.97231 2.92686C7.00014 2.50112 8.13114 2.38972 9.22229 2.60677C10.3134 2.82381 11.3157 3.35954 12.1024 4.14621C12.8891 4.93288 13.4248 5.93516 13.6418 7.0263C13.8589 8.11744 13.7475 9.24844 13.3217 10.2763C12.896 11.3041 12.175 12.1826 11.25 12.8007C10.325 13.4188 9.23742 13.7487 8.1249 13.7487C6.63357 13.747 5.20379 13.1539 4.14926 12.0993C3.09472 11.0448 2.50156 9.61502 2.4999 8.12368Z', fill: '#68707A' }) })));
};
//# sourceMappingURL=Search.js.map