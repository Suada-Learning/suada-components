import { __makeTemplateObject } from '../../node_modules/tslib/tslib.es6.js';
import dt from '../../node_modules/styled-components/dist/styled-components.esm.js';
import styled from '../../node_modules/@mui/material/styles/styled.js';
import Typography from '../../node_modules/@mui/material/Typography/Typography.js';

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
    color = _b === undefined ? '#68707a' : _b;
  return disabled ? '#ccc' : color;
}, function (_a) {
  var disabled = _a.disabled,
    _b = _a.color,
    color = _b === undefined ? '#68707a' : _b;
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
styled('div')(function (_a) {
  var _b;
  var theme = _a.theme;
  return _b = {}, _b["& .CourseLayout-paper"] = {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }, _b;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32;

export { CardActionBar, CourseStatusContainer, GridItem, GridItemContent, GridItemContentHeader, GridItemImage, GridItemLessons, GridItemTitle, GridItemWrapper, ItemBlock, StyledActionItem, StyledActionsContainer, StyledCardBottomContainer, StyledChecked, StyledCourseCardContent, StyledItemWrapper, StyledToolTipContainer, StylesCardWrapper, TooltipContent };
//# sourceMappingURL=CourseCard.styles.js.map
