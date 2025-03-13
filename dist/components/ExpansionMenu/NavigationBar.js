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
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './styled-components';
import ExpansionItem from './ExpansionItem';
import ExpansionNavMenu from './ExpansionNavMenu';
import { getAllNavigation } from './routerConfig';
var mockUser = {
    id: 'user1',
    role: 'SUPER_ADMIN',
    companyId: 'company1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
};
var NavigationBarComponent = function (_a) {
    var isOpened = _a.isOpened, currentUser = _a.currentUser, checkRole = _a.checkRole, state = _a.state;
    var _b = useState(0), renderKey = _b[0], setRenderKey = _b[1];
    useEffect(function () {
        console.log('URL changed:', location.pathname);
        setRenderKey(function (prevKey) { return prevKey + 1; });
    }, [location.pathname]);
    var role = checkRole && checkRole(currentUser === null || currentUser === void 0 ? void 0 : currentUser.role, !!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.companyId));
    var routerData = getAllNavigation((state === null || state === void 0 ? void 0 : state.userPermission) || {}, (state === null || state === void 0 ? void 0 : state.currentUser) || mockUser, state === null || state === void 0 ? void 0 : state.selectedCompany);
    return (_jsx(Container, { "$isOpened": isOpened, children: routerData.map(function (item, index) {
            return item.children ? (_jsx(ExpansionNavMenu, { item: item, index: index, isOpened: isOpened, role: role }, index)) : (_jsx(ExpansionItem, { item: item, index: index, isOpened: isOpened, role: role }, index));
        }) }, renderKey));
};
export var NavigationBar = function (props) { return (_jsx(BrowserRouter, { children: _jsx(NavigationBarComponent, __assign({}, props)) })); };
//# sourceMappingURL=NavigationBar.js.map