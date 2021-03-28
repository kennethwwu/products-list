import { useContext } from 'react'
import { searchContext } from '../../store'

export default function SearchBar() {
    const changeSearchContent = useContext(searchContext)
    return (
        <>
            <input name="search" onChange={changeSearchContent} data-testid="search-bar"/>
        </>
    )
}
