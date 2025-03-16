import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
var TooltipHeight = function (_a) {
    var text = _a.text, lines = _a.lines;
    var textElementRef = useRef(null);
    var _b = useState(false), isOverflowing = _b[0], setIsOverflowing = _b[1];
    useEffect(function () {
        var isOverflow = textElementRef.current
            ? textElementRef.current.scrollHeight >
                textElementRef.current.clientHeight
            : false;
        setIsOverflowing(isOverflow);
    }, [text]);
    return isOverflowing ? (_jsx(Tooltip, { title: text, children: _jsx("div", { ref: textElementRef, style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: lines,
                WebkitBoxOrient: "vertical",
            }, children: text }) })) : (_jsx("div", { ref: textElementRef, style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: lines,
            WebkitBoxOrient: "vertical",
        }, children: text }));
};
export default TooltipHeight;
//# sourceMappingURL=TooltipHeight.js.map