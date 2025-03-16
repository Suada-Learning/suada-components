import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { useState } from 'react';
import { _ as __makeTemplateObject } from './tslib.es6-C0iDBclc.js';
import { d as dt } from './styled-components.esm-C7W1nk2-.js';
import { M as MoreVertRoundedIcon } from './MoreVertRoundedIcon-BJceXhd-.js';
import { P as Popover } from './Popover-CTSbkR5T.js';

var Container = dt.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ActionsContent = dt.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 5px;\n"], ["\n  padding: 5px;\n"])));
var StyledIconButton = dt.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: transparent !important;\n  }\n"])));
dt.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  transition: 0.3s ease;\n  gap: 6px;\n  border-radius: 5px;\n  &:hover {\n    /* background: ", "; */\n    ", "\n  }\n  svg {\n    font-size: 1rem;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])), function (_a) {
  var hoverBackground = _a.hoverBackground;
  return hoverBackground || "rgba(0, 0, 0, 0.1)";
}, function (_a) {
  var $hoverColor = _a.$hoverColor;
  return $hoverColor && "svg path {\n          fill: ".concat($hoverColor, ";\n           }");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var GridActionMenu = function GridActionMenu(props) {
  var _a, _b, _c;
  var _d = useState(null),
    anchorEl = _d[0],
    setAnchorEl = _d[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  return jsxRuntimeExports.jsx("div", {
    children: props.actionConfig && props.actionConfig.length > 0 && jsxRuntimeExports.jsxs(Container, {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [jsxRuntimeExports.jsx("div", {
        onClick: handleClick,
        children: (_a = props.button) !== null && _a !== void 0 ? _a : jsxRuntimeExports.jsx(StyledIconButton, {
          className: 'more',
          children: (_b = props.icon) !== null && _b !== void 0 ? _b : jsxRuntimeExports.jsx(MoreVertRoundedIcon, {})
        })
      }), jsxRuntimeExports.jsx(Popover, {
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
        children: jsxRuntimeExports.jsx(ActionsContent, {
          children: (_c = props === null || props === void 0 ? void 0 : props.actionConfig) === null || _c === void 0 ? void 0 : _c.map(function (i, index) {
            return jsxRuntimeExports.jsx("div", {
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

export { GridActionMenu as G };
//# sourceMappingURL=GridActionMenu-wJ8uxyvf.js.map
