import { useRef, useEffect } from 'react';
var useEventListener = function (eventName, handler, element, shouldRun) {
    if (shouldRun === void 0) { shouldRun = function () { return true; }; }
    var savedHandler = useRef();
    useEffect(function () {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(function () {
        var targetElement = element && 'current' in element ? element.current : window;
        if (!targetElement)
            return;
        var isSupported = targetElement.addEventListener;
        if (!isSupported)
            return;
        var eventListener = function (event) {
            if (savedHandler.current && shouldRun()) {
                savedHandler.current(event);
            }
        };
        targetElement.addEventListener(eventName, eventListener);
        return function () {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element, shouldRun]);
};
export default useEventListener;
//# sourceMappingURL=useEventListener.js.map