import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CenteredText, Whiteboard } from './styled-components';
import Presentation from '../PresentationIcon/Presentation';
export var SplashScreen = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, _b = _a.createButton, createButton = _b === void 0 ? false : _b, _c = _a.marginTop, marginTop = _c === void 0 ? 0 : _c, _d = _a.minHeight, minHeight = _d === void 0 ? '75vh' : _d, _e = _a.height, height = _e === void 0 ? 'auto' : _e, _f = _a.contentMaxWidth, contentMaxWidth = _f === void 0 ? '100%' : _f, _g = _a.textMarginTop, textMarginTop = _g === void 0 ? '0px' : _g, _h = _a.isSearchOrFilter, isSearchOrFilter = _h === void 0 ? false : _h;
    return (_jsx(Whiteboard, { style: {
            marginTop: marginTop,
            minHeight: minHeight,
            height: height,
            justifyContent: isSearchOrFilter ? 'flex-start' : 'center',
        }, children: _jsxs(CenteredText, { style: { maxWidth: contentMaxWidth }, marginTop: textMarginTop, children: [_jsx(Presentation, {}), title && _jsx("h1", { children: title }), subTitle && _jsx("h4", { children: subTitle }), createButton && _jsx("div", { children: createButton() })] }) }));
};
//# sourceMappingURL=SplashScreen.js.map