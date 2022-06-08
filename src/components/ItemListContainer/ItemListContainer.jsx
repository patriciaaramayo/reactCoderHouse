import React from 'react'
import { useEffect, useState } from "react";
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ saludo }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch()
            .then((resp) => {
                setProductos(resp)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(productos)

    return (
        <div className="text-center">
            {loading ?
                <h1>Cargando...</h1>
                :
                <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer