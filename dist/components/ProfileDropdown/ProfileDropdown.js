import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Wrapper, Title, PopoverContent } from './styled-components';
import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { Logout, MyProfile } from '../../svg';
export var ProfileDropdown = function (_a) {
    var user = _a.user, logout = _a.logout, navigate = _a.navigate;
    var t = useTranslation().t;
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleProfileClick = function () {
        handleClose();
        navigate("/user-profile/".concat(user.id));
    };
    var onLogoutClick = function () {
        handleClose();
        logout();
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popover' : undefined;
    return (_jsxs("div", { children: [_jsxs(Wrapper, { role: 'button', open: open, "aria-describedby": id, onClick: handleClick, children: [_jsx(ProfilePicture, { imgSource: user.avatarThumbnail ||
                            user.avatar ||
                            'https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg', width: 25, height: 25 }), _jsx(Title, { children: "".concat(user.firstName, " ").concat(user.lastName) }), _jsx(ExpandMoreIcon, { style: {
                            color: '#02020f',
                            transition: 'transform 0.3s',
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        } })] }), _jsx(Popover, { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                }, slotProps: {
                    paper: {
                        style: {
                            borderRadius: 8,
                        },
                    },
                }, children: _jsxs(PopoverContent, { children: [_jsxs("div", { onClick: handleProfileClick, children: [_jsx("div", { children: _jsx(MyProfile, {}) }), _jsx("span", { children: "".concat(t('general.my'), " ").concat(t('general.profile')) })] }), _jsxs("div", { onClick: onLogoutClick, children: [_jsx("div", { children: _jsx(Logout, {}) }), _jsx("span", { children: t('actions.log_out') })] })] }) })] }));
};
//# sourceMappingURL=ProfileDropdown.js.map