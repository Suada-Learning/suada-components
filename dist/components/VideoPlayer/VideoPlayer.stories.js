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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { VideoPlayer } from './Player';
var meta = {
    title: 'Components/VideoPlayer',
    component: VideoPlayer,
    parameters: {
        layout: 'centered',
        // Disable docs to avoid ref-related errors
        docs: {
            disable: true,
        },
    },
    decorators: [
        function (Story) { return (
        // Add error boundary for storybook
        _jsx("div", { style: { width: '800px', height: '450px' }, children: Story() })); },
    ],
    tags: ['autodocs'],
    argTypes: {
        url: {
            control: 'text',
            description: 'Video URL to play',
        },
        subtitle: {
            control: 'text',
            description: 'Subtitle URL',
        },
        startTime: {
            control: { type: 'number', min: 0, step: 10 },
            description: 'Start time in seconds',
            defaultValue: 0,
        },
        isPlaying: {
            control: 'boolean',
            description: 'Controls whether the video is playing',
            defaultValue: false,
        },
        shouldPlayerBeFocusedOnSpaceClick: {
            control: 'boolean',
            description: 'Controls focus behavior on space click',
            defaultValue: false,
        },
        customStyles: {
            control: 'object',
            description: 'Custom styles for the player wrapper',
        },
        showFavorite: {
            control: 'boolean',
            description: 'Show favorite button',
            defaultValue: true,
        },
        isFavorite: {
            control: 'boolean',
            description: 'Is video marked as favorite',
            defaultValue: false,
        },
        isNextVideo: {
            control: 'boolean',
            description: 'Is there a next video available',
            defaultValue: true,
        },
        isPreviousVideo: {
            control: 'boolean',
            description: 'Is there a previous video available',
            defaultValue: true,
        },
    },
};
export default meta;
// Wrapper component to handle state
var PlayerWrapper = function (args) {
    var _a = useState(args.isPlaying || false), isPlaying = _a[0], setIsPlaying = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(args.isFavorite || false), isFavorite = _c[0], setIsFavorite = _c[1];
    // Ensure we have default handlers for everything
    var handleTrackProgress = function (currentTime) {
        console.log('Track progress:', currentTime);
    };
    var handleNextVideo = function () {
        console.log('Next video requested');
    };
    var handlePreviousVideo = function () {
        console.log('Previous video requested');
    };
    var toggleFavorite = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setIsFavorite(!isFavorite);
            console.log('Favorite toggled to:', !isFavorite);
            return [2 /*return*/, Promise.resolve()];
        });
    }); };
    // Provide all required props with defaults
    var allProps = {
        url: args.url || 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        startTime: args.startTime || 0,
        loading: loading,
        setLoading: setLoading,
        handleTrackProgress: handleTrackProgress,
        subtitle: args.subtitle || '',
        handleNextVideo: args.isNextVideo ? handleNextVideo : undefined,
        handlePreviousVideo: args.isPreviousVideo ? handlePreviousVideo : undefined,
        isNextVideo: !!args.isNextVideo,
        isPreviousVideo: !!args.isPreviousVideo,
        isPlaying: isPlaying,
        setIsPlaying: setIsPlaying,
        shouldPlayerBeFocusedOnSpaceClick: args.shouldPlayerBeFocusedOnSpaceClick || false,
        showFavorite: !!args.showFavorite,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
        customStyles: args.customStyles || { borderRadius: '8px', overflow: 'hidden' },
    };
    return _jsx(VideoPlayer, __assign({}, allProps));
};
// Default story
export var Default = {
    render: function (args) { return _jsx(PlayerWrapper, __assign({}, args)); },
    args: {
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        startTime: 0,
        shouldPlayerBeFocusedOnSpaceClick: true,
        showFavorite: true,
        isNextVideo: true,
        isPreviousVideo: true,
        customStyles: { borderRadius: '8px', overflow: 'hidden' },
    },
};
// With Subtitles
export var WithSubtitles = {
    render: function (args) { return _jsx(PlayerWrapper, __assign({}, args)); },
    args: __assign(__assign({}, Default.args), { subtitle: 'https://example.com/subtitles.vtt' }),
};
// Playing State
export var Playing = {
    render: function (args) { return _jsx(PlayerWrapper, __assign({}, args)); },
    args: __assign(__assign({}, Default.args), { isPlaying: true }),
};
// Favorited
export var Favorited = {
    render: function (args) { return _jsx(PlayerWrapper, __assign({}, args)); },
    args: __assign(__assign({}, Default.args), { isFavorite: true }),
};
// No Controls
export var NoControls = {
    render: function (args) { return _jsx(PlayerWrapper, __assign({}, args)); },
    args: __assign(__assign({}, Default.args), { isNextVideo: false, isPreviousVideo: false, showFavorite: false }),
};
//# sourceMappingURL=VideoPlayer.stories.js.map