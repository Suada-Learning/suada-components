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
import { TooltipHeight } from './TooltipHeight';
export default {
    title: 'Components/Tooltip',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs', 'add some text in text field'],
    component: TooltipHeight,
};
var Template = function (args) { return _jsx(TooltipHeight, __assign({}, args)); };
export var DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
    children: _jsx("span", { children: " hover over me to see 2 line tooltip sfafas" }),
    title: 'Tooltip text',
    text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    lines: 1,
};
//# sourceMappingURL=TooltipHeight.stories.js.map