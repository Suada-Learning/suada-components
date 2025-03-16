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
import { CustomTooltip } from './CustomTooltip';
export default {
    title: 'Components/Tooltip',
    component: CustomTooltip,
    decorators: [
        function (Story) { return (_jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }, children: _jsx(Story, {}) })); },
    ],
};
var Template = function (args) { return _jsx(CustomTooltip, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    title: 'Hover over me to see the tooltip',
    children: _jsx("span", { children: "Hover over me" }),
};
//# sourceMappingURL=CustomTooltip.stories.js.map