import { ReactElement } from 'react';
import { IUser } from '../CourseCard/CourseCard.interface';
export declare const ProfileDropdown: ({ user, logout, navigate, }: {
    user: IUser;
    logout: () => void;
    navigate: (path: string) => void;
}) => ReactElement;
