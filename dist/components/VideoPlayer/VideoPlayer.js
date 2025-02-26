var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
// disabled eslint for this file as react-player is not fully compatible with typescript
/* eslint-disable */
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import styled from 'styled-components';
export var VideoPlayer = function (props) {
    var player = useRef();
    var hlsRef = useRef();
    useEffect(function () {
        var video = player.current;
        if (Hls.isSupported()) {
            hlsRef.current = new Hls();
            hlsRef.current.attachMedia(video);
            hlsRef.current.on(Hls.Events.MEDIA_ATTACHED, function () {
                hlsRef.current.loadSource(props.url);
                // hlsRef.current.loadLevel = level
                hlsRef.current.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                    hlsRef.current.autoLevelEnabled = true;
                });
            });
        }
    }, [props.url]);
    return (_jsx(VideoContainer, { children: _jsx(StyledVideo
        // ref={player}
        , { 
            // ref={player}
            autoPlay: true, controls: true, src: props.url }) }));
};
var VideoContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledVideo = styled.video(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 660px;\n  height: 380px;\n  outline: none;\n"], ["\n  width: 660px;\n  height: 380px;\n  outline: none;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=VideoPlayer.js.map