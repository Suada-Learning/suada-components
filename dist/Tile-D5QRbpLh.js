'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Tile_styledComponents = require('./components/Tile/styled-components.cjs.js');

var Tile = function Tile(_a) {
  var customCardStyles = _a.customCardStyles,
    $backgroundColor = _a.$backgroundColor,
    iconColor = _a.iconColor,
    icon = _a.icon,
    gap = _a.gap,
    value = _a.value,
    subIcon = _a.subIcon,
    text = _a.text;
  return jsxRuntime.jsxRuntimeExports.jsx(components_Tile_styledComponents.CardContainer, {
    className: 'tile',
    children: jsxRuntime.jsxRuntimeExports.jsxs(components_Tile_styledComponents.StyledCard, {
      style: customCardStyles,
      children: [icon && jsxRuntime.jsxRuntimeExports.jsx(components_Tile_styledComponents.StyledIcon, {
        "$backgroundColor": $backgroundColor,
        color: iconColor,
        children: icon
      }), jsxRuntime.jsxRuntimeExports.jsx(components_Tile_styledComponents.StyledCardContent, {
        gap: gap,
        children: jsxRuntime.jsxRuntimeExports.jsxs(components_Tile_styledComponents.TextWrapper, {
          children: [jsxRuntime.jsxRuntimeExports.jsxs(components_Tile_styledComponents.NumberText, {
            children: [value, " ", subIcon]
          }), jsxRuntime.jsxRuntimeExports.jsx(components_Tile_styledComponents.HeaderText, {
            children: text
          })]
        })
      })]
    })
  });
};

exports.Tile = Tile;
//# sourceMappingURL=Tile-D5QRbpLh.js.map
