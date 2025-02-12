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
export var TrashCanAction = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M18.75 17.5H17.5V25H18.75V17.5Z', fill: '#68707A' }), _jsx("path", { d: 'M22.5 17.5H21.25V25H22.5V17.5Z', fill: '#68707A' }), _jsx("path", { d: 'M12.5 13.75V15H13.75V27.5C13.75 27.8315 13.8817 28.1495 14.1161 28.3839C14.3505 28.6183 14.6685 28.75 15 28.75H25C25.3315 28.75 25.6495 28.6183 25.8839 28.3839C26.1183 28.1495 26.25 27.8315 26.25 27.5V15H27.5V13.75H12.5ZM15 27.5V15H25V27.5H15Z', fill: '#68707A' }), _jsx("path", { d: 'M22.5 11.25H17.5V12.5H22.5V11.25Z', fill: '#68707A' })] })));
};
//# sourceMappingURL=TrashCanAction.js.map