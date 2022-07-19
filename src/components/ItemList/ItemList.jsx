import React from 'react'
import Item from '../Item/Item';
import { Link } from 'react-router-dom'
import './ItemList.css'

function ItemList({ products }) {
    return (
        <>
            {products.length > 0 ?
                products.map((product) =>
                    <Item key={product.id} product={product} />
                )
                :
                <div>
                    <div className='message'>
                        <h4>No se encontraron productos</h4>
                    </div>
                    <div className='message'>
                        <Link to='/'>
                            <button className="btn btn-success btn-space">Ver Productos disponibles</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemList