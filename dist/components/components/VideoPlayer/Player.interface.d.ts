import React, { RefObject } from 'react';
import ReactPlayer from 'react-player';
import { ControlsProps } from './Controls/Controls.interface';
export interface VideoState {
    muted: boolean;
    volume: number;
    prevVolume: number;
    playbackRate: number;
    played: number;
    seeking: boolean;
    buffer: boolean;
}
type HandleNextVideo = () => void;
type HandlePreviousVideo = () => void;
export interface PlayerProps {
    customStyles?: React.CSSProperties;
    startTime?: number;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    url: string;
    subtitle: string;
    handleTrackProgress: (currentTime: number) => void;
    handleNextVideo?: HandleNextVideo;
    handlePreviousVideo?: HandlePreviousVideo;
    isNextVideo?: boolean;
    isPreviousVideo?: boolean;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayerBeFocusedOnSpaceClick?: boolean;
    showFavorite?: boolean;
    isFavorite?: boolean;
    toggleFavorite?: () => Promise<void>;
}
export interface UsePlayerControlsProps {
    startTime?: number;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    url: string;
    handleTrackProgress: (currentTime: number) => void;
    subtitleUrl: string;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayerBeFocusedOnSpaceClick: boolean;
}
export interface ProgressState {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
}
export interface UsePlayerControlsState extends Omit<ControlsProps, 'isFavorite' | 'toggleIsFavorite'> {
    mouseMoveHandler: () => void;
    playerContainerRef: RefObject<HTMLDivElement>;
    videoPlayerRef: RefObject<ReactPlayer>;
    progressHandler: (state: ProgressState) => Promise<void>;
    bufferStartHandler: () => void;
    bufferEndHandler: () => void;
    onPlayerStart: () => void;
    controlRef: RefObject<HTMLDivElement>;
    isFullscreen: boolean;
    isControlsActive: boolean;
    currentSubtitle: string;
}
export {};
