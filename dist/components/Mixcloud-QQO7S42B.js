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

var Mixcloud_1;
var hasRequiredMixcloud;

function requireMixcloud () {
	if (hasRequiredMixcloud) return Mixcloud_1;
	hasRequiredMixcloud = 1;
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
	var Mixcloud_exports = {};
	__export(Mixcloud_exports, {
	  default: () => Mixcloud
	});
	Mixcloud_1 = __toCommonJS(Mixcloud_exports);
	var import_react = __toESM(React);
	var import_utils = /*@__PURE__*/ index.requireUtils();
	var import_patterns = /*@__PURE__*/ index.requirePatterns();
	const SDK_URL = "https://widget.mixcloud.com/media/js/widgetApi.js";
	const SDK_GLOBAL = "Mixcloud";
	class Mixcloud extends import_react.Component {
	  constructor() {
	    super(...arguments);
	    __publicField(this, "callPlayer", import_utils.callPlayer);
	    __publicField(this, "duration", null);
	    __publicField(this, "currentTime", null);
	    __publicField(this, "secondsLoaded", null);
	    __publicField(this, "mute", () => {
	    });
	    __publicField(this, "unmute", () => {
	    });
	    __publicField(this, "ref", (iframe) => {
	      this.iframe = iframe;
	    });
	  }
	  componentDidMount() {
	    this.props.onMount && this.props.onMount(this);
	  }
	  load(url) {
	    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Mixcloud2) => {
	      this.player = Mixcloud2.PlayerWidget(this.iframe);
	      this.player.ready.then(() => {
	        this.player.events.play.on(this.props.onPlay);
	        this.player.events.pause.on(this.props.onPause);
	        this.player.events.ended.on(this.props.onEnded);
	        this.player.events.error.on(this.props.error);
	        this.player.events.progress.on((seconds, duration) => {
	          this.currentTime = seconds;
	          this.duration = duration;
	        });
	        this.props.onReady();
	      });
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
	    this.callPlayer("seek", seconds);
	    if (!keepPlaying) {
	      this.pause();
	    }
	  }
	  setVolume(fraction) {
	  }
	  getDuration() {
	    return this.duration;
	  }
	  getCurrentTime() {
	    return this.currentTime;
	  }
	  getSecondsLoaded() {
	    return null;
	  }
	  render() {
	    const { url, config } = this.props;
	    const id = url.match(import_patterns.MATCH_URL_MIXCLOUD)[1];
	    const style = {
	      width: "100%",
	      height: "100%"
	    };
	    const query = (0, import_utils.queryString)({
	      ...config.options,
	      feed: `/${id}/`
	    });
	    return /* @__PURE__ */ import_react.default.createElement(
	      "iframe",
	      {
	        key: id,
	        ref: this.ref,
	        style,
	        src: `https://www.mixcloud.com/widget/iframe/?${query}`,
	        frameBorder: "0",
	        allow: "autoplay"
	      }
	    );
	  }
	}
	__publicField(Mixcloud, "displayName", "Mixcloud");
	__publicField(Mixcloud, "canPlay", import_patterns.canPlay.mixcloud);
	__publicField(Mixcloud, "loopOnEnded", true);
	return Mixcloud_1;
}

var MixcloudExports = /*@__PURE__*/ requireMixcloud();
var Mixcloud = /*@__PURE__*/index.getDefaultExportFromCjs(MixcloudExports);

var Mixcloud$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: Mixcloud
}, [MixcloudExports]);

exports.Mixcloud = Mixcloud$1;
