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
export var Learning = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M22.5 6H12V7.5H22.5V6Z', fill: '#020210' }), _jsx("path", { d: 'M4.5 7.9425L2.5575 6L1.5 7.0575L4.5 10.0575L10.5 4.0575L9.4425 3L4.5 7.9425Z', fill: '#020210' }), _jsx("path", { d: 'M22.5 16.5H12V18H22.5V16.5Z', fill: '#020210' }), _jsx("path", { d: 'M4.5 18.4425L2.5575 16.5L1.5 17.5575L4.5 20.5575L10.5 14.5575L9.4425 13.5L4.5 18.4425Z', fill: '#020210' })] })));
};
//# sourceMappingURL=Learning.js.map