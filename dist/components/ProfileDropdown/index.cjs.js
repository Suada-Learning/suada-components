'use strict';

var jsxRuntime = require('../../jsx-runtime-DoH8iSlf.js');
var React = require('react');
var components_ProfileDropdown_styledComponents = require('./styled-components.cjs.js');
var ExpandMore = require('../../ExpandMore-DfardksS.js');
var TranslationProvider = require('../../TranslationProvider-63Q0Li_V.js');
var ProfilePicture = require('../../ProfilePicture-Vk7cDkXG.js');
require('../../tslib.es6-Ce89yL0g.js');
var MyProfile = require('../../MyProfile-DUSdDAkN.js');
var Popover = require('../../Popover-CmQOsdY5.js');
require('../../styled-components.esm-DB2-eBHV.js');
require('../../Middleware-BpA40f7i.js');
require('../../_commonjsHelpers-CxXfaUfr.js');
require('../../interopRequireDefault-BBOtkihg.js');
require('../../createSvgIcon-DLn4QZlg.js');
require('../../createSvgIcon-BpozNt3V.js');
require('../../index-CGECY3y4.js');
require('../../DefaultPropsProvider-DfZ5VhSI.js');
require('../../createTheme-D2y0Hy6u.js');
require('../../extends-CAYAHNRA.js');
require('../../emotion-element-d59e098f.esm-Cn25-BkS.js');
require('../../mergeSlotProps-kgDL_-4V.js');
require('../../createChainedFunction-BAOT6rqZ.js');
require('../../ownerWindow-Cm-XkKL0.js');
require('../../ownerDocument-BtrF3bbW.js');
require('../../unsupportedProp-CjSKbcd2.js');
require('../../resolveComponentProps-DCteVXpM.js');
require('../../useEnhancedEffect-C2K-3y2k.js');
require('../../useId-Db7wkipr.js');
require('../../useControlled-CeCwNB17.js');
require('../../isHostComponent-3rrTjt-m.js');
require('../../useSlot-ByxXTss_.js');
require('../../setPrototypeOf-DULihuvO.js');
require('../../Grow-B50r5mQN.js');
require('react-dom');
require('../../exactProp-CPGXuEBM.js');
require('../../useTheme-BxZg-6YN.js');
require('../../useTheme-CdtrrMwt.js');
require('../../useThemeWithoutDefault-ChbYiUQZ.js');
require('../../utils-DtLxRXKa.js');
require('../../chainPropTypes-CIgjMfIp.js');
require('../../Paper-DRtt8qOm.js');
require('../../elementTypeAcceptingRef-DBEty_5_.js');

var ProfileDropdown = function ProfileDropdown(_a) {
  var user = _a.user,
    logout = _a.logout,
    navigate = _a.navigate;
  var t = TranslationProvider.useTranslation().t;
  var _b = React.useState(null),
    anchorEl = _b[0],
    setAnchorEl = _b[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  var handleProfileClick = function handleProfileClick() {
    handleClose();
    navigate("/user-profile/".concat(user.id));
  };
  var onLogoutClick = function onLogoutClick() {
    handleClose();
    logout();
  };
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  return jsxRuntime.jsxRuntimeExports.jsxs("div", {
    children: [jsxRuntime.jsxRuntimeExports.jsxs(components_ProfileDropdown_styledComponents.Wrapper, {
      role: 'button',
      open: open,
      "aria-describedby": id,
      onClick: handleClick,
      children: [jsxRuntime.jsxRuntimeExports.jsx(ProfilePicture.ProfilePicture, {
        imgSource: user.avatarThumbnail || user.avatar || 'https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg',
        width: 25,
        height: 25
      }), jsxRuntime.jsxRuntimeExports.jsx(components_ProfileDropdown_styledComponents.Title, {
        children: "".concat(user.firstName, " ").concat(user.lastName)
      }), jsxRuntime.jsxRuntimeExports.jsx(ExpandMore.ExpandMoreIcon, {
        style: {
          color: '#02020f',
          transition: 'transform 0.3s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        }
      })]
    }), jsxRuntime.jsxRuntimeExports.jsx(Popover.Popover, {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      slotProps: {
        paper: {
          style: {
            borderRadius: 8
          }
        }
      },
      children: jsxRuntime.jsxRuntimeExports.jsxs(components_ProfileDropdown_styledComponents.PopoverContent, {
        children: [jsxRuntime.jsxRuntimeExports.jsxs("div", {
          onClick: handleProfileClick,
          children: [jsxRuntime.jsxRuntimeExports.jsx("div", {
            children: jsxRuntime.jsxRuntimeExports.jsx(MyProfile.MyProfile, {})
          }), jsxRuntime.jsxRuntimeExports.jsx("span", {
            children: "".concat(t('general.my'), " ").concat(t('general.profile'))
          })]
        }), jsxRuntime.jsxRuntimeExports.jsxs("div", {
          onClick: onLogoutClick,
          children: [jsxRuntime.jsxRuntimeExports.jsx("div", {
            children: jsxRuntime.jsxRuntimeExports.jsx(MyProfile.Logout, {})
          }), jsxRuntime.jsxRuntimeExports.jsx("span", {
            children: t('actions.log_out')
          })]
        })]
      })
    })]
  });
};

exports.ProfileDropdown = ProfileDropdown;
//# sourceMappingURL=index.cjs.js.map
