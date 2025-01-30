import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import { Container, ActionsContent, StyledIconButton, } from "./GridActionMenu.styles";
import MoreVertRoundedIcon from "../../svg/MoreVertRoundedIcon";
export var GridActionMenu = function (props) {
    var _a, _b;
    var _c = useState(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    return (_jsx("div", { children: props.actionConfig.length > 0 && (_jsxs(Container, { onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("div", { onClick: handleClick, children: (_a = props.button) !== null && _a !== void 0 ? _a : (_jsx(StyledIconButton, { className: "more", children: (_b = props.icon) !== null && _b !== void 0 ? _b : _jsx(MoreVertRoundedIcon, {}) })) }), _jsx(Popover, { open: Boolean(anchorEl), anchorEl: anchorEl, onClose: function () {
                        setAnchorEl(null);
                    }, anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center",
                    }, transformOrigin: {
                        vertical: "top",
                        horizontal: "center",
                    }, children: _jsx(ActionsContent, { children: props.actionConfig.map(function (i, index) { return (_jsx("div", { onClick: function () { return setAnchorEl(null); }, children: i.render(props.row) }, index)); }) }) })] })) }));
};
//# sourceMappingURL=GridActionMenu.js.map