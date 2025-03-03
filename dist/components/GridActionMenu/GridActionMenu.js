import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { Container, ActionsContent, StyledIconButton } from './GridActionMenu.styles';
import { MoreVertRoundedIcon } from '../../icons/MoreVertRoundedIcon';
export var GridActionMenu = function (props) {
    var _a, _b, _c;
    var _d = useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    return (_jsx("div", { children: props.actionConfig && props.actionConfig.length > 0 && (_jsxs(Container, { onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("div", { onClick: handleClick, children: (_a = props.button) !== null && _a !== void 0 ? _a : (_jsx(StyledIconButton, { className: 'more', children: (_b = props.icon) !== null && _b !== void 0 ? _b : _jsx(MoreVertRoundedIcon, {}) })) }), _jsx(Popover, { open: Boolean(anchorEl), anchorEl: anchorEl, onClose: function () {
                        setAnchorEl(null);
                    }, anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    }, children: _jsx(ActionsContent, { children: (_c = props === null || props === void 0 ? void 0 : props.actionConfig) === null || _c === void 0 ? void 0 : _c.map(function (i, index) { return (_jsx("div", { onClick: function () { return setAnchorEl(null); }, children: i.render(props.row) }, index)); }) }) })] })) }));
};
//# sourceMappingURL=GridActionMenu.js.map