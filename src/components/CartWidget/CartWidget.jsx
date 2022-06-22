import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Img from '../../imagenes/shopping-cart.png'
import './CartWidget.css'

function CartWidget() {

  const { IconCart } = useCartContext()
  return (
    <>
      <div className="resumenCompra">
        {
          IconCart() > 0 && <div className="carrito">{IconCart()}</div>
        }
        <img src={Img} width="26" height="26" className="d-inline-block align-top" alt="imagen" />
      </div>
    </>
  )
}

export default CartWidget