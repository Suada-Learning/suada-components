var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledControls, StyledSlider, StyledVolumeWrapper, StyledVolumeSlider, StyledControllerLeft, StyledControllerRight, StyledTimeTrack, StyledHeartIconContainer, StyledSubtitlesIconContainer, StyledFullscreenIconContainer, StyledVolumeIconContainer, StyledPlayPauseIconContainer, } from './Controls.styles';
import { HeartIcon, MaximizeIcon, MinimizeIcon, PauseIcon, PlayIcon, RewindIcon, SkipIcon, SubtitlesIcon, VolumeMuteIcon, VolumeUpIcon, } from '../../../icons';
import PlaybackSpeedMenu from '../PlaybackSpeedMenu';
var Controls = function (_a) {
    var setVideoState = _a.setVideoState, playbackRate = _a.playbackRate, rewindHandler = _a.rewindHandler, playPauseHandler = _a.playPauseHandler, handleFastForward = _a.handleFastForward, formatCurrentTime = _a.formatCurrentTime, played = _a.played, onSeekMouseDownHandler = _a.onSeekMouseDownHandler, seekHandler = _a.seekHandler, seekMouseUpHandler = _a.seekMouseUpHandler, volume = _a.volume, muted = _a.muted, muteHandler = _a.muteHandler, volumeChangeHandler = _a.volumeChangeHandler, formatDuration = _a.formatDuration, handleFullScreen = _a.handleFullScreen, playing = _a.playing, isSubtitlesChecked = _a.isSubtitlesChecked, toggleSubtitlesCheck = _a.toggleSubtitlesCheck, isFavorite = _a.isFavorite, toggleIsFavorite = _a.toggleIsFavorite, isFullscreen = _a.isFullscreen, subtitle = _a.subtitle, handleSkipBackward = _a.handleSkipBackward, handleSkipForward = _a.handleSkipForward, isNextVideo = _a.isNextVideo, isPreviousVideo = _a.isPreviousVideo, showFavorite = _a.showFavorite;
    return (_jsxs(StyledControls, { children: [_jsx(StyledSlider, { type: 'range', min: 0, max: 100, value: played * 100, onMouseDown: onSeekMouseDownHandler, onChange: seekHandler, onMouseUp: seekMouseUpHandler }), _jsxs(StyledControllerLeft, { children: [_jsx(StyledPlayPauseIconContainer, { onClick: playPauseHandler, children: playing ? _jsx(PauseIcon, {}) : _jsx(PlayIcon, {}) }), _jsx(RewindIcon, { onClick: rewindHandler }), _jsx(RewindIcon, { forward: true, onClick: handleFastForward }), _jsxs(StyledVolumeWrapper, { children: [_jsx(StyledVolumeIconContainer, { onClick: muteHandler, children: muted ? _jsx(VolumeMuteIcon, {}) : _jsx(VolumeUpIcon, {}) }), _jsx(StyledVolumeSlider, { type: 'range', value: volume * 100, onChange: volumeChangeHandler })] }), _jsxs(StyledTimeTrack, { children: [formatCurrentTime, " /", formatDuration] })] }), _jsxs(StyledControllerRight, { children: [handleSkipBackward && (_jsx(SkipIcon, { onClick: function () {
                            if (!isPreviousVideo)
                                return;
                            handleSkipBackward();
                        }, className: isPreviousVideo ? '' : 'skip-icon-disabled' })), handleSkipForward && (_jsx(SkipIcon, { forward: true, onClick: function () {
                            if (!isNextVideo)
                                return;
                            handleSkipForward();
                        }, className: isNextVideo ? '' : 'skip-icon-disabled' })), showFavorite && (_jsx(StyledHeartIconContainer, { children: _jsx(HeartIcon, { active: isFavorite, onClick: toggleIsFavorite }) })), _jsx(PlaybackSpeedMenu, { playbackSpeed: playbackRate, onPlaybackSpeedChange: function (speed) {
                            return setVideoState(function (prev) { return (__assign(__assign({}, prev), { playbackRate: speed })); });
                        }, customMenuWrapperStyles: {
                            position: 'unset',
                        }, customMenuStyles: {
                            right: '8px',
                            left: 'auto',
                        } }), subtitle && (_jsx(StyledSubtitlesIconContainer, { children: _jsx(SubtitlesIcon, { active: isSubtitlesChecked, onClick: toggleSubtitlesCheck }) })), _jsx(StyledFullscreenIconContainer, { onClick: handleFullScreen, children: isFullscreen ? _jsx(MinimizeIcon, {}) : _jsx(MaximizeIcon, {}) })] })] }));
};
export default Controls;
//# sourceMappingURL=Controls.js.map