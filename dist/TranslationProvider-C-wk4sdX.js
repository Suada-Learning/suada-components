import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { createContext, useContext } from 'react';

var TranslationContext = /*#__PURE__*/createContext(undefined);
var TranslationProvider = function TranslationProvider(_a) {
  var children = _a.children,
    translations = _a.translations;
  var t = function t(key) {
    return translations[key] || key;
  };
  return jsxRuntimeExports.jsx(TranslationContext.Provider, {
    value: {
      t: t
    },
    children: children
  });
};
var useTranslation = function useTranslation() {
  var context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export { TranslationProvider as T, useTranslation as u };
//# sourceMappingURL=TranslationProvider-C-wk4sdX.js.map
