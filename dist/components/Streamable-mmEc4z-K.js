'use strict';

var index = require('./index-BN-pplrU.js');
var React = require('react');

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

var Streamable_1;
var hasRequiredStreamable;

function requireStreamable () {
	if (hasRequiredStreamable) return Streamable_1;
	hasRequiredStreamable = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var __publicField = (obj, key, value) => {
	  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	var Streamable_exports = {};
	__export(Streamable_exports, {
	  default: () => Streamable
	});
	Streamable_1 = __toCommonJS(Streamable_exports);
	var import_react = __toESM(React);
	var import_utils = /*@__PURE__*/ index.requireUtils();
	var import_patterns = /*@__PURE__*/ index.requirePatterns();
	const SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
	const SDK_GLOBAL = "playerjs";
	class Streamable extends import_react.Component {
	  constructor() {
	    super(...arguments);
	    __publicField(this, "callPlayer", import_utils.callPlayer);
	    __publicField(this, "duration", null);
	    __publicField(this, "currentTime", null);
	    __publicField(this, "secondsLoaded", null);
	    __publicField(this, "mute", () => {
	      this.callPlayer("mute");
	    });
	    __publicField(this, "unmute", () => {
	      this.callPlayer("unmute");
	    });
	    __publicField(this, "ref", (iframe) => {
	      this.iframe = iframe;
	    });
	  }
	  componentDidMount() {
	    this.props.onMount && this.props.onMount(this);
	  }
	  load(url) {
	    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((playerjs) => {
	      if (!this.iframe)
	        return;
	      this.player = new playerjs.Player(this.iframe);
	      this.player.setLoop(this.props.loop);
	      this.player.on("ready", this.props.onReady);
	      this.player.on("play", this.props.onPlay);
	      this.player.on("pause", this.props.onPause);
	      this.player.on("seeked", this.props.onSeek);
	      this.player.on("ended", this.props.onEnded);
	      this.player.on("error", this.props.onError);
	      this.player.on("timeupdate", ({ duration, seconds }) => {
	        this.duration = duration;
	        this.currentTime = seconds;
	      });
	      this.player.on("buffered", ({ percent }) => {
	        if (this.duration) {
	          this.secondsLoaded = this.duration * percent;
	        }
	      });
	      if (this.props.muted) {
	        this.player.mute();
	      }
	    }, this.props.onError);
	  }
	  play() {
	    this.callPlayer("play");
	  }
	  pause() {
	    this.callPlayer("pause");
	  }
	  stop() {
	  }
	  seekTo(seconds, keepPlaying = true) {
	    this.callPlayer("setCurrentTime", seconds);
	    if (!keepPlaying) {
	      this.pause();
	    }
	  }
	  setVolume(fraction) {
	    this.callPlayer("setVolume", fraction * 100);
	  }
	  setLoop(loop) {
	    this.callPlayer("setLoop", loop);
	  }
	  getDuration() {
	    return this.duration;
	  }
	  getCurrentTime() {
	    return this.currentTime;
	  }
	  getSecondsLoaded() {
	    return this.secondsLoaded;
	  }
	  render() {
	    const id = this.props.url.match(import_patterns.MATCH_URL_STREAMABLE)[1];
	    const style = {
	      width: "100%",
	      height: "100%"
	    };
	    return /* @__PURE__ */ import_react.default.createElement(
	      "iframe",
	      {
	        ref: this.ref,
	        src: `https://streamable.com/o/${id}`,
	        frameBorder: "0",
	        scrolling: "no",
	        style,
	        allow: "encrypted-media; autoplay; fullscreen;"
	      }
	    );
	  }
	}
	__publicField(Streamable, "displayName", "Streamable");
	__publicField(Streamable, "canPlay", import_patterns.canPlay.streamable);
	return Streamable_1;
}

var StreamableExports = /*@__PURE__*/ requireStreamable();
var Streamable = /*@__PURE__*/index.getDefaultExportFromCjs(StreamableExports);

var Streamable$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: Streamable
}, [StreamableExports]);

exports.Streamable = Streamable$1;
