import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { CardContainer, StyledCard, StyledIcon, StyledCardContent, TextWrapper, NumberText, HeaderText } from './components/Tile/styled-components.js';

var Tile = function Tile(_a) {
  var customCardStyles = _a.customCardStyles,
    $backgroundColor = _a.$backgroundColor,
    iconColor = _a.iconColor,
    icon = _a.icon,
    gap = _a.gap,
    value = _a.value,
    subIcon = _a.subIcon,
    text = _a.text;
  return jsxRuntimeExports.jsx(CardContainer, {
    className: 'tile',
    children: jsxRuntimeExports.jsxs(StyledCard, {
      style: customCardStyles,
      children: [icon && jsxRuntimeExports.jsx(StyledIcon, {
        "$backgroundColor": $backgroundColor,
        color: iconColor,
        children: icon
      }), jsxRuntimeExports.jsx(StyledCardContent, {
        gap: gap,
        children: jsxRuntimeExports.jsxs(TextWrapper, {
          children: [jsxRuntimeExports.jsxs(NumberText, {
            children: [value, " ", subIcon]
          }), jsxRuntimeExports.jsx(HeaderText, {
            children: text
          })]
        })
      })]
    })
  });
};

export { Tile as T };
//# sourceMappingURL=Tile-CNpoizbh.js.map
