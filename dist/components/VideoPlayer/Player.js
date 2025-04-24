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
import ReactPlayer from 'react-player';
import { StyledWrapper, StyledPlayerLoader, StyledControlsContainer, StyledVideoPlayerWrapper, StyledLoader, StyledSubtitles, } from './Player.styles';
import Controls from './Controls';
import usePlayerControls from './usePlayerControls';
export var VideoPlayer = function (_a) {
    var customStyles = _a.customStyles, _b = _a.startTime, startTime = _b === void 0 ? 0 : _b, loading = _a.loading, setLoading = _a.setLoading, handleTrackProgress = _a.handleTrackProgress, url = _a.url, subtitleUrl = _a.subtitle, handleNextVideo = _a.handleNextVideo, handlePreviousVideo = _a.handlePreviousVideo, isNextVideo = _a.isNextVideo, isPreviousVideo = _a.isPreviousVideo, isPlaying = _a.isPlaying, setIsPlaying = _a.setIsPlaying, _c = _a.shouldPlayerBeFocusedOnSpaceClick, shouldPlayerBeFocusedOnSpaceClick = _c === void 0 ? false : _c, showFavorite = _a.showFavorite, _d = _a.isFavorite, isFavorite = _d === void 0 ? false : _d, _e = _a.toggleFavorite, toggleFavorite = _e === void 0 ? function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); } : _e;
    var _f = usePlayerControls({
        startTime: startTime,
        setLoading: setLoading,
        handleTrackProgress: handleTrackProgress,
        url: url,
        subtitleUrl: subtitleUrl,
        isPlaying: isPlaying,
        setIsPlaying: setIsPlaying,
        shouldPlayerBeFocusedOnSpaceClick: shouldPlayerBeFocusedOnSpaceClick,
    }), mouseMoveHandler = _f.mouseMoveHandler, playerContainerRef = _f.playerContainerRef, playPauseHandler = _f.playPauseHandler, handleFullScreen = _f.handleFullScreen, videoPlayerRef = _f.videoPlayerRef, playing = _f.playing, volume = _f.volume, muted = _f.muted, progressHandler = _f.progressHandler, bufferStartHandler = _f.bufferStartHandler, bufferEndHandler = _f.bufferEndHandler, onPlayerStart = _f.onPlayerStart, setVideoState = _f.setVideoState, playbackRate = _f.playbackRate, controlRef = _f.controlRef, rewindHandler = _f.rewindHandler, handleFastForward = _f.handleFastForward, formatCurrentTime = _f.formatCurrentTime, played = _f.played, onSeekMouseDownHandler = _f.onSeekMouseDownHandler, seekHandler = _f.seekHandler, seekMouseUpHandler = _f.seekMouseUpHandler, muteHandler = _f.muteHandler, volumeChangeHandler = _f.volumeChangeHandler, formatDuration = _f.formatDuration, isSubtitlesChecked = _f.isSubtitlesChecked, toggleSubtitlesCheck = _f.toggleSubtitlesCheck, isFullscreen = _f.isFullscreen, isControlsActive = _f.isControlsActive, currentSubtitle = _f.currentSubtitle;
    // Make sure we have a valid URL to avoid ReactPlayer errors
    var validUrl = url || '';
    return (_jsxs(StyledWrapper, { tabIndex: 0, onMouseMove: mouseMoveHandler, ref: playerContainerRef, style: customStyles, onClick: function (e) { return e.stopPropagation(); }, "data-testid": 'video-player-wrapper', children: [_jsx(StyledVideoPlayerWrapper, { onClick: playPauseHandler, onDoubleClick: handleFullScreen, children: _jsx(ReactPlayer, { url: validUrl, ref: videoPlayerRef, className: 'react-player', width: '100%', height: '100%', playing: isPlaying, volume: volume, muted: muted, onProgress: progressHandler, onBuffer: bufferStartHandler, onBufferEnd: bufferEndHandler, onReady: onPlayerStart, onPlay: function () { return setIsPlaying(true); }, onPause: function () { return setIsPlaying(false); }, onEnded: function () {
                        var _a;
                        var totalDuration = (_a = videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.getDuration();
                        if (totalDuration) {
                            handleTrackProgress(totalDuration);
                        }
                        setVideoState(function (prev) { return (__assign(__assign({}, prev), { playing: false })); });
                        if (handleNextVideo)
                            handleNextVideo();
                    }, controls: false, pip: true, playbackRate: playbackRate, preload: 'metadata', config: {
                        file: {
                            hlsOptions: {
                                autoStartLoad: true,
                                renderTextTracksNatively: false,
                            },
                        },
                    } }, validUrl) }), loading && (_jsx(StyledPlayerLoader, { children: _jsx(StyledLoader, {}) })), _jsx(StyledControlsContainer, { ref: controlRef, children: _jsx(Controls, { setVideoState: setVideoState, playbackRate: playbackRate, rewindHandler: rewindHandler, playPauseHandler: playPauseHandler, handleFastForward: handleFastForward, formatCurrentTime: formatCurrentTime, played: played, onSeekMouseDownHandler: onSeekMouseDownHandler, seekHandler: seekHandler, seekMouseUpHandler: seekMouseUpHandler, volume: volume, muted: muted, muteHandler: muteHandler, volumeChangeHandler: volumeChangeHandler, formatDuration: formatDuration, handleFullScreen: handleFullScreen, playing: playing, isSubtitlesChecked: isSubtitlesChecked, toggleSubtitlesCheck: toggleSubtitlesCheck, isFavorite: isFavorite, toggleIsFavorite: toggleFavorite, isFullscreen: isFullscreen, subtitle: !!subtitleUrl, handleSkipBackward: handlePreviousVideo, handleSkipForward: handleNextVideo, isNextVideo: isNextVideo, isPreviousVideo: isPreviousVideo, showFavorite: showFavorite }) }), isSubtitlesChecked && currentSubtitle && (_jsx(StyledSubtitles, { "$controls": isControlsActive, children: currentSubtitle }))] }));
};
//# sourceMappingURL=Player.js.map