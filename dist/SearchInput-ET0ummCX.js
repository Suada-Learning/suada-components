import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { S as SearchRounded } from './SearchRounded-Baz1Lvqj.js';
import { T as TextInput } from './Input-BGRLKC01.js';
import { u as useTranslation } from './TranslationProvider-C-wk4sdX.js';
import { I as IconButton } from './IconButton-xOBhMhWj.js';

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
        children: jsxRuntimeExports.jsx(SearchRounded, {})
      })
    })
  });
};

export { SearchInput as S };
//# sourceMappingURL=SearchInput-ET0ummCX.js.map
