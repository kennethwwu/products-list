import { useContext } from 'react'
import { filterContext } from '../../store'

export default function ItemsFilter() {
    const changeTypeFunc = useContext(filterContext);

    return (
        <select onChange={changeTypeFunc} data-testid="select-element">
            <option value="">All</option>
            <option value="Beer">Beer</option>
            <option value="Wine">Wine</option>
            <option value="Spirits">Spirits</option>
            <option value="Cider">Cider</option>
        </select>
    )
}
