import React from 'react'
import LitsRow from '../LitsRow'
import ListCard from '../ListCard'

const createGrid = (data, numInRow) => {
    if(!Array.isArray(data)) return null
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

const nowData = (
    <div className="alert alert-danger ext-center" role="alert">
        No data
    </div>
)

export default function ItemsListView({data}) {

    return (
        <>
            {createGrid(data, 4) || nowData}
        </>
    )
}
