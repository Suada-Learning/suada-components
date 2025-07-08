import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PLAYBACK_SPEED_LIST } from './constants';
import { StyledPlaybackMenuWrapper, StyledPlaybackMenu, StyledPlaybackSpeedItem, } from './PlaybackSpeedMenu.styles';
import useMenuToggle from './useMenuToggle';
import { MeterIcon, VideoCheckmarkIcon } from '../../icons';
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider';
var PlaybackSpeedMenu = function (_a) {
    var playbackSpeed = _a.playbackSpeed, onPlaybackSpeedChange = _a.onPlaybackSpeedChange, menuWrapperClassName = _a.menuWrapperClassName, labelIconClassName = _a.labelIconClassName, customMenuWrapperStyles = _a.customMenuWrapperStyles, customMenuStyles = _a.customMenuStyles;
    var _b = useMenuToggle(), menuRef = _b.menuRef, isMenuActive = _b.isVisible, menuPosition = _b.menuPosition, toggleMenu = _b.toggleMenu;
    var t = useTranslation().t;
    return (_jsxs(StyledPlaybackMenuWrapper, { ref: menuRef, className: menuWrapperClassName, style: customMenuWrapperStyles, children: [_jsx(MeterIcon, { className: labelIconClassName, onClick: toggleMenu }), isMenuActive && (_jsxs(StyledPlaybackMenu, { "$position": menuPosition, style: customMenuStyles, children: [_jsx("h2", { children: t('general.playback_speed') }), PLAYBACK_SPEED_LIST.map(function (_a, index) {
                        var label = _a.label, value = _a.value;
                        return (_jsxs(StyledPlaybackSpeedItem, { onClick: function () {
                                onPlaybackSpeedChange(value);
                                toggleMenu();
                            }, children: [t(label), value === playbackSpeed && _jsx(VideoCheckmarkIcon, {})] }, index));
                    })] }))] }));
};
export default PlaybackSpeedMenu;
//# sourceMappingURL=PlaybackSpeedMenu.js.map