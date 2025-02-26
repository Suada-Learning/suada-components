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
import { VideoPlayer } from './VideoPlayer';
export default {
    title: 'Components/VideoPlayer',
    component: VideoPlayer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
var Template = function (args) { return _jsx(VideoPlayer, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    url: 'https://stream-akamai.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8',
};
//# sourceMappingURL=VideoPlayer.stories.js.map