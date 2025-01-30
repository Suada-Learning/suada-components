export interface IAction {
    id?: string;
    label?: string | JSX.Element;
    width?: string;
    hide?: boolean;
    disablePadding?: boolean;
    numeric?: boolean;
    render: (item: any, index?: number) => JSX.Element;
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
    actionConfig: IAction[];
    row?: any;
    icon?: JSX.Element;
    button?: JSX.Element;
}
