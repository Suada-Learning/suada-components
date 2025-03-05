import { ReactElement } from 'react';
type role = 'STUDENT' | 'COACH' | 'ADMIN' | 'SUPER_ADMIN' | 'CONSULTANT';
interface IUserGroup {
    id?: string;
    groupId: string;
    name: string;
}
export interface IUserCourse {
    courseId: string;
    name: string;
    groupId: string;
}
export interface IUserCompany {
    id: string;
    name: string;
    platformService: boolean;
}
export interface IModuleProgress {
    moduleId: string;
    moduleName: string;
    progress: number;
    lessonProgresses: ILessonProgress[];
}
export interface ILessonProgress {
    lessonId: string;
    lessonName: string;
    progress: number;
}
export declare enum GridStatusEnums {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    PENDING = "PENDING",
    DRAFT = "DRAFT",
    UNPUBLISHED = "UNPUBLISHED",
    PUBLISHED = "PUBLISHED",
    APPROVED = "APPROVED",
    DECLINED = "DECLINED"
}
export interface IPhoneFields {
    label?: string;
    value?: string;
    dialCode?: string;
    code?: string;
}
export interface ISelectFilterOption {
    value: string;
    label?: string | ReactElement;
}
export interface Group {
    name: string;
}
export interface IUser {
    id?: string;
    userId?: string;
    settings?: {
        askPassword: boolean;
    };
    name?: string;
    firstName: string;
    avatar?: string;
    isCompanyAdmin?: boolean;
    coachType?: string;
    isSuperAdmin?: boolean;
    lastName: string;
    leaderboard?: {
        point: number;
    };
    message?: string;
    email: string;
    error?: string;
    role?: role;
    status?: GridStatusEnums;
    assistants?: {
        assistantId: string;
        threadId: string;
        isUserNotifiedAboutReTraining: boolean;
    }[];
    phone?: string;
    phoneFields?: IPhoneFields;
    gender?: string | null | ISelectFilterOption;
    isTutor?: boolean;
    isChecked?: boolean;
    birthDate?: string | Date;
    moduleProgresses?: IModuleProgress[];
    avatarThumbnail?: string;
    age?: number;
    biography?: string;
    createDate?: string;
    note?: string;
    jobTitle?: string;
    location?: string;
    groups?: string[];
    group?: IUserGroup[];
    courses?: IUserCourse[];
    companyId?: IUserCompany | string;
}
export interface IActionHandlerType {
    (event: string, field: string | ICourse, action?: string): void;
}
export interface IActionHandlerTypeRender {
    (event: string, field: string | ICourse, action?: string): void;
}
export interface IAction {
    render: (item: ICourse) => JSX.Element;
    hide?: boolean;
}
interface IStateType {
    userPermission?: {
        publishCourse?: boolean;
    };
}
export interface ICourseItem {
    actions: IAction[];
    link?: string;
    id: string;
    _id?: string;
    assistantId?: string;
    name: string;
    state: string;
    finished: number;
    level: string;
    currency: string;
    price: string;
    numberOfModules: number;
    numberOfLessons: number;
    duration: number;
    avatar: {
        link: string;
    };
    coaches: {
        firstName: string;
        lastName: string;
    }[];
    groups: Group[];
    video: boolean;
    isBought: boolean;
    numberOfStudents?: number;
    originalId?: string;
}
export interface ICourseCardProps {
    item: ICourse;
    $canOpen: boolean;
    fromCertificateBuilder: boolean;
    fromWizard: boolean;
    actions: IAction[];
    groupId: string | null;
    user?: {
        id: string;
        groups: string[];
    };
    getCourseLevel: (level: string) => string;
    formatDuration: (duration: number) => string;
    actionHandler?: IActionHandlerType | IActionHandlerTypeRender;
    selectedItem?: string[];
    courseoriginalid: string;
    navigate: (path: string) => void;
    RedirectToCourse: (item: ICourse) => void;
    selectItem: (id: string) => void;
    getCourseState: (state: string) => string;
    gridStyle: string;
    companyMode: boolean;
    activeTab: number;
    withTooltips: boolean;
    state: IStateType;
}
export interface CourseCompany {
    id: string;
    name: string;
}
export interface ICourseOption {
    value?: string;
    label?: string;
}
export declare enum CourseCompleteCriteriaEnums {
    WATCH = "watch",
    WATCH_AND_PASS_QUIZZES = "watchAndPassQuizzes",
    WATCH_AND_PASS_QUIZZES_AND_STV = "watchAndPassQuizzesAndSTV"
}
export interface CompleteCriteriaOption {
    label: string;
    value: CourseCompleteCriteriaEnums;
}
export interface IPermissionsBool {
    userPermission?: boolean;
    createCompany?: boolean;
    editCompany?: boolean;
    deleteCompany?: boolean;
    viewCompanyPage?: boolean;
    switchToCompanyMode?: boolean;
    createSuperAdmin?: boolean;
    editSuperAdmin?: boolean;
    deleteSuperAdmin?: boolean;
    viewSuperAdminPage?: boolean;
    suspendSuperAdmin?: boolean;
    activateSuperAdmin?: boolean;
    resendUserPasswordSuperAdmin?: boolean;
    resetPassword?: boolean;
    editConsultant?: boolean;
    deleteConsultant?: boolean;
    suspendConsultant?: boolean;
    resendUserPasswordConsultant?: boolean;
    createGroup?: boolean;
    editGroup?: boolean;
    deleteGroup?: boolean;
    viewGroup?: boolean;
    createAdmin?: boolean;
    editAdmin?: boolean;
    deleteAdmin?: boolean;
    viewAdmin?: boolean;
    activateAdmin?: boolean;
    suspendAdmin?: boolean;
    resendUserPasswordAdmin?: boolean;
    viewCoach?: boolean;
    createCoach?: boolean;
    editCoach?: boolean;
    deleteCoach?: boolean;
    resendUserPasswordCoach?: boolean;
    activateCoach?: boolean;
    suspendCoach?: boolean;
    createCourse?: boolean;
    editCourse?: boolean;
    deleteCourse?: boolean;
    viewCourse?: boolean;
    publishCourse?: boolean;
    unPublishCourse?: boolean;
    createModule?: boolean;
    editModule?: boolean;
    deleteModule?: boolean;
    viewModule?: boolean;
    createStudent?: boolean;
    editStudent?: boolean;
    deleteStudent?: boolean;
    viewStudent?: boolean;
    resendUserPasswordStudent?: boolean;
    activateStudent?: boolean;
    suspendStudent?: boolean;
    createTopic?: boolean;
    editTopic?: boolean;
    deleteTopic?: boolean;
    viewTopic?: boolean;
    createLesson?: boolean;
    editLesson?: boolean;
    deleteLesson?: boolean;
    viewLesson?: boolean;
    viewQuestion?: boolean;
    addQuestion?: boolean;
    editQuestion?: boolean;
    deleteQuestion?: boolean;
    viewQuiz?: boolean;
    addQuiz?: boolean;
    editQuiz?: boolean;
    deleteQuiz?: boolean;
    viewTest?: boolean;
    viewTask?: boolean;
    createFlashcard?: boolean;
    editFlashcard?: boolean;
    deleteFlashcard?: boolean;
    viewNotificationsPage?: boolean;
    viewSettingPage?: boolean;
    viewDashboardPage?: boolean;
}
export type TranslationFunction = (key: string) => string;
export interface IRenderContentItem {
    isBought?: boolean;
    id?: string;
    editorText?: string;
    value?: string;
    originalId?: string;
    companyId?: CourseCompany | string;
    state?: string;
    finished?: number;
    completeCriteria?: CompleteCriteriaOption | null | string;
    description?: string;
    coursePrivacy?: string;
    coachType?: string;
    skills?: Array<{
        label: string;
    }>;
    certificateIncluded?: boolean;
    certificate?: CourseAttachment | null;
    contentLocked?: boolean;
    avatar?: CourseAttachment | null;
    level?: string | null | ICourseOption;
    currency?: string;
    price?: string | null;
    name?: string;
    video?: IAttachment | null;
    subtitle?: CourseAttachment;
    numberOfModules?: number;
    numberOfLessons?: number;
    duration?: number;
    coaches?: IUser[] | string[];
    groups?: Array<{
        name: string;
    }>;
    numberOfStudents?: number;
}
export interface ILink {
    converted: boolean;
    fileType: string;
    url: string;
    type?: string;
    __typename: string;
}
export interface IAttachment {
    _id?: string;
    id?: string;
    link?: string;
    links?: ILink[];
    uploading?: boolean;
    name?: string;
    title?: string;
    size?: number | string;
    lastModified?: number;
    value?: string;
    type?: string;
    fileType?: string;
    __typename?: string;
}
export interface ICourse extends IRenderContentItem {
    id: string;
    _id?: string;
    courseId?: string;
    assistantId?: string;
    isChecked?: boolean;
    coach?: IUser;
    name?: string;
    actions: IAction[];
}
interface CourseAttachment {
    link: string;
    name: string;
}
export {};
