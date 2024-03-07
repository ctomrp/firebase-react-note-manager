import Input from 'components/Input.jsx/Input'
import s from './style.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'

function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
        <SearchIcon size={25} className={s.icon} />
        <Input onTextChange={onTextChange} placeholder={placeholder} />
    </>
  )
}

export default SearchBar