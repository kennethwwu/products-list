import React from 'react'

export default function ItemsListView({data}) {
    return (
        <div>
            {
                data.length>0?data.map(i => <p key={i.index}>{i.productName} {i.type}</p>):'not found'
            }
        </div>
    )
}
