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
import { VideoPlayer } from './Player';
export default {
    title: 'Components/VideoPlayer',
    component: VideoPlayer,
    tags: ['autodocs', 'video-player'],
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
var Template = function (args) { return _jsx(VideoPlayer, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    url: 'https://dl29bi0xnzte0.cloudfront.net/lesson-562ceec7-ece7-4b00-92a7-aee4055d08aa/master.m3u8',
    thumbnail: 'https://via.placeholder.com/700x400',
    // subtitle: 'off',
    // downloadLink: 'https://example.com/sample-video.mp4',
};
export var WithoutSubtitles = Template.bind({});
WithoutSubtitles.args = __assign(__assign({}, Default.args), { subtitle: 'off' });
export var WithoutDownload = Template.bind({});
WithoutDownload.args = __assign(__assign({}, Default.args), { downloadLink: '' });
//# sourceMappingURL=VideoPlayer.stories.js.map