import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getFetch, getFetchCategoria } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ saludo }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getFetchCategoria(categoriaId)
                .then((resp) => {
                    setProductos(resp)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
        else {
            getFetch()
                .then((resp) => {
                    setProductos(resp)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
    }, [categoriaId])

    console.log(productos)

    return (
        <div className="text-center">
            {loading ?
                <div className="text-center" >
                    <h1>Cargando...</h1>
                </div>
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer