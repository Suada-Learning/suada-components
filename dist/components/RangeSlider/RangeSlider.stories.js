import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RangeSlider from './RangeSlider';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
import { GlobalStyle } from '../../global.styles';
var meta = {
    title: 'Components/RangeSlider',
    component: RangeSlider,
    tags: ['autodocs', 'range-slider'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Story, {})] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: { control: 'text' },
        min: { control: 'number' },
        max: { control: 'number' },
        onRangeChange: { action: 'rangeChanged' },
    },
    args: {
        label: 'Select Range',
        min: 0,
        max: 100,
        value: [20, 80],
    },
};
export default meta;
export var Default = {};
export var CustomRange = {
    args: {
        label: 'Custom Range',
        min: 10,
        max: 90,
        value: [30, 60],
    },
};
//# sourceMappingURL=RangeSlider.stories.js.map