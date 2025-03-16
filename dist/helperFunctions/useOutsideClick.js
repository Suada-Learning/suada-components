import { useEffect } from 'react';
var useOutsideClick = function (ref, callback) {
    var handleClick = function (e) {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(function () {
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, [ref, callback]);
};
export default useOutsideClick;
//# sourceMappingURL=useOutsideClick.js.map