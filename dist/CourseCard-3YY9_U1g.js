import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { _ as __makeTemplateObject } from './tslib.es6-C0iDBclc.js';
import { d as dt } from './styled-components.esm-C7W1nk2-.js';
import { T as Typography } from './Typography-C3W5g6UW.js';
import { useRef, useState, useEffect } from 'react';
import { T as Tooltip } from './Tooltip-DizAB59I.js';
import { E as Edit } from './Edit-BMFpOjke.js';
import { P as PlayButton, U as Unlock } from './Unlock-Dxl4XY_H.js';
import { G as GridActionMenu } from './GridActionMenu-wJ8uxyvf.js';
import { u as useTranslation } from './useTranslation-DV-2mcCf.js';
import { C as Checkbox } from './Checkbox-D9OUSkEa.js';
import { I as IconButton } from './IconButton-xOBhMhWj.js';
import { c as createSvgIcon } from './createSvgIcon-B2XKCqAw.js';

var GroupOutlined = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35"
}), 'GroupOutlined');

var GroupsOutlined = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74M8.07 16c.09-.23.13-.39.91-.69.97-.38 1.99-.56 3.02-.56s2.05.18 3.02.56c.77.3.81.46.91.69zM12 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), 'GroupsOutlined');

var RecordVoiceOverOutlined = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14"
}), 'RecordVoiceOverOutlined');

