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
import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
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
    var location = useLocation();
    useEffect(function () {
        console.log('URL changed:', location.pathname);
        setTimeout(function () { return window.location.reload(); }, 0);
    }, [location.pathname]);
    var role = checkRole && checkRole(currentUser === null || currentUser === void 0 ? void 0 : currentUser.role, !!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.companyId));
    var routerData = getAllNavigation((state === null || state === void 0 ? void 0 : state.userPermission) || {}, (state === null || state === void 0 ? void 0 : state.currentUser) || mockUser, state === null || state === void 0 ? void 0 : state.selectedCompany);
    return (_jsx(Container, { "$isOpened": isOpened, children: routerData.map(function (item, index) {
            return item.children ? (_jsx(ExpansionNavMenu, { item: item, index: index, isOpened: isOpened, role: role }, index)) : (_jsx(ExpansionItem, { item: item, index: index, isOpened: isOpened, role: role }, index));
        }) }));
};
export var NavigationBar = function (props) { return (_jsx(BrowserRouter, { children: _jsx(NavigationBarComponent, __assign({}, props)) })); };
//# sourceMappingURL=NavigationBar.js.map