import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    getFetch(itemId)
      .then((resp) => {
        setProducto(resp)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

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