import { useCallback, useEffect, useRef } from 'react';
export var useHLSSubtitles = function (_a) {
    var videoPlayerRef = _a.videoPlayerRef, isSubtitlesChecked = _a.isSubtitlesChecked, setCurrentSubtitle = _a.setCurrentSubtitle;
    var hlsSubtitleTrackRef = useRef(null);
    var extractHLSSubtitleText = useCallback(function () {
        var _a;
        var videoElement = (_a = videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.getInternalPlayer();
        if (!videoElement || !videoElement.textTracks)
            return;
        var _loop_1 = function (i) {
            var track = videoElement.textTracks[i];
            if (track.kind === 'subtitles' || track.kind === 'captions') {
                hlsSubtitleTrackRef.current = track;
                var handleCueChange = function () {
                    if (isSubtitlesChecked && track.activeCues && track.activeCues.length > 0) {
                        var currentCue = track.activeCues[0];
                        if (currentCue && currentCue.text) {
                            setCurrentSubtitle(currentCue.text);
                        }
                    }
                    else if (isSubtitlesChecked) {
                        setCurrentSubtitle('');
                    }
                };
                track.removeEventListener('cuechange', handleCueChange);
                track.addEventListener('cuechange', handleCueChange);
                track.mode = isSubtitlesChecked ? 'showing' : 'hidden';
                return "break";
            }
        };
        for (var i = 0; i < videoElement.textTracks.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    }, [isSubtitlesChecked, setCurrentSubtitle, videoPlayerRef]);
    var setupHLSSubtitleTracking = useCallback(function () {
        var _a;
        var videoElement = (_a = videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.getInternalPlayer();
        if (!videoElement)
            return;
        videoElement.classList.add('hls-video-player');
        var checkTextTracks = function (attempt) {
            if (attempt === void 0) { attempt = 0; }
            var textTracks = videoElement.textTracks;
            if (textTracks && textTracks.length > 0) {
                extractHLSSubtitleText();
            }
            else if (attempt < 5) {
                setTimeout(function () { return checkTextTracks(attempt + 1); }, 300 * (attempt + 1));
            }
        };
        checkTextTracks();
        videoElement.addEventListener('loadedmetadata', function () {
            checkTextTracks();
        });
    }, [extractHLSSubtitleText, videoPlayerRef]);
    useEffect(function () {
        extractHLSSubtitleText();
    }, [isSubtitlesChecked, extractHLSSubtitleText]);
    useEffect(function () {
        var _a;
        var videoElement = (_a = videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.getInternalPlayer();
        if (videoElement && videoElement.textTracks && videoElement.textTracks.length > 0) {
            extractHLSSubtitleText();
        }
    }, [videoPlayerRef.current, extractHLSSubtitleText]);
    return {
        extractHLSSubtitleText: extractHLSSubtitleText,
        setupHLSSubtitleTracking: setupHLSSubtitleTracking,
    };
};
//# sourceMappingURL=useHlsSubtitles.js.map