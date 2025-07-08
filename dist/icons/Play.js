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
export var PlayIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M5.25 21.0001C5.05109 21.0001 4.86032 20.921 4.71967 20.7804C4.57902 20.6397 4.5 20.449 4.5 20.2501V3.75006C4.49999 3.61972 4.53395 3.49163 4.59852 3.37842C4.6631 3.2652 4.75606 3.17077 4.86825 3.10443C4.98044 3.03808 5.10798 3.00212 5.2383 3.00009C5.36862 2.99806 5.49722 3.03002 5.61143 3.09283L20.6114 11.3428C20.7291 11.4075 20.8273 11.5027 20.8956 11.6183C20.964 11.7339 21 11.8657 21 12C21 12.1343 20.964 12.2662 20.8956 12.3818C20.8273 12.4974 20.7291 12.5925 20.6114 12.6572L5.61143 20.9072C5.50069 20.9681 5.37637 21 5.25 21.0001Z', fill: 'white' }) })));
};
//# sourceMappingURL=Play.js.map