import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import colors from './colors';
import { Container, Grid, ColorContainer, ColorContainerInput } from './styled.components';
import { debounce } from 'lodash';
export var ColorPicker = function (_a) {
    var selectedColor = _a.selectedColor, setSelectedColor = _a.setSelectedColor;
    var _b = useState('#828282'), customColor = _b[0], setCustomColor = _b[1];
    // Debounce the setSelectedColor function
    var debouncedSetSelectedColor = debounce(function (color) {
        setSelectedColor(color);
    }, 300);
    return (_jsx(Container, { children: _jsxs(Grid, { children: [_jsx(ColorContainerInput, { color: '#828282', type: 'color', value: selectedColor || customColor, onChange: function (e) {
                        setCustomColor(e.target.value);
                        debouncedSetSelectedColor(e.target.value);
                    } }), colors.map(function (color) { return (_jsx(ColorContainer, { color: color, onClick: function () { return setSelectedColor(color); }, className: "".concat(selectedColor && selectedColor === color && 'selected'), "data-testid": "color-container-".concat(color) }, color)); })] }) }));
};
//# sourceMappingURL=ColorPicker.js.map