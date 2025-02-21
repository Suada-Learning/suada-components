import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { classes, Root } from './RangeSlider.styles';
var RangeSlider = function (_a) {
    var label = _a.label, style = _a.style, _b = _a.value, value = _b === void 0 ? [0, 0] : _b, onRangeChange = _a.onRangeChange, _c = _a.min, min = _c === void 0 ? 0 : _c, _d = _a.max, max = _d === void 0 ? 100 : _d, _e = _a.name, name = _e === void 0 ? label || '' : _e;
    var handleChange = function (_, newValue) {
        onRangeChange(newValue, name);
    };
    return (_jsxs(Root, { className: classes.root, children: [_jsx(Typography, { id: 'range-slider', gutterBottom: true, children: _jsxs("div", { style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }, children: [label, _jsxs("span", { children: [value[0], " - ", value[1]] })] }) }), _jsx(Slider, { value: value, onChange: handleChange, valueLabelDisplay: 'auto', "aria-labelledby": 'range-slider', min: min, max: max, name: name, style: style })] }));
};
export default RangeSlider;
//# sourceMappingURL=RangeSlider.js.map