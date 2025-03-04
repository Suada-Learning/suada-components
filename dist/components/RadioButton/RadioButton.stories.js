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
import { RadioButton } from './RadioButton';
export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    tags: ['autodocs', 'RadioButton'],
    parameters: {
        layout: 'centered',
    },
};
var Template = function (args) {
    var _a = useState('option1'), selectedValue = _a[0], setSelectedValue = _a[1];
    var handleChange = function (value) {
        setSelectedValue(value);
    };
    return (_jsxs("div", { children: [_jsx(RadioButton, __assign({}, args, { value: 'option1', checked: selectedValue === 'option1', onChange: handleChange })), _jsx(RadioButton, __assign({}, args, { value: 'option2', checked: selectedValue === 'option2', onChange: handleChange }))] }));
};
export var DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
    ariaLabel: 'Radio button',
};
//# sourceMappingURL=RadioButton.stories.js.map