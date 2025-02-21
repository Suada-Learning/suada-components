var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
export var LoaderWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 999;\n  background: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  &.withBackground {\n    background: rgba(255, 255, 255, 1);\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 999;\n  background: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  &.withBackground {\n    background: rgba(255, 255, 255, 1);\n  }\n"])));
export var LoaderCircle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
var PREFIX = 'Loader';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
export var StyledLoaderWrapper = muiStyled(LoaderWrapper)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.root)] = {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
        _b);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled-components.js.map