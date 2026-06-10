import { ReactElement } from 'react';
import { PlayerProps } from './Player.interface';
export declare const VideoPlayer: ({ customStyles, startTime, loading, setLoading, handleTrackProgress, url, subtitle: subtitleUrl, handleNextVideo, handlePreviousVideo, isNextVideo, isPreviousVideo, isPlaying, setIsPlaying, shouldPlayerBeFocusedOnSpaceClick, showFavorite, isFavorite, toggleFavorite, showDownload, downloadUrl, downloadFileName, onDownload, showPictureInPicture, }: PlayerProps) => ReactElement;
export default VideoPlayer;
