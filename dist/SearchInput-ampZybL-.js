'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var SearchRounded = require('./SearchRounded-DvZxIwIR.js');
var Input = require('./Input-CaX28Qcb.js');
var TranslationProvider = require('./TranslationProvider-63Q0Li_V.js');
var IconButton = require('./IconButton-Ca14V7Rp.js');

var SearchInput = function SearchInput(_a) {
  var onSearchSubmit = _a.onSearchSubmit,
    searchText = _a.searchText,
    handleSearchChange = _a.handleSearchChange;
  var t = TranslationProvider.useTranslation().t;
  return jsxRuntime.jsxRuntimeExports.jsx("form", {
    onSubmit: onSearchSubmit,
    children: jsxRuntime.jsxRuntimeExports.jsx(Input.TextInput, {
      label: t('general.search_placeholder'),
      type: 'text',
      size: 'small',
      value: searchText,
      onChange: handleSearchChange,
      icon: jsxRuntime.jsxRuntimeExports.jsx(IconButton.IconButton, {
        onClick: onSearchSubmit,
        children: jsxRuntime.jsxRuntimeExports.jsx(SearchRounded.SearchRounded, {})
      })
    })
  });
};

exports.SearchInput = SearchInput;
//# sourceMappingURL=SearchInput-ampZybL-.js.map
