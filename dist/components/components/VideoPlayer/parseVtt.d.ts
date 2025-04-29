export interface SubtitleEntry {
    start: number;
    end: number;
    text: string;
}
export declare function parseVTT(content: string): SubtitleEntry[];
