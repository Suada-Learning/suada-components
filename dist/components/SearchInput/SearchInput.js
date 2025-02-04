import { jsx as _jsx } from "react/jsx-runtime";
import SearchRoundedSVG from '../../svg/SearchRoundedIcon';
import { Input } from '../TextInput';
import IconButton from '@mui/material/IconButton';
export var SearchInput = function (_a) {
    var onSearchSubmit = _a.onSearchSubmit, searchText = _a.searchText, handleSearchChange = _a.handleSearchChange, t = _a.t;
    return (_jsx("form", { onSubmit: onSearchSubmit, children: _jsx(Input, { label: t('general.search_placeholder'), type: 'text', size: 'small', value: searchText, onChange: handleSearchChange, icon: _jsx(IconButton, { onClick: onSearchSubmit, children: _jsx(SearchRoundedSVG, {}) }) }) }));
};
//# sourceMappingURL=SearchInput.js.map