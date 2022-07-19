import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';

function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
      const db = getFirestore();

      const queryCollection = collection(db, "productos");

      const queryCollectionFilter = 
      categoryId ? query(queryCollection, where("category", "==", categoryId)) 
                  : query(queryCollection);
      getDocs(queryCollectionFilter)
        .then((data) =>
          setProducts(
            data.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className="text-center">
            {loading ?
                <Loader />
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <ItemList products={products} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer