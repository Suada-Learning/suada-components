import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { useRef, useState, useEffect } from 'react';
import { T as Tooltip } from './Tooltip-DizAB59I.js';

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
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical'
      },
      children: text
    })
  }) : jsxRuntimeExports.jsx("div", {
    ref: textElementRef,
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: lines,
      WebkitBoxOrient: 'vertical'
    },
    children: text
  });
};

var CustomTooltip = function CustomTooltip(_a) {
  var title = _a.title,
    children = _a.children;
  return jsxRuntimeExports.jsx("div", {
    children: jsxRuntimeExports.jsx(Tooltip, {
      title: title,
      children: children
    })
  });
};

export { CustomTooltip as C, TooltipHeight as T };
//# sourceMappingURL=CustomTooltip-DKraDViV.js.map
