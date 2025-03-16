'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
require('../../Middleware-BpA40f7i.js');
require('react');

// ExpansionNavMenu
var ExpansionMenuItemList = styledComponents_esm.dt.ul(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  padding: 0;\n"], ["\n  width: 100%;\n  padding: 0;\n"])));
var ExpansionMenuItem = styledComponents_esm.dt.li(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  & > a {\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 10px 14px;\n    font-size: 16px;\n    margin-block: 4px;\n    transition: all 0.3s ease;\n    font-family: 'Open Sans';\n    font-weight: 500;\n    color: #020210;\n    transition: 0.3s ease;\n\n    &:hover {\n      color: #06c68f;\n    }\n    &.active {\n      background-color: #06c68f;\n      color: white;\n    }\n  }\n"], ["\n  & > a {\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 10px 14px;\n    font-size: 16px;\n    margin-block: 4px;\n    transition: all 0.3s ease;\n    font-family: 'Open Sans';\n    font-weight: 500;\n    color: #020210;\n    transition: 0.3s ease;\n\n    &:hover {\n      color: #06c68f;\n    }\n    &.active {\n      background-color: #06c68f;\n      color: white;\n    }\n  }\n"
// NavigationBar
])));
// NavigationBar
var Container = styledComponents_esm.dt.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  max-height: 80vh;\n  overflow-y: auto;\n"], ["\n  width: ", ";\n  max-height: 80vh;\n  overflow-y: auto;\n"])), function (_a) {
  var $isOpened = _a.$isOpened;
  return $isOpened ? "240px" : "70px";
});
var StyledExpansionPanel = styledComponents_esm.dt.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  padding: 4px 8px;\n  display: flex;\n  width: 100%;\n  transition: all 0.3s ease;\n\n  & > a {\n    transition: all 0.3s ease;\n    color: #ababab;\n    width: 100%;\n\n    & > div {\n      transition: all 0.3s ease;\n\n      & svg path {\n        transition: all 0.3s ease;\n      }\n    }\n  }\n\n  & > a.active {\n    color: white;\n  }\n  & > a.active > div {\n    background-color: #eaf5f2;\n    color: #06c68f;\n    & svg path {\n      fill: #06c68f;\n    }\n  }\n"], ["\n  padding: 4px 8px;\n  display: flex;\n  width: 100%;\n  transition: all 0.3s ease;\n\n  & > a {\n    transition: all 0.3s ease;\n    color: #ababab;\n    width: 100%;\n\n    & > div {\n      transition: all 0.3s ease;\n\n      & svg path {\n        transition: all 0.3s ease;\n      }\n    }\n  }\n\n  & > a.active {\n    color: white;\n  }\n  & > a.active > div {\n    background-color: #eaf5f2;\n    color: #06c68f;\n    & svg path {\n      fill: #06c68f;\n    }\n  }\n"])));
var StyledExpansionPanelSummary = styledComponents_esm.dt.div(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  transition: color 0.3s ease;\n  border-radius: 4px;\n  color: black;\n  padding: 10px 14px;\n\n  &:hover {\n    background-color: #eaf5f2;\n  }\n"], ["\n  width: 100%;\n  transition: color 0.3s ease;\n  border-radius: 4px;\n  color: black;\n  padding: 10px 14px;\n\n  &:hover {\n    background-color: #eaf5f2;\n  }\n"])));
var StyledTypography = styledComponents_esm.dt.div(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  max-height: 40px;\n  width: 100%;\n  gap: 14px;\n  font-size: 16px;\n  font-family: 'Open Sans';\n  font-weight: 500;\n"], ["\n  display: flex;\n  max-height: 40px;\n  width: 100%;\n  gap: 14px;\n  font-size: 16px;\n  font-family: 'Open Sans';\n  font-weight: 500;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

exports.Container = Container;
exports.ExpansionMenuItem = ExpansionMenuItem;
exports.ExpansionMenuItemList = ExpansionMenuItemList;
exports.StyledExpansionPanel = StyledExpansionPanel;
exports.StyledExpansionPanelSummary = StyledExpansionPanelSummary;
exports.StyledTypography = StyledTypography;
//# sourceMappingURL=styled-components.cjs.js.map
