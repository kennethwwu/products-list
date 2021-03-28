import React from 'react'

function ListCard({productImage, productName, price, isSale}) {
    return (
        <div className="position-relative col-md-3 col-6 mb-3 d-flex ">
            <div className="card flex-fill">
                <img src="https://via.placeholder.com/150" className="card-img-top px-2 pt-2" alt={productImage} />
                <div className="card-body d-inline-flex flex-row">
                    <p className="card-text overflow-auto">{productName}</p>
                    <p className="card-text">{price}</p>
                </div>
            </div>
            {isSale && <h3 className="position-absolute fixed-top"><span className="badge badge-danger">Sale</span></h3>}
        </div>
    )
}

export default React.memo(ListCard)
