import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DrawerTipsContainer, styles, TipItem } from './styled-component';
export var DrawerTips = function (_a) {
    var tips = _a.tips, rememberText = _a.rememberText;
    var renderRememberText = function (text) {
        var words = text.split(' ');
        if (words.length) {
            return (_jsxs(_Fragment, { children: [_jsx("strong", { children: words[0] }), words.slice(1).join(' ')] }));
        }
        return null;
    };
    return (_jsxs(DrawerTipsContainer, { children: [tips.map(function (tip, index) { return (_jsxs(TipItem, { children: [_jsx("img", { src: tip.icon, alt: 'tipSVG', style: styles.svg }), _jsx("span", { children: tip.text })] }, index)); }), rememberText && _jsx("div", { children: renderRememberText(rememberText) })] }));
};
//# sourceMappingURL=DrawerTips.js.map