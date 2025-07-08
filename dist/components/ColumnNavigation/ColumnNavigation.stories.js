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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { ColumnNavigation } from './ColumnNavigation';
import { Home, Settings } from '@mui/icons-material';
export default {
    title: 'Components/ColumnNavigation',
    component: ColumnNavigation,
    tags: ['autodocs', 'CourseNavigation'],
    parameters: {
        layout: 'centered',
    },
};
var Template = function (args) {
    var _a = useState(0), activeTab = _a[0], setActiveTab = _a[1];
    return _jsx(ColumnNavigation, __assign({}, args, { activeTab: activeTab, setActiveTab: setActiveTab }));
};
export var DefaultColumnNavigation = Template.bind({});
DefaultColumnNavigation.args = {
    tabs: [
        { label: 'Home', icon: _jsx(Home, {}) },
        { label: 'Settings', icon: _jsx(Settings, {}) },
    ],
};
//# sourceMappingURL=ColumnNavigation.stories.js.map