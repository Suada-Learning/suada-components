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
var PlayButtonSVG = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className, onClick: onClick }, props, { children: _jsx("g", { id: "Play--filled--alt", children: _jsx("path", { id: "Vector", d: "M5.99972 24.2863C5.77239 24.2863 5.55438 24.196 5.39363 24.0353C5.23288 23.8745 5.14258 23.6565 5.14258 23.4292V4.57205C5.14257 4.42309 5.18137 4.27671 5.25517 4.14732C5.32897 4.01793 5.43522 3.91001 5.56343 3.83419C5.69165 3.75837 5.83741 3.71727 5.98635 3.71495C6.13529 3.71262 6.28226 3.74915 6.41278 3.82094L23.5556 13.2495C23.6901 13.3235 23.8023 13.4322 23.8804 13.5643C23.9585 13.6964 23.9998 13.8471 23.9998 14.0006C23.9998 14.1541 23.9585 14.3047 23.8804 14.4369C23.8023 14.569 23.6901 14.6777 23.5556 14.7516L6.41278 24.1802C6.28622 24.2498 6.14415 24.2863 5.99972 24.2863Z", fill: "white" }) }) })));
};
export default PlayButtonSVG;
//# sourceMappingURL=PlayButton.js.map