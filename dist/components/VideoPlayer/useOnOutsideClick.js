import { useEffect } from 'react';
var useOnOutsideClick = function (ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler(event);
            }
        };
        document.addEventListener('mousedown', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};
export default useOnOutsideClick;
//# sourceMappingURL=useOnOutsideClick.js.map