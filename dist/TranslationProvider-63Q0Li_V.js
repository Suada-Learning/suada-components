'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');

var TranslationContext = /*#__PURE__*/React.createContext(undefined);
var TranslationProvider = function TranslationProvider(_a) {
  var children = _a.children,
    translations = _a.translations;
  var t = function t(key) {
    return translations[key] || key;
  };
  return jsxRuntime.jsxRuntimeExports.jsx(TranslationContext.Provider, {
    value: {
      t: t
    },
    children: children
  });
};
var useTranslation = function useTranslation() {
  var context = React.useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

exports.TranslationProvider = TranslationProvider;
exports.useTranslation = useTranslation;
//# sourceMappingURL=TranslationProvider-63Q0Li_V.js.map
