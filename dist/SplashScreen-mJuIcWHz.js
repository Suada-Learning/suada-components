import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { Whiteboard, CenteredText } from './components/SplashScreen/styled-components.js';
import { ImageContainer } from './components/PresentationIcon/styled-components.js';

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPJSURBVHgB7ZtLbExRGMf/504V1alqvKo0Xq1kEpJ6hKRCYiZIiUewsSEshQ22pU1sJDYs7S2UeESLpENIxcIruiBKEOKVJkYp1ZqZ43/OdJqaTqeN9N522u8/Offec853b+b73e+755zJHYV+tPe2njDZh3IFLGWZphQcZJm0RlwDrUrjUfQnWs5Uqc50dipd46E7uoweH2HvbhrkI/v1g0DOxYFTp9eql6mdfe7u4dt6KhsPEMC+UQLAyM9I3u9TOHjknp6e2pmT2hB1EOQJ6wkgZyJ75xUAM/L6CZkRLqYCvvwC3nwHOqLIYT0Yi6KJzed72/WBwPwpocOzjdfLyWxDKZA3Dlmrn3+Am++Apo/WtzlMi9mpNn0g0PkCFr85zMvJbgBGk/j9JyW9TPhVkGqTdU98NyQQIBCsBAIEgpVAgECwEggQCFYCAQLBSiBAIFgJBAgEK4EAgWAlECAQrAQCBIKVQIBAsBIIEAhWAgECwUogQCBYCQQIBCuBAIFgJRAgEKwEAgSClUBAulf4Rrk0P6FduzCuPRf5+V2oq6tLvKi6buOOJY4PlQqqoDCwJjR+2pyQaS8vZJmCrFdLhOVb4vh36/vGtmd3w4TxXcfQVOR3mpUBoHw4TgDbMcZEEJcI4vhYfiaYV5+1SYWedFAOQlBqupObN2H8lOIS094Z+fQh3vXrN0a29EAGaX3SuhVxNIZvXGyGaHjf4FfBqm2bHPg2xRGrDzdcrscg7qob8mF4pEJVO/cyUE8yBTkSOZULygJtr18+e4ph0LBACFbt3MwQPKoUAqbOfSGf1KXzFwa+vHn1/AU8ltcQTARsJYAaJuKyfzqUKuYwvWh+WeAzI6IFHspLCAbAFu6PEUBFegsUc+s5CM8gdKdAdTICtNafuWtnBOQzFT7y+AcjwW9AsL7Iy9TwBEI3ABMBy02dAJ7Q+XrlKPPnorl0/hHLTY4NubSZZVIDJiIIou1r5EVHRzvclOsQ0gGgs7VQupmOr2XTXJa37D+rNe7Ttrw3iOKSUtdBuDpt7g9A+PrFK0o5feYE4YYL17R5aGo8NHWCqOC51RUrK7cWFc10bU7jGoRMAJBhUtQLxANT9wKEGxCSw2BtEgAdesLQrxkIQFIEYWaPJ2j52F6QIFiql65avcXv9w85iCGHwMXYYq30np5hkAC4rWlsuHAVg58W62772iQIcz1z3RWV6xdjiOXuUjoDgHhUf+VQGEmY6YhmPfXsFBA9S9+hlis5ZpbmPh+WxGJovpVhqZq0i9Mu05I2mPjla0C7/9VfqPhM23MjJyAAAAAASUVORK5CYII=";

var Presentation = function Presentation() {
  return jsxRuntimeExports.jsx(ImageContainer, {
    children: jsxRuntimeExports.jsx("img", {
      src: img,
      alt: 'Add More'
    })
  });
};

var SplashScreen = function SplashScreen(_a) {
  var title = _a.title,
    subTitle = _a.subTitle,
    _b = _a.createButton,
    createButton = _b === void 0 ? false : _b,
    _c = _a.marginTop,
    marginTop = _c === void 0 ? 0 : _c,
    _d = _a.minHeight,
    minHeight = _d === void 0 ? '75vh' : _d,
    _e = _a.height,
    height = _e === void 0 ? 'auto' : _e,
    _f = _a.contentMaxWidth,
    contentMaxWidth = _f === void 0 ? '100%' : _f,
    _g = _a.textMarginTop,
    textMarginTop = _g === void 0 ? '0px' : _g,
    _h = _a.isSearchOrFilter,
    isSearchOrFilter = _h === void 0 ? false : _h;
  return jsxRuntimeExports.jsx(Whiteboard, {
    style: {
      marginTop: marginTop,
      minHeight: minHeight,
      height: height,
      justifyContent: isSearchOrFilter ? 'flex-start' : 'center'
    },
    children: jsxRuntimeExports.jsxs(CenteredText, {
      style: {
        maxWidth: contentMaxWidth
      },
      marginTop: textMarginTop,
      children: [jsxRuntimeExports.jsx(Presentation, {}), title && jsxRuntimeExports.jsx("h1", {
        children: title
      }), subTitle && jsxRuntimeExports.jsx("h4", {
        children: subTitle
      }), createButton && jsxRuntimeExports.jsx("div", {
        children: createButton()
      })]
    })
  });
};

export { SplashScreen as S };
//# sourceMappingURL=SplashScreen-mJuIcWHz.js.map
