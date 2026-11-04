export declare const StyledVideoPlayerWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledPlayerLoader: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledLoader: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledControlsContainer: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledSubtitles: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Merged<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}, {
    $controls: boolean;
}>> & string;
export declare const StyledKeyboardIndicatorContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Merged<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}, {
    $position: "center" | "left" | "right";
}>> & string;
export declare const StyledKeyboardSeekContainer: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledKeyboardVolumeContainer: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledKeyboardVolumeLabel: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const HLS_SUBTITLE_STYLES = "\n  /* Hide native HLS subtitles completely - comprehensive approach */\n  video::cue {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  video::-webkit-media-text-track-display {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  video::cue-region {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  video::-webkit-media-text-track-container {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  /* Target ReactPlayer specifically */\n  .react-player video::cue {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  .react-player video::-webkit-media-text-track-display {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  .react-player video::cue-region {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  .react-player video::-webkit-media-text-track-container {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  /* Additional selectors for different browsers */\n  video::-moz-media-text-track-display {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  video::-ms-media-text-track-display {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  /* Hide any subtitle overlays */\n  .react-player video + div[style*=\"position: absolute\"] {\n    display: none !important;\n  }\n  \n  /* Target HLS video player specifically */\n  .hls-video-player::cue {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  .hls-video-player::-webkit-media-text-track-display {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  .hls-video-player::-webkit-media-text-track-container {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n  \n  .hls-video-player::cue-region {\n    display: none !important;\n    visibility: hidden !important;\n    opacity: 0 !important;\n  }\n";
export declare const injectHLSSubtitleStyles: () => (() => void);
export declare const StyledNoteMarkersOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Merged<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}, {
    $isFullscreen?: boolean;
}>> & string;
export declare const StyledNoteMarker: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Merged<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}, {
    $position: number;
    $isFullscreen?: boolean;
}>> & string;
export declare const StyledNoteTooltip: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledNoteTime: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}> & string;
export declare const StyledModalOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Merged<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}, {
    $isFullscreen?: boolean;
}>> & string;
export declare const StyledNoteModal: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Merged<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("react").CSSProperties | import("styled-components/dist/types").CSSPropertiesWithVars;
}, {
    $isFullscreen?: boolean;
    $position?: number;
    $alignment?: "left" | "center" | "right";
}>> & string;
