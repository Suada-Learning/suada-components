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
var PresentationScreen = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ width: '64', height: '64', viewBox: '0 0 64 64', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("rect", { width: '64', height: '64', fill: 'url(#pattern0)' }), _jsxs("defs", { children: [_jsx("pattern", { id: 'pattern0', patternContentUnits: 'objectBoundingBox', width: '1', height: '1', children: _jsx("use", { xlinkHref: '#image0_25_133494', transform: 'scale(0.015625)' }) }), _jsx("image", { id: 'image0_25_133494', width: '64', height: '64', xlinkHref: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDElEQVR4nO2Xv2rbQBzHT36B9DU69CkkU3xqIEQydLDnLgXrSsGjEvAQ+gImQzwXWhJIxkJrXbd26Bt0cwvt7mT7hgPLUW3JUkKgvvP3Cz9siztz36/u30eICg2+4MkbjRdJhrfqK4Y2lhm78TD8hD1xHyUZwkTjt9KAI/VLTSEbmR9M8TTRuN6CQT923agpnjV5++d5p9E34PIncGVpmbEbD7mfRONjkwBmeYe/c1ivP/NCABlmtQGowrRxRUVPDKBOijMAXAKKewC4CSqeAnBGPAY17wHgRUjzJghehTVZAGSBOimyAMgCiiwAsoAiC8AZkQU0WQBkAU0WAFlAkwVAFqiTIguALKDIAiALKLIAnBFZQJMFQBbQZAGQBTRZAGXXf68to14QRkNTvXcXyOv9Bzeq6Cn3aTwLITwRyG4/CGPsZMlunwGIxRLww/jE1POXr04PXo8+m8/8me1V5mm5BKj/p1ZbHo5Nme9il5SmaSvoxNlyM+rEmXkmdkSeL+Px6o7sy2jifAipefMyPqs+luIzZ0NI68w7HoK3Ou39TvTjbvrH311eDt6aeRlN2vvd4+XvMDoqa+NCCF6VMWO6GMCmtsJSeZsMlQRQ28cmeXVGKgJo1Ne+3V6u7+wbAmj8H1upYBWvKwa+KYDqELp9YVUAsvqt/duu3NhaCDYEIBZ43QA3H7vdg3QLxJKutCAxKy4AAAAASUVORK5CYII=' })] })] })));
};
export default PresentationScreen;
//# sourceMappingURL=PresentationScreen.js.map