// CourseLayout
dt.span(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var GridItemContentHeader = dt.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var GridItemTitle = dt.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 500;\n\n  transition: color 0.3s ease;\n"], ["\n  font-size: 18px;\n  font-weight: 500;\n\n  transition: color 0.3s ease;\n"])));
dt.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #ea382a;\n"], ["\n  color: #ea382a;\n"])));
dt(Typography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: #7a7a7a;\n  opacity: 0.7;\n"], ["\n  color: #7a7a7a;\n  opacity: 0.7;\n"])));
dt.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])), function (_a) {
  var hoverBackground = _a.hoverBackground;
  return hoverBackground || 'rgba(0, 0, 0, 0.1)';
}, function (_a) {
  var $hoverColor = _a.$hoverColor;
  return $hoverColor && "svg path {\n          fill: ".concat($hoverColor, ";\n           }");
});
dt.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 25px;\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 20px;\n  .wrapper {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 25px;\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 20px;\n  .wrapper {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"])));
dt.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-top: 30px;\n\n  ", "\n"], ["\n  margin-top: 30px;\n\n  ", "\n"])), function (_a) {
  var $isGrid = _a.$isGrid;
  return !$isGrid ? "\n      .card {\n          grid-template-columns:none\n      }\n    " : "\n      .card {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n\n\n        @media (max-width: 1450px) {\n          grid-template-columns: repeat(3, 1fr);\n        }\n      }\n    ";
});
var CardActionBar = dt.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n  box-sizing: border-box;\n  padding: 6px;\n  ", "\n  .action_block {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n  }\n"], ["\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n  box-sizing: border-box;\n  padding: 6px;\n  ", "\n  .action_block {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n  }\n"])), function (_a) {
  var $switched = _a.$switched;
  return $switched ? "\n    top: 0px;\n    left: 0px;\n    grid-template-columns: 1fr 35px;\n  " : "\n    bottom: 0px;\n    right: 0px;\n    justify-content: end;\n    grid-template-columns: 35px 35px;\n  ";
});
var StylesCardWrapper = dt.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: ", ";\n  height: 100%;\n  border-radius: 12px !important;\n  &:hover {\n    .action_block {\n      background: rgba(255, 255, 255, 0.59) !important;\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: ", ";\n  height: 100%;\n  border-radius: 12px !important;\n  &:hover {\n    .action_block {\n      background: rgba(255, 255, 255, 0.59) !important;\n    }\n  }\n"])), function (_a) {
  var $canOpen = _a.$canOpen;
  return $canOpen ? 'pointer' : 'default';
});
var StyledChecked = dt.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  background-color: rgb(0 0 0 / 23%);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  background-color: rgb(0 0 0 / 23%);\n"])));
dt.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  .icon_button {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  .icon_button {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])));
var CourseStatusContainer = dt.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  color: #fff;\n  height: 32px;\n  padding: 4px 12px;\n  text-transform: capitalize;\n  border-radius: 4px;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  color: #fff;\n  height: 32px;\n  padding: 4px 12px;\n  text-transform: capitalize;\n  border-radius: 4px;\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), function (_a) {
  var $status = _a.$status;
  return !$status ? '#EA382A' : '#00905E';
});
dt.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  div {\n    font-size: 13px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  div {\n    font-size: 13px;\n  }\n"])));
var TooltipContent = dt.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > :first-child {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  div {\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    & > .tooltip-text {\n      font-size: 12px;\n      margin-top: 5px;\n      text-align: center;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > :first-child {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  div {\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    & > .tooltip-text {\n      font-size: 12px;\n      margin-top: 5px;\n      text-align: center;\n    }\n  }\n"])));
var StyledCardBottomContainer = dt.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  flex-direction: column !important;\n  align-self: flex-end;\n  gap: 10px;\n  padding-bottom: 10px;\n"], ["\n  display: flex;\n  width: 100%;\n  flex-direction: column !important;\n  align-self: flex-end;\n  gap: 10px;\n  padding-bottom: 10px;\n"])));
var StyledActionsContainer = dt.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row !important;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: row !important;\n  width: 100%;\n"])));
var StyledActionItem = dt.span(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 14px;\n  cursor: ", ";\n  color: ", ";\n  font-size: 14px;\n  padding-bottom: 10px;\n  width: 100%;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 4px;\n  svg path {\n    fill: ", ";\n    width: 16px;\n    height: 16px;\n  }\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n  &:hover {\n    color: ", ";\n    svg path {\n      fill: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  height: 14px;\n  cursor: ", ";\n  color: ", ";\n  font-size: 14px;\n  padding-bottom: 10px;\n  width: 100%;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 4px;\n  svg path {\n    fill: ", ";\n    width: 16px;\n    height: 16px;\n  }\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n  &:hover {\n    color: ", ";\n    svg path {\n      fill: ", ";\n    }\n  }\n"])), function (_a) {
  var disabled = _a.disabled;
  return disabled ? 'default' : 'pointer';
}, function (_a) {
  var disabled = _a.disabled;
  return disabled ? '#ccc' : '#68707a';
}, function (_a) {
  var disabled = _a.disabled;
  return disabled ? '#ccc' : '#68707a';
}, function (_a) {
  var disabled = _a.disabled,
    _b = _a.color,
    color = _b === void 0 ? '#68707a' : _b;
  return disabled ? '#ccc' : color;
}, function (_a) {
  var disabled = _a.disabled,
    _b = _a.color,
    color = _b === void 0 ? '#68707a' : _b;
  return disabled ? '#ccc' : color;
});
dt.span(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  color: #20a8c6;\n  font-size: 14px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  background-color: #edf8fa;\n"], ["\n  color: #20a8c6;\n  font-size: 14px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  background-color: #edf8fa;\n"])));
var ItemBlock = dt.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  text-transform: capitalize;\n"], ["\n  text-transform: capitalize;\n"])));
var StyledItemWrapper = dt.div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 4px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 4px;\n"
// gridConfig
])));
// gridConfig
var StyledCourseCardContent = dt.span(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  color: #20a8c6;\n  font-size: 14px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  background-color: #edf8fa;\n"], ["\n  color: #20a8c6;\n  font-size: 14px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  background-color: #edf8fa;\n"])));
var GridItemLessons = dt.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  margin-top: 10px;\n  display: flex;\n  gap: 10px;\n  align-items: flex-end;\n  flex-direction: row !important;\n  padding-left: 16px;\n\n  // when card is checked\n  span {\n    background: ", ";\n    color: ", ";\n  }\n  > div {\n    font-size: 12px;\n    position: relative;\n    padding-left: 12px;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 5px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.2);\n    }\n\n    :not(:last-child) {\n      margin-right: 10px;\n    }\n  }\n"], ["\n  margin-top: 10px;\n  display: flex;\n  gap: 10px;\n  align-items: flex-end;\n  flex-direction: row !important;\n  padding-left: 16px;\n\n  // when card is checked\n  span {\n    background: ", ";\n    color: ", ";\n  }\n  > div {\n    font-size: 12px;\n    position: relative;\n    padding-left: 12px;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 5px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.2);\n    }\n\n    :not(:last-child) {\n      margin-right: 10px;\n    }\n  }\n"])), function (props) {
  return props.checked ? 'none' : '#edf8fa';
}, function (props) {
  return props.checked ? '#333333' : '#20a8c6';
});
var StyledToolTipContainer = dt.div(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
dt.div(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px 10px;\n  transition: 0.3s ease;\n  border-radius: 5px;\n  opacity: ", ";\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n  svg {\n    font-size: 1rem;\n    margin-right: 6px;\n    width: 20px;\n    height: 20px;\n  }\n  svg path {\n    width: 20px;\n    height: 20px;\n    fill: #717882;\n  }\n  /* .MuiTypography-body1 {\n    font-size: 0.875rem;\n  } */\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px 10px;\n  transition: 0.3s ease;\n  border-radius: 5px;\n  opacity: ", ";\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n  svg {\n    font-size: 1rem;\n    margin-right: 6px;\n    width: 20px;\n    height: 20px;\n  }\n  svg path {\n    width: 20px;\n    height: 20px;\n    fill: #717882;\n  }\n  /* .MuiTypography-body1 {\n    font-size: 0.875rem;\n  } */\n"])), function (_a) {
  var disabled = _a.disabled;
  return disabled ? '0.5' : '1';
});
dt.div(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding: 0 20px 0 0;\n  text-transform: capitalize;\n"], ["\n  box-sizing: border-box;\n  padding: 0 20px 0 0;\n  text-transform: capitalize;\n"])));
var GridItemContent = dt.section(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  position: relative;\n  z-index: 100;\n  font-size: 16px;\n  color: #333;\n  padding: 16px;\n"], ["\n  position: relative;\n  z-index: 100;\n  font-size: 16px;\n  color: #333;\n  padding: 16px;\n"])));
var GridItemWrapper = dt.div(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"])));
dt.div(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  width: 100%;\n  height: fit-content;\n  flex-shrink: 0;\n  border-radius: 4px;\n  background: #fff;\n  margin-top: 20px;\n  padding: 16px;\n\n  th:last-child {\n    width: 10px;\n  }\n"], ["\n  width: 100%;\n  height: fit-content;\n  flex-shrink: 0;\n  border-radius: 4px;\n  background: #fff;\n  margin-top: 20px;\n  padding: 16px;\n\n  th:last-child {\n    width: 10px;\n  }\n"])));
dt.div(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  justify-content: flex-end;\n  display: flex;\n  margin-right: 40px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n  margin-top: 20px;\n"], ["\n  justify-content: flex-end;\n  display: flex;\n  margin-right: 40px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n  margin-top: 20px;\n"])));
var GridItemImage = dt.figure(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    vertical-align: middle;\n    transition: transform 0.3s ease;\n  }\n"], ["\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    vertical-align: middle;\n    transition: transform 0.3s ease;\n  }\n"])));
var GridItem = dt.div(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n\n  &:hover {\n    img {\n      transform: scale(1.2);\n    }\n\n    h3 {\n      color: #06c68f;\n    }\n  }\n\n  ", "\n"], ["\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n\n  &:hover {\n    img {\n      transform: scale(1.2);\n    }\n\n    h3 {\n      color: #06c68f;\n    }\n  }\n\n  ", "\n"])), function (_a) {
  var $isFromUser = _a.$isFromUser;
  return $isFromUser && "\n  figure {\n    position: relative;\n    &:after {\n      content: 'View Analytics';\n      position: absolute;\n      top: 0;\n      opacity: 0;\n      color: #06c68f;\n      left: 0;\n      font-size: 24px;\n      font-weight: 700;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(255, 255, 255, 0.9);\n      width: 100%;\n      height: 100%;\n      transition: opacity 0.3s ease;\n      z-index: 10;\n    }\n  }\n\n  &:hover {\n    figure {\n      &:after {\n        opacity: 1;\n      }\n    }\n  }\n  " || '';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32;

var TooltipHeight = function TooltipHeight(_a) {
  var text = _a.text,
    lines = _a.lines;
  var textElementRef = useRef(null);
  var _b = useState(false),
    isOverflowing = _b[0],
    setIsOverflowing = _b[1];
  useEffect(function () {
    var isOverflow = textElementRef.current ? textElementRef.current.scrollHeight > textElementRef.current.clientHeight : false;
    setIsOverflowing(isOverflow);
  }, [text]);
  return isOverflowing ? jsxRuntimeExports.jsx(Tooltip, {
    title: text,
    children: jsxRuntimeExports.jsx("div", {
      ref: textElementRef,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical"
      },
      children: text
    })
  }) : jsxRuntimeExports.jsx("div", {
    ref: textElementRef,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical"
    },
    children: text
  });
};

var CourseCard = function CourseCard(_a) {
  var _b, _c, _d;
  var item = _a.item,
    $canOpen = _a.$canOpen,
    fromCertificateBuilder = _a.fromCertificateBuilder,
    fromWizard = _a.fromWizard,
    actions = _a.actions,
    groupId = _a.groupId,
    user = _a.user,
    getCourseLevel = _a.getCourseLevel,
    formatDuration = _a.formatDuration,
    actionHandler = _a.actionHandler,
    selectedItem = _a.selectedItem,
    courseoriginalid = _a.courseoriginalid,
    navigate = _a.navigate,
    RedirectToCourse = _a.RedirectToCourse,
    selectItem = _a.selectItem,
    getCourseState = _a.getCourseState,
    gridStyle = _a.gridStyle,
    companyMode = _a.companyMode,
    activeTab = _a.activeTab,
    withTooltips = _a.withTooltips,
    state = _a.state;
  var t = useTranslation().t;
  return jsxRuntimeExports.jsxs(StylesCardWrapper, {
    className: 'wrapper course-card',
    "$canOpen": $canOpen,
    onClick: function onClick() {
      if ($canOpen) {
        if (fromCertificateBuilder) {
          navigate("/certificate-builder/".concat(courseoriginalid));
        } else {
          RedirectToCourse(item);
        }
      }
    },
    children: [fromWizard && selectedItem && selectedItem.includes(item.id) && jsxRuntimeExports.jsx(StyledChecked, {}), jsxRuntimeExports.jsx(CardActionBar, {
      "$switched": !!(gridStyle === 'card'),
      children: jsxRuntimeExports.jsxs("div", {
        style: {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        children: [jsxRuntimeExports.jsxs("div", {
          style: {
            zIndex: 3,
            alignItems: fromWizard ? 'center' : '',
            transform: fromWizard ? 'none' : 'scale(1)',
            display: fromCertificateBuilder ? 'none' : fromWizard ? 'flex' : 'block'
          },
          children: [fromWizard && jsxRuntimeExports.jsx(Checkbox, {
            onChange: function onChange() {
              return selectItem && selectItem(item.id);
            },
            checked: selectedItem && selectedItem.includes(item.id)
          }), jsxRuntimeExports.jsx(CourseStatusContainer, {
            "$status": item.state === 'published',
            children: item.finished === 3 ? getCourseState(item.state || '') : t('courses_layout.draft')
          })]
        }), actions && actions.length > 0 && jsxRuntimeExports.jsx("div", {
          className: 'action_block',
          children: jsxRuntimeExports.jsx(GridActionMenu, {
            actionConfig: actions,
            row: item
          })
        })]
      })
    }), jsxRuntimeExports.jsxs(GridItem, {
      "$isFromUser": Boolean(groupId || user),
      children: [jsxRuntimeExports.jsx(GridItemImage, {
        children: jsxRuntimeExports.jsx("img", {
          src: item.avatar && item.avatar.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHw6OeiQMdYX_iXu8otmzMnlbD07xEWr87EMnJ5r4X9vYC-kNr&usqp=CAU'
        })
      }), jsxRuntimeExports.jsxs(GridItemContent, {
        children: [jsxRuntimeExports.jsxs(GridItemWrapper, {
          style: {
            justifyContent: 'space-between'
          },
          children: [jsxRuntimeExports.jsx(ItemBlock, {
            children: item.level && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [t('course_details.level'), ": ", getCourseLevel(item.level)]
            })
          }), jsxRuntimeExports.jsxs(ItemBlock, {
            style: {
              color: 'green'
            },
            children: [item.currency, item.price ? item.price.includes('.') ? item.price : "".concat(item.price, ".00") : t('courses_layout.free')]
          })]
        }), jsxRuntimeExports.jsx(GridItemContentHeader, {
          children: jsxRuntimeExports.jsx(GridItemTitle, {
            style: {
              marginTop: '8px'
            },
            children: jsxRuntimeExports.jsx(TooltipHeight, {
              text: item.name,
              lines: 3
            })
          })
        }), jsxRuntimeExports.jsx(StyledItemWrapper, {})]
      })]
    }), jsxRuntimeExports.jsx(StyledCardBottomContainer, {
      style: {
        textTransform: 'capitalize'
      },
      children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsxs(GridItemLessons, {
          checked: fromWizard && selectedItem && selectedItem.includes(item.id) ? true : false,
          children: [jsxRuntimeExports.jsxs(StyledCourseCardContent, {
            children: [item.numberOfModules, " ", t('general.modules')]
          }), jsxRuntimeExports.jsxs(StyledCourseCardContent, {
            children: [item.numberOfLessons, " ", t('general.lessons')]
          }), jsxRuntimeExports.jsx(StyledCourseCardContent, {
            children: formatDuration(item.duration || 0)
          })]
        }), actionHandler && !item.isBought && jsxRuntimeExports.jsxs(StyledActionsContainer, {
          children: [jsxRuntimeExports.jsxs(StyledActionItem, {
            color: '#20a8c6',
            onClick: function onClick(e) {
              if (typeof actionHandler === 'function') {
                actionHandler('editCourse', item);
              }
              e.stopPropagation();
            },
            style: {
              borderRight: '1px solid #D6DAE0'
            },
            children: [jsxRuntimeExports.jsx(Edit, {}), " ", t('actions.edit')]
          }), jsxRuntimeExports.jsxs(StyledActionItem, {
            color: '#d0524b',
            disabled: !item.video,
            onClick: function onClick(e) {
              if (item.video && typeof actionHandler === 'function') {
                actionHandler('playIntro', item);
                e.stopPropagation();
              }
              e.stopPropagation();
            },
            children: [jsxRuntimeExports.jsx(PlayButton, {}), " ", t('actions.play_intro')]
          }), companyMode && activeTab != 0 && jsxRuntimeExports.jsxs(StyledActionItem, {
            disabled: ((_b = state.userPermission) === null || _b === void 0 ? void 0 : _b.publishCourse) === false,
            color: item.state === 'published' ? ' #EA382A' : '#00905E',
            style: {
              borderLeft: '1px solid #D6DAE0'
            },
            onClick: function onClick(e) {
              if (actionHandler) {
                actionHandler('publishedUnPublished', item.id, item.state === 'unpublished' ? 'published' : 'unpublished');
              }
              e.stopPropagation();
            },
            children: [jsxRuntimeExports.jsx(Unlock, {}), item.state === 'published' ? t('actions.unpublish') : t('actions.publish')]
          })]
        })]
      })
    }), withTooltips && jsxRuntimeExports.jsxs(StyledToolTipContainer, {
      children: [jsxRuntimeExports.jsx("hr", {
        style: {
          opacity: '.1',
          margin: 0
        }
      }), jsxRuntimeExports.jsxs(GridItemWrapper, {
        style: {
          justifyContent: 'space-around',
          flexDirection: 'row'
        },
        children: [jsxRuntimeExports.jsx(Tooltip, {
          arrow: true,
          title: jsxRuntimeExports.jsxs(TooltipContent, {
            children: [jsxRuntimeExports.jsx("span", {
              children: ((_c = item.coaches) === null || _c === void 0 ? void 0 : _c.length) && t('general.coaches') || t('general.no_coaches')
            }), jsxRuntimeExports.jsx("div", {
              children: item.coaches && item.coaches.map(function (i, index) {
                return "".concat(i.firstName, " ").concat(i.lastName, " ").concat(index !== 0 && "," || '', " ");
              }) || 0
            })]
          }),
          children: jsxRuntimeExports.jsx(IconButton, {
            style: {
              padding: '9px'
            },
            children: jsxRuntimeExports.jsx(RecordVoiceOverOutlined, {
              fontSize: 'small'
            })
          })
        }), jsxRuntimeExports.jsx(Tooltip, {
          arrow: true,
          title: jsxRuntimeExports.jsxs(TooltipContent, {
            children: [jsxRuntimeExports.jsxs("span", {
              children: [((_d = item.groups) === null || _d === void 0 ? void 0 : _d.length) || 0, " ", t('general.groups')]
            }), jsxRuntimeExports.jsxs("div", {
              children: [item.groups && item.groups.map(function (group, index) {
                var _a, _b;
                return "\n                        ".concat(group.name, "\n                    ").concat(index === ((_b = (_a = item.groups) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? '' : ',', "\n                      ");
              }), $canOpen && item.originalId && jsxRuntimeExports.jsx("span", {
                className: 'tooltip-text',
                children: t('general.purchased_course_groups_tooltip')
              })]
            })]
          }),
          children: jsxRuntimeExports.jsx(IconButton, {
            style: {
              padding: '9px'
            },
            children: jsxRuntimeExports.jsx(GroupsOutlined, {
              fontSize: 'small'
            })
          })
        }), jsxRuntimeExports.jsx(Tooltip, {
          arrow: true,
          title: jsxRuntimeExports.jsx(TooltipContent, {
            children: jsxRuntimeExports.jsxs("div", {
              children: [jsxRuntimeExports.jsxs("span", {
                children: [item.numberOfStudents || 0, " ", t('general.students')]
              }), $canOpen && item.originalId && jsxRuntimeExports.jsx("span", {
                className: 'tooltip-text',
                children: t('general.purchased_course_students_tooltip')
              })]
            })
          }),
          children: jsxRuntimeExports.jsx(IconButton, {
            style: {
              padding: '9px'
            },
            children: jsxRuntimeExports.jsx(GroupOutlined, {
              fontSize: 'small'
            })
          })
        })]
      })]
    })]
  }, item.id);
};

export { CourseCard as C };
//# sourceMappingURL=CourseCard-3YY9_U1g.js.map
