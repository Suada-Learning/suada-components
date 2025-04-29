import { UsePlayerControlsProps, UsePlayerControlsState } from './Player.interface';
declare function usePlayerControls({ startTime, setLoading, handleTrackProgress, url, subtitleUrl, setIsPlaying, isPlaying, shouldPlayerBeFocusedOnSpaceClick, }: UsePlayerControlsProps): UsePlayerControlsState;
export default usePlayerControls;
