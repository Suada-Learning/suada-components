import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { DrawerTipsContainer, TipItem, styles } from './components/DrawerTips/styled-component.js';

var DrawerTips = function DrawerTips(_a) {
  var tips = _a.tips,
    rememberText = _a.rememberText;
  var renderRememberText = function renderRememberText(text) {
    var words = text.split(' ');
    if (words.length) {
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx("strong", {
          children: words[0]
        }), words.slice(1).join(' ')]
      });
    }
    return null;
  };
  return jsxRuntimeExports.jsxs(DrawerTipsContainer, {
    children: [tips.map(function (tip, index) {
      return jsxRuntimeExports.jsxs(TipItem, {
        children: [jsxRuntimeExports.jsx("img", {
          src: tip.icon,
          alt: 'tipSVG',
          style: styles.svg
        }), jsxRuntimeExports.jsx("span", {
          children: tip.text
        })]
      }, index);
    }), rememberText && jsxRuntimeExports.jsx("div", {
      children: renderRememberText(rememberText)
    })]
  });
};

export { DrawerTips as D };
//# sourceMappingURL=DrawerTips-5Q0sGxqm.js.map
