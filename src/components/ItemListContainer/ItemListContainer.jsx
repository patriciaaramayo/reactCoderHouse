import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';

function ItemListContainer({ saludo }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'productos')

        const queryCollectionFilter = categoriaId 
        ? query(queryCollection, where('categoria', '==', categoriaId))
        : query(queryCollection);
        getDocs(queryCollectionFilter)
        .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [categoriaId])

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