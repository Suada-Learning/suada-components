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
export var Coach = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '20', height: '19', viewBox: '0 0 20 19', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("circle", { cx: '10.0108', cy: '9.25204', r: '9.25204', fill: '#9B51E0' }), _jsx("path", { d: 'M12.1911 8.1147L12.4425 8.40466L12.7876 8.23666L15.0286 7.14571L13.4363 12.3834H6.5854L4.99314 7.14567L7.23412 8.23663L7.57921 8.40464L7.8307 8.11468L10.0109 5.601L12.1911 8.1147ZM13.4222 12.43C13.4222 12.43 13.4222 12.4299 13.4222 12.4298L13.4222 12.43L13.4222 12.43ZM6.59957 12.43L6.59957 12.43L6.59957 12.43ZM9.96119 5.54371L9.96123 5.54375L9.96119 5.54371Z', fill: 'white', stroke: 'white' })] })));
};
//# sourceMappingURL=Coach.js.map