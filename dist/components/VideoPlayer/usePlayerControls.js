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
import { useState, useRef, useCallback, useEffect } from 'react';
import { parseVTT } from './parseVtt';
import { FormatSecondsToTimeString } from './timeConversion';
import useEventListener from './useEventListener';
var count = 0;
var defaultVideoState = {
    muted: false,
    volume: 0.3,
    prevVolume: 0.3,
    playbackRate: 1.0,
    played: 0.0,
    seeking: false,
    buffer: true,
};
function usePlayerControls(_a) {
    var _this = this;
    var _b = _a.startTime, startTime = _b === void 0 ? 0 : _b, setLoading = _a.setLoading, handleTrackProgress = _a.handleTrackProgress, url = _a.url, subtitleUrl = _a.subtitleUrl, setIsPlaying = _a.setIsPlaying, isPlaying = _a.isPlaying, shouldPlayerBeFocusedOnSpaceClick = _a.shouldPlayerBeFocusedOnSpaceClick;
    var _c = useState(false), startPlayed = _c[0], setStartPlayed = _c[1];
    var _d = useState(defaultVideoState), videoState = _d[0], setVideoState = _d[1];
    var _e = useState(false), isSubtitlesChecked = _e[0], setIsSubtitlesChecked = _e[1];
    var _f = useState(false), isFullscreen = _f[0], setIsFullscreen = _f[1];
    var _g = useState(false), isControlsActive = _g[0], setIsControlsActive = _g[1];
    var videoPlayerRef = useRef(null);
    var controlRef = useRef(null);
    var playerContainerRef = useRef(null);
    var _h = useState([]), subtitles = _h[0], setSubtitles = _h[1];
    var _j = useState(''), currentSubtitle = _j[0], setCurrentSubtitle = _j[1];
    var lastSubtitleIndexRef = useRef(null);
    var lastPlaybackTimeRef = useRef(0);
    var lastCallTimeRef = useRef(Date.now());
    var muted = videoState.muted, volume = videoState.volume, prevVolume = videoState.prevVolume, playbackRate = videoState.playbackRate, played = videoState.played, seeking = videoState.seeking;
    var currentTime = videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : 0;
    var duration = videoPlayerRef.current ? videoPlayerRef.current.getDuration() : 0;
    var formatCurrentTime = FormatSecondsToTimeString(currentTime);
    var formatDuration = FormatSecondsToTimeString(duration);
    useEffect(function () {
        fetch(subtitleUrl)
            .then(function (response) { return response.text(); })
            .then(function (content) {
            var parsedSubtitles = parseVTT(content);
            setSubtitles(parsedSubtitles);
        });
    }, [subtitleUrl]);
    useEffect(function () {
        var handleFullscreenChange = function () {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return function () {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);
    useEffect(function () {
        setStartPlayed(false);
    }, [url]);
    var playPauseHandler = useCallback(function () {
        setIsPlaying(function (prev) { return !prev; });
    }, [setIsPlaying]);
    var rewindHandler = useCallback(function () {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
        }
    }, [videoPlayerRef]);
    var handleFastForward = useCallback(function () {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
        }
    }, [videoPlayerRef]);
    var progressHandler = useCallback(function (state) { return __awaiter(_this, void 0, void 0, function () {
        var currentSubtitleEntry, i, sub, i, sub, currentTime_1, now;
        return __generator(this, function (_a) {
            if (count > 2) {
                if (controlRef.current) {
                    controlRef.current.style.visibility = 'hidden';
                    setIsControlsActive(false);
                }
            }
            else if (controlRef.current &&
                controlRef.current.style.visibility === 'visible' &&
                isControlsActive) {
                count += 1;
            }
            if (lastSubtitleIndexRef.current !== null) {
                if (state.playedSeconds > lastPlaybackTimeRef.current) {
                    // Searching forward
                    for (i = lastSubtitleIndexRef.current; i < subtitles.length; i++) {
                        sub = subtitles[i];
                        if (state.playedSeconds >= sub.start && state.playedSeconds <= sub.end) {
                            currentSubtitleEntry = sub;
                            lastSubtitleIndexRef.current = i;
                            break;
                        }
                    }
                }
                else {
                    // Searching backward
                    for (i = lastSubtitleIndexRef.current; i >= 0; i--) {
                        sub = subtitles[i];
                        if (state.playedSeconds >= sub.start && state.playedSeconds <= sub.end) {
                            currentSubtitleEntry = sub;
                            lastSubtitleIndexRef.current = i;
                            break;
                        }
                    }
                }
            }
            if (!currentSubtitleEntry) {
                currentSubtitleEntry = subtitles.find(function (sub) { return state.playedSeconds >= sub.start && state.playedSeconds <= sub.end; });
                if (currentSubtitleEntry) {
                    lastSubtitleIndexRef.current = subtitles.indexOf(currentSubtitleEntry);
                }
            }
            lastPlaybackTimeRef.current = state.playedSeconds;
            if (currentSubtitleEntry) {
                setCurrentSubtitle(currentSubtitleEntry.text);
            }
            else {
                setCurrentSubtitle(''); // Clear subtitle if none should be displayed
                lastSubtitleIndexRef.current = null;
            }
            if (!seeking) {
                setVideoState(function (prev) { return (__assign(__assign({}, prev), state)); });
                currentTime_1 = Math.floor(state.playedSeconds);
                now = Date.now();
                // Check if 8 seconds have passed since the last API call
                if (now - lastCallTimeRef.current > 8000) {
                    lastCallTimeRef.current = now;
                    handleTrackProgress(currentTime_1);
                }
            }
            return [2 /*return*/];
        });
    }); }, [seeking, handleTrackProgress, isControlsActive, subtitles]);
    var seekHandler = function (e) {
        var v = parseFloat(e.target.value) / 100;
        setVideoState(function (prev) { return (__assign(__assign({}, prev), { played: v })); });
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seekTo(v);
        }
    };
    var seekMouseUpHandler = function (e) {
        setVideoState(function (prev) { return (__assign(__assign({}, prev), { seeking: false })); });
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seekTo(videoState.played);
        }
    };
    var volumeChangeHandler = function (e) {
        var volume = e.target.value;
        var newVolume = parseFloat(volume) / 100;
        setVideoState(function (prev) { return (__assign(__assign({}, prev), { volume: newVolume, muted: newVolume === 0, prevVolume: newVolume === 0 ? 0.1 : newVolume })); });
    };
    var muteHandler = function () {
        if (videoState.muted) {
            setVideoState(function (prev) { return (__assign(__assign({}, prev), { muted: false, volume: prevVolume })); });
        }
        else {
            setVideoState(function (prev) { return (__assign(__assign({}, prev), { muted: true, prevVolume: volume, volume: 0 })); });
        }
    };
    var onSeekMouseDownHandler = function (e) {
        setVideoState(function (prev) { return (__assign(__assign({}, prev), { seeking: true })); });
    };
    var mouseMoveHandler = function () {
        if (controlRef.current) {
            controlRef.current.style.visibility = 'visible';
            setIsControlsActive(true);
        }
        count = 0;
    };
    var bufferStartHandler = useCallback(function () {
        setVideoState(function (prev) { return (__assign(__assign({}, prev), { buffer: true })); });
    }, [setVideoState]);
    var bufferEndHandler = useCallback(function () {
        if (startPlayed) {
            setVideoState(function (prev) { return (__assign(__assign({}, prev), { buffer: false })); });
            setIsPlaying(true);
        }
    }, [startPlayed, setVideoState, setIsPlaying]);
    var onPlayerStart = useCallback(function () {
        if (videoPlayerRef.current && !startPlayed) {
            videoPlayerRef.current.seekTo(startTime);
            setStartPlayed(true);
        }
        setLoading(false);
    }, [startTime, startPlayed, setLoading]);
    var handleFullScreen = function () {
        var playerContainer = playerContainerRef.current;
        if (!playerContainer) {
            return;
        }
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(console.error);
        }
        else {
            playerContainer.requestFullscreen().catch(console.error);
        }
    };
    var handleKeyDown = useCallback(function (event) {
        if ('code' in event) {
            switch (event.code) {
                case 'ArrowLeft':
                    event.preventDefault();
                    rewindHandler();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    handleFastForward();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    setVideoState(function (prev) {
                        var newVolume = Math.min(prev.volume + 0.1, 1);
                        return __assign(__assign({}, prev), { volume: newVolume, muted: newVolume === 0, prevVolume: newVolume === 0 ? 0.1 : newVolume });
                    });
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    setVideoState(function (prev) {
                        var newVolume = Math.max(prev.volume - 0.1, 0);
                        return __assign(__assign({}, prev), { volume: newVolume, muted: newVolume === 0, prevVolume: newVolume === 0 ? 0.1 : newVolume });
                    });
                    break;
            }
        }
    }, [rewindHandler, handleFastForward, setVideoState]);
    var handleSpaceKeyDown = useCallback(function (event) {
        if ('code' in event) {
            switch (event.code) {
                case 'Space':
                    if (event.target &&
                        (event.target instanceof HTMLInputElement ||
                            event.target instanceof HTMLTextAreaElement)) {
                        break;
                    }
                    event.preventDefault();
                    playPauseHandler();
                    break;
            }
        }
    }, [playPauseHandler]);
    var isPlayerFocused = function () {
        var _a;
        var focusedElement = document.activeElement;
        return !!((_a = playerContainerRef.current) === null || _a === void 0 ? void 0 : _a.contains(focusedElement));
    };
    var toggleSubtitlesCheck = function () { return setIsSubtitlesChecked(function (prev) { return !prev; }); };
    useEventListener('keydown', handleKeyDown, playerContainerRef, isPlayerFocused);
    useEventListener('keydown', handleSpaceKeyDown, shouldPlayerBeFocusedOnSpaceClick ? playerContainerRef : null, shouldPlayerBeFocusedOnSpaceClick ? isPlayerFocused : undefined);
    return {
        mouseMoveHandler: mouseMoveHandler,
        playerContainerRef: playerContainerRef,
        playPauseHandler: playPauseHandler,
        handleFullScreen: handleFullScreen,
        videoPlayerRef: videoPlayerRef,
        volume: volume,
        muted: muted,
        progressHandler: progressHandler,
        bufferStartHandler: bufferStartHandler,
        bufferEndHandler: bufferEndHandler,
        onPlayerStart: onPlayerStart,
        setVideoState: setVideoState,
        playbackRate: playbackRate,
        controlRef: controlRef,
        rewindHandler: rewindHandler,
        handleFastForward: handleFastForward,
        formatCurrentTime: formatCurrentTime,
        played: played,
        onSeekMouseDownHandler: onSeekMouseDownHandler,
        seekHandler: seekHandler,
        seekMouseUpHandler: seekMouseUpHandler,
        muteHandler: muteHandler,
        volumeChangeHandler: volumeChangeHandler,
        formatDuration: formatDuration,
        isSubtitlesChecked: isSubtitlesChecked,
        toggleSubtitlesCheck: toggleSubtitlesCheck,
        isFullscreen: isFullscreen,
        isControlsActive: isControlsActive,
        currentSubtitle: currentSubtitle,
        playing: isPlaying,
    };
}
export default usePlayerControls;
//# sourceMappingURL=usePlayerControls.js.map