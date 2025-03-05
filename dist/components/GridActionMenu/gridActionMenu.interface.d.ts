import { ICourse } from '../CourseCard/CourseCard.interface';
export interface IAction {
    render: (item: ICourse) => JSX.Element;
    hide?: boolean;
}
export interface IKebabAction {
    id: number;
    color: string;
    tooltipText: string;
    disabled: boolean;
    onClick: () => void;
    component: React.JSX.Element;
}
export interface IGridActionMenuProps {
    actionConfig?: IAction[];
    row?: any;
    icon?: JSX.Element;
    button?: JSX.Element;
}
