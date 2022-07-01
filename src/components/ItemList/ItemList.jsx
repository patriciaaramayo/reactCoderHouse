import React from 'react'
import Item from '../Item/Item';
import { Link } from 'react-router-dom'
import './ItemList.css'

function ItemList({ productos }) {
    return (
        <>
            {productos.length > 0 ?
                productos.map((producto) =>
                    <Item key={producto.id} producto={producto} />
                )
                :
                <div>
                    <div className='mensaje'>
                        <h4>No se encontraron productos</h4>
                    </div>
                    <div className='mensaje'>
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