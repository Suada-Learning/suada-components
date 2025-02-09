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
var RedDeleteIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '20', height: '20', viewBox: '0 0 256 256', className: className, onClick: onClick }, props, { children: _jsx("g", { fill: '#fa5252', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' }, children: _jsxs("g", { transform: 'scale(12.8,12.8)', children: [_jsx("path", { d: 'M8.75,7.5h-1.25v7.5h1.25z' }), _jsx("path", { d: 'M12.5,7.5h-1.25v7.5h1.25z' }), _jsx("path", { d: 'M2.5,3.75v1.25h1.25v12.5c0,0.3315 0.1317,0.6495 0.36612,0.8839c0.23442,0.2344 0.55236,0.3661 0.88388,0.3661h10c0.3315,0 0.6495,-0.1317 0.8839,-0.3661c0.2344,-0.2344 0.3661,-0.5524 0.3661,-0.8839v-12.5h1.25v-1.25zM5,17.5v-12.5h10v12.5z' }), _jsx("path", { d: 'M12.5,1.25h-5v1.25h5z' })] }) }) })));
};
export default RedDeleteIcon;
//# sourceMappingURL=RedDeleteIcon.js.map