import { RefObject } from 'react';
type Callback = () => void;
declare const useOutsideClick: (ref: RefObject<HTMLElement>, callback: Callback) => void;
export default useOutsideClick;
