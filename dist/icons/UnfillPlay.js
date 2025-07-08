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
export var UnfillPlay = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("g", { id: 'Play', children: _jsx("path", { id: 'Vector', d: 'M3.5 14C3.36739 14 3.24021 13.9474 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.50004C2.99999 2.41315 3.02263 2.32775 3.06568 2.25228C3.10873 2.1768 3.17071 2.11384 3.2455 2.06962C3.32029 2.02539 3.40532 2.00142 3.4922 2.00006C3.57908 1.99871 3.66481 2.02001 3.74095 2.06189L13.7409 7.56189C13.8194 7.60503 13.8848 7.66845 13.9304 7.74552C13.976 7.82259 14 7.91048 14 8.00001C14 8.08955 13.976 8.17744 13.9304 8.25451C13.8848 8.33158 13.8194 8.39499 13.7409 8.43814L3.74095 13.9381C3.66713 13.9787 3.58425 14 3.5 14ZM4 3.34549V12.6544L12.4624 8.00004L4 3.34549Z', fill: '#68707A' }) }) })));
});
UnfillPlay.displayName = 'UnfillPlay';
//# sourceMappingURL=UnfillPlay.js.map