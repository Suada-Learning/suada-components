import { jsx as _jsx } from "react/jsx-runtime";
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
export var NavigationBar = function (_a) {
    var isOpened = _a.isOpened, currentUser = _a.currentUser, checkRole = _a.checkRole, state = _a.state;
    var role = checkRole && checkRole(currentUser === null || currentUser === void 0 ? void 0 : currentUser.role, !!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.companyId));
    var routerData = getAllNavigation((state === null || state === void 0 ? void 0 : state.userPermission) || {}, (state === null || state === void 0 ? void 0 : state.currentUser) || mockUser, state === null || state === void 0 ? void 0 : state.selectedCompany);
    return (_jsx(Container, { "$isOpened": isOpened, children: routerData.map(function (item, index) {
            return item.children ? (_jsx(ExpansionNavMenu, { item: item, index: index, isOpened: isOpened, role: role }, index)) : (_jsx(ExpansionItem, { item: item, index: index, isOpened: isOpened, role: role }, index));
        }) }));
};
//# sourceMappingURL=NavigationBar.js.map