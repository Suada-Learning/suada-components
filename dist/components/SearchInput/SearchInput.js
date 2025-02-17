import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { SearchRoundedSVG } from '../../icons/SearchRoundedIcon.js';
import TextInput from '../TextInput/TextInput.js';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider.js';
import IconButton from '../../node_modules/@mui/material/IconButton/IconButton.js';

var SearchInput = function SearchInput(_a) {
  var onSearchSubmit = _a.onSearchSubmit,
    searchText = _a.searchText,
    handleSearchChange = _a.handleSearchChange;
  var t = useTranslation().t;
  return jsxRuntimeExports.jsx("form", {
    onSubmit: onSearchSubmit,
    children: jsxRuntimeExports.jsx(TextInput, {
      label: t('general.search_placeholder'),
      type: 'text',
      size: 'small',
      value: searchText,
      onChange: handleSearchChange,
      icon: jsxRuntimeExports.jsx(IconButton, {
        onClick: onSearchSubmit,
        children: jsxRuntimeExports.jsx(SearchRoundedSVG, {})
      })
    })
  });
};

export { SearchInput };
//# sourceMappingURL=SearchInput.js.map
