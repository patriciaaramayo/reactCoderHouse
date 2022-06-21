import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

function ItemDetail({ producto }) {
  const { cart, addToCart } = useCartContext()
  const [cantidad, setCantidad] = useState()

  function onAdd(cantidad) {
    setCantidad(cantidad);
    addToCart({ producto, cantidad })
  }
  console.log('cart desde itemDetail:', cart)
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row mb-3 ">
              <div className="col-md-5 text-center">
                <img src={producto.foto} className="img-fluid mb-3" alt="" />
              </div>
              <div className="col-md-7 mt-2">
                <h1 className="h4 d-inline me-2 text-uppercase"> {producto.nombre}</h1>
                <span className="badge bg-success me-2">{producto.categoria}</span>
                <span className="badge bg-danger me-2">{producto.tipo}</span>
                <div className="row small mb-3 mt-2" >
                  <span className="col-sm-2">Stock</span>
                  <span className="col-sm-10">{producto.stock}</span>
                  <span className="col-sm-2">Color</span>
                  <div className="col-sm-10">
                    <button className="btn btn-sm btn-danger p-2 me-2"></button>
                    <button className="btn btn-sm btn-primary p-2 me-2"></button>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bold h5 me-2">${producto.precio}</span>
                  <del className="small me-2">${(producto.precio * 20 / 100) + parseInt(producto.precio)}</del>
                  <span className="rounded p-1 bg-warning  me-2 small">-20%</span>
                </div>
                {
                  cantidad
                    ?
                    <div>
                      <Link to='/cart'>
                        <button className="btn btn-success btn-space">Ir al carrito</button>
                      </Link>
                      <Link to='/'>
                        <button className="btn btn-success btn-space">Seguir comprando</button>
                      </Link>
                    </div>
                    :
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                }
                <div>
                  <p className="mb-2 small">{producto.descripcionLarga}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ItemDetail