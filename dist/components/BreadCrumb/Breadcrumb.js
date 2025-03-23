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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, ItemWrapper, PathItem } from './styled-components';
import { ChevronRightIcon } from '../../icons';
var BreadcrumbWithRouter = function (_a) {
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
var BreadcrumbWithoutRouter = function (_a) {
    var data = _a.data;
    if (!data)
        return null;
    return (_jsx(Container, { children: data.map(function (item, index) { return (_jsxs(React.Fragment, { children: [_jsxs(PathItem, { children: [item.icon, item.link ? (_jsx("a", { href: item.link, children: item.label })) : (_jsx(ItemWrapper, { children: item.label }))] }), index < data.length - 1 && (index === 0 ? _jsx(ChevronRightIcon, {}) : _jsx("span", { children: " / " }))] }, index)); }) }));
};
export var Breadcrumb = function (props) {
    var isInRouterContext = React.useMemo(function () {
        try {
            useLocation();
            return true;
        }
        catch (e) {
            return false;
        }
    }, []);
    try {
        if (isInRouterContext) {
            return _jsx(BreadcrumbWithRouter, __assign({}, props));
        }
    }
    catch (e) {
        console.warn('Router context not detected, using regular links in breadcrumb');
    }
    return _jsx(BreadcrumbWithoutRouter, __assign({}, props));
};
//# sourceMappingURL=Breadcrumb.js.map