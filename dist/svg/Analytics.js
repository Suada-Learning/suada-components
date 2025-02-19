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
export var Analytics = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M3 1.5H1.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H22.5V21H3V1.5Z', fill: '#020210' }), _jsx("path", { d: 'M22.5 6.75H17.25V8.25H19.9425L14.25 13.9425L11.0325 10.7175C10.9628 10.6472 10.8798 10.5914 10.7884 10.5533C10.697 10.5153 10.599 10.4957 10.5 10.4957C10.401 10.4957 10.303 10.5153 10.2116 10.5533C10.1202 10.5914 10.0372 10.6472 9.9675 10.7175L4.5 16.1925L5.5575 17.25L10.5 12.3075L13.7175 15.5325C13.7872 15.6028 13.8702 15.6586 13.9616 15.6967C14.053 15.7347 14.151 15.7543 14.25 15.7543C14.349 15.7543 14.447 15.7347 14.5384 15.6967C14.6298 15.6586 14.7128 15.6028 14.7825 15.5325L21 9.3075V12H22.5V6.75Z', fill: '#020210' })] })));
};
//# sourceMappingURL=Analytics.js.map