'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');
var tslib_es6 = require('./tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('./styled-components.esm-DB2-eBHV.js');
var MoreVertRoundedIcon = require('./MoreVertRoundedIcon-BwfshVdx.js');
var Popover = require('./Popover-CmQOsdY5.js');

var Container = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject([""], [""])));
var ActionsContent = styledComponents_esm.dt.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  padding: 5px;\n"], ["\n  padding: 5px;\n"])));
var StyledIconButton = styledComponents_esm.dt.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"])));
styledComponents_esm.dt.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])), function (_a) {
  var hoverBackground = _a.hoverBackground;
  return hoverBackground || "rgba(0, 0, 0, 0.1)";
}, function (_a) {
  var $hoverColor = _a.$hoverColor;
  return $hoverColor && "svg path {\n          fill: ".concat($hoverColor, ";\n           }");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var GridActionMenu = function GridActionMenu(props) {
  var _a, _b, _c;
  var _d = React.useState(null),
    anchorEl = _d[0],
    setAnchorEl = _d[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  return jsxRuntime.jsxRuntimeExports.jsx("div", {
    children: props.actionConfig && props.actionConfig.length > 0 && jsxRuntime.jsxRuntimeExports.jsxs(Container, {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [jsxRuntime.jsxRuntimeExports.jsx("div", {
        onClick: handleClick,
        children: (_a = props.button) !== null && _a !== void 0 ? _a : jsxRuntime.jsxRuntimeExports.jsx(StyledIconButton, {
          className: 'more',
          children: (_b = props.icon) !== null && _b !== void 0 ? _b : jsxRuntime.jsxRuntimeExports.jsx(MoreVertRoundedIcon.MoreVertRoundedIcon, {})
        })
      }), jsxRuntime.jsxRuntimeExports.jsx(Popover.Popover, {
        open: Boolean(anchorEl),
        anchorEl: anchorEl,
        onClose: function onClose() {
          setAnchorEl(null);
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        children: jsxRuntime.jsxRuntimeExports.jsx(ActionsContent, {
          children: (_c = props === null || props === void 0 ? void 0 : props.actionConfig) === null || _c === void 0 ? void 0 : _c.map(function (i, index) {
            return jsxRuntime.jsxRuntimeExports.jsx("div", {
              onClick: function onClick() {
                return setAnchorEl(null);
              },
              children: i.render(props.row)
            }, index);
          })
        })
      })]
    })
  });
};

exports.GridActionMenu = GridActionMenu;
//# sourceMappingURL=GridActionMenu-xF9aW0zZ.js.map
