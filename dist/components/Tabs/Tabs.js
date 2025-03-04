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
import { StyledTabNavigationContainer } from './styled-components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export var TabPanel = function (props) {
    var children = props.children, value = props.value, index = props.index, _a = props.padding, padding = _a === void 0 ? 3 : _a, other = __rest(props, ["children", "value", "index", "padding"]);
    return (_jsx(Typography, __assign({ role: 'tabpanel', hidden: value !== index, id: "simple-tabpanel-".concat(index), "aria-labelledby": "simple-tab-".concat(index) }, other, { children: value === index && (_jsx(Box, { bgcolor: '#f5f6fa', p: padding, children: children })) })));
};
export var activeTabClassName = function (index) {
    return {
        id: "simple-tab-".concat(index),
        'aria-controls': "simple-tabpanel-".concat(index),
    };
};
export var TabNavigation = function (props) {
    return (_jsx(StyledTabNavigationContainer, { "$isTransparent": props.transparent, style: props.style, children: props.children }));
};
//# sourceMappingURL=Tabs.js.map