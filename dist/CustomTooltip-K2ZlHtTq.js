'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');
var Tooltip = require('./Tooltip-A_p9Z47e.js');

var TooltipHeight = function TooltipHeight(_a) {
  var text = _a.text,
    lines = _a.lines;
  var textElementRef = React.useRef(null);
  var _b = React.useState(false),
    isOverflowing = _b[0],
    setIsOverflowing = _b[1];
  React.useEffect(function () {
    var isOverflow = textElementRef.current ? textElementRef.current.scrollHeight > textElementRef.current.clientHeight : false;
    setIsOverflowing(isOverflow);
  }, [text]);
  return isOverflowing ? jsxRuntime.jsxRuntimeExports.jsx(Tooltip.Tooltip, {
    title: text,
    children: jsxRuntime.jsxRuntimeExports.jsx("div", {
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
  }) : jsxRuntime.jsxRuntimeExports.jsx("div", {
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
  return jsxRuntime.jsxRuntimeExports.jsx("div", {
    children: jsxRuntime.jsxRuntimeExports.jsx(Tooltip.Tooltip, {
      title: title,
      children: children
    })
  });
};

exports.CustomTooltip = CustomTooltip;
exports.TooltipHeight = TooltipHeight;
//# sourceMappingURL=CustomTooltip-K2ZlHtTq.js.map
