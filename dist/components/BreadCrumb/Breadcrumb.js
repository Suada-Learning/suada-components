import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Container, ItemWrapper, PathItem } from './styled-components';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '../../icons';
var Breadcrumb = function (_a) {
    var data = _a.data;
    var navigate = useNavigate();
    var handleClick = function (event, link, state) {
        if (state === void 0) { state = {}; }
        event.preventDefault();
        navigate(link, { state: state });
    };
    if (!data)
        return null;
    return (_jsx(Container, { children: data.map(function (item, index) { return (_jsxs(React.Fragment, { children: [_jsxs(PathItem, { children: [item.icon, item.link ? (_jsx("a", { href: item.link, onClick: function (e) { return handleClick(e, item.link, item.state); }, children: item.label })) : (_jsx(ItemWrapper, { children: item.label }))] }), index < data.length - 1 && (index === 0 ? _jsx(ChevronRightIcon, {}) : _jsx("span", { children: " / " }))] }, index)); }) }));
};
export { Breadcrumb };
//# sourceMappingURL=Breadcrumb.js.map