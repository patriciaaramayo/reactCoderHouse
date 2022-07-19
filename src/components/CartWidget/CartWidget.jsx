import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Img from '../../images/shopping-cart.png'
import './CartWidget.css'

function CartWidget() {

  const { IconCart } = useCartContext()
  return (
    <>
      <div className="summary">
        {
          IconCart() > 0 && <div className="iconCart">{IconCart()}</div>
        }
        <img src={Img} width="26" height="26" className="d-inline-block align-top" alt="imagen" />
      </div>
    </>
  )
}

export default CartWidget