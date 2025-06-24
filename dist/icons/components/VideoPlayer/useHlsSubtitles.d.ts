import ReactPlayer from 'react-player';
interface UseHLSSubtitlesProps {
    videoPlayerRef: React.RefObject<ReactPlayer | null>;
    isSubtitlesChecked: boolean;
    setCurrentSubtitle: (subtitle: string) => void;
}
interface UseHLSSubtitlesReturn {
    extractHLSSubtitleText: () => void;
    setupHLSSubtitleTracking: () => void;
}
export declare const useHLSSubtitles: ({ videoPlayerRef, isSubtitlesChecked, setCurrentSubtitle, }: UseHLSSubtitlesProps) => UseHLSSubtitlesReturn;
export {};
