import { useContext } from 'react'
import { filterContext } from '../../store'

export default function ItemsFilter() {
    const changeTypeFunc = useContext(filterContext);

    return (
        <div className="input-group input-group-sm ml-md-2">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="productFilter">Filter by</label>
            </div>
            <select name="productFilter" id="productFilter" className="custom-select" onChange={changeTypeFunc} data-testid="select-element">
                <option value="">All</option>
                <option value="Beer">Beer</option>
                <option value="Wine">Wine</option>
                <option value="Spirits">Spirits</option>
                <option value="Cider">Cider</option>
            </select>
        </div>
    )
}
