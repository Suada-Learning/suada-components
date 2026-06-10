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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledControls, StyledSlider, StyledVolumeWrapper, StyledVolumeSlider, StyledControllerLeft, StyledControllerRight, StyledTimeTrack, StyledHeartIconContainer, StyledSubtitlesIconContainer, StyledFullscreenIconContainer, StyledPictureInPictureIconContainer, StyledVolumeIconContainer, StyledPlayPauseIconContainer, StyledDownloadIconContainer, StyledRewindIconContainer, } from './Controls.styles';
import { HeartIcon, MaximizeIcon, MinimizeIcon, PauseIcon, PlayIcon, PictureInPictureIcon, RewindIcon, SkipIcon, SubtitlesIcon, VolumeMuteIcon, VolumeUpIcon, DownloadIcon, } from '../../../icons';
import { CustomTooltip } from '../../Tooltip';
import PlaybackSpeedMenu from '../PlaybackSpeedMenu';
var Controls = function (_a) {
    var setVideoState = _a.setVideoState, playbackRate = _a.playbackRate, rewindHandler = _a.rewindHandler, playPauseHandler = _a.playPauseHandler, handleFastForward = _a.handleFastForward, formatCurrentTime = _a.formatCurrentTime, played = _a.played, onSeekMouseDownHandler = _a.onSeekMouseDownHandler, seekHandler = _a.seekHandler, seekMouseUpHandler = _a.seekMouseUpHandler, volume = _a.volume, muted = _a.muted, muteHandler = _a.muteHandler, volumeChangeHandler = _a.volumeChangeHandler, formatDuration = _a.formatDuration, handleFullScreen = _a.handleFullScreen, handlePictureInPicture = _a.handlePictureInPicture, playing = _a.playing, isSubtitlesChecked = _a.isSubtitlesChecked, toggleSubtitlesCheck = _a.toggleSubtitlesCheck, isFavorite = _a.isFavorite, toggleIsFavorite = _a.toggleIsFavorite, isFullscreen = _a.isFullscreen, isPiPActive = _a.isPiPActive, subtitle = _a.subtitle, handleSkipBackward = _a.handleSkipBackward, handleSkipForward = _a.handleSkipForward, isNextVideo = _a.isNextVideo, isPreviousVideo = _a.isPreviousVideo, showFavorite = _a.showFavorite, showDownload = _a.showDownload, downloadUrl = _a.downloadUrl, downloadFileName = _a.downloadFileName, onDownload = _a.onDownload, _b = _a.showPictureInPicture, showPictureInPicture = _b === void 0 ? true : _b;
    var handleDownloadClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, blob, blobUrl, link, error_1, link;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!onDownload) return [3 /*break*/, 1];
                    onDownload();
                    return [3 /*break*/, 6];
                case 1:
                    if (!downloadUrl) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch(downloadUrl)];
                case 3:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Download failed');
                    return [4 /*yield*/, response.blob()];
                case 4:
                    blob = _a.sent();
                    blobUrl = window.URL.createObjectURL(blob);
                    link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = downloadFileName || 'video-download';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    // Clean up blob URL
                    window.URL.revokeObjectURL(blobUrl);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error('Download failed:', error_1);
                    link = document.createElement('a');
                    link.href = downloadUrl;
                    link.download = downloadFileName || 'video-download';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(StyledControls, { children: [_jsx(StyledSlider, { type: 'range', min: 0, max: 100, value: played * 100, onMouseDown: onSeekMouseDownHandler, onChange: seekHandler, onMouseUp: seekMouseUpHandler }), _jsxs(StyledControllerLeft, { children: [_jsx(CustomTooltip, { title: playing ? 'Pause' : 'Play', children: _jsx(StyledPlayPauseIconContainer, { onClick: playPauseHandler, children: playing ? _jsx(PauseIcon, {}) : _jsx(PlayIcon, {}) }) }), _jsx(CustomTooltip, { title: "Rewind 5 seconds", children: _jsx(StyledRewindIconContainer, { className: "rewind-control", children: _jsx(RewindIcon, { onClick: rewindHandler }) }) }), _jsx(CustomTooltip, { title: "Forward 10 seconds", children: _jsx(StyledRewindIconContainer, { className: "forward-control", children: _jsx(RewindIcon, { forward: true, onClick: handleFastForward }) }) }), _jsxs(StyledVolumeWrapper, { children: [_jsx(CustomTooltip, { title: muted ? 'Unmute' : 'Mute', children: _jsx(StyledVolumeIconContainer, { onClick: muteHandler, children: muted ? _jsx(VolumeMuteIcon, {}) : _jsx(VolumeUpIcon, {}) }) }), _jsx(StyledVolumeSlider, { type: 'range', value: volume * 100, onChange: volumeChangeHandler })] }), _jsxs(StyledTimeTrack, { children: [formatCurrentTime, " /", formatDuration] })] }), _jsxs(StyledControllerRight, { children: [handleSkipBackward && (_jsx(CustomTooltip, { title: "Previous video", children: _jsx(StyledRewindIconContainer, { className: "skip-control", children: _jsx(SkipIcon, { onClick: function () {
                                    if (!isPreviousVideo)
                                        return;
                                    handleSkipBackward();
                                }, className: isPreviousVideo ? '' : 'skip-icon-disabled' }) }) })), handleSkipForward && (_jsx(CustomTooltip, { title: "Next video", children: _jsx(StyledRewindIconContainer, { className: "skip-control", children: _jsx(SkipIcon, { forward: true, onClick: function () {
                                    if (!isNextVideo)
                                        return;
                                    handleSkipForward();
                                }, className: isNextVideo ? '' : 'skip-icon-disabled' }) }) })), showFavorite && (_jsx(CustomTooltip, { title: isFavorite ? 'Remove from favorites' : 'Add to favorites', children: _jsx(StyledHeartIconContainer, { className: "favorite-control", children: _jsx(HeartIcon, { active: isFavorite, onClick: toggleIsFavorite }) }) })), showDownload && downloadUrl && (_jsx(CustomTooltip, { title: "Download video", children: _jsx(StyledDownloadIconContainer, { className: "download-control", children: _jsx(DownloadIcon, { onClick: handleDownloadClick }) }) })), _jsx(PlaybackSpeedMenu, { playbackSpeed: playbackRate, onPlaybackSpeedChange: function (speed) {
                            return setVideoState(function (prev) { return (__assign(__assign({}, prev), { playbackRate: speed })); });
                        }, customMenuWrapperStyles: {
                            position: 'unset',
                        }, customMenuStyles: {
                            right: '8px',
                            left: 'auto',
                        } }), subtitle && (_jsx(CustomTooltip, { title: isSubtitlesChecked ? 'Hide subtitles' : 'Show subtitles', children: _jsx(StyledSubtitlesIconContainer, { children: _jsx(SubtitlesIcon, { active: isSubtitlesChecked, onClick: toggleSubtitlesCheck }) }) })), showPictureInPicture && (_jsx(CustomTooltip, { title: isPiPActive ? 'Exit picture-in-picture' : 'Enter picture-in-picture', children: _jsx(StyledPictureInPictureIconContainer, { className: isPiPActive ? 'pip-active' : '', onClick: handlePictureInPicture, children: _jsx(PictureInPictureIcon, {}) }) })), _jsx(CustomTooltip, { title: isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen', children: _jsx(StyledFullscreenIconContainer, { onClick: handleFullScreen, children: isFullscreen ? _jsx(MinimizeIcon, {}) : _jsx(MaximizeIcon, {}) }) })] })] }));
};
export default Controls;
//# sourceMappingURL=Controls.js.map