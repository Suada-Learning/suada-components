import { jsx as _jsx } from "react/jsx-runtime";
import { SearchRounded } from '../../svg/SearchRounded';
import { Input } from '../Input';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider';
export var SearchInput = function (_a) {
    var onSearchSubmit = _a.onSearchSubmit, searchText = _a.searchText, handleSearchChange = _a.handleSearchChange;
    var t = useTranslation().t;
    return (_jsx("form", { onSubmit: onSearchSubmit, children: _jsx(Input, { label: t('general.search_placeholder'), type: 'text', size: 'small', value: searchText, onChange: handleSearchChange, icon: _jsx(IconButton, { onClick: onSearchSubmit, children: _jsx(SearchRounded, {}) }) }) }));
};
//# sourceMappingURL=SearchInput.js.map