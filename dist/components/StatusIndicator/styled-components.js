var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { styled } from 'styled-components';
import { GridStatusEnums } from './status.interface';
export var StatusWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 92px;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 4px;\n  display: inline-block;\n\n  background: ", ";\n\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 92px;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 4px;\n  display: inline-block;\n\n  background: ", ";\n\n  color: ", ";\n"])), function (_a) {
    var status = _a.status;
    switch (status) {
        case GridStatusEnums.ACTIVE:
            return '#e5f4ef';
        case GridStatusEnums.SUSPENDED:
            return '#fdebea';
        case GridStatusEnums.PENDING:
            return 'rgba(207, 207, 9, 0.1)';
        case GridStatusEnums.APPROVED:
            return '#e5f4ef';
        case GridStatusEnums.DECLINED:
            return '#fdebea';
        case GridStatusEnums.UNPUBLISHED:
            return '#FDEBEA';
        case GridStatusEnums.PUBLISHED:
            return '#E5F4EF';
        case GridStatusEnums.DRAFT:
            return 'rgba(0, 0, 0, 0.1)';
        default:
            return 'transparent';
    }
}, function (_a) {
    var status = _a.status;
    switch (status) {
        case GridStatusEnums.ACTIVE:
            return '#00905e';
        case GridStatusEnums.SUSPENDED:
            return '#ea382a';
        case GridStatusEnums.PENDING:
            return 'rgb(207, 207, 9)';
        case GridStatusEnums.UNPUBLISHED:
            return '#EA382A';
        case GridStatusEnums.APPROVED:
            return '#00905E';
        case GridStatusEnums.DECLINED:
            return '#EA382A';
        case GridStatusEnums.PUBLISHED:
            return '#00905E';
        case GridStatusEnums.DRAFT:
            return 'rgba(0, 0, 0, 0.5)';
        default:
            return 'transparent';
    }
});
export var CompanyStatusContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 13px;\n  color: #fff;\n  height: 32px;\n  padding: 4px 12px;\n  text-transform: capitalize;\n  border-radius: 4px;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  font-size: 13px;\n  color: #fff;\n  height: 32px;\n  padding: 4px 12px;\n  text-transform: capitalize;\n  border-radius: 4px;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), function (_a) {
    var $isActive = _a.$isActive;
    return ($isActive ? '#08C694' : '#EA382A');
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled-components.js.map