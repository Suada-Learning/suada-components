import { IPermissionsBool, IUser, IUserCompany } from '../CourseCard/CourseCard.interface';
import { IExpansionItem } from './ExpansionItem.interface';
export declare const getAllNavigation: (permission: IPermissionsBool, currentUser: IUser, selectedCompany: IUserCompany | null) => IExpansionItem[];
