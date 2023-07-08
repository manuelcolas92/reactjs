import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className='searchBar'>
            <input className='searchBar-field' type='text' placeholder='Escriba lo que está buscando' />
            <button className='searchBar-button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    )
}

export default SearchBar