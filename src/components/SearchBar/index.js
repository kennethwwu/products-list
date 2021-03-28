import { useContext } from 'react'
import { searchContext } from '../../store'

export default function SearchBar() {
    const changeSearchContent = useContext(searchContext)
    return (
    <div className="form-group">
        <label htmlFor="search" className="sr-only">Search</label>
        <input type="text" className="form-control form-control-sm" name="search" onChange={changeSearchContent} data-testid="search-bar" placeholder="Search" />
    </div>


    )
}
