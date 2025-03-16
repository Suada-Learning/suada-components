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
import { jsx as _jsx } from "react/jsx-runtime";
import { AudioPlayer } from './AudioPlayer';
export default {
    title: 'Components/AudioPLayer',
    component: AudioPlayer,
    tags: ['autodocs', 'audio-player'],
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
var Template = function (args) { return _jsx(AudioPlayer, __assign({}, args)); };
export var DefaultAudioPlayer = Template.bind({});
DefaultAudioPlayer.args = {
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
};
//# sourceMappingURL=AudioPlayer.stories.js.map