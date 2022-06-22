import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFetch, getFetchCategoria } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';

function ItemListContainer({ saludo }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
    const { item } = useCartContext

    useEffect(() => {
        (categoriaId
            ? getFetchCategoria(categoriaId)
            : getFetch())
            .then((resp) => {
                setProductos(resp)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [categoriaId])

    console.log(productos)

    return (
        <div className="text-center">
            {loading ?
                <Loader />
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer