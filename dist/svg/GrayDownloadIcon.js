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
export var GrayDownloadSVG = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0,0,256,256', className: className, onClick: onClick }, props, { children: _jsx("g", { "fill-opacity": '0.52941', fill: '#7a7a7a', "fill-rule": 'nonzero', stroke: 'none', "stroke-width": '1', "stroke-linecap": 'butt', "stroke-linejoin": 'miter', "stroke-miterlimit": '10', "stroke-dasharray": '', "stroke-dashoffset": '0', "font-family": 'none', "font-weight": 'none', "font-size": 'none', "text-anchor": 'none', children: _jsxs("g", { transform: 'scale(10.66667,10.66667)', children: [_jsx("path", { d: 'M19.5,18v3h-15v-3h-1.5v3c0,0.3978 0.15804,0.7794 0.43934,1.0607c0.2813,0.2813 0.66284,0.4393 1.06066,0.4393h15c0.3978,0 0.7794,-0.158 1.0607,-0.4393c0.2813,-0.2813 0.4393,-0.6629 0.4393,-1.0607v-3z' }), _jsx("path", { d: 'M19.5,10.5l-1.0575,-1.0575l-5.6925,5.685v-13.6275h-1.5v13.6275l-5.6925,-5.685l-1.0575,1.0575l7.5,7.5z' })] }) }) })));
};
//# sourceMappingURL=GrayDownloadIcon.js.map