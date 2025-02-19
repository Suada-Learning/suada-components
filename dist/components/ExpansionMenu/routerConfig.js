import { jsx as _jsx } from "react/jsx-runtime";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { Analytics, Circle, Company, GroupDefault, Learning, Library, UsersIcon } from '../../svg';
export var getAllNavigation = function (permission, currentUser, selectedCompany) { return [
    {
        title: 'analytics',
        path: '',
        icon: _jsx(Analytics, {}),
        canView: !!(currentUser.role !== 'CONSULTANT' || (selectedCompany === null || selectedCompany === void 0 ? void 0 : selectedCompany.id)),
    },
    {
        title: currentUser.companyId ? 'company' : 'companies',
        path: currentUser.companyId
            ? "/Companies/".concat(currentUser.companyId.id)
            : '/Companies',
        icon: _jsx(Company, {}),
        canView: !!permission.viewCompanyPage,
    },
    {
        title: 'users',
        icon: _jsx(UsersIcon, {}),
        canView: !!(permission.viewSuperAdminPage ||
            permission.viewAdmin ||
            permission.viewCoach ||
            permission.viewStudent),
        children: [
            {
                title: 'super_admins',
                path: '/users/super-admins',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewSuperAdminPage,
            },
            {
                title: 'admins',
                path: '/users/admins',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewAdmin,
            },
            {
                title: 'Tutors',
                path: '/users/tutors',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewCoach,
            },
            {
                title: 'students',
                path: '/users/students',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewStudent,
            },
        ],
    },
    {
        title: 'groups',
        path: '/groups',
        icon: _jsx(GroupDefault, {}),
        canView: !!permission.viewGroup,
    },
    {
        title: 'learning',
        icon: _jsx(Learning, {}),
        canView: !!(permission.viewTest || permission.viewCourse || permission.viewModule),
        children: [
            {
                title: 'view_all_courses',
                path: '/courses',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewCourse,
            },
            {
                title: 'modules',
                path: '/modules',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewModule,
            },
            {
                title: 'view_all_tests',
                path: '/tests',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewTest,
            },
            {
                title: 'view_all_tasks',
                path: '/tasks',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewTask,
            },
        ],
    },
    {
        title: 'evaluation',
        icon: _jsx(Library, {}),
        canView: !!permission.viewQuestion,
        children: [
            {
                title: 'questions',
                path: '/questions',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewQuestion,
            },
            {
                title: 'quizzes',
                path: '/quizzes',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewQuiz,
            },
            {
                title: 'books',
                path: '/books',
                icon: _jsx(Circle, {}),
                canView: !!permission.viewQuestion,
            },
        ],
    },
    // {
    //   title: 'certificate_builder',
    //   path: '/certificate-builder',
    //   icon: <CardMembershipRounded />,
    //   canView: !!permission.viewCompanyPage,
    // },
    {
        title: 'notifications',
        path: '/Notifications',
        icon: _jsx(NotificationsOutlinedIcon, {}),
        canView: !!permission.viewNotificationsPage,
    },
    {
        title: 'settings',
        path: '/Settings',
        icon: _jsx(SettingsOutlinedIcon, {}),
        canView: !!permission.viewSettingPage,
    },
    {
        title: 'support',
        path: 'https://www.suada.com/contact-us',
        icon: _jsx(ContactSupportOutlinedIcon, {}),
        openInNewTab: true,
        canView: true,
    },
    // {
    //   title: 'app.suada.com',
    //   path:
    //     process.env.REACT_APP_STAGE === 'production'
    //       ? 'https://app.suada.com'
    //       : process.env.REACT_APP_STAGE === 'staging'
    //       ? 'https://staging.app.suada.com'
    //       : 'https://dev.app.suada.com',
    //   icon: <SchoolOutlinedIcon />,
    //   openInNewTab: true,
    //   canView: true,
    // },
]; };
//# sourceMappingURL=routerConfig.js.map