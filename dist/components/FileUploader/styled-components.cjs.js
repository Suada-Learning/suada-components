'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
require('../../Middleware-BpA40f7i.js');
require('react');

var FileUploaderContainer = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  height: 100%;\n  transition: border 0.2s ease;\n\n  .image_wrapper {\n    position: relative;\n    padding-top: 10px;\n    width: 100px;\n    height: 100px;\n    border-radius: 4px;\n    svg {\n      position: absolute;\n      right: -11px;\n      top: 0px;\n    }\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .video_wrapper {\n    padding: 5px 10px;\n    background: #eee;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    svg {\n      color: red;\n    }\n  }\n\n  .file_wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    svg {\n      font-size: 20px;\n      color: red;\n      margin-left: 10px;\n    }\n  }\n\n  label {\n    cursor: pointer;\n    display: flex;\n    .MuiSvgIcon-fontSizeLarge {\n      font-size: 5.1875rem;\n    }\n\n    svg {\n      transform: scale(0.8);\n      transition: transform 0.2s ease;\n    }\n  }\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n  }\n\n  &.full {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    header {\n      margin-right: 15px;\n    }\n\n    label {\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n    }\n\n    label svg {\n      transform: scale(1);\n    }\n  }\n\n  &.uploaded {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n\n    header {\n      color: rgba(0, 0, 0, 0.74);\n    }\n\n    label svg {\n      transform: scale(1);\n    }\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  height: 100%;\n  transition: border 0.2s ease;\n\n  .image_wrapper {\n    position: relative;\n    padding-top: 10px;\n    width: 100px;\n    height: 100px;\n    border-radius: 4px;\n    svg {\n      position: absolute;\n      right: -11px;\n      top: 0px;\n    }\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .video_wrapper {\n    padding: 5px 10px;\n    background: #eee;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    svg {\n      color: red;\n    }\n  }\n\n  .file_wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    svg {\n      font-size: 20px;\n      color: red;\n      margin-left: 10px;\n    }\n  }\n\n  label {\n    cursor: pointer;\n    display: flex;\n    .MuiSvgIcon-fontSizeLarge {\n      font-size: 5.1875rem;\n    }\n\n    svg {\n      transform: scale(0.8);\n      transition: transform 0.2s ease;\n    }\n  }\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n  }\n\n  &.full {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    header {\n      margin-right: 15px;\n    }\n\n    label {\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n    }\n\n    label svg {\n      transform: scale(1);\n    }\n  }\n\n  &.uploaded {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n\n    header {\n      color: rgba(0, 0, 0, 0.74);\n    }\n\n    label svg {\n      transform: scale(1);\n    }\n  }\n"])));
var MediaUploading = styledComponents_esm.dt.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #fff;\n  border-radius: 4px;\n"], ["\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #fff;\n  border-radius: 4px;\n"])));
var MediaUploadingWrapper = styledComponents_esm.dt.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 30px;\n  > div {\n    width: 100%;\n    text-align: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 30px;\n  > div {\n    width: 100%;\n    text-align: center;\n  }\n"])));
var LoadingText = styledComponents_esm.dt.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  margin-bottom: 15px;\n"], ["\n  margin-bottom: 15px;\n"])));
var FileUploaderHeader = styledComponents_esm.dt.header(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  color: rgba(0, 0, 0, 0.54);\n  transition: color 0.2 ease;\n  svg {\n    fill: #3f51b5;\n  }\n"], ["\n  color: rgba(0, 0, 0, 0.54);\n  transition: color 0.2 ease;\n  svg {\n    fill: #3f51b5;\n  }\n"])));
var FileUploaderContent = styledComponents_esm.dt.div(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject([""], [""])));
var Content = styledComponents_esm.dt.div(templateObject_7 || (templateObject_7 = tslib_es6.__makeTemplateObject(["\n  background: #fff;\n  position: relative;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n"], ["\n  background: #fff;\n  position: relative;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n"
// Uploader
])));
// Uploader
var Container = styledComponents_esm.dt.div(templateObject_8 || (templateObject_8 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"], ["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"])));
var ErrorText = styledComponents_esm.dt.div(templateObject_9 || (templateObject_9 = tslib_es6.__makeTemplateObject(["\n  font-size: 12px;\n  color: #d32f2f;\n  margin-left: 5px;\n  margin-top: -15px;\n"], ["\n  font-size: 12px;\n  color: #d32f2f;\n  margin-left: 5px;\n  margin-top: -15px;\n"])));
var FlexContainer = styledComponents_esm.dt.div(templateObject_10 || (templateObject_10 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n"])));
var ItemContainer = styledComponents_esm.dt.div(templateObject_11 || (templateObject_11 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  position: relative;\n"], ["\n  width: ", ";\n  position: relative;\n"])), function (_a) {
  var width = _a.width;
  return width || '100%';
});
var InputContainer = styledComponents_esm.dt.div(templateObject_12 || (templateObject_12 = tslib_es6.__makeTemplateObject(["\n  width: 390px;\n"], ["\n  width: 390px;\n"])));
var CancelButton = styledComponents_esm.dt.div(templateObject_13 || (templateObject_13 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  right: ", ";\n  top: ", ";\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: ", ";\n  top: ", ";\n  cursor: pointer;\n"])), function (_a) {
  var right = _a.right;
  return right || '-13px';
}, function (_a) {
  var top = _a.top;
  return top || '5px';
});
var InputFileContainer = styledComponents_esm.dt.div(templateObject_14 || (templateObject_14 = tslib_es6.__makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  /* input {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n  }\n\n  &label {\n    width: 85%;\n    height: 100%;\n    cursor: pointer;\n  } */\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  /* input {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n  }\n\n  &label {\n    width: 85%;\n    height: 100%;\n    cursor: pointer;\n  } */\n"])));
var UploadInput = styledComponents_esm.dt.input(templateObject_15 || (templateObject_15 = tslib_es6.__makeTemplateObject(["\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  width: 0;\n  top: 0;\n  overflow: hidden;\n"], ["\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  width: 0;\n  top: 0;\n  overflow: hidden;\n"])));
var Label = styledComponents_esm.dt.div(templateObject_16 || (templateObject_16 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  left: 0px;\n  top: -15px;\n  background: #fff;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n"], ["\n  position: absolute;\n  left: 0px;\n  top: -15px;\n  background: #fff;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n"])));
var ImagePlaceholder = styledComponents_esm.dt.div(templateObject_17 || (templateObject_17 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n\n  img {\n    position: relative;\n    border: 1px solid #08c694;\n    width: 100%;\n    height: ", "px;\n    object-fit: cover;\n    top: 2px;\n  }\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n\n  img {\n    position: relative;\n    border: 1px solid #08c694;\n    width: 100%;\n    height: ", "px;\n    object-fit: cover;\n    top: 2px;\n  }\n"])), function (_a) {
  var height = _a.height;
  return height || 60;
});
var InputLabel = styledComponents_esm.dt.label(templateObject_18 || (templateObject_18 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  padding: 5px 5px;\n  max-width: 150px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #08c694;\n  color: #08c694;\n  font-size: 19px;\n  font-weight: 400;\n  border-radius: 4px;\n  width: 130px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  padding: 5px 5px;\n  max-width: 150px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #08c694;\n  color: #08c694;\n  font-size: 19px;\n  font-weight: 400;\n  border-radius: 4px;\n  width: 130px;\n"
// UploaderButton
])));
// UploaderButton
var ButtonInputLabel = styledComponents_esm.dt.label(templateObject_19 || (templateObject_19 = tslib_es6.__makeTemplateObject(["\n  cursor: pointer;\n  color: #fff;\n  background: #06c68f;\n  font-size: 11px;\n  padding: 4px 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n"], ["\n  cursor: pointer;\n  color: #fff;\n  background: #06c68f;\n  font-size: 11px;\n  padding: 4px 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n"])));
var FileUploadButton = styledComponents_esm.dt.div(templateObject_20 || (templateObject_20 = tslib_es6.__makeTemplateObject(["\n  input {\n    opacity: 0;\n    width: 1px;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n  }\n"], ["\n  input {\n    opacity: 0;\n    width: 1px;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n  }\n"])));
var VideoPlaceholder = styledComponents_esm.dt.div(templateObject_21 || (templateObject_21 = tslib_es6.__makeTemplateObject(["\n  margin-left: auto;\n  margin-top: 3px;\n  width: 60px;\n  cursor: pointer;\n"], ["\n  margin-left: auto;\n  margin-top: 3px;\n  width: 60px;\n  cursor: pointer;\n"])));
var DefaultPlaceholder = styledComponents_esm.dt.div(templateObject_22 || (templateObject_22 = tslib_es6.__makeTemplateObject(["\n  margin-left: 23px;\n  margin-top: 3px;\n  cursor: pointer;\n"], ["\n  margin-left: 23px;\n  margin-top: 3px;\n  cursor: pointer;\n"])));
var LoadingProgressContainer = styledComponents_esm.dt.div(templateObject_23 || (templateObject_23 = tslib_es6.__makeTemplateObject(["\n  margin-left: 19px;\n  margin-top: 2px;\n"], ["\n  margin-left: 19px;\n  margin-top: 2px;\n"])));
var CircularProgressStyles = {
  width: '32px',
  height: '32px'
};
var Title = styledComponents_esm.dt.h2(templateObject_24 || (templateObject_24 = tslib_es6.__makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 550;\n  margin-bottom: 5px;\n\n  ", "\n"], ["\n  font-size: 16px;\n  font-weight: 550;\n  margin-bottom: 5px;\n\n  ", "\n"])), function (_a) {
  var $required = _a.$required;
  return $required ? "\n    &::after {\n      content: '*';\n      color: red;\n      margin-left: 3px;\n    }\n  " : '';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24;

exports.ButtonInputLabel = ButtonInputLabel;
exports.CancelButton = CancelButton;
exports.CircularProgressStyles = CircularProgressStyles;
exports.Container = Container;
exports.Content = Content;
exports.DefaultPlaceholder = DefaultPlaceholder;
exports.ErrorText = ErrorText;
exports.FileUploadButton = FileUploadButton;
exports.FileUploaderContainer = FileUploaderContainer;
exports.FileUploaderContent = FileUploaderContent;
exports.FileUploaderHeader = FileUploaderHeader;
exports.FlexContainer = FlexContainer;
exports.ImagePlaceholder = ImagePlaceholder;
exports.InputContainer = InputContainer;
exports.InputFileContainer = InputFileContainer;
exports.InputLabel = InputLabel;
exports.ItemContainer = ItemContainer;
exports.Label = Label;
exports.LoadingProgressContainer = LoadingProgressContainer;
exports.LoadingText = LoadingText;
exports.MediaUploading = MediaUploading;
exports.MediaUploadingWrapper = MediaUploadingWrapper;
exports.Title = Title;
exports.UploadInput = UploadInput;
exports.VideoPlaceholder = VideoPlaceholder;
//# sourceMappingURL=styled-components.cjs.js.map
