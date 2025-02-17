import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import { useRef, useState, useEffect } from 'react';
import Tooltip from '../node_modules/@mui/material/Tooltip/Tooltip.js';

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

export { TooltipHeight as default };
//# sourceMappingURL=TooltipHeight.js.map
