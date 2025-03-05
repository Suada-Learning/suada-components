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
import { Checkbox } from './Checkbox';
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs', 'checkbox'],
    decorators: [
        function (Story) { return (_jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }, children: _jsx("div", { style: { maxWidth: '400px' }, children: _jsx(Story, {}) }) })); },
    ],
    argTypes: {
        checked: { control: 'boolean' },
        label: { control: 'text' },
        tooltip: { control: 'text' },
    },
};
var Template = function (args) { return _jsx(Checkbox, __assign({}, args)); };
export var Checked = Template.bind({});
Checked.args = {
    checked: true,
    label: 'Checkbox Label',
    tooltip: 'Tooltip Text',
};
export var Unchecked = Template.bind({});
Unchecked.args = {
    checked: false,
    label: 'Checkbox Label',
    tooltip: 'Tooltip Text',
};
//# sourceMappingURL=Checkbox.stories.js.map