import { RefObject } from 'react';
declare const useEventListener: <T extends HTMLElement = HTMLDivElement>(eventName: keyof WindowEventMap, handler: (event: KeyboardEvent | Event) => void, element?: RefObject<T> | Window | null, shouldRun?: () => boolean) => void;
export default useEventListener;
