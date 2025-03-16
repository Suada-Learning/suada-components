'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_DrawerTips_styledComponent = require('./components/DrawerTips/styled-component.cjs.js');

var DrawerTips = function DrawerTips(_a) {
  var tips = _a.tips,
    rememberText = _a.rememberText;
  var renderRememberText = function renderRememberText(text) {
    var words = text.split(' ');
    if (words.length) {
      return jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, {
        children: [jsxRuntime.jsxRuntimeExports.jsx("strong", {
          children: words[0]
        }), words.slice(1).join(' ')]
      });
    }
    return null;
  };
  return jsxRuntime.jsxRuntimeExports.jsxs(components_DrawerTips_styledComponent.DrawerTipsContainer, {
    children: [tips.map(function (tip, index) {
      return jsxRuntime.jsxRuntimeExports.jsxs(components_DrawerTips_styledComponent.TipItem, {
        children: [jsxRuntime.jsxRuntimeExports.jsx("img", {
          src: tip.icon,
          alt: 'tipSVG',
          style: components_DrawerTips_styledComponent.styles.svg
        }), jsxRuntime.jsxRuntimeExports.jsx("span", {
          children: tip.text
        })]
      }, index);
    }), rememberText && jsxRuntime.jsxRuntimeExports.jsx("div", {
      children: renderRememberText(rememberText)
    })]
  });
};

exports.DrawerTips = DrawerTips;
//# sourceMappingURL=DrawerTips-PrQsI1Ir.js.map
