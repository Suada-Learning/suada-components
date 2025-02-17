import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
var TranslationContext = createContext(undefined);
export var TranslationProvider = function (_a) {
    var children = _a.children, translations = _a.translations;
    var t = function (key) { return translations[key] || key; };
    return _jsx(TranslationContext.Provider, { value: { t: t }, children: children });
};
export var useTranslation = function () {
    var context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
//# sourceMappingURL=TranslationProvider.js.map