import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Button } from 'react-bootstrap'
import "./Cart.css"

function Cart() {

  const { cart, EmptyCart, PriceTotal } = useCartContext()

  return (
    <>
      <div>
        {
          (cart.length == 0) ?
            <div className="text-center" >
              <h2>Carrito vacio</h2>
            </div>
            :
            <div>
              <div className="container py-5">
                <div className="cart-outer">
                  <div className="cart-inner">
                    <div className="bg-light px-4 py-3">
                      <div className="row fw-normal text-uppercase">
                        <div className="col-5">Producto</div>
                        <div className="col-2">Precio</div>
                        <div className="col-2">Cantidad</div>
                        <div className="col-1 text-center">Eliminar</div>
                      </div>
                    </div>
                    {
                      cart.map((i) => <CartItem key={i.item.producto.id} product={i.item.producto} cant={i.item.cantidad} />)
                    }
                  </div>
                </div>
                <div className="my-3"></div>
                <div className="row">
                  < div className="col-4"></div>
                  <div className="col-5"><span>El precio total es: ${PriceTotal()}</span>
                  </div>
                  <div className="col-2 borrarCarrito">  <Button variant="danger" onClick={EmptyCart}>Borrar carrito</Button></div>
                </div>
              </div>
            </div>
        }
      </div>
      {/* <p>la cant total del carrito es {iconCart}</p> */}
    </>
  )
}

export default Cart

