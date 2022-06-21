import React from 'react'
import Item from '../Item/Item';

function ItemList({ productos }) {
    return (
        <>
            {productos.length > 0 ?
                productos.map((producto) =>
                    <Item key={producto.id} producto={producto} />
                )

                : "No hay productos"

            }
        </>
    )
}

export default ItemList