import { useContext } from 'react'
import { dataContext } from '../../store'
import LitsRow from '../LitsRow'
import ItemsListView from './ItemsListView'
import ListCard from '../ListCard'

const createGrid = (data, numInRow) => {
    const numOfRow = Math.ceil(data.length/numInRow);
    const grid = [];

    for(let r =0; r < numOfRow; r++){
        const row = []
        for(let c = 0; c<numInRow; c++){
            const item = data[r*numInRow+c]
            item && row.push(<ListCard key={`item${item.index}`} {...item}/>)
        }
        grid.push(<LitsRow key={r}>{row}</LitsRow>)
    }

    return grid;
}

export default function ItemsList() {
    const data = useContext(dataContext);

    return (
        <ItemsListView>
            {createGrid(data, 4)}
        </ItemsListView>
    )
}
