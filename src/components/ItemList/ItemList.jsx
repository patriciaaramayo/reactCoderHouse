import React from 'react'
import "./ItemList.css"
import Item from '../Item/Item';
import { Row } from 'react-bootstrap';

function ItemList({ productos }) {
    return (
        <div className="lista_productos" >
            {productos.map((producto) =>
                <Item key={producto.id} producto={producto} />
            )}
        </div>
    )
}

export default ItemList