import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { GridStatusEnums } from './status.interface';
import { CompanyStatusContainer, StatusWrapper } from './styled-components';
export var StatusIndicator = function (_a) {
    var _b = _a.status, status = _b === void 0 ? GridStatusEnums.SUSPENDED : _b;
    return (_jsx(StatusWrapper, { status: status, children: status.charAt(0) + status.slice(1).toLowerCase() }));
};
export var CompanyStatusIndicator = function (_a) {
    var _b = _a.$isActive, $isActive = _b === void 0 ? true : _b;
    var t = useTranslation().t;
    return (_jsx(CompanyStatusContainer, { "$isActive": $isActive, children: $isActive ? t('general.active') : t('general.disabled') }));
};
//# sourceMappingURL=StatusIndicator.js.map