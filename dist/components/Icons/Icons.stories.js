import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Icons from '../../icons';
export default {
    title: 'Icons',
};
export var AllIcons = function () {
    return (_jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }, children: Object.entries(Icons).map(function (_a) {
            var name = _a[0], Icon = _a[1];
            return (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Icon, { style: { width: 40, height: 40 } }), _jsx("p", { style: { fontSize: 12 }, children: name })] }, name));
        }) }));
};
//# sourceMappingURL=Icons.stories.js.map