import SearchRoundedSVG from '../../svg/SearchRoundedIcon'
import { Input } from '../TextInput'
import IconButton from '@mui/material/IconButton'
import { ISearchInputProps } from './searchInput.interface'

export const SearchInput = ({
  onSearchSubmit,
  searchText,
  handleSearchChange,
  t,
}: ISearchInputProps) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <Input
        label={t('general.search_placeholder')}
        type='text'
        size='small'
        value={searchText}
        onChange={handleSearchChange}
        icon={
          <IconButton onClick={onSearchSubmit}>
            <SearchRoundedSVG />
          </IconButton>
        }
      />
    </form>
  )
}
