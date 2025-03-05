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
import { DatePicker } from './DatePicker';
export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsx("div", { style: { padding: '20px', maxWidth: '300px' }, children: _jsx(Story, {}) }) })); },
    ],
};
var Template = function (args) { return _jsx(DatePicker, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    touched: false,
    error: false,
    errorMessage: '',
    value: null,
    onChange: function () { },
};
//# sourceMappingURL=DatePicker.stories.js.map