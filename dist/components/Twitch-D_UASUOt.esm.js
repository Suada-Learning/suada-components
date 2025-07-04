import { r as requireUtils, a as requirePatterns, g as getDefaultExportFromCjs } from './index-TcbUwzVq.esm.js';
import React__default from 'react';

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

var Twitch_1;
var hasRequiredTwitch;

function requireTwitch () {
	if (hasRequiredTwitch) return Twitch_1;
	hasRequiredTwitch = 1;
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
	var Twitch_exports = {};
	__export(Twitch_exports, {
	  default: () => Twitch
	});
	Twitch_1 = __toCommonJS(Twitch_exports);
	var import_react = __toESM(React__default);
	var import_utils = /*@__PURE__*/ requireUtils();
	var import_patterns = /*@__PURE__*/ requirePatterns();
	const SDK_URL = "https://player.twitch.tv/js/embed/v1.js";
	const SDK_GLOBAL = "Twitch";
	const PLAYER_ID_PREFIX = "twitch-player-";
	class Twitch extends import_react.Component {
	  constructor() {
	    super(...arguments);
	    __publicField(this, "callPlayer", import_utils.callPlayer);
	    __publicField(this, "playerID", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);
	    __publicField(this, "mute", () => {
	      this.callPlayer("setMuted", true);
	    });
	    __publicField(this, "unmute", () => {
	      this.callPlayer("setMuted", false);
	    });
	  }
	  componentDidMount() {
	    this.props.onMount && this.props.onMount(this);
	  }
	  load(url, isReady) {
	    const { playsinline, onError, config, controls } = this.props;
	    const isChannel = import_patterns.MATCH_URL_TWITCH_CHANNEL.test(url);
	    const id = isChannel ? url.match(import_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(import_patterns.MATCH_URL_TWITCH_VIDEO)[1];
	    if (isReady) {
	      if (isChannel) {
	        this.player.setChannel(id);
	      } else {
	        this.player.setVideo("v" + id);
	      }
	      return;
	    }
	    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Twitch2) => {
	      this.player = new Twitch2.Player(this.playerID, {
	        video: isChannel ? "" : id,
	        channel: isChannel ? id : "",
	        height: "100%",
	        width: "100%",
	        playsinline,
	        autoplay: this.props.playing,
	        muted: this.props.muted,
	        // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
	        controls: isChannel ? true : controls,
	        time: (0, import_utils.parseStartTime)(url),
	        ...config.options
	      });
	      const { READY, PLAYING, PAUSE, ENDED, ONLINE, OFFLINE, SEEK } = Twitch2.Player;
	      this.player.addEventListener(READY, this.props.onReady);
	      this.player.addEventListener(PLAYING, this.props.onPlay);
	      this.player.addEventListener(PAUSE, this.props.onPause);
	      this.player.addEventListener(ENDED, this.props.onEnded);
	      this.player.addEventListener(SEEK, this.props.onSeek);
	      this.player.addEventListener(ONLINE, this.props.onLoaded);
	      this.player.addEventListener(OFFLINE, this.props.onLoaded);
	    }, onError);
	  }
	  play() {
	    this.callPlayer("play");
	  }
	  pause() {
	    this.callPlayer("pause");
	  }
	  stop() {
	    this.callPlayer("pause");
	  }
	  seekTo(seconds, keepPlaying = true) {
	    this.callPlayer("seek", seconds);
	    if (!keepPlaying) {
	      this.pause();
	    }
	  }
	  setVolume(fraction) {
	    this.callPlayer("setVolume", fraction);
	  }
	  getDuration() {
	    return this.callPlayer("getDuration");
	  }
	  getCurrentTime() {
	    return this.callPlayer("getCurrentTime");
	  }
	  getSecondsLoaded() {
	    return null;
	  }
	  render() {
	    const style = {
	      width: "100%",
	      height: "100%"
	    };
	    return /* @__PURE__ */ import_react.default.createElement("div", { style, id: this.playerID });
	  }
	}
	__publicField(Twitch, "displayName", "Twitch");
	__publicField(Twitch, "canPlay", import_patterns.canPlay.twitch);
	__publicField(Twitch, "loopOnEnded", true);
	return Twitch_1;
}

var TwitchExports = /*@__PURE__*/ requireTwitch();
var Twitch = /*@__PURE__*/getDefaultExportFromCjs(TwitchExports);

var Twitch$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: Twitch
}, [TwitchExports]);

export { Twitch$1 as T };
