import { IPermissionsBool, IUser, IUserCompany } from '../CourseCard/CourseCard.interface';
export interface IExpansionItem {
    canView: boolean;
    openInNewTab?: boolean;
    title: string;
    icon: string | JSX.Element;
    path?: string;
    children?: Array<{
        canView: boolean;
        title: string;
        icon: string | JSX.Element;
        path?: string;
    }>;
    currentUser?: IUser;
}
export interface IExpansionItemProps {
    state?: {
        userPermission?: IPermissionsBool;
        currentUser?: IUser;
        selectedCompany?: IUserCompany | null;
    };
    checkRole?: (role: string, companyId: boolean) => string;
    useUserValue?: () => [
        {
            userPermission: IPermissionsBool;
            currentUser: IUser;
            selectedCompany: IUserCompany | null;
        }
    ];
    item: IExpansionItem;
    role?: string;
    currentUser?: IUser;
    index?: number;
    isOpened?: boolean;
}
