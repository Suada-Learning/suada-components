'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
var components_StatusIndicator_status_interface = require('./status.interface.cjs.js');
require('../../Middleware-BpA40f7i.js');
require('react');

var StatusWrapper = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 92px;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 4px;\n  display: inline-block;\n\n  background: ", ";\n\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 92px;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 4px;\n  display: inline-block;\n\n  background: ", ";\n\n  color: ", ";\n"])), function (_a) {
  var status = _a.status;
  switch (status) {
    case components_StatusIndicator_status_interface.GridStatusEnums.ACTIVE:
      return '#e5f4ef';
    case components_StatusIndicator_status_interface.GridStatusEnums.SUSPENDED:
      return '#fdebea';
    case components_StatusIndicator_status_interface.GridStatusEnums.PENDING:
      return 'rgba(207, 207, 9, 0.1)';
    case components_StatusIndicator_status_interface.GridStatusEnums.APPROVED:
      return '#e5f4ef';
    case components_StatusIndicator_status_interface.GridStatusEnums.DECLINED:
      return '#fdebea';
    case components_StatusIndicator_status_interface.GridStatusEnums.UNPUBLISHED:
      return '#FDEBEA';
    case components_StatusIndicator_status_interface.GridStatusEnums.PUBLISHED:
      return '#E5F4EF';
    case components_StatusIndicator_status_interface.GridStatusEnums.DRAFT:
      return 'rgba(0, 0, 0, 0.1)';
    default:
      return 'transparent';
  }
}, function (_a) {
  var status = _a.status;
  switch (status) {
    case components_StatusIndicator_status_interface.GridStatusEnums.ACTIVE:
      return '#00905e';
    case components_StatusIndicator_status_interface.GridStatusEnums.SUSPENDED:
      return '#ea382a';
    case components_StatusIndicator_status_interface.GridStatusEnums.PENDING:
      return 'rgb(207, 207, 9)';
    case components_StatusIndicator_status_interface.GridStatusEnums.UNPUBLISHED:
      return '#EA382A';
    case components_StatusIndicator_status_interface.GridStatusEnums.APPROVED:
      return '#00905E';
    case components_StatusIndicator_status_interface.GridStatusEnums.DECLINED:
      return '#EA382A';
    case components_StatusIndicator_status_interface.GridStatusEnums.PUBLISHED:
      return '#00905E';
    case components_StatusIndicator_status_interface.GridStatusEnums.DRAFT:
      return 'rgba(0, 0, 0, 0.5)';
    default:
      return 'transparent';
  }
});
var CompanyStatusContainer = styledComponents_esm.dt.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  font-size: 13px;\n  color: #fff;\n  height: 32px;\n  padding: 4px 12px;\n  text-transform: capitalize;\n  border-radius: 4px;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  font-size: 13px;\n  color: #fff;\n  height: 32px;\n  padding: 4px 12px;\n  text-transform: capitalize;\n  border-radius: 4px;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), function (_a) {
  var $isActive = _a.$isActive;
  return $isActive ? '#08C694' : '#EA382A';
});
var templateObject_1, templateObject_2;

exports.CompanyStatusContainer = CompanyStatusContainer;
exports.StatusWrapper = StatusWrapper;
//# sourceMappingURL=styled-components.cjs.js.map
