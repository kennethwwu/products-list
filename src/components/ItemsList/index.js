import { useContext } from 'react'
import { dataContext } from '../../store'
import ItemsListView from './ItemsListView'

export default function ItemsList() {
    const data = useContext(dataContext);

    return (
        <ItemsListView {...{data}}/>
    )
}
