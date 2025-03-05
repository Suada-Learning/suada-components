export interface IColumnNavigationProps {
    tabs: {
        label: string;
        icon: JSX.Element;
    }[];
    activeTab: number;
    setActiveTab: (index: number) => void;
}
