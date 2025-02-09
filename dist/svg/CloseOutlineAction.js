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
var CloseOutlineAction = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '40', height: '40', viewBox: '0 0 256 256', className: className, onClick: onClick }, props, { children: _jsx("g", { fill: '#68707a', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' }, children: _jsxs("g", { transform: 'scale(6.4,6.4)', children: [_jsx("path", { d: 'M20,11.25c-4.875,0 -8.75,3.875 -8.75,8.75c0,4.875 3.875,8.75 8.75,8.75c4.875,0 8.75,-3.875 8.75,-8.75c0,-4.875 -3.875,-8.75 -8.75,-8.75zM20,27.5c-4.125,0 -7.5,-3.375 -7.5,-7.5c0,-4.125 3.375,-7.5 7.5,-7.5c4.125,0 7.5,3.375 7.5,7.5c0,4.125 -3.375,7.5 -7.5,7.5z' }), _jsx("path", { d: 'M23.375,24.375l-3.375,-3.375l-3.375,3.375l-1,-1l3.375,-3.375l-3.375,-3.375l1,-1l3.375,3.375l3.375,-3.375l1,1l-3.375,3.375l3.375,3.375z' })] }) }) })));
};
export default CloseOutlineAction;
//# sourceMappingURL=CloseOutlineAction.js.map