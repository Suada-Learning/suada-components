import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// disabled eslint for this file as react-player is not fully compatible with typescript
/* eslint-disable */
// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Hls from 'hls.js';
import { Player, ControlBar, PlaybackRateMenuButton, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import { ButtonWrapper, Container, QualityButtonWrapper, 
// StyledQualityMenu,
StyledQualityMenuItem, 
// StyledVideo,
SubtitlesMenuContainer, DownloadWrapper, } from './styled-components';
import { useTranslation } from 'react-i18next';
import useOutsideClick from '../../helperFunctions/useOutsideClick';
import { ClosedCaptionIcon, CloudDownloadIcon } from '../../icons';
var SubtitlesButton = function (_a) {
    var subtitles = _a.subtitles, setSubtitles = _a.setSubtitles;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var ref = useRef();
    var t = useTranslation().t;
    useOutsideClick(ref, function () { return open && setOpen(false); });
    return (_jsxs(QualityButtonWrapper, { ref: ref, children: [_jsx(ButtonWrapper, { onClick: function () { return setOpen(!open); }, children: _jsx(ClosedCaptionIcon, { fontSize: 'small' }) }), open && (_jsxs(SubtitlesMenuContainer, { children: [_jsx(StyledQualityMenuItem, { onClick: function () { return setSubtitles('off'); }, color: subtitles === 'off', children: t('general.off') }), _jsx(StyledQualityMenuItem, { onClick: function () { return setSubtitles('on'); }, color: subtitles === 'on', children: t('general.on') })] }))] }));
};
// commented out Quality menu for now as we only playing 720p hls videos
// const QualityMenu = ({ setQuality, quality }) => {
//   const [open, setOpen] = useState(false)
//   const ref = useRef()
//   const selectOptions = (i) => {
//     setQuality(i)
//   }
//   useOutsideClick(ref, () => open && setOpen(false))
//   return (
//     <QualityButtonWrapper ref={ref}>
//       <ButtonWrapper onClick={() => setOpen(!open)}>
//         {quality === 2 ? (
//           <HighQualityIcon fontSize="small" />
//         ) : (
//           <HdIcon fontSize="small" />
//         )}
//       </ButtonWrapper>
//       {open && (
//         <StyledQualityMenu>
//           {['360p', '720p', '1080p'].map((item, index) => (
//             <StyledQualityMenuItem
//               key=""
//               onClick={() => selectOptions(index)}
//               color={quality === index}
//             >
//               {item}
//             </StyledQualityMenuItem>
//           ))}
//         </StyledQualityMenu>
//       )}
//     </QualityButtonWrapper>
//   )
// }
var HlsVideoSrc = function (props) {
    var hlsRef = useRef();
    var video = props.video, url = props.url, type = props.type, showSubtitles = props.showSubtitles;
    useEffect(function () {
        if (!Hls.isSupported())
            return;
        hlsRef.current = new Hls();
        hlsRef.current.loadSource(url);
        hlsRef.current.attachMedia(video);
        hlsRef.current.subtitleDisplay = false;
    }, [url]);
    useEffect(function () {
        if (!hlsRef)
            return;
        hlsRef.current.subtitleDisplay = showSubtitles === 'on';
    }, [showSubtitles]);
    return (_jsx(_Fragment, { children: _jsx("source", { src: url, type: type || 'application/x-mpegURL' }) }));
};
export var VideoPlayer = function (props) {
    var _a = useState('off'), subtitles = _a[0], setSubtitles = _a[1];
    var ref = useRef();
    useEffect(function () {
        ref.current.playbackRate = 2;
        ref.current.forceUpdate();
    }, []);
    return (_jsx(Container, { children: _jsxs(Player, { ref: ref, width: 700, height: 400, poster: props.thumbnail, crossOrigin: 'anonymous', children: [_jsx(BigPlayButton, { position: 'center' }), _jsx(HlsVideoSrc, { isVideoChild: true, video: ref.current, url: props.url, showSubtitles: subtitles }), _jsxs(ControlBar, { children: [_jsx(PlaybackRateMenuButton, { rates: [3, 2, 1.6, 1.2, 1, 0.5, 0.1], order: 7 }), props.subtitle && (_jsx(SubtitlesButton, { order: 7, setSubtitles: setSubtitles, subtitles: subtitles, list: props.subtitle })), props.downloadLink && (_jsx(DownloadWrapper, { order: 7, children: _jsx("a", { href: props.downloadLink, rel: 'noreferrer', target: '_blank', download: true, children: _jsx(CloudDownloadIcon, { fontSize: 'small' }) }) }))] })] }) }));
};
HlsVideoSrc.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    video: PropTypes.object,
    showSubtitles: PropTypes.string,
};
VideoPlayer.propTypes = {
    url: PropTypes.string,
    thumbnail: PropTypes.string,
    subtitle: PropTypes.string,
    downloadLink: PropTypes.string,
};
SubtitlesButton.propTypes = {
    setSubtitles: PropTypes.func,
    subtitles: PropTypes.string,
};
//# sourceMappingURL=Player.js.map