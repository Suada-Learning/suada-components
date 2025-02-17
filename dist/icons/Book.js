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
export var Book = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ width: '94', height: '62', viewBox: '0 0 94 62', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsxs("g", { id: 'Vector', children: [_jsx("path", { d: 'M93 6.95041C85.3333 2.98347 77.6667 1 70 1C62.3333 1 54.6667 2.98347 47 6.95041V61C54.6667 57.3636 62.3333 55.5455 70 55.5455C77.6667 55.5455 85.3333 57.3636 93 61V6.95041ZM47 6.95041C39.3333 2.98347 31.6667 1 24 1C16.3333 1 8.66667 2.98347 1 6.95041V61C8.66667 57.3636 16.3333 55.5455 24 55.5455C31.6667 55.5455 39.3333 57.3636 47 61V6.95041Z', fill: '#E1F5E3' }), _jsx("path", { d: 'M47 6.95041C54.6667 2.98347 62.3333 1 70 1C77.6667 1 85.3333 2.98347 93 6.95041V61C85.3333 57.3636 77.6667 55.5455 70 55.5455C62.3333 55.5455 54.6667 57.3636 47 61M47 6.95041V61M47 6.95041C39.3333 2.98347 31.6667 1 24 1C16.3333 1 8.66667 2.98347 1 6.95041V61C8.66667 57.3636 16.3333 55.5455 24 55.5455C31.6667 55.5455 39.3333 57.3636 47 61', stroke: '#72C4AC', "stroke-linecap": 'round', "stroke-linejoin": 'round' })] }) })));
};
//# sourceMappingURL=Book.js.map