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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TabPanel, TabNavigation, activeTabClassName } from './Tabs';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default {
    title: 'Components/Tabs',
    component: TabPanel,
    tags: ['autodocs', 'Tabs'],
    parameters: {
        layout: 'centered',
    },
};
var Template = function (args) {
    var _a = useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (_jsxs(TabNavigation, { children: [_jsxs(Tabs, { value: value, onChange: handleChange, "aria-label": 'simple tabs example', children: [_jsx(Tab, __assign({ label: 'Tab 1' }, activeTabClassName(0))), _jsx(Tab, __assign({ label: 'Tab 2' }, activeTabClassName(1))), _jsx(Tab, __assign({ label: 'Tab 3' }, activeTabClassName(2)))] }), _jsx(TabPanel, __assign({}, args, { value: value, index: 0, children: "Groups" })), _jsx(TabPanel, __assign({}, args, { value: value, index: 1, children: "Students" })), _jsx(TabPanel, __assign({}, args, { value: value, index: 2, children: "Coaches" }))] }));
};
export var DefaultTabs = Template.bind({});
DefaultTabs.args = {
    padding: 3,
};
//# sourceMappingURL=Tabs.stories.js.map