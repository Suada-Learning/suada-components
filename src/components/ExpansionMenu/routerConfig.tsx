import React from 'react'

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'

//customIcons
import { IPermissionsBool, IUser, IUserCompany } from '../CourseCard/CourseCard.interface'
import { Analytics, Circle, Company, GroupDefault, Learning, Library, UsersIcon } from '../../icons'
import { IExpansionItem } from './ExpansionItem.interface'

export const getAllNavigation = (
  permission: IPermissionsBool,
  currentUser: IUser,
  selectedCompany: IUserCompany | null,
): IExpansionItem[] => [
  {
    title: 'analytics',
    path: '',
    icon: <Analytics />,
    canView: !!(currentUser.role !== 'CONSULTANT' || selectedCompany?.id),
  },
  {
    title: currentUser.companyId ? 'company' : 'companies',
    path: currentUser.companyId
      ? `/Companies/${(currentUser.companyId as IUserCompany).id}`
      : '/Companies',
    icon: <Company />,
    canView: !!permission.viewCompanyPage,
  },
  {
    title: 'users',
    icon: <UsersIcon />,
    canView: !!(
      permission.viewSuperAdminPage ||
      permission.viewAdmin ||
      permission.viewCoach ||
      permission.viewStudent
    ),
    children: [
      {
        title: 'super_admins',
        path: '/users/super-admins',
        icon: <Circle />,
        canView: !!permission.viewSuperAdminPage,
      },
      {
        title: 'admins',
        path: '/users/admins',
        icon: <Circle />,
        canView: !!permission.viewAdmin,
      },
      {
        title: 'Tutors',
        path: '/users/tutors',
        icon: <Circle />,
        canView: !!permission.viewCoach,
      },
      {
        title: 'students',
        path: '/users/students',
        icon: <Circle />,
        canView: !!permission.viewStudent,
      },
    ],
  },
  {
    title: 'groups',
    path: '/groups',
    icon: <GroupDefault />,
    canView: !!permission.viewGroup,
  },
  {
    title: 'learning',
    icon: <Learning />,
    canView: !!(permission.viewTest || permission.viewCourse || permission.viewModule),
    children: [
      {
        title: 'view_all_courses',
        path: '/courses',
        icon: <Circle />,
        canView: !!permission.viewCourse,
      },
      {
        title: 'modules',
        path: '/modules',
        icon: <Circle />,
        canView: !!permission.viewModule,
      },
      {
        title: 'view_all_tests',
        path: '/tests',
        icon: <Circle />,
        canView: !!permission.viewTest,
      },
      {
        title: 'view_all_tasks',
        path: '/tasks',
        icon: <Circle />,
        canView: !!permission.viewTask,
      },
    ],
  },
  {
    title: 'evaluation',
    icon: <Library />,
    canView: !!permission.viewQuestion,
    children: [
      {
        title: 'questions',
        path: '/questions',
        icon: <Circle />,
        canView: !!permission.viewQuestion,
      },
      {
        title: 'quizzes',
        path: '/quizzes',
        icon: <Circle />,
        canView: !!permission.viewQuiz,
      },
      {
        title: 'books',
        path: '/books',
        icon: <Circle />,
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
    icon: <NotificationsOutlinedIcon />,
    canView: !!permission.viewNotificationsPage,
  },
  {
    title: 'settings',
    path: '/Settings',
    icon: <SettingsOutlinedIcon />,
    canView: !!permission.viewSettingPage,
  },
  {
    title: 'support',
    path: 'https://www.suada.com/contact-us',
    icon: <ContactSupportOutlinedIcon />,
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
]
