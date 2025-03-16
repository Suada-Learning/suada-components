import { jsx as _jsx } from "react/jsx-runtime";
export var AudioPlayer = function (props) {
    return (_jsx("audio", { controls: true, autoPlay: true, children: _jsx("source", { src: props.url }) }));
};
//# sourceMappingURL=AudioPlayer.js.map