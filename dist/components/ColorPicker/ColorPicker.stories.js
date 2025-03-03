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
import { ColorPicker } from './ColorPicker';
export default {
    title: 'Components/ColorPicker',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    component: ColorPicker,
};
var Template = function (args) { return _jsx(ColorPicker, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    selectedColor: '#000000',
    setSelectedColor: function (color) { return console.log(color); },
};
//# sourceMappingURL=ColorPicker.stories.js.map