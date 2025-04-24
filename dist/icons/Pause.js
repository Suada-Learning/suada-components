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
export var PauseIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M9 4.5H7.5C7.10218 4.5 6.72064 4.65804 6.43934 4.93934C6.15804 5.22064 6 5.60218 6 6V18C6 18.3978 6.15804 18.7794 6.43934 19.0607C6.72064 19.342 7.10218 19.5 7.5 19.5H9C9.39782 19.5 9.77936 19.342 10.0607 19.0607C10.342 18.7794 10.5 18.3978 10.5 18V6C10.5 5.60218 10.342 5.22064 10.0607 4.93934C9.77936 4.65804 9.39782 4.5 9 4.5Z', fill: 'white' }), _jsx("path", { d: 'M16.5 4.5H15C14.6022 4.5 14.2206 4.65804 13.9393 4.93934C13.658 5.22064 13.5 5.60218 13.5 6V18C13.5 18.3978 13.658 18.7794 13.9393 19.0607C14.2206 19.342 14.6022 19.5 15 19.5H16.5C16.8978 19.5 17.2794 19.342 17.5607 19.0607C17.842 18.7794 18 18.3978 18 18V6C18 5.60218 17.842 5.22064 17.5607 4.93934C17.2794 4.65804 16.8978 4.5 16.5 4.5Z', fill: 'white' })] })));
};
//# sourceMappingURL=Pause.js.map