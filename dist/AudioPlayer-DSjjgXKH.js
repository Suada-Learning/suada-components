'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');

var AudioPlayer = function AudioPlayer(props) {
  return jsxRuntime.jsxRuntimeExports.jsx("audio", {
    controls: true,
    autoPlay: true,
    children: jsxRuntime.jsxRuntimeExports.jsx("source", {
      src: props.url
    })
  });
};

exports.AudioPlayer = AudioPlayer;
//# sourceMappingURL=AudioPlayer-DSjjgXKH.js.map
