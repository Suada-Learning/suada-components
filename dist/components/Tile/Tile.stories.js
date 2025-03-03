var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Tile } from './Tile';
import { UserActivity } from '../../icons';
export default {
    title: 'Components/Tile',
    component: Tile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};
var Template = function (args) { return _jsx(Tile, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    customCardStyles: { width: '400px' },
    $backgroundColor: 'lightblue',
    iconColor: 'darkblue',
    gap: 10,
    value: '10',
    text: 'Sample Tile',
    icon: _jsx(UserActivity, {}),
};
//# sourceMappingURL=Tile.stories.js.map