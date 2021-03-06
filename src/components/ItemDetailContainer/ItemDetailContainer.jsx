import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryItem = doc(db, 'productos', itemId)
    getDoc(queryItem)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading ?
        <Loader />
        :
        <div className="detailContainer">
          <ItemDetail product={product} />
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer