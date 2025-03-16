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
import { Breadcrumb } from './Breadcrumb';
export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
var Template = function (args) { return _jsx(Breadcrumb, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    data: [
        { label: 'Home', link: '/', icon: null, state: {} },
        { label: 'Category', link: '/category', icon: null, state: {} },
        { label: 'Subcategory', link: '/category/subcategory', icon: null, state: {} },
    ],
};
//# sourceMappingURL=BreadCrumb.stories.js.map