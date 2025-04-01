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
import { forwardRef } from 'react';
export var DocumentAttachment = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("g", { id: 'Document--attachment', children: _jsxs("g", { id: 'Vector', children: [_jsx("path", { d: 'M13 15H5.5C5.23488 14.9997 4.9807 14.8942 4.79323 14.7068C4.60576 14.5193 4.5003 14.2651 4.5 14V11H5.5V14H13V3H8.5V2H13C13.2651 2.0003 13.5193 2.10576 13.7068 2.29323C13.8942 2.4807 13.9997 2.73488 14 3V14C13.9997 14.2651 13.8942 14.5193 13.7068 14.7068C13.5193 14.8942 13.2651 14.9997 13 15Z', fill: '#68707A' }), _jsx("path", { d: 'M12 5H8.5V6H12V5Z', fill: '#68707A' }), _jsx("path", { d: 'M12 7.5H8V8.5H12V7.5Z', fill: '#68707A' }), _jsx("path", { d: 'M12 10H7.5V11H12V10Z', fill: '#68707A' }), _jsx("path", { d: 'M4.5 9.5C3.83718 9.49927 3.20172 9.23565 2.73304 8.76696C2.26435 8.29828 2.00073 7.66282 2 7V1.5H3V7C3 7.39782 3.15804 7.77936 3.43934 8.06066C3.72064 8.34196 4.10218 8.5 4.5 8.5C4.89782 8.5 5.27936 8.34196 5.56066 8.06066C5.84196 7.77936 6 7.39782 6 7V2.5C6 2.36739 5.94732 2.24021 5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2C5.36739 2 5.24021 2.05268 5.14645 2.14645C5.05268 2.24021 5 2.36739 5 2.5V7.5H4V2.5C4 2.10218 4.15804 1.72064 4.43934 1.43934C4.72064 1.15804 5.10218 1 5.5 1C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5V7C6.99927 7.66282 6.73565 8.29828 6.26696 8.76696C5.79828 9.23565 5.16282 9.49927 4.5 9.5Z', fill: '#68707A' })] }) }) })));
});
DocumentAttachment.displayName = 'DocumentAttachment';
//# sourceMappingURL=DocumentAttachment.js.map