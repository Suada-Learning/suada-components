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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { StyledWrapper, StyledPlayerLoader, StyledControlsContainer, StyledVideoPlayerWrapper, StyledLoader, StyledSubtitles, StyledKeyboardIndicatorContainer, StyledKeyboardSeekContainer, StyledKeyboardVolumeContainer, StyledKeyboardVolumeLabel, injectHLSSubtitleStyles, } from './Player.styles';
import Controls from './Controls';
import usePlayerControls from './usePlayerControls';
import { useHLSSubtitles } from './useHlsSubtitles';
var VolumeIndicatorIcon = function (_a) {
    var _b = _a.volume, volume = _b === void 0 ? 0 : _b, isVolumeDown = _a.isVolumeDown;
    var percent = Math.round(volume * 100);
    var waveOpacity = percent === 0 ? 0.18 : 1;
    return (_jsxs("svg", { width: '44', height: '44', viewBox: '0 0 24 24', fill: 'none', "aria-hidden": true, children: [_jsx("path", { d: 'M3 9V15H7L12 20V4L7 9H3Z', fill: 'white' }), _jsx("path", { d: 'M16.5 12C16.5 10.62 15.7 9.42 14.55 8.85V15.15C15.7 14.58 16.5 13.38 16.5 12Z', fill: 'white', style: { opacity: waveOpacity } }), _jsx("path", { d: 'M14.5 3.23V5.29C17.39 6.15 19.5 8.83 19.5 12C19.5 15.17 17.39 17.85 14.5 18.71V20.77C18.51 19.86 21.5 16.28 21.5 12C21.5 7.72 18.51 4.14 14.5 3.23Z', fill: 'white', style: { opacity: waveOpacity } }), isVolumeDown ? (_jsx("path", { d: 'M7 12H17', stroke: 'white', strokeWidth: '2', strokeLinecap: 'round' })) : (_jsxs(_Fragment, { children: [_jsx("path", { d: 'M7 12H17', stroke: 'white', strokeWidth: '2', strokeLinecap: 'round' }), _jsx("path", { d: 'M12 7V17', stroke: 'white', strokeWidth: '2', strokeLinecap: 'round' })] }))] }));
};
var KeyboardIndicator = function (_a) {
    var _b;
    var indicator = _a.indicator;
    if (!indicator)
        return null;
    return (_jsxs(StyledKeyboardIndicatorContainer, { "$position": indicator.position, children: [(indicator.type === 'volume-up' || indicator.type === 'volume-down') && (_jsxs(StyledKeyboardVolumeContainer, { children: [_jsx(VolumeIndicatorIcon, { volume: indicator.volume, isVolumeDown: indicator.type === 'volume-down' }), _jsxs(StyledKeyboardVolumeLabel, { children: [Math.round(((_b = indicator.volume) !== null && _b !== void 0 ? _b : 0) * 100), "%"] })] })), indicator.type === 'seek-backward' && (_jsxs(StyledKeyboardSeekContainer, { children: [_jsxs("svg", { width: '34', height: '34', viewBox: '0 0 24 24', fill: 'white', "aria-hidden": true, children: [_jsx("path", { d: 'M15.7 6.3A1 1 0 0 1 17 7.9L12.9 12L17 16.1A1 1 0 1 1 15.6 17.5L10.8 12.7A1 1 0 0 1 10.8 11.3L15.7 6.3Z' }), _jsx("path", { d: 'M11.4 6.3A1 1 0 0 1 12.8 7.7L8.5 12L12.8 16.3A1 1 0 0 1 11.4 17.7L6.4 12.7A1 1 0 0 1 6.4 11.3L11.4 6.3Z' })] }), _jsx("span", { children: "-15s" })] })), indicator.type === 'seek-forward' && (_jsxs(StyledKeyboardSeekContainer, { children: [_jsx("span", { children: "+15s" }), _jsxs("svg", { width: '34', height: '34', viewBox: '0 0 24 24', fill: 'white', "aria-hidden": true, children: [_jsx("path", { d: 'M8.3 6.3A1 1 0 0 0 7 7.9L11.1 12L7 16.1A1 1 0 1 0 8.4 17.5L13.2 12.7A1 1 0 0 0 13.2 11.3L8.3 6.3Z' }), _jsx("path", { d: 'M12.6 6.3A1 1 0 0 0 11.2 7.7L15.5 12L11.2 16.3A1 1 0 0 0 12.6 17.7L17.6 12.7A1 1 0 0 0 17.6 11.3L12.6 6.3Z' })] })] }))] }));
};
export var VideoPlayer = function (_a) {
    var _b, _c, _d;
    var customStyles = _a.customStyles, _e = _a.startTime, startTime = _e === void 0 ? 0 : _e, loading = _a.loading, setLoading = _a.setLoading, handleTrackProgress = _a.handleTrackProgress, url = _a.url, subtitleUrl = _a.subtitle, handleNextVideo = _a.handleNextVideo, handlePreviousVideo = _a.handlePreviousVideo, isNextVideo = _a.isNextVideo, isPreviousVideo = _a.isPreviousVideo, isPlaying = _a.isPlaying, setIsPlaying = _a.setIsPlaying, _f = _a.shouldPlayerBeFocusedOnSpaceClick, shouldPlayerBeFocusedOnSpaceClick = _f === void 0 ? false : _f, showFavorite = _a.showFavorite, _g = _a.isFavorite, isFavorite = _g === void 0 ? false : _g, _h = _a.toggleFavorite, toggleFavorite = _h === void 0 ? function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); } : _h, showDownload = _a.showDownload, downloadUrl = _a.downloadUrl, downloadFileName = _a.downloadFileName, onDownload = _a.onDownload, _j = _a.showPictureInPicture, showPictureInPicture = _j === void 0 ? true : _j;
    var videoRef = useRef(null);
    var _k = usePlayerControls({
        startTime: startTime,
        setLoading: setLoading,
        handleTrackProgress: handleTrackProgress,
        url: url,
        subtitleUrl: subtitleUrl,
        isPlaying: isPlaying,
        setIsPlaying: setIsPlaying,
        shouldPlayerBeFocusedOnSpaceClick: shouldPlayerBeFocusedOnSpaceClick,
    }), mouseMoveHandler = _k.mouseMoveHandler, playerContainerRef = _k.playerContainerRef, playPauseHandler = _k.playPauseHandler, handleFullScreen = _k.handleFullScreen, handlePictureInPicture = _k.handlePictureInPicture, videoPlayerRef = _k.videoPlayerRef, playing = _k.playing, volume = _k.volume, muted = _k.muted, progressHandler = _k.progressHandler, bufferStartHandler = _k.bufferStartHandler, bufferEndHandler = _k.bufferEndHandler, onPlayerStart = _k.onPlayerStart, setVideoState = _k.setVideoState, playbackRate = _k.playbackRate, controlRef = _k.controlRef, rewindHandler = _k.rewindHandler, handleFastForward = _k.handleFastForward, formatCurrentTime = _k.formatCurrentTime, played = _k.played, onSeekMouseDownHandler = _k.onSeekMouseDownHandler, seekHandler = _k.seekHandler, seekMouseUpHandler = _k.seekMouseUpHandler, muteHandler = _k.muteHandler, volumeChangeHandler = _k.volumeChangeHandler, formatDuration = _k.formatDuration, isSubtitlesChecked = _k.isSubtitlesChecked, toggleSubtitlesCheck = _k.toggleSubtitlesCheck, isFullscreen = _k.isFullscreen, isPiPActive = _k.isPiPActive, isControlsActive = _k.isControlsActive, currentSubtitle = _k.currentSubtitle, setCurrentSubtitle = _k.setCurrentSubtitle, keyboardIndicator = _k.keyboardIndicator;
    var setupHLSSubtitleTracking = useHLSSubtitles({
        videoPlayerRef: videoPlayerRef,
        isSubtitlesChecked: isSubtitlesChecked,
        setCurrentSubtitle: setCurrentSubtitle,
    }).setupHLSSubtitleTracking;
    useEffect(function () {
        var cleanup = injectHLSSubtitleStyles();
        return cleanup;
    }, []);
    var handlePlayerReady = function () {
        var _a;
        onPlayerStart();
        setupHLSSubtitleTracking();
        var videoElement = (_a = videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.getInternalPlayer();
        if (videoElement && videoElement instanceof HTMLVideoElement) {
            videoRef.current = videoElement;
        }
    };
    var handleWrapperInteraction = function () {
        var _a;
        (_a = playerContainerRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
    };
    return (_jsxs(StyledWrapper, { tabIndex: 0, onMouseMove: mouseMoveHandler, onMouseDown: handleWrapperInteraction, onTouchStart: handleWrapperInteraction, ref: playerContainerRef, style: customStyles, onClick: function (e) { return e.stopPropagation(); }, children: [_jsxs(StyledVideoPlayerWrapper, { onClick: playPauseHandler, onDoubleClick: handleFullScreen, children: [_jsx(ReactPlayer, { url: url, ref: videoPlayerRef, className: 'react-player', width: '100%', height: '100%', playing: isPlaying, volume: volume, muted: muted, onProgress: progressHandler, onBuffer: bufferStartHandler, onBufferEnd: bufferEndHandler, onReady: handlePlayerReady, onPlay: function () { return setIsPlaying(true); }, onPause: function () { return setIsPlaying(false); }, onEnded: function () {
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
                                    renderTextTracksNatively: true,
                                },
                            },
                        } }, url), loading && (_jsx(StyledPlayerLoader, { children: _jsx(StyledLoader, {}) })), isSubtitlesChecked && currentSubtitle && (_jsx(StyledSubtitles, { "$controls": isControlsActive, children: currentSubtitle })), _jsx(KeyboardIndicator, { indicator: keyboardIndicator })] }), _jsx(StyledControlsContainer, { ref: controlRef, children: _jsx(Controls, { setVideoState: setVideoState, playbackRate: playbackRate, rewindHandler: rewindHandler, playPauseHandler: playPauseHandler, handleFastForward: handleFastForward, formatCurrentTime: formatCurrentTime, played: played, onSeekMouseDownHandler: onSeekMouseDownHandler, seekHandler: seekHandler, seekMouseUpHandler: seekMouseUpHandler, volume: volume, muted: muted, muteHandler: muteHandler, volumeChangeHandler: volumeChangeHandler, formatDuration: formatDuration, handleFullScreen: handleFullScreen, handlePictureInPicture: handlePictureInPicture, playing: playing, isSubtitlesChecked: isSubtitlesChecked, toggleSubtitlesCheck: toggleSubtitlesCheck, isFavorite: isFavorite, toggleIsFavorite: toggleFavorite, isFullscreen: isFullscreen, isPiPActive: isPiPActive, subtitle: !!subtitleUrl || ((_d = (_c = (_b = videoPlayerRef.current) === null || _b === void 0 ? void 0 : _b.getInternalPlayer()) === null || _c === void 0 ? void 0 : _c.textTracks) === null || _d === void 0 ? void 0 : _d.length) > 0, handleSkipBackward: handlePreviousVideo, handleSkipForward: handleNextVideo, isNextVideo: isNextVideo, isPreviousVideo: isPreviousVideo, showFavorite: showFavorite, showDownload: showDownload, downloadUrl: downloadUrl, downloadFileName: downloadFileName, onDownload: onDownload, showPictureInPicture: showPictureInPicture }) })] }));
};
export default VideoPlayer;
//# sourceMappingURL=Player.js.map