import { ReactElement } from "react";

type role = "STUDENT" | "COACH" | "ADMIN" | "SUPER_ADMIN" | "CONSULTANT";

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

export enum GridStatusEnums {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING = "PENDING",
  DRAFT = "DRAFT",
  UNPUBLISHED = "UNPUBLISHED",
  PUBLISHED = "PUBLISHED",
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
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

export interface ICourseItem {
  link?: string;
  id: string;
  name: string;
  state: string;
  finished: number;
  level: string;
  currency: string;
  price: string;
  numberOfModules: number;
  numberOfLessons: number;
  duration: number;
  avatar: { link: string };
  coaches: { firstName: string; lastName: string }[];
  groups: Group[];
  video: boolean;
  isBought: boolean;
  numberOfStudents?: number;
  originalId?: string;
}
export interface IActionHandlerType {
  (event: string, field: string | ICourseItem, action?: string): void;
}

export interface IActionHandlerTypeRender {
  (event: string, field: string | ICourseItem, action?: string): void;
}

export interface IAction {
  render: (item: ICourseItem) => JSX.Element;
  hide?: boolean;
}
interface IStateType {
  userPermission?: {
    publishCourse?: boolean;
  };
}

export interface ICourseCardProps {
  item: ICourseItem;
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
  RedirectToCourse: (item: ICourseItem) => void;
  selectItem: (id: string) => void;
  getCourseState: (state: string) => string;
  gridStyle: string;
  companyMode: boolean;
  activeTab: number;
  withTooltips: boolean;
  state: IStateType;
}
