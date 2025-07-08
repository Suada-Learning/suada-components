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
import { CompanyStatusIndicator, StatusIndicator } from './StatusIndicator';
import { GridStatusEnums } from './status.interface';
export default {
    title: 'Components/StatusIndicator',
    component: StatusIndicator,
    tags: ['autodocs', 'StatusIndicator'],
    parameters: {
        layout: 'centered',
    },
};
var Template = function (args) { return _jsx(StatusIndicator, __assign({}, args)); };
export var DefaultStatusIndicator = Template.bind({});
DefaultStatusIndicator.args = {
    status: GridStatusEnums.ACTIVE,
};
var CompanyTemplate = function (args) { return (_jsx(CompanyStatusIndicator, __assign({}, args))); };
export var DefaultCompanyStatusIndicator = CompanyTemplate.bind({});
DefaultCompanyStatusIndicator.args = {
    $isActive: true,
};
//# sourceMappingURL=StatusIndicator.stories.js.map