import { useContext, useCallback } from 'react'
import { searchContext } from '../../store'

const withDebounce = (func) => {
    let timer;
    return event => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => { 
            func(event)
            clearTimeout(timer)
        }, 500)
    }
}

export default function SearchBar() {
    const changeSearchContent = useContext(searchContext)
    const OnChange = useCallback(withDebounce(changeSearchContent), [changeSearchContent])
    return (
    <div className="form-group">
        <label htmlFor="search" className="sr-only">Search</label>
        <input type="text" className="form-control form-control-sm" name="search" onChange={OnChange} data-testid="search-bar" placeholder="Search" />
    </div>


    )
}
