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
export var ViewCompactIcon = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, _b = _a.fill, fill = _b === void 0 ? '#68707A' : _b, props = __rest(_a, ["className", "onClick", "fill"]);
    return (_jsx("svg", __assign({ ref: ref, width: '24', height: '24', viewBox: '0 -960 960 960', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M80-170v-620h800v620H80Zm80-440h100v-100H160v100Zm180 0h100v-100H340v100Zm180 0h100v-100H520v100Zm180 0h100v-100H700v100Zm0 180h100v-100H700v100Zm-180 0h100v-100H520v100Zm-180 0h100v-100H340v100Zm-80-100H160v100h100v-100Zm440 280h100v-100H700v100Zm-180 0h100v-100H520v100Zm-180 0h100v-100H340v100Zm-180 0h100v-100H160v100Z', fill: fill }) })));
});
ViewCompactIcon.displayName = 'ViewCompactIcon';
//# sourceMappingURL=ViewCompactIcon.js.map