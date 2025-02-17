import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { useState } from 'react';
import { Container, StyledIconButton, ActionsContent } from './GridActionMenu.styles.js';
import { MoreVertRoundedIcon } from '../../icons/MoreVertRoundedIcon.js';
import Popover from '../../node_modules/@mui/material/Popover/Popover.js';

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
        children: (_a = props.button) !== null && _a !== undefined ? _a : jsxRuntimeExports.jsx(StyledIconButton, {
          className: 'more',
          children: (_b = props.icon) !== null && _b !== undefined ? _b : jsxRuntimeExports.jsx(MoreVertRoundedIcon, {})
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
          children: (_c = props === null || props === undefined ? undefined : props.actionConfig) === null || _c === undefined ? undefined : _c.map(function (i, index) {
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

export { GridActionMenu };
//# sourceMappingURL=GridActionMenu.js.map
