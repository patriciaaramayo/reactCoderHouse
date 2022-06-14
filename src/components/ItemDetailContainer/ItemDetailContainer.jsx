import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch, getFetchOne } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()


  useEffect(() => {
    if (itemId) {
      getFetch(itemId)
        .then((resp) => {
          setProducto(resp)
          setLoading(false)
        })
        .catch(err => console.log(err))
    }
    else {
      getFetchOne()
        .then((resp) => {
          setProducto(resp)
          setLoading(false)
        })
        .catch(err => console.log(err))
    }

  }, [itemId])

  console.log(producto)
  return (
    <div>
      {loading ?
        <div className="text-center" >
          <h1>Cargando...</h1>
        </div>
        :
        <div className="detailContainer">
          <ItemDetail producto={producto} />
        </div>
      }
    </div>

  )
}

export default ItemDetailContainer