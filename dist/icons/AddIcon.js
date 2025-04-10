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
import { forwardRef } from 'react';
export var AddIcon = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, _b = _a.fill, fill = _b === void 0 ? 'white' : _b, props = __rest(_a, ["className", "onClick", "fill"]);
    return (_jsx("svg", __assign({ ref: ref, width: '25', height: '24', viewBox: '0 0 25 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M13.25 11.25V6H11.75V11.25H6.5V12.75H11.75V18H13.25V12.75H18.5V11.25H13.25Z', fill: fill }) })));
});
AddIcon.displayName = 'AddIcon';
//# sourceMappingURL=AddIcon.js.map