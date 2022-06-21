import React from 'react'
import Img from '../../imagenes/shopping-cart.png'

function CartWidget() {
  return (
    <img src={Img} width="20" height="20" className="d-inline-block align-top" alt="imagen" />
  )
}

export default CartWidget