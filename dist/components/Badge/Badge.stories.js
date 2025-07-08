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
import { Badge } from './Badge';
export default {
    title: 'Components/Badge',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    component: Badge,
};
var Template = function (args) { return _jsx(Badge, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxdUf7Wbdggm-utxlTr34w-nqSDOPHFIiWw&s',
    onEditClick: function () { return console.log('Edit clicked'); },
};
//# sourceMappingURL=Badge.stories.js.map