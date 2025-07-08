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
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { StyledWrapper, StyledPlayerLoader, StyledControlsContainer, StyledVideoPlayerWrapper, StyledLoader, StyledSubtitles, injectHLSSubtitleStyles, } from './Player.styles';
import Controls from './Controls';
import usePlayerControls from './usePlayerControls';
import { useHLSSubtitles } from 'src/components/VideoPlayer/useHlsSubtitles';
export var VideoPlayer = function (_a) {
    var _b, _c, _d;
    var customStyles = _a.customStyles, _e = _a.startTime, startTime = _e === void 0 ? 0 : _e, loading = _a.loading, setLoading = _a.setLoading, handleTrackProgress = _a.handleTrackProgress, url = _a.url, subtitleUrl = _a.subtitle, handleNextVideo = _a.handleNextVideo, handlePreviousVideo = _a.handlePreviousVideo, isNextVideo = _a.isNextVideo, isPreviousVideo = _a.isPreviousVideo, isPlaying = _a.isPlaying, setIsPlaying = _a.setIsPlaying, _f = _a.shouldPlayerBeFocusedOnSpaceClick, shouldPlayerBeFocusedOnSpaceClick = _f === void 0 ? false : _f, showFavorite = _a.showFavorite, _g = _a.isFavorite, isFavorite = _g === void 0 ? false : _g, _h = _a.toggleFavorite, toggleFavorite = _h === void 0 ? function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); } : _h;
    var videoRef = useRef(null);
    var _j = usePlayerControls({
        startTime: startTime,
        setLoading: setLoading,
        handleTrackProgress: handleTrackProgress,
        url: url,
        subtitleUrl: subtitleUrl,
        isPlaying: isPlaying,
        setIsPlaying: setIsPlaying,
        shouldPlayerBeFocusedOnSpaceClick: shouldPlayerBeFocusedOnSpaceClick,
    }), mouseMoveHandler = _j.mouseMoveHandler, playerContainerRef = _j.playerContainerRef, playPauseHandler = _j.playPauseHandler, handleFullScreen = _j.handleFullScreen, videoPlayerRef = _j.videoPlayerRef, playing = _j.playing, volume = _j.volume, muted = _j.muted, progressHandler = _j.progressHandler, bufferStartHandler = _j.bufferStartHandler, bufferEndHandler = _j.bufferEndHandler, onPlayerStart = _j.onPlayerStart, setVideoState = _j.setVideoState, playbackRate = _j.playbackRate, controlRef = _j.controlRef, rewindHandler = _j.rewindHandler, handleFastForward = _j.handleFastForward, formatCurrentTime = _j.formatCurrentTime, played = _j.played, onSeekMouseDownHandler = _j.onSeekMouseDownHandler, seekHandler = _j.seekHandler, seekMouseUpHandler = _j.seekMouseUpHandler, muteHandler = _j.muteHandler, volumeChangeHandler = _j.volumeChangeHandler, formatDuration = _j.formatDuration, isSubtitlesChecked = _j.isSubtitlesChecked, toggleSubtitlesCheck = _j.toggleSubtitlesCheck, isFullscreen = _j.isFullscreen, isControlsActive = _j.isControlsActive, currentSubtitle = _j.currentSubtitle, setCurrentSubtitle = _j.setCurrentSubtitle;
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
    return (_jsxs(StyledWrapper, { tabIndex: 0, onMouseMove: mouseMoveHandler, ref: playerContainerRef, style: customStyles, onClick: function (e) { return e.stopPropagation(); }, children: [_jsxs(StyledVideoPlayerWrapper, { onClick: playPauseHandler, onDoubleClick: handleFullScreen, children: [_jsx(ReactPlayer, { url: url, ref: videoPlayerRef, className: 'react-player', width: '100%', height: '100%', playing: isPlaying, volume: volume, muted: muted, onProgress: progressHandler, onBuffer: bufferStartHandler, onBufferEnd: bufferEndHandler, onReady: handlePlayerReady, onPlay: function () { return setIsPlaying(true); }, onPause: function () { return setIsPlaying(false); }, onEnded: function () {
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
                        } }, url), loading && (_jsx(StyledPlayerLoader, { children: _jsx(StyledLoader, {}) })), isSubtitlesChecked && currentSubtitle && (_jsx(StyledSubtitles, { "$controls": isControlsActive, children: currentSubtitle }))] }), _jsx(StyledControlsContainer, { ref: controlRef, children: _jsx(Controls, { setVideoState: setVideoState, playbackRate: playbackRate, rewindHandler: rewindHandler, playPauseHandler: playPauseHandler, handleFastForward: handleFastForward, formatCurrentTime: formatCurrentTime, played: played, onSeekMouseDownHandler: onSeekMouseDownHandler, seekHandler: seekHandler, seekMouseUpHandler: seekMouseUpHandler, volume: volume, muted: muted, muteHandler: muteHandler, volumeChangeHandler: volumeChangeHandler, formatDuration: formatDuration, handleFullScreen: handleFullScreen, playing: playing, isSubtitlesChecked: isSubtitlesChecked, toggleSubtitlesCheck: toggleSubtitlesCheck, isFavorite: isFavorite, toggleIsFavorite: toggleFavorite, isFullscreen: isFullscreen, subtitle: !!subtitleUrl || ((_d = (_c = (_b = videoPlayerRef.current) === null || _b === void 0 ? void 0 : _b.getInternalPlayer()) === null || _c === void 0 ? void 0 : _c.textTracks) === null || _d === void 0 ? void 0 : _d.length) > 0, handleSkipBackward: handlePreviousVideo, handleSkipForward: handleNextVideo, isNextVideo: isNextVideo, isPreviousVideo: isPreviousVideo, showFavorite: showFavorite }) })] }));
};
export default VideoPlayer;
//# sourceMappingURL=Player.js.map