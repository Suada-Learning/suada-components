export interface ISearchInputProps {
    onSearchSubmit: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
    searchText: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
