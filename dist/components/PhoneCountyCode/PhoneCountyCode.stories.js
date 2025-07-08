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
import { PhoneCountryCode } from './PhoneCountyCode';
export default {
    title: 'Components/PhoneCountryCode',
    component: PhoneCountryCode,
    tags: ['autodocs', 'phoneCountryCode'],
    decorators: [
        function (Story) { return (_jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsx("div", { style: { maxWidth: '400px' }, children: _jsx(Story, {}) }) })); },
    ],
};
var Template = function (args) { return _jsx(PhoneCountryCode, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    label: 'Phone Number',
    selectLabel: 'Select Country',
    inputLabel: 'Enter number',
    selectValue: null,
    inputValue: '',
    selectChange: function () { },
    inputChange: function () { },
    touched: false,
    error: false,
    errorMessage: '',
};
//# sourceMappingURL=PhoneCountyCode.stories.js.